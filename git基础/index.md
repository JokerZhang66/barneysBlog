# git基础

<!--more-->

### git基本概念

<center>{{<image src= "/images/all/git_process.png" caption="git工作流">}}</center>

1.`工作区`(Workspace)：本地存放代码的地方

2.`暂存区`(Stage/Index)：数据暂时存放的区域，类似于工作区写入版本库前的缓存区。暂存区是独立于各个分支的。

3.`版本库`(Repository)：存放所有已经提交(commit)到本地仓库的代码版本(.git文件夹目录)

4.`版本结构`：树结构，树中每个节点代表一个代码版本。

5.`远程仓库`(Remote)： 托管代码的服务器(比如Github)


### git工作流程

`git`的工作流程一般是这样的：

１、在工作目录中添加、修改文件；

２、将需要进行版本管理的文件放入暂存区域；

３、将暂存区域的文件提交到`git`仓库。

因此，git管理的文件有三种状态：已修改（`modified`）,已暂存（`staged`）,已提交(`committed`)

### git常用命令

{{< admonition warning>}}
对于使用多个git平台的用户，建议不要使用全局配置，配置多平台可参考[这里](https://hugo.bnblogs.cc/gitee%E5%92%8Cgit%E5%B9%B6%E5%AD%98/)
{{< /admonition >}}

1.`git config --global user.name xxx`：设置全局用户名，信息记录在`~/.gitconfig`文件中

2.`git config --global user.email xxx@xxx.com`：设置全局邮箱地址，信息记录在`~/.gitconfig`文件中

3.`git init`：将当前目录配置成`git`仓库，信息记录在隐藏的`.git`文件夹中

4.`git add XX`：将XX文件的变动添加到暂存区

- `git add .`： 会把当前目录及子孙目录里的变动都加到暂存区
- `git add -A`: 会将项目里所有文件的变动都加到暂存区，也就是说该命令不论在项目的哪级目录执行，都有同样的效果。

5.`git rm --cached XX`：将文件从仓库索引目录中删掉,表示不再跟踪该文件

6.`git restore --staged XXX`: 将XXX从暂存区移除,当该文件还保留在工作区(执行了add命令但后悔了，可以用这个命令将文件从暂存区撤出，但是工作区的修改没有撤销)

7.`git commit -m "给自己看的备注信息"`：将暂存区的内容提交到当前分支

8.`git status`：查看仓库状态

9.`git diff -- 文件名`：查看具体某个文件 在工作区和暂存区之间的差异

- `git diff -- 文件名1 文件名2 文件名3`：查看多个文件在工作区和暂存区之间的差异

10.`git log`：查看当前分支的所有版本(从起始点到HEAD)
- `git log --pretty=oneline`: 简化后的日志状态(一行表示一个版本)

11.`git reflog`：查看HEAD指针的移动历史（包括被回滚的版本）

12.`git reset --hard HEAD^` 或 `git reset --hard HEAD~`：将代码库回滚到上一个版本
- `git reset --hard HEAD^^`：往上回滚两次，以此类推
- `git reset --hard HEAD~100`：往上回滚`100`个版本
- `git reset --hard 版本号`：回滚到某一特定版本

13.`git checkout XX`或`git restore XX`：将XX文件尚未加入暂存区的修改全部撤销 (所以用于将文件恢复到上一个版本的状态)

{{< admonition >}}
对于工作区修改了但是未加入暂存区的文件，使用`git status`查看文件状态是`红色`的，
而加入暂存区未提交的状态是`绿色`的
{{< /admonition >}}

14.`git remote add origin git@git.acwing.com:xxx/XXX.git`：将本地仓库关联到远程仓库

15.`git push -u` (第一次需要`-u`以后不需要)：将当前分支推送到远程仓库
- 带上`-u`参数其实就相当于记录了`push`到远端分支的默认值，这样当下次我们还想要继续`push`的这个远端分支的时候推送命令就可以简写成`git push`即可

16.`git push origin branch_name`：将本地的某个分支推送到远程仓库

17.`git clone git@git.acwing.com:xxx/XXX.git`：将远程仓库XXX下载到当前目录下

18.`git branch`：查看所有分支和当前所处分支

19.`git branch -d branch_name`：删除本地仓库的`branch_name`分支

20.`git branch branch_name`：创建新分支

21.`git checkout branch_name`：切换到`branch_name`这个分支

22.`git checkout -b branch_name`：创建并切换到`branch_name`这个分支

23.`git merge branch_name`：将分支`branch_name`合并到当前分支上

24.`git push --set-upstream origin branch_name`：设置本地的`branch_name`分支对应远程仓库的`branch_name`分支(在远程创建一个`branch_name`的新分支并推送过去)

25.`git push -d origin branch_name`：删除远程仓库的`branch_name`分支

26.`git pull`：将远程仓库的当前分支与本地仓库的当前分支合并

27.`git pull origin branch_name`：将远程仓库的`branch_name`分支与本地仓库的当前分支合并

28.`git branch --set-upstream-to=origin/branch_name1 branch_name2`：将远程的`branch_name1`分支与本地的`branch_name2`分支对应

29.`git checkout -t origin/branch_name`： 将远程的`branch_name`分支拉取到本地

30.`git stash`：将工作区和暂存区中尚未提交的修改存入栈中

- `git stash apply`：将栈顶存储的修改恢复到当前分支，但不删除栈顶元素
- `git stash drop`：删除栈顶存储的修改
- `git stash pop`：将栈顶存储的修改恢复到当前分支，同时删除栈顶元素
- `git stash list`：查看栈中所有元素

31.`git ls-files`：查看暂存区有哪些文件

### 参考

{{< admonition quote >}}
1.[https://www.acwing.com/file_system/file/content/whole/index/content/2932078/](https://www.acwing.com/file_system/file/content/whole/index/content/2932078/)
2.[https://www.cnblogs.com/qdhxhz/p/9757390.html](https://www.cnblogs.com/qdhxhz/p/9757390.html)
{{< /admonition >}}
