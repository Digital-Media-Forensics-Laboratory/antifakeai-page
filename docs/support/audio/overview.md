---
title: Antifake AI 音频生成模型检测支持总览
---

# 🎧 Antifake AI 音频生成模型检测支持总览

Antifake AI 已完成对多个主流 **AIGC 音频生成平台和模型** 的适配与检测能力建设，覆盖语音合成（TTS）、语音克隆（Voice Cloning）、情感语音生成等应用场景。当前支持范围涵盖开源项目与商业平台两大类，能够精准识别多种风格、语言和说话人特征的生成音频内容。

---

## 一、开源音频生成模型支持

| 公司/团队名称                             | 模型名称或平台                                          | 当前支持状态 | 备注 |
|------------------------------------------|---------------------------------------------------------|--------------|------|
| 阿里巴巴       | CosyVoice2                                               | ✅ 支持       |                |
| 字节跳动      | Seed-TTS、MegaTTS3                                           | ✅ 支持       |                |
| 复旦大学       | SpeechGPT                                                | ✅ 支持       |                |
| Hexgrad                                  | Kokoro (Kokoro‑82M)                                     | ✅ 支持       |      |
| HuggingFace                | Parler-TTS (Mini v0.1 / v1.1, Large v1)                 | ✅ 支持       |      |
| Columbia University                      | StyleTTS 2                                              | ✅ 支持       |      |
| KAIST / NAVER Labs / Tsinghua Univ.      | HierSpeech++                                            | ✅ 支持       |      |
| 开源社区                                  | OpenEleven、OpenVALL-E 等社区版模型                     | ✅ 支持       |      |

---

## 二、商业 AIGC 音频生成产品支持

| 公司名称       | 工具名称或模型版本                                       | 当前支持状态 | 备注说明       |
|----------------|----------------------------------------------------------|--------------|----------------|
| 科大讯飞       | 星火语音合成（Spark TTS）、讯飞开放平台语音合成服务     | ✅ 支持       |                |
| 字节跳动         | 火山引擎语音合成                               | ✅ 支持       |                |
| 百度           | 百度文心ERNIE音频合成系统                                | ✅ 支持       |                |
| 腾讯云         | 腾讯云智能语音合成（TTS）                               | ✅ 支持       |                |
| 华为云         | 华为云EI智能语音服务                                    | ✅ 支持       |                |              
| Google         | AudioLM、AudioPaLM                                       | ✅ 支持       |                |
| Meta           | Voicebox                                                 | ✅ 支持       |                |
| Microsoft      | VALL-E*                                                  | ✅ 支持       |                |
| ElevenLabs     | Eleven v2.5、Flash v2、Multilingual v2、v3 (alpha)       | ✅ 支持       |                |
| Resemble AI    | Resemble Voice Clone、Realtime TTS                       | ✅ 支持       |                |
| OpenAI         | Whisper-TTS                                              | ✅ 支持       |                |
| LOVO AI        | LOVO Studio (Genny、LovoX)                               | ✅ 支持       |                |


---

> **注：**
>
> - “✅ 支持”表示已完成模型结构适配与验证，检测能力稳定且效果可靠；
> - 我们将持续跟进新发布的开源语音模型和商业语音合成工具，第一时间扩展检测支持范围；
> - 对于定制语音模型或企业私有部署模型，也支持提供专项适配方案。
