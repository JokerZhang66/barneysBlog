# Linux常见命令


linux常见命令
<!--more-->

## linux必备命令(持续更新)

### 复制文件夹

将`packageA`文件夹复制到`packageB`中

```bash
cp -r /home/packageA/. /home/cp/packageB/
```

## make编译

```shell
sudo make clean
sudo make
```

### python3命令

```shell
python3 -m pip install 包名(比如pip)  // 使用python命令安装pip，之后就使用pip安装其他包
sudo apt install python3.8-venv // 先安装python3.8-venv
python3 -m venv env   // 创建一个虚拟环境，放在env文件夹中
source env/bin/activate // 进入虚拟环境，然后就可以在虚拟环境中进行安装
deactivate // 退出虚拟环境
pip install 包名
pip uninstall 包名
sudo apt-get install python3-pip //ubantu使用apt安装pip
```

### 查看端口占用情况

需root权限

```shell
lsof -i:端口号   // 查看端口占用情况
netstat -tunlp | grep 端口号 // 查看端口占用情况
kill -9 PID //根据PID杀死进程
```

### 文件夹

```shell
 mkdir new_dir // 创建文件夹
 mv new_dir old_dir // 将文件夹new_dir改名为old_dir
 rm -rf old_dir // 删除old_dir文件夹
```

### 添加环境变量

```shell
PATH=$PATH:$PWD // 将当前路径添加到环境变量中
export // 显示当前系统定义的所有环境变量
echo $PATH // 查看PATH环境变量
env | grep PWD // 查看是否有这个PWD环境变量
unset PWD // 删除PWD环境变量

可以使用/etc/profile添加或者删除环境变量(先进入root用户)
su
vim /etc/profile // 打开配置文件
export PATH=路径 // 在profile末尾添加或者删除环境变量
source /etc/profile // 重启生效
```

### 修改打开WSL的默认启动路径

```shell
"startingDirectory": "//wsl$/Ubuntu-20.04/home/zhangfp"
```

<center>{{< image src="https://gitee.com/zhang12214/myfiles/raw/master/img/20211127223939.png" caption="">}}</center>

## 添加用户并给予root权限

```sh
adduser your_name
usermod -aG sudo YOUR_USER_NAME //加入root权限
```

## 禁用root用户SSH登录

在`/etc/ssh/sshd_config`中修改`PermitRootLogin yes`为`PermitRootLogin no`或者直接注释

## 修改pip源

升级pip到最新的版本后进行配置：
 `pip install pip -U`
设置pip源为阿里云
`pip config set global.index-url https://mirrors.aliyun.com/pypi/simple/`
