# 修改了ssh默认端口如何配置git


由于安全或者其它原因，我们可能会修改默认的SSH服务端口号，默认情况下，已有的git项目在pull或者push的时候会报错。

现在假设原来的项目的remote设置为git@ip:port/marks/web.git，将服务器SSH默认端口修改为1234后，导致push出错。

有三种解决方式：

一、直接修改URL为`ssh://`开头

```
git remote set-url origin ssh://git@ip:1234/marks/web.git
```
二、 修改本地配置文件,映射一个别名

```
vi ~/.ssh/config
host xxx
hostname www.xxx.com(ip)
port 1234
```
三、克隆仓库的时候直接指定端口
```
git clone ssh://git@ip:1234/marks/web.git
```


