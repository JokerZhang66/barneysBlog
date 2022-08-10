# 博客功能展示

展示博客主题的相关功能
<!--more-->
> 1.播放bilibili视频

{{< bilibili BV1df4y1p7A8 >}}

> 2.播放音乐

原网址： https://music.163.com/#/playlist?id=162024453

{{< music netease playlist 162024453 >}}

> 3.mapbox


{{< mapbox 116.326 40.002 10 false "mapbox://styles/mapbox/streets-zh-v1" >}}

> 4.插入图片

{{< image src="/images/img/20211204153013.png" caption="测试图片">}}

{{< image src="/images/img/20211204153201.png" caption="图片2" >}}

> 5.插入链接

{{< link herf="https://Barneys.gitee.io/" content="主页地址" title="回到首页">}}

> 6.添加横幅

{{< admonition >}}
一个 **注意** 横幅
{{< /admonition >}}

{{< admonition abstract >}}
一个 **摘要** 横幅
{{< /admonition >}}

{{< admonition info >}}
一个 **信息** 横幅
{{< /admonition >}}

{{< admonition tip >}}
一个 **技巧** 横幅
{{< /admonition >}}

{{< admonition success >}}
一个 **成功** 横幅
{{< /admonition >}}

{{< admonition question >}}
一个 **问题** 横幅
{{< /admonition >}}

{{< admonition warning >}}
一个 **警告** 横幅
{{< /admonition >}}

{{< admonition failure >}}
一个 **失败** 横幅
{{< /admonition >}}

{{< admonition danger >}}
一个 **危险** 横幅
{{< /admonition >}}

{{< admonition bug >}}
一个 **Bug** 横幅
{{< /admonition >}}

{{< admonition example >}}
一个 **示例** 横幅
{{< /admonition >}}

{{< admonition quote >}}
一个 **引用** 横幅
{{< /admonition >}}

> 7.插入Youtube视频

{{< youtube NWONeJKn6kc >}}

> 8.Latex公式

下面是公式块：
$$
f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi
$$

这是一个行内公式：$ f(x)=\int_{-\infty}^{\infty} \hat{f}(\xi) e^{2 \pi i \xi x} d \xi $

> 9.pdf文件内嵌

套用下面的模板，填入pdf的外链即可

```html
<object data="https://xxxx.pdf" type="application/pdf" width="100%" height= "700px">
    <embed src="https://xxxx.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it:
        <a href="https://xxxx.pdf">Download PDF</a>.</p>
    </embed>
</object>
```
pdf展示效果

<object data="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/pdf/CV__1_.pdf" type="application/pdf" width="100%" height= "700px">
    <embed src="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/pdf/CV__1_.pdf">
        <p>This browser does not support PDFs. Please download the PDF to view it: <a href="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/pdf/CV__1_.pdf">Download PDF</a>.</p>
    </embed>
</object>

> 10.博客功能展示

在要置顶的文章的Front matter中添加`weight: 1`(按`weight`值从小到大排序)

> 11.新增视频shortcodes

爱奇艺和搜狐不能直接用播放页面地址的视频`id`，使用页面的分享按钮获取完整`iframe`地址
爱奇艺是`tvid`部分，搜狐是`bid`部分。
```
{{</* qqvideo r0029muuhfj */>}}

{{</* youku XMzk1NjM1MjAw */>}}

{{</* sohu 90742150 */>}}

{{</* acfun ac14349183 */>}}
```
