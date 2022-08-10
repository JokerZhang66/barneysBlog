# 配置gitee和git并存环境


全局配置文件路径

```shell
~/.gitconfig
```

使用命令查看自己的全局配置

```sh
git config --global --list
```
### 1. 清除git全局配置 

如果在此之前使用过下列命令配置过全局用户名和邮箱：

```shell
git config --global user.name "xxx"
git config --global user.email "xxx@qq.com"
```

可以先打开`~/.gitconfig`查看绑定的全局用户名和邮箱,再使用下面的命令清除全局配置

```shell
git config --global --unset user.name  "xxx"
git config --global --unset user.email  "xxx@qq.com"
```

没有全局配置后,之后再提交代码,可以在特定项目中重新配置自己的邮箱和用户名

```shell
git config  user.name "xxx"
git config  user.email "xxx@qq.com"
```

### 2.SSH keys

生成`github`和`gitee`的`SSH key`

```shell
ssh-keygen -t rsa -C 'github邮箱号' -f ~/.ssh/id_rsa_github
ssh-keygen -t rsa -C 'gitee邮箱号' -f ~/.ssh/id_rsa_gitee
```

分别登录`github`、`gitee`添加`SSH KEY`

### 3.配置config

- 打开`git bash`, 在`~/.ssh`目录下，新建`config`文件

```shell
cd ~/.ssh
touch config
vim config
```

- 输入 `i`进入编辑模式，输入以下内容

```shell
# gitee
Host gitee.com
HostName gitee.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_gitee
# github
Host github.com
HostName github.com
PreferredAuthentications publickey
IdentityFile ~/.ssh/id_rsa_github
```

### 4.测试

用`ssh`命令分别测试

```shell
ssh -T git@gitee.com
ssh -T git@github.com
```

{{< image src="/images/img/20211203234344.png" caption="配置成功">}}

{{< image src="/images/img/20211203234635.png" caption="下载测试">}}

### 5.参考

[1].[Windows配置Github、Gitee共存的Git环境](https://www.cnblogs.com/three-fighter/p/14118189.html)


