# git基础

git和github基本操作
<!--more-->
{{< admonition >}}
本文尚未完善，请谨慎采纳！
{{< /admonition >}}
## git基本操作

1.创建一个版本库

新建一个目录git_test,在git_test目录下创建一个版本库

```
git init
```

2.在git_test下创建一个新文件code.txt

```
vi code.txt#创建一个新文件
cat code.txt#查看文件中的内容
```

3.新建一个文件版本（比如将上面的code.txt保存为一个版本）

```
git add code.txt
git add . //一次添加所有文件
git commit -m '版本一'（-m 后面是说明信息）
```

4.设置自己的github信息

```
 git config --global user.email "你的邮箱"
 git config --global user.name "github名字"
```

5.查看提交的版本记录

```
git log  //查看日志
```

Commit：版本编号

Author：用户名<邮箱>

Date：创建时间

简短的显示方式

```
git log --oneline
```

6.再次创建一个新版本(与第三步的操作相同)

## git日志操作

`git log`常用操作命令

```
git log -p //还可以查看文件不同
git log -1 //最近一次的提交
git log -2 //显示行号
git log --oneline -p //简短显示且显示文件修改
git log --name-only //显示发生变化的文件名 
git log --name-status //查看发生变化的文件及其变化类型
```

## git版本回退

git版本回退就是回到之前的版本，**版本是由一个叫HEAD的指针来指向**

回到某个版本的时候，如上我们创建了两个版本库：版本一和版本二

当前版本：HEAD

前一版本：HEAD^(多少个^号代表前多少个版本)

HEAD~100（后面的数字代表第多少个版本）

回到上一版本使用命令如下：

```
git reset --hard HEAD^
```

如果想回到当前版本

版本标号就是commit之后的内容

```
git reset --hard 版本编号
```

如果终端关闭了不知道版本号了，可以使用命令查看历史操作记录

```
git reflog
```

## 工作区和版本库

工作区：用来编辑的目录如上文的git_test

版本库：工作区的一个隐藏目录**.git**就是版本库

暂存区：版本库中保存了许多东西，其中最重要的就是**stage**，这就是暂存区

`git`还为我们自动创建了第一个分支`master`，以及指向master的指针`HEAD`

<span style='color:red'>git add</span>:将文件保存道暂存区中

<span style='color:red'>git commit</span>:将暂存区中的文件一次性提交到当前分支，就是一次版本记录

git status：查看当前文件的状态(是否修改或者提交)

## git管理修改

注意：git管理文件的修改，它只会提交暂存区中的修改来创建版本

也就是说，文件修改后要及时使用git add 添加到暂存区，否则不会保存在记录中

取消暂存区中的文件的暂存

```
git reset HEAD 文件名
```

## 撤销文件修改

使用命令来撤销

```
git checkout -- 文件名
```

恢复文件(vim 操作和内容无关)

```
vim -r 文件名
```

- 场景1：当你改乱了工作区某个文件的内容，想直接丢弃工作区的修改时，用命令git  checkout  --  file。
- 场景2：当你不但改乱了工作区某个文件的内容，还添加到了暂存区时，想丢弃修改，分两步，第一步用命令git  reset HEAD  file，就回到了场景1，第二步按场景1操作。
- 场景3：已经提交了不合适的修改到版本库时，想要撤销本次提交，参考版本回退一~

## 对比文件的不同

**对比工作区中的文件和版本库中的文件的不同**

```
git diff HEAD -- 文件名
```

+：工作区的文件

-：版本库中的文件

其他为公共文件

**对比两个不同的版本库中的文件的不同**

```
git diff HEAD HEAD^ -- 文件名
```

## 更改版本库中的文件名称

修改提交的文件名字

```git
git mv 旧文件名 新文件名
```

## amend命令

1.修改最新一次提交的更新

```
git commit --amend 
```

2.将一个新文件加入到上一次提交中

```git
git add 新文件名
git commit --amend //增加提交信息
```

## 删除文件

linux删除命令

```
rm 文件名
```

接下来将其加入暂存区(没有加入到暂存区，git无法保存删除的文件)

```
git add 文件名
####或者
git rm '文件名' //会删除本地的文件
git rm --cached 文件名 //保留本地的文件,相当于从暂存区中取出这个文件
```

创建记录

```
git commit -m '描述'
```

## git分支操作

创建分支

```
git branch 分支名
```

切换分支

```
git checkout 分支名
```

查看当前所有分支

```
git branch
```

创建并切换到一个新分支，作为备用分支

```
git checkout -b dev
```

修改文件内容，创建版本记录，提交到新分支

分支切换

```
git checkout 分支名
```

分支合并（Fast - forward 快速合并）

将某分支合并到当前分支

```
git merge 分支名
```

合并完成后，删除分支dev

```
git branch -d dev
```

## 冲突解决

