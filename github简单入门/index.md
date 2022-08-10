# git简单入门

<!--more-->

## 提交代码之前

### 1.首先在本地生成SSH密钥
```
ssh-keygen -t rsa -C "your_email@example.com" # 生成密钥
cat .ssh/id_rsa.pub # 查看公钥
```

<center>{{<image src="/images/all/ssh-gen.png" caption="生成SSH密钥">}}</center>

### 2.将公钥添加到git代码平台

<center>{{<image src="/images/all/add_ssh.png" caption="添加公钥">}}</center>

### 3.本地配置git用户信息并测试远程连接

这里配置git用户没有使用全局配置
```
git config user.name 'xxx'
git config user.email 'xxx@xxx.com'
ssh -T git@github.com  # 测试
```
<center>{{<image src="/images/all/ssh_test.png" caption="本地连接">}}</center>


## 如何提交代码

### 1.在本地的一个空文件夹初始化git
```
git init
```

### 2.关联github账户信息
```
git config user.name 'xxx'
git config user.email 'xxx@163.com'
```
测试是否关联成功
```
ssh -T git@github.com
```

### 3.完成代码编写后，将文件夹中的内容进行提交

```
git add .
git commit -m 'xxx'
```

### 4. 在github上新建一个空白仓库,将本地仓库和远程仓库绑定
```
git remote add origin git@github.com:xxx/xxx.git
```

### 5.推送到master分支

```
git push --set-upstream origin master
```

### 6.后面再次提交，只需要三步

```
git add .
git commit -m 'xxx'
git push
```

## github常用快捷键

`s`: 快速聚焦搜索框

`t`: 快速搜索仓库内的文件

`l`: 快速跳转到某一行

`b`: 快速查看文件的修改记录

`ctrl+k`: 打开命令面板

`.`: 将github项目使用网页版`vscode`打开

另外,在项目地址之前加上`gitpod.io/#/`可以打开一个在线运行Github上代码的`vscode`.


## github下载单一文件

<center>{{< image src="/images/all/github_dowload_one_file.png" caption="">}}</center>
