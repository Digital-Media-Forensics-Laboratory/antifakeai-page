---
title: 总览
---

# Antifake AI 支持能力总览

Antifake AI 产品已支持检测 **近 200 个 AIGC 图像生成模型**，覆盖 **20 个主流市场产品线**。支持的范围包括 Stable Diffusion 系列、Midjourney、SDXL、HyperSD 等流行模型。

---

## 一、支持的 AIGC 图像生成模型

| 模型名称                              | 支持状态 | 备注                  |
| ------------------------------------ | -------- | --------------------- |
| Stable Diffusion 1.1(3)              | ✅ 支持   |                       |
| Stable Diffusion 1.4                 | ✅ 支持   |                       |
| Stable Diffusion 1.5                 | ✅ 支持   |                       |
| Stable Diffusion 2.0(32)             | ✅ 支持   |                       |
| Stable Diffusion 2.1(12)             | ✅ 支持   |                       |
| Stable Diffusion Turbo(29)           | ✅ 支持   |                       |
| Stable Diffusion 3                   | ✅ 支持   |                       |
| Stable Diffusion 3 Medium(37)        | ✅ 支持   |                       |
| Stable Diffusion 3.5 Medium(20)      | ✅ 支持   |                       |
| Stable Diffusion 3.5 Large(50)       | ✅ 支持   |                       |
| Stable Diffusion 3.5 Large Turbo(15) | ✅ 支持   |                       |
| SDXL Lightning                       | ✅ 支持   |                       |
| HyperSD                              | ✅ 支持   |                       |
| Midjourney                           | ⚠️ 弱支持 | 格式不稳定，兼容中      |

---

## 二、已覆盖的常见商业 AIGC 软件产品

虽然部分商业软件使用的底层模型未公开，但我们已支持以下常见产品中生成图像的检测：

| 公司名称            | 工具名称                    | 当前支持状态 | 备注说明       |
| --------------- | ----------------------- | ------ | ---------- |
| 字节跳动            | 即梦（Dreamina）、豆包AI            | ✅ 支持   | 目前主力图像生成工具 |
| 阿里巴巴            | 通义万相                    | ✅ 支持   |            |
| 科大讯飞            | 星火 AI 绘画                | ✅ 支持   |            |
| 北京智谱华章科技           | 智谱清言               | ✅ 支持   |            |
| 腾讯              | 腾讯混元图像生成、腾讯元宝            | ✅ 支持   |            |
| 百度              | 文心一格                    | ✅ 支持   |            |
| 商汤             | 秒画                      | ✅ 支持   |            |
| 快手              | 可灵 AI                   | ✅ 支持   |            |
| 美图              | WHEE                    | ✅ 支持   |            |
| 大鱼互联科技            | 云界 AI                   | ✅ 支持   |            |
| 中科院紫东太初团队       | 紫东太初                    | ✅ 支持   |            |
| 昆仑万维            | 天工 AI                   | ✅ 支持   |            |
| Stability AI    | Stable Diffusion        | ✅ 支持   | 主流开源模型     |
| MidJourney Inc. | MidJourney              | ⚠️ 弱支持 | 提示词引导结构复杂  |
| Ideogram AI     | Ideogram                | ✅ 支持   | 适用于艺术文字图生成 |
| Microsoft       | Copilot (Image Creator) | ✅ 支持   | 基于 DALL·E  |
| Runway          | Runway Gen 系列           | ✅ 支持   | 支持图像与视频生成  |
| DeepAI          | DeepAI Text2Image       | ✅ 支持   | 多种风格模型     |
| Canva           | Canva 图像生成器             | ✅ 支持   | 适用于设计类场景   |



---

> 注：
> - 上述模型编号如 (3)、(32)、(50) 表示支持的HuggingFace上特定版本数量。
> - “弱支持”表示模型/软件结构较为复杂，检测兼容性相对较低，仍在持续优化中。

