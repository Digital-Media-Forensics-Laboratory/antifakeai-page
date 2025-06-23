---
title: Kolors
---

# 🎨 快手 Kolors & 图像生成模型支持

**Kolors** 是快手（Kuaishou）Kolors 团队开源的大规模文本生成图像模型，基于潜在扩散架构，搭配 ChatGLM3 文本编码器，训练于数十亿图文对。其对中文与英文提示词具备出色理解能力，支持长达 256 token 的上下文输入，并能准确嵌入汉字于生成图像中。

::: info
📢 **最新动态**：2024年7月全面开源，模型效果达到 Midjourney v6 水平，在 FlagEval 多模态评测中位列第二，仅次于闭源 DALL·E 3；已支持 ControlNet（Canny、Depth、Pose）、Inpainting、IP‑Adapter、DreamBooth‑LoRA 等扩展生态。
:::

---

## 🌟 Kolors 模型能力一览

- **双语提示词支持**：使用 ChatGLM3 编码，中英文并重，能精准理解复杂提示及多实体描述；
- **强大文字渲染**：支持图像中生成汉字、英文字符，对排版和清晰度表现出色；
- **高分辨率与风格多样**：训练中采用两阶段策略，初期学习再微调美感，生成效果自然、精致；
- **丰富生态支持**：兼容 Diffusers、ComfyUI、ModelScope，以及 ControlNet、LoRA、IP‑Adapter、DreamBooth 等工具链；
- **评测优异**：在 FlagEval 主观评估中，Kolors 综合满意度 3.59 分，图像质量 3.99，文本忠实度 4.17，排名业内前列。

---

## 🔍 Anti‑Fake AI 检测适配

::: tip 检测维度
- **纹理与结构异常识别**；
- **风格一致性分析**；
- **图文语义对齐验证**；
:::

| 模型       | 功能支持        | 检测维度             | 检测准确率 | 响应时延 |
|-----------|------------------|-----------------------|------------|----------|
| **Kolors** | T2I、Inpainting、ControlNet、IP‑Adapter | 多维度检测支持 | ≥ 99%      | < 60 ms  |

::: warning 检测优势
- 深度支持复杂场景的语义与风格检测；
- 覆盖图像编辑与原生生成场景；
- 兼容国内模型生态，支持本地与云端部署；
:::

---

## 🔁 Kolors vs 可灵 (Kling)

- **Kolors** 是核心模型，关注质量与能力本身，已开源，侧重生成效果、文字渲染与生态兼容；
- **可灵 (Kling)** 是快手面向普通用户的交互式 AI 工具，集成 Kolors 等生成模型，提供图文互动界面、预设风格、插件化体验，强调用户易用性；
- 可灵平台通过微信小程序和网页版呈现，为非技术用户提供则更多操作入口，而 Kolors 更面向开发者与科研者关注模型能力与集成扩展性。

---

## 📚 相关资源

- **GitHub**：[Kwai-Kolors/Kolors](https://github.com/Kwai-Kolors/Kolors) 
- **Hugging Face**：[Kwai-Kolors/Kolors](https://huggingface.co/Kwai-Kolors/Kolors) 
- **技术报告**：[Kolors 论文 PDF](https://github.com/Kwai-Kolors/Kolors/blob/master/imgs/Kolors_paper.pdf) 
- **快手可灵平台**：微信小程序与网页版使用端 

---

## 📬 联系我们

若您希望申请试用、获取技术资料或业务合作，请联系：

- 📧 邮箱：`zhuang.li@hdu.edu.cn`   
- 📞 电话：`17366636375`

---