# Ubuntu上的docker操作

docker基本操作(待更新)
<!--more-->

## docker服务管理

```sh
sudo systemctl start | stop | restrart  docker.service // 开启/关闭/重启 docker服务
sudo docker version // 查看docker版本
sudo systemctl enable docker // 开机自启docker
sudo systemctl disable docker // 关闭开机自启docker
sudo systemctl list-unit-files  // 查看本机上所有自启动服务
sudo systemctl list-unit-files | grep docker // 查看docker服务是否能自启动
```

## docker升级和卸载

```sh
sudo apt-get purge docker-ce docker-ce-cli containerd.io docker docker.io // 删除docker
sudo rm -rf /var/lib/docker // 删除运行的临时文件
sudo apt autoremove // 删除相关的依赖包

sudo apt-get install docker-ce docker-ce-cli containerd.io // 安装最新版本的docker-CE和containerd

sudo docker run hello-world // 运行hello-world镜像检查是否安装成功

sudo apt-get update // 升级系统中的软件
sudo apt-get upgrade 
```

## 普通用户使用docker

之前每次运行docker都需要使用root权限，使当前用户能够执行docker

```shell
sudo groupadd docker // 创建docker组
sudo usermod -aG docker $USER // 将当前用户加入组
```

重启服务器即可

## docker镜像操作

``` sh
docker pull xxx // 下载(拉取)镜像
docker images // 查看本地的所有镜像
docker rmi -f IMAGE_ID // 根据镜像的id删除镜像
```

## docker使用Ubuntu镜像

```sh
docker container run -it ubuntu bash // 使用docker在bash上运行ubuntu

docker contianer ls 
docker container kill [containerId] // 终止ubuntu镜像(使用镜像ID)
```

## docker构建镜像

```sh
docker build . --tag pyramid // 构建一个pyramid镜像 .表示当前路径
docker run pyramid // 直接运行pyramid
docker run -p 5000:3000 my-app //  将my-app容器中的端口3000映射到本地端口5000
```

## docker常用功能命令

```sh
docker search 镜像名称 //搜索镜像
docker pull 镜像名称:版本号 //拉取对应版本的镜像
docker pull 镜像名称 //默认拉取最新的镜像
docker images //查看本地已下载的镜像
docker ps //查看正在运行的容器
docker ps -a //查看所有的容器（包括run、stop、exited状态的）
docker container ls //查看正在运行的容器
docker rm 容器ID //只能删除没有在运行的容器
docker rm -f 容器ID //可以删除正在运行的容器
docker run -p 本地主机端口号:容器服务端口号 --name 容器名字 [-e 配置信息修改] -d 镜像名字 --restart=always
docker start 容器ID //启动容器
docker stop 容器ID //终止容器
docker rmi 镜像名称orID //删除镜像
docker container update --restart=always 容器名 //设置容器开机自启动
```


