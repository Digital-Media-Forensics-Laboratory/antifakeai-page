---
title: 文件服务
outline: [2,4]
---

# 文件服务

文件服务涉及到用户上传的文件（包括图像、视频、音频等）的保存，以及从文件上传到完成检测这一流程中，文件数据在系统各模块间的交互。总体而言，该模块的设计可以分为两部分：
- **文件存储系统**：文件如何保存在系统里，如何从系统里获取保存的文件，或者以何种形式向外暴露文件。
- **文件交互设计**：文件在各个功能间的传递。例如，一个检测模型在何时以何种方式读取待检测的文件。

> [!TIP] 设计关键
> 1. 减少文件具体内容在系统各个模块间的频繁传递，减轻网络带宽压力
> 2. 充分利用缓存如`Redis`以加速文件读取，减少磁盘IO

## 文件存储系统

文件存储系统以[`MINIO`](https://min.io/)为基础构建。这是一个开源的对象存储（OSS）方案，基于 GNU AGPL v3 开源协议。该系统完美兼容 AWS S3 协议。MINIO 原生支持分布式，且性能极高，在分布式设计和固态硬盘结合下，速度瓶颈几乎都在网络带宽上。

::: details 对象存储（OSS）
对象存储（Object Storage Service，简称OSS）是一个专用名词，如今的对象存储都是基于云的，因此不少厂商也直接把它叫做云存储。与对象存储服务的交互需要有特定的协议来完成。Amazon S3 (Simple Storage Service) 简单存储服务，是 Amazon 的公开云存储服务，与之对应的协议被称为 S3 协议，目前 S3 协议已经被视为公认的行业标准协议。
:::

MINIO 分为两个部分，服务端部分和客户端部分服务端保存文件，并接收各类请求。客户端则是封装了常用的功能，如对象上传、下载，利用封装好的接口，可以使用程序向服务端发送请求。下面将介绍服务端部署和客户端的常用操作。

### 服务端部署
MINIO本身支持分布式，且支持分布式的磁盘卷。但是我们平台仅需要单节点、单数据卷的部署即可。平台的 MINIO 服务由 docker 部署，添加在了`docker-compose.yml`中统一编排。当然也可以使用`docker run`命令直接运行。
::: code-group

```yaml{9-11} [docker-compose.yml]
services:
  afk-minio:
    image: minio/minio:latest
    restart: always
    networks:
      - afk-network
    expose:
      - 9000        # 这是容器的网络里需要暴露的端口
    ports:          # 开发环境可以将这两个端口暴露出来调试
      - "9000:9000" 
      - "9001:9001" 
    environment:
      - MINIO_CONFIG_ENV_FILE=/etc/config.env  
    command: server --console-address ":9001"
    volumes:
      - ${MINIO_CONFIG}:/etc/config.env:ro # 配置文件
      - ${MINIO_DATA_ROOT}:/mnt/data       # 数据保存的位置
```

```shell [Docker]
docker run -dt                                  \
  -p 9000:9000 -p 9001:9001                     \
  -v PATH:/mnt/data                             \
  -v /etc/default/minio:/etc/config.env         \
  -e "MINIO_CONFIG_ENV_FILE=/etc/config.env"    \
  --name "minio_local"                          \
  minio server --console-address ":9001"
```

:::
MINIO的数据默认端口是`9000`，Dashboard的端口是`9001`。在调试期间，可以将这两个端口映射出来。在生产环境中，通常不需要Dashboard的端口，因此也不需要`expose`。除此之外，还有几个点需要注意：
- **MINIO_CONFIG** 

  该变量是本机的config文件，作为minio的配置文件映射至容器。
  具体内容如下：

  ```dotenv{3}
  MINIO_ROOT_USER=admin
  MINIO_ROOT_PASSWORD=seclab605607
  MINIO_VOLUMES="/mnt/data" # 需要与数据卷映射目录对应
  MINIO_OPTS="--console-address :9001"
  ```
  里面可以配置 Dashboard 的账号密码。
  
- **MINIO_DATA_ROOT**
  选择minio的数据保存位置，非常重要，一定要映射，不然容器销毁后数据全部都会丢失。在此处，我们映射到容器内的`/mnt/data`，这个路径需要与config文件里的`MINIO_VOLUMES`匹配。

> [!TIP]
> MINIO 官方提供了更加详细的文档，需要更多的拓展功能（如分布式）可以参考官网教程。
> [文档地址](https://min.io/docs/minio/container/index.html)

### 客户端操作

我们可以通过`http://ip:port`的形式访问 MINIO 的管理面板，并上传和下载图像。然而，文件系统作为服务之一，需要使用程序来访问和控制 MINIO，也就是所谓的客户端 SDK。客户端 SDK 包含了常见的功能封装，且不同的编程语言应该有分别对应的客户端 SDK。 MINIO 提供了常见编程语言的SDK，AFK平台后端采用的语言是`C#`，因此需要使用`C#`的SDK。


在操作MINIO前我们需要了解OSS的常用操作。OSS的标准操作很多，均符合 S3 标准，文档可以参考Amazon的 [S3 API Reference](https://docs.aws.amazon.com/AmazonS3/latest/API/Welcome.html)，但是对本平台而言，常用的操作无非就是以下几种。

| 操作           | API                            | 说明                                   |
| -------------- | ------------------------------ | -------------------------------------- |
| 获取对象       | `GetObject`                    | 用于下载文件                           |
| 上传对象       | `PutObject`                    | 用于上传                               |
| 获取属性       | `GetObjectAttributes`          | 获取对象元数据(Meta data)              |
| 预签名获取对象 | `GetObject` with Presigned URL | 给出下载对象的url :information_source: |

:information_source: ： 提供一个url之后，向该url发送请求，即可下载文件。

下面以程序形式介绍如何使用`C#`向OSS存储桶来上传和下载对象。

> [!IMPORTANT]
> 客户端操作很多，以上只是列举了常用的操作，还有许多操作尽管目前平台没有用到，但是以后有机会用到。完整的操作列表请参考[文档地址](https://min.io/docs/minio/linux/developers/dotnet/minio-dotnet.html)。

#### 基本配置

C# 通过创建一个客户端对象来连接 MINIO 服务端。
```C#
IMinioClient minioClient = new MinioClient()
                              .WithEndpoint("afk-minio:9000") // 服务器地址
                              .WithCredentials("admin", "seclab605607") // 访问的key和password
                              .WithSSL(false) // 不使用https
                              .Build(); // 构建对象
```

- **WithCredentials**：可以去 dashboard 里自己生成，也可以直接使用账号密码。本平台直接使用了默认的账号密码。
- **WithSSL**：使用 https 需要加上此行，本平台使用 http，因此删除。

通常我们会使用依赖注入，以便在控制器和服务中使用。因此在大多数应用里，初始化一般是这么进行的：
```C#
builder.Services.AddMinio(configureClient => configureClient
    .WithSSL(false)
    .WithEndpoint("afk-minio:9000")
    .WithCredentials("admin", "seclab605607")
    .Build()
);
```
依赖注入后，我们可以在任意地方使用这个客户端接口，例如在一个`FileService`类里，我们可以往构造函数里添加 MINIO客户端接口类：
```C#{5}
public class FileService : IFileService
{
    private readonly IMinioClient _minio_client;

    public FileService(IMinioClient minioClient)
    {
        _minio_client = minioClient;
    }
}
```

#### 上传对象

不论是上传还是下载对象，亦或是获取对象信息，基本的套路都是一样的：先构建一个参数类`xxArg`，填充对应的参数，然后调用对象操作，并将这个参数类传入。

下面是上传对象的一个例子：

```C#
public async Task UploadAsync(IFormFile file)
{
    // 打开文件流
    await using var stream = file.OpenReadStream();

    // 配置需要上传的对象属性
    var putArgs = new PutObjectArgs()
                .WithBucket("web-image")            // 上传的对象桶
                .WithStreamData(stream)             // 文件流
                .WithObject(file.FileName)          // 保存的对象名
                .WithObjectSize(file.Length)        // 对象大小
                .WithContentType(file.ContentType); // 对象的MIME type
    try
    {
        // 上传至MINIO对象存储
        var res = await _minio_client.PutObjectAsync(putArgs);
        return;
    }
    catch (Exception e)
    {
        Console.WriteLine("Fail to put object to minio: {Message}", e.Message);
        throw;
    }
}
```
> [!TIP]
> 并不是所有的参数需要指定，由于此处通过`IFormFile`的文件流上传，需要指定`WithObjectSize`，如果只是想上传一个本地文件，API可以更简单。具体请参考 MINIO .NET SDK 的文档。

#### 下载对象

对象的下载过程基本同上传一致：

```C#
public async Task<Stream> DownloadAsync(string objName)
{
    try
    {
        // 创建内存流，准备将文件读取到该流中。
        var fileStream = new MemoryStream();
        // 从MINIO中获取对象
        var getObjectArgs = new GetObjectArgs()
            .WithBucket("web-image")
            .WithObject(objName)
            .WithCallbackStream(s => { s.CopyTo(fileStream); });
        await _minio_client.GetObjectAsync(getObjectArgs);
        // （重要） 定位到开头，以供读取
        fileStream.Position = 0;
        return fileStream;
    }
    catch (Exception e)
    {
        _logger.LogError("error when get file from MINIO: {Message}", e.Message);
        throw;
    }
}
```

## 文件交互设计 <Badge type="tip" text="难点" />

所谓文件交互设计，就是指文件在整个程序中如何流动。例如：用户上传文件后返回什么？何时请求文件？该返回什么?