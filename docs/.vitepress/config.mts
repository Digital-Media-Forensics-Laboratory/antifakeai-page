import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/',
  title: "Anti-Fake AI Project",
  description: "这里是Anti-Fake后端系统的开发文档",
  ignoreDeadLinks: true,
  themeConfig: {
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '简介',
        collapsed: false,
        items: [
          { text: '产品介绍', link: '/quick_start/brief.md' },
        ]
      },
      {
        text: '图像检测',
        collapsed: false,
        items: [
          { text: '总览', link: '/support/overview' },

          {
            text: '支持软件',
            collapsed: true,
            items: [
              { text: '字节跳动', link: '/support/bytedance' },
              { text: '阿里巴巴', link: '/support/tongyi' },
              { text: '科大讯飞', link: '/support/xunfei' },
              { text: '智谱清言', link: '/support/zhipuqingyan' },
              { text: '腾讯', link: '/support/tencent' },
              { text: '百度', link: '/support/baidu' },
              { text: '商汤', link: '/support/sense' },
              { text: '快手', link: '/support/kuaishou' },
              { text: '美图', link: '/support/meitu' },
              { text: '紫东太初', link: '/support/taichu' },
              { text: '云界 AI', link: '/support/yunjie' },
              { text: '天工 AI', link: '/support/tiangong' },
              { text: '即梦 AI', link: '/support/jimeng' },
              { text: 'MidJourney', link: '/support/midjourney' },
              { text: 'Ideogram AI', link: '/support/ideogram' },
              { text: 'Copilot', link: '/support/copilot' },
              { text: 'Runway', link: '/support/runway' },
              { text: 'DeepAI', link: '/support/deepai' },
              { text: 'Canva', link: '/support/canva' },
              { text: 'Stable Diffusion', link: '/support/stableAI' },
              { text: 'PixArt', link: '/support/pixart' },
              { text: 'Kolors', link: '/support/kolors' },
              { text: 'Kandinsky', link: '/support/Kandinsky' },
              { text: 'Janus', link: '/support/janus' },
              { text: 'PlaygroundAI', link: '/support/playgroundAI' },
              { text: 'LaVi-Bridge', link: '/support/LaVi-Bridge' },
              { text: 'flux', link: '/support/flux' }
            ]
          }
        ]
      },
      // {
      //   text: '音频检测',
      //   collapsed: true,
      //   items: [
      //     // 预留位置
      //   ]
      // },
      {
        text: '视频检测',
        collapsed: true,
        items: [
          { text: '总览', link: '/support/video/overview' },
          {
            text: '支持软件',
            collapsed: true,
            items: [
              { text: '百度(Steamer-I2V)', link: '/support/video/baidu' },
              { text: '字节跳动(豆包)', link: '/support/video/bytedance' },
              { text: '即梦 Dreamina', link: '/support/video/jimeng' },
              { text: '快手(可灵 AI 视频)', link: '/support/video/kuaishou' },
              { text: '美图(MiracleVision)', link: '/support/video/meitu' },
              { text: '腾讯(元宝/混元)', link: '/support/video/tencent' },
              { text: '阿里巴巴(通义·视频)', link: '/support/video/tongyi' },
              { text: '生树科技(Vidu)', link: '/support/video/vidu' },
              { text: 'OpenAI(Sora)', link: '/support/video/sora' },
              { text: 'Meta(MovieGen)', link: '/support/video/meta' },
              { text: 'Google(Imagen)', link: '/support/video/imagen3' },
              { text: 'Pika Labs(Pika)', link: '/support/video/pika' },
              { text: 'LumaAI(Dream machine)', link: '/support/video/lumaai' },
              { text: 'Runway(Gen)', link: '/support/video/runway' },
              { text: 'DeepfaceLab', link: '/support/video/deepfacelab'},
              { text: 'DeepLiveCam', link: '/support/video/deepLivecam'},
              { text: 'FaceShifter', link: '/support/video/faceshifter'},
              { text: 'FaceSwap', link: '/support/video/faceswap'},
            ]
          }
        ]
      },
      {
        text: '音频检测',
        collapsed: true,
        items: [
          { text: '总览', link: '/support/audio/overview' },
          {
            text: '支持软件',
            collapsed: true,
            items: [
              { text: '阿里巴巴(CosyVoice2)', link: '/support/audio/cosyvoice' },
              { text: '复旦大学(SpeechGPT)', link: '/support/audio/speechgpt' },
              { text: 'Google(AudioLM,USM)', link: '/support/audio/google' },
              { text: 'Microsoft(Vall-E)', link: '/support/audio/microsoft' },
              { text: 'Meta(VoiceBox)', link: '/support/audio/meta' },
              { text: '高丽大学(Style)', link: '/support/audio/styletts' },
              { text: '高丽大学(Parler)', link: '/support/audio/parler' },
              { text: 'hexgrad(Kokoro)', link: '/support/audio/kokoro' },
              { text: '高丽大学(HierSpeech)', link: '/support/audio/hierspeech' },
              { text: 'ElevenLabs', link: '/support/audio/elevenlabs' },
            ]
          }
        ]
      },
        {
          text: '文本检测',
          collapsed: true,
          items: [
            { text: '阿里巴巴(Qwen)', link: '/support/text/ali' },
            { text: '百度(文心一言)', link: '/support/text/baidu' },
            { text: '字节跳动（豆包）', link: '/support/text/bytedance' },
            { text: '深度求索(DeepSeek)', link: '/support/text/deepseek' },
            { text: '华为(盘古大模型)', link: '/support/text/huawei' },
            { text: '科大讯飞(星火)', link: '/support/text/iflytek' },
            { text: '清华&智谱(CogAgent)', link: '/support/text/CogAgent' },
            { text: '商汤(InternVL)', link: '/support/text/Intern' },
            { text: '月之暗面(Kimi)', link: '/support/text/kimi' },
            { text: '百川智能(Baichuan)', link: '/support/text/baichuan' },
            { text: 'OpenAI(GPT)', link: '/support/text/openai' },
            { text: 'Anthropic(Claude)', link: '/support/text/claude' },
            { text: 'Google(Gemini)', link: '/support/text/google' },
            { text: 'Meta(LLaMA)', link: '/support/text/meta' },
            { text: 'xAI(Grok)', link: '/support/text/Grok' },
            { text: 'Microsoft(LLaVA)', link: '/support/text/LLaVA' },
            { text: 'Nvidia(Megatron)', link: '/support/text/nvidia' },
            { text: 'Mistral AI', link: '/support/text/mistral' }
          ]
        },
      {
        text: '水印技术',
        collapsed: true,
        items: [
          { text: 'AIGC政策合规与水印检测能力', link: '/support/watermark/watermark' },
        ]
      },
      {
        text: '大模型安全测评',
        collapsed: true,
        items: [
          { text: '大模型安全测评', link: '/support/LLM/llm' },

        ]
      },
      {
        text: '接口文档',
        collapsed: false,
        items: [
          { text: '检测接口', link: '/api_reference/detection.md' }
        ]
      },
      {
        text: '系统架构',
        collapsed: false,
        items: [
          { text: '文件服务', link: '/architecture/file_service' },
        ]
      },
      {
        text: '开发指导',
        collapsed: false,
        items: [
          { text: '性能主题', link: '/development/performance' }
        ]
      },
      {
        text: '关于我们',
        collapsed: false,
        items: [
          { text: '团队介绍', link: '/about/team' },
          { text: '荣誉证书', link: '/about/about' }
        ]
      },
      {
        text: '常见问题',
        collapsed: false,
        items: [
          { text: 'FAQ', link: '/faq/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
