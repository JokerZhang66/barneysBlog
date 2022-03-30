# 备忘录


<!--more-->

### 1.hosts文件地址

如何修改host文件:[点此](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/)
```
C:\Windows\System32\drivers\etc\hosts
```

### 2.查询网站ip
```
https://www.ipaddress.com/
```

### 3.刷新dns缓存(cmd)
```
ipconfig /flushdns
```
### 4.将图片白色背景变为透明

在线ps网站:  [<strong style="color:red;">点此</strong>](https://ps.gaoding.com/#/)

{{< image src="https://cdn.jsdelivr.net/gh/CorPython/images@master//img/20220210221421.png" caption="">}}

### 5.查看一个网站的favicon图像

> 网址/favicon.ico

### 6.关于本主题的公式渲染问题

- `\\` 换行需换成`\\\\`
```
$$
f(n)=
\begin{cases}
n/2,& \text{if $n$ is even}\\
3n+1,& \text{if $n$ is odd}
\end{cases}
$$
```
需换成下列公式：
```
$$
f(n)=
\begin{cases}
n/2,& \text{if $n$ is even}\\\\
3n+1,& \text{if $n$ is odd}
\end{cases}
$$
```
$$
f(n)=
\begin{cases}
n/2,& \text{if $n$ is even}\\\\
3n+1,& \text{if $n$ is odd}
\end{cases}
$$
- 第二种解决方案

比如下列这个公式渲染失败：
```
$$
\lambda=\left\{\begin{array}{ll} \frac{y_{2}-y_{1}}{x_{2}-x_{1}} & \text { if } P \neq Q \\ \frac{3 x_{1}^{2}+2 a_{2} x_{1}+a_{4}-a_{1} y_{1}}{2 y_{1}+a_{1} x_{1}+a_{3}} & \text { if } P=Q \end{array}\right.
$$
```
可以使用`<div>`和`<div\>`包裹
```
<div>
$$
\lambda=\left\{\begin{array}{ll} \frac{y_{2}-y_{1}}{x_{2}-x_{1}} & \text { if } P \neq Q \\ \frac{3 x_{1}^{2}+2 a_{2} x_{1}+a_{4}-a_{1} y_{1}}{2 y_{1}+a_{1} x_{1}+a_{3}} & \text { if } P=Q \end{array}\right.
$$
<div\>
```
<div>
$$
\lambda=\left\{\begin{array}{ll} \frac{y_{2}-y_{1}}{x_{2}-x_{1}} & \text { if } P \neq Q \\ \frac{3 x_{1}^{2}+2 a_{2} x_{1}+a_{4}-a_{1} y_{1}}{2 y_{1}+a_{1} x_{1}+a_{3}} & \text { if } P=Q \end{array}\right.
$$
<div\>

### 7.自定义友链效果
```
//边框及鼠标悬停的背景颜色，允许设置渐变色
//支持7种：default、red、green、blue、linear-red、linear-green、linear-blue
primary-color="default"

//头像动画：rotate(鼠标悬停时旋转，此为默认效果)、auto_rotate_left(左旋转)、auto_rotate_right(右旋转)
img-animation="rotate"

//边框动画：shadow(阴影，此为默认效果)、borderFlash(边框闪现)、led(跑马灯)、bln(主颜色呼吸灯)
border-animation="shadow"
```

### 8.新建page页面

以<strong style='color:red'>备忘录</strong>页面举例:

由于博主想要使用上**目录**，所以不使用这种`page`形式的友链页面，而是直接**创建一篇文章**作为友链使用，文件头如下：

```
title: "备忘录"
date: 2022-02-10T16:19:51+08:00
draft: false
toc: true
tags: ["笔记","健忘症"]
categories: ["memo"]
math: true
hiddenFromHomePage: true
password: root
url: memo
featuredImage: https://cdn.jsdelivr.net/gh/CorPython/images@master//img/20220211100004.png
```
注意`url`要和`config.toml`中导航栏中的`url`一致，如下所示：
```
[[languages.zh-cn.menu.main]]
      parent = "navigation"
      identifier = "memo"
      pre = ""
      post = ""
      name = "备忘录"
      url = "/memo/"
      title = ""
      weight = 5
```

### 9.更新修改时间
每次更新完文章可在文章头中加入`lastMod`这一项,如下:
```
---
lastMod: 2022-02-23T20:27:23+08:00
---
```
### 10.为LoveIt主题添加更多视频分享shortcodes
参考链接:[Hugo 篇二：为 LoveIt 主题添加更多视频分享 shortcodes](https://blog.233so.com/2020/04/hugo-loveit-with-more-video-share-shortcodes-supported/)

### 11.快速入门docsify

[docsify快速入门](https://lewky.cn/posts/docsify-0.html/)

### 12.插入小猪佩奇页面

<iframe src="/html/peppa_pig.html" frameborder="none" name="peppa_pig" style="width:450px;height:500px;"></iframe>

### 13.导入本地图片

将图片放在`/static/images/`下,图片地址填入`/images/xxx.jpg`

![本地图片](/images/wallhaven-g7xpwd.jpg)

### 14.宝塔443端口不使用

<strong style="color:red;">
尝试重装nginx服务
</strong>

### 15.友链的其他三种选项

```txt
//边框及鼠标悬停的背景颜色，允许设置渐变色
//支持7种：default、red、green、blue、linear-red、linear-green、linear-blue
primary-color="default"

//头像动画：rotate(鼠标悬停时旋转，此为默认效果)、auto_rotate_left(左旋转)、auto_rotate_right(右旋转)
img-animation="rotate"

//边框动画：shadow(阴影，此为默认效果)、borderFlash(边框闪现)、led(跑马灯)、bln(主颜色呼吸灯)
border-animation="shadow"
```
### 16.使用手动摘要

你可能希望将文章前置参数中的`description`变量的内容作为摘要.

>你仍然需要在文章开头添加`<!--more-->`摘要分割符. 将摘要分隔符之前的内容保留为空(<strong style="color:red;">留一个空行</strong>). 然后`LoveIt`主题会将你的文章描述作为摘要.

### 18.解决一个error

```git
git remote add origin git@github.com:xxx.git
git branch -M main
git push -u origin main
```
