# github提交出错error: failed to push some refs to ...

error: failed to push some refs to 'github.com:Barneys/Barneys.github.io.git'
<!--more-->
### 问题描述
{{< image src="/images/img/1627745237041-20210731232716.png" caption="问题截图">}}

### 解决方案

依次输入指令
```git
 git pull --rebase origin master
 git push -u origin master
```

如下图：

{{< image src="https://cdn.jsdelivr.net/gh/CorPython/images@master//img/20220625153345.png" caption="问题解决">}}




