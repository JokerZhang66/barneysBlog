# 

## 差分隐私
<center>{{< image src="https://cdn.jsdelivr.net/gh/CorPython/images@master/img/definition.png" caption="">}}</center>

### 什么是差分隐私

> 差分隐私(**DP,Differential Privacy**)最早由微软科学家[Cynthia Dwork](https://en.wikipedia.org/wiki/Cynthia_Dwork)提出。差分隐私通过添加随机噪声对原始数据进行扰动，在扰动过程中保证数据的统计不变性。差分隐私作为一种严谨而有效的隐私保护机制，使攻击者即使攻击者拥有最大背景知识也无法识别单条记录是否在原数据表中。差分隐私研究的核心问题是如何高效地兼顾安全性(**Privacy-Preserve**)和结果可用性(**utility**)。

### 本地差分隐私

> 本地差分隐私(**LDP,Local Differential Privacy**)是一种新兴的差分隐私保护模型，它将数据扰动过程从服务器端转移到用户端。用户将扰动过后的数据发送至数据收集者(**Aggregator**)，之后数据收集者进行聚合查询。LDP 不仅保护了用户的隐私，也避免了数据收集者意外泄露用户真实数据的情况，即 LDP同时保护了数据收集者.LDP被互联网公司广泛采用，比如谷歌的`chrome`浏览器，苹果的`safari`浏览器，微软的`windows`操作系统和小米的`MIUI`等。

### CDP vs LDP

| 差分隐私          | CDP        | LDP         |
|:--------------------| :----------: | :------------: |
| 是否必须有可信第三方     | 是         | 否           |
| 查询的数据             | 相邻数据集 | 其中两条记录 |

传统的差分隐私技术将原始数据集中到一个数据中心, 然后发布满足差分隐私的相关统计信息, 我们称其为中心化差分隐私(**CDP,Centralized Differential Privacy**)技术.因此, 中心化差分隐私对于敏感信息的保护始终基于一个前提假设:可信的第三方数据收集者, 即保证第三方数据收集者不会窃取或泄露用户的敏感信息.而在 LDP 中，数据管理员是不可信的，数据收集过程是关注的重点。

### 组合特性

差分隐私技术具有序列组合性和并行组合性两种特性，LDP和CDP都具有这两种特性。

![](https://cdn.jsdelivr.net/gh/CorPython/images@master/img/20220302003000.png)


### 综述

[1] [本地化差分隐私综述-叶青青等](http://jos.org.cn/html/2018/7/5364.htm#close) [LDP]
[[pdf]](https://scholar.google.com/scholar?q=%E6%9C%AC%E5%9C%B0%E5%8C%96%E5%B7%AE%E5%88%86%E9%9A%90%E7%A7%81%E7%A0%94%E7%A9%B6%E7%BB%BC%E8%BF%B0&hl=zh-CN&as_sdt=0&as_vis=1&oi=scholart)

[2] [差分隐私保护及其应用](http://cjc.ict.ac.cn/online/onlinepaper/xp-2014115101759.pdf)

### 博客

[1] [FengHZ's Blog](https://www.fenghz.xyz/)

### 参考资料

[1] [差分隐私之Composition Theorem（一）](https://zhuanlan.zhihu.com/p/264779199)

[2] [差分隐私概念介绍](https://zhuanlan.zhihu.com/p/61179516)

[3] [差分隐私：原理、应用与展望](https://www.bilibili.com/video/BV1Tk4y117uA) [video]

[4] [20200817差分隐私叶青青孙林](https://www.bilibili.com/video/BV12K4y1Y7ux) [video]

[5] [20200817差分隐私张啸剑](https://www.bilibili.com/video/BV1Qk4y117S1) [video]
