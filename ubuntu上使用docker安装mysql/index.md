# Ubuntu上使用docker安装mysql

### 1.docker仓库搜索mysql

```
docker search mysql
```

<center>{{< image src="/images/img/20220308164142.png" caption="">}}</center>

### 2.docker仓库拉取mysql8.0镜像

```
docker pull mysql:8.0
```

- docker pull mysql     #拉取最新版本的mysql

### 3.查看本地镜像是否安装成功

```
docker images mysql:8.0
```

<center>{{< image src="/images/img/20220308164232.png" caption="">}}</center>

### 4.安装运行mysql8.0容器

```
docker run -p 3307:3306 --name mysql -e MYSQL_ROOT_PASSWORD=root -d mysql:8.0
```

- -p 将本地主机的端口(3307)映射到docker容器端口(3306)
- --name 容器名称
- -e 配置信息，<strong style='color:red'>`root`</strong>用户原始密码为`root`
- -d 镜像名称

{{< admonition >}}
记得去服务器防火墙放行3307端口
{{< /admonition >}}

### 5.查看mysql8.0容器运行情况

```
docker ps
```

<center>{{< image src="/images/img/20220308165059.png" caption="">}}</center>

### 6.docker登录mysql

```
docker exec -it mysql bash
mysql -uroot -p
```
<center>{{< image src="/images/img/20220308165341.png" caption="">}}</center>

### 7.使用客户端连接工具(navicat)远程登录mysql

<center>{{< image src="/images/img/20220308165538.png" caption="">}}</center>


会出现下面的`2059`错误

<center>{{< image src="/images/img/20220308165609.png" caption="">}}</center>

报错：navicat不支持caching_sha_password加密方式
原因：mysql8.0使用新的密码加密方式：caching_sha_password
解决方式：修改成旧的加密方式（mysql_native_password），并重置密码

操作如下:

```mysql
use mysql;
select host,user,plugin from user;
alter user 'root'@'%' identified with mysql_native_password by 'root';
```

<center>{{< image src="/images/img/image-20220308165934553.png" caption="">}}</center>


### 8.重新登录成功

<center>{{< image src="/images/img/20220308170213.png" caption="">}}</center>

### 9.设置mysql容器开机自启动

`--restart=always`后跟的是**容器名称**

```
docker update --restart=always mysql 
```

### 10.修改mysql原始密码

登入mysql后,修改原始密码为`123456`
```
ALTER USER 'root'@'localhost' IDENTIFIED BY '123456';
```
