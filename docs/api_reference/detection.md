---
title: 检测服务接口文档
outline: [2,4]
---

# 🛡️ 检测服务接口文档

本页面将介绍 **AntiFakeAI 深度伪造检测服务** 的接口机制与设计，包括基本概念与详细的 HTTP 接口定义，帮助开发者快速上手集成。


## 📘 基本概念

AntiFakeAI 检测服务提供三种接口形式，满足不同业务场景：

- `detect`: 实时检测，适合同步使用场景，上传内容并原地等待检测结果。
- `cache`: 异步检测，适合高并发或需快速响应的场景，上传内容返回任务 `id`。
- `report`: 结果查询，通过 `id` 获取异步检测的最终结果。

### 支持内容类型

目前服务支持以下类型的数据上传：

- 图片（jpg/png/webp）
- 视频（mp4）
- Base64 编码内容（需加上 data URI 头）

### 返回结果说明

检测结果为标准化的 JSON 对象，包含：

- `score`: 数值评分（0~1，越高表示越可疑）
- `label`: 判断标签（例如 `"real"` 或 `"fake"`）
- `meta`: 包含模型信息、版本、处理耗时等元数据

---

## 🧩 接口文档

### 🔍 POST `/detect`

用于同步检测。客户端上传内容后服务立即返回检测结果。

**请求格式：**

```http
POST /detect
Content-Type: multipart/form-data
```

**请求参数：**

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `file` | file | 待检测文件（图片或视频） |

**响应示例：**

```json
{
  "id": "afk_3e9c8127",
  "score": 0.87,
  "label": "fake",
  "meta": {
    "model": "resnet50",
    "version": "1.0.0",
    "duration_ms": 513
  }
}
```

---

### 📥 POST `/cache`

用于异步上传，服务接收内容后返回唯一任务 `id`，稍后可通过 `/report` 查询结果。

**请求格式：**

```http
POST /cache
Content-Type: multipart/form-data
```

**请求参数：**

| 参数名 | 类型 | 描述 |
|--------|------|------|
| `file` | file | 待检测文件 |

**响应示例：**

```json
{
  "id": "afk_2f83cc1d",
  "status": "cached"
}
```

---

### 📊 GET `/report?id={id}`

根据 `id` 查询异步检测结果。

**请求格式：**

```http
GET /report?id=afk_2f83cc1d
```

**响应示例：**

```json
{
  "id": "afk_2f83cc1d",
  "score": 0.92,
  "label": "fake",
  "meta": {
    "model": "resnet50",
    "version": "1.0.0",
    "duration_ms": 489
  },
  "status": "done"
}
```

**状态说明：**

| 状态     | 含义             |
|----------|------------------|
| `cached` | 正在排队或处理中 |
| `done`   | 检测已完成       |
| `error`  | 检测失败         |

---

## 🕘 版本历史

|   版本    |    日期    | 修订内容 |
|:---------:|:----------:|:--------:|
| v0.0.1 apha | 2025-04-14 |  初版发布 |

---

