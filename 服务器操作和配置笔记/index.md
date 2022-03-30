# 服务器配置笔记


持续更新
<!--more-->

### ssh连接 (powershell 或者 git-bash)
```
ssh 用户名@服务器IP 
```

### jupyter映射到本地

**将远程(服务器)jupyter(8888)与本地(8889)端口绑定**

```
ssh -f -N -L 8889:localhost:8888 remote_user@remote_host
```

<strong style='color:red'>注意要在自己的服务器上开放8888端口!!!!</strong>

### Ubuntu安装宝塔面板

```sh

```

IP:101.33.213.197

### Ubuntu更新软件

```sh
sudo apt update
sudo apt upgrade
sudo apt --purge autoremove // 删除不必要的依赖
```

### Ubuntu删除Openjdk

```sh
dpkg-query -W -f='${binary:Package}\n' | grep -E -e '^(ia32-)?(sun|oracle)-java' -e '^openjdk-' -e '^icedtea' -e '^(default|gcj)-j(re|dk)' -e '^gcj-(.*)-j(re|dk)' -e '^java-common' | xargs sudo apt-get -y remove
sudo apt-get -y autoremove

dpkg -l | grep ^rc | awk '{print($2)}' | xargs sudo apt-get -y purge
```

### 查看宝塔面板用户和密码

```sh
bt default
```