**如果两个分支有文件同时被修改，需要解决这个冲突，否则合并失败**

**可以手动将该冲突解决，再提交到主分支**

查看冲突解决

```
git log --graph --pretty=oneline
```

## 分支管理策略

当两个分支之间的内容没有冲突时(即没有修改同一个文件)，这时后不能使用快速合并(Fast-forward)

例如：

1.新建一个dev分支，创建一个新文件code3.txt并提交一次记录

2.在master分支下修改文件code.txt，并提交记录

3.进行快速合并时会出现弹窗

4.输入保存的记录名，按ctrl + x 离开，按Y保存，按Enter键退出

{{< image src="https://cdn.jsdelivr.net/gh/CorPython/images@master/img/20191208114736.png" caption="">}}

5.查看修改记录

注意：在这次合并时，可以不采用快速合并的方式，可以将快速合并方式给禁用

使用快速合并模式时，命令是

```
git merge dev
```

禁用快速合并模式：

```
git merge --no-ff -m '禁用fast-forward' dev
```

## bug分支

遇到紧急的的bug修改时，要现停下手头工作，但是当前自己的工作现场不能丢，需要先保存下来

使用命令,保存现场

```
git stash
```

修复完bug，在使用命令恢复工作现场

```
git stash pop
```

修复bug时可以切换到master分支，新建一个bug分支，修复完成之后，再使用`--no-ff`模式进行合并到master分支，之后删除bug分支。

## .gitignore

在这个文件添加你要取消跟踪的文件

<span style='color:red'>注意: git中文件夹中没有文件默认时不跟踪的</span>

``` 
*.txt //忽略所有后缀为.txt的文件
a.txt //忽略a.txt这个文件
!a.txt //这个文件重新跟踪
/folder //忽略floder这个文件夹
/folder/a.txt //忽略floder目录下的a.txt文件
/folder/**/*.txt //忽略folder及其子目录下的txt文件
```

## github的使用

### 1.创建仓库

{{< image src="https://cdn.jsdelivr.net/gh/Barneys/images@master/img/20210801124405.png" caption="">}}

创建成功

{{< image src="https://cdn.jsdelivr.net/gh/Barneys/images@master/img/20210801124441.png" caption="">}}

`.gitignore`里标注了忽略的文件类型

{{< image src="https://cdn.jsdelivr.net/gh/Barneys/images@master/img/20210801124512.png" caption="">}}

### 2.添加ssh账户

添加ssk公钥之后，本机才能与github仓库进行交互

使用命令生成公钥，一直按Enter键就好了

```
ssh-keygen -t rsa -C '邮箱地址'
```

![](https://cdn.jsdelivr.net/gh/Barneys/images@master/img/20210801123938.png)

会生成在/ho文件夹下，打开里面的文件id_rsa.pub获取公钥

```
cd /home/zhangfp/.ssh/
ls -a
cat id_rsa.pub 
```

把ssh公钥信息添加到github的设置中

{{< image src="https://cdn.jsdelivr.net/gh/Barneys/images@master/img/20210801124050.png" caption="">}}


### 3.克隆项目

使用命令

```
git clone + '链接'
```

如果遇到Broken pipe错误，参考以下代码

```
vim ~/.ssh/config #打开.ssh文件夹下的config目录 
 
#添加内容

Host *
IPQoS lowdelay throughput
 
#修改权限
chmod 644  ~/.ssh/config
```

## 推送代码

日常开发时，可以新建并切换到这个新的分支，比如smart

```
git checkout -b smart
```

把完成的代码提交一次版本记录

```
git add 文件名
git commit -m '提交'
```

将该分支推送到远程的github服务器上

```
git push origin 分支名
```

## github跟踪远程

和远程的仓库进行链接

```
git remote add origin git@gitee.com:liaoxuefeng/learngit.git//建议使用ssh方式
```

为了检查当前工作分支和github上分支的信息是否同步

让本地的某个分支跟踪远程的分支，使用命令

```
git branch --set-upstream-to=origin/smart smart
```

分支 'smart' 设置为跟踪来自 'origin' 的远程分支 'smart'。

跟踪之后，可以直接使用

```
git push
```

将该分支推送到远端

## 从远程分支上拉取代码

将github上的origin的分支拉取到本地

```
git pull origin 分支名
```

master:用户保存发布的代码，1.0版本，2.0版本

dev:用户在开发过程中的代码。

## 给别人的github仓库贡献代码

1.将别人的仓库fork过来(直接克隆没有修改的权限)

2.打开终端，使用git  clone + 你的项目地址

3.进行项目修改，下一步可以上传到你的github，可以使用git status检查是否修改成功

4.本地提交一次

5.推动到远端的github项目里

```
git push origin 分支名
```

6.新建一个pull request ，注意要在你推送的分支里

7.等待github仓库主人的同意，就能合并成功


