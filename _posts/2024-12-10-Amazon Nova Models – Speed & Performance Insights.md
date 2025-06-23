---
title: Amazon Nova Models – Speed & Performance Insights
date: 2024-12-10 00:00:00 +0000
categories: [AI, LLM]
tags: [AWS, Bedrock, Amazon Nova, Foundation Models, AI Performance]
---


Amazon has introduced the Nova family of foundation models on Amazon Bedrock, tailored for various use cases across cost, speed, and multimodal capabilities. Here's a breakdown of the core Nova models:

- **Nova Micro**: Text-only model offering lowest latency and cost.
- **Nova Lite**: Ultra-fast multimodal model handling text, image, and video inputs at low cost.
- **Nova Pro**: Balanced, high-performing multimodal model optimized for speed, cost, and accuracy.
- **Nova Canvas**: Advanced model for image generation.
- **Nova Reel**: Specialized model for video generation.

---

## ⏱️ Speed Comparison 

Time Comparisons for different models were tested with a prompt containing chat history, query and knowledge base retrieved data. 

<table>
  <thead>
    <tr>
      <th>Model Name</th>
      <th>Run 1 (s)</th>
      <th>Run 2 (s)</th>
      <th>Run 3 (s)</th>
      <th>Average Time (s)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>anthropic.claude-3-sonnet-20240229-v1:0</td>
      <td>64.82</td>
      <td>58.3</td>
      <td>58.91</td>
      <td>60.68</td>
    </tr>
    <tr>
      <td>anthropic.claude-3.5-sonnet-20240620-v1:0</td>
      <td>56.67</td>
      <td>57.94</td>
      <td>59.79</td>
      <td>58.13</td>
    </tr>
    <tr>
      <td>anthropic.claude-3-haiku-20240307-v1:0</td>
      <td>41.27</td>
      <td>41.95</td>
      <td>44.17</td>
      <td>42.46</td>
    </tr>
    <tr>
      <td>anthropic.claude-3.5-haiku-20241022-v1:0</td>
      <td>53.66</td>
      <td>51.91</td>
      <td>54.18</td>
      <td>53.25</td>
    </tr>
    <tr>
      <td><strong>amazon.nova-micro-v1:0</strong></td>
      <td>33.59</td>
      <td>35.3</td>
      <td>34.28</td>
      <td><strong>34.39</strong></td>
    </tr>
    <tr>
      <td><strong>amazon.nova-lite-v1:0</strong></td>
      <td>34.83</td>
      <td>35.12</td>
      <td>34.14</td>
      <td><strong>34.70</strong></td>
    </tr>
    <tr>
      <td><strong>amazon.nova-pro-v1:0</strong></td>
      <td>36.95</td>
      <td>37.44</td>
      <td>36.5</td>
      <td><strong>36.96</strong></td>
    </tr>
  </tbody>
</table>

---

## 🔍 Key Observations

- **Nova Micro** is the **fastest** among all tested models, followed closely by **Nova Lite**.
- **Nova Pro** offers the **best quality-to-speed balance**, making it ideal for production-grade multimodal tasks.
- Among Anthropic models showed the most improved quality, but still lags behind Nova models in speed.
- Among the Anthropic models, Sonnet 3 and Sonnet 3.5 takes largest time.
- **Nova Pro** and **Haiku 3.5** provide better response quality compared to Nova Micro and Lite, useful for tasks needing deeper reasoning.

---

## 🔗 References

- [Amazon Bedrock – Nova Foundation Models](https://aws.amazon.com/about-aws/whats-new/2024/12/amazon-nova-foundation-models-bedrock/)
- [Amazon Nova User Guide (Docs)](https://docs.aws.amazon.com/nova/latest/userguide/what-is-nova.html)
- [Nova Technical Report and Model Card (PDF)](https://assets.amazon.science/9f/a3/ae41627f4ab2bde091f1ebc6b830/the-amazon-nova-family-of-models-technical-report-and-model-card.pdf)

---
