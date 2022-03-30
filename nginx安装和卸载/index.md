# Nginx安装和卸载


### 安装Nginx
```sh
sudo apt-get update
sudo apt-get install nginx
```

### 卸载Nginx
```sh
sudo apt-get remove nginx nginx-common # 卸载删除除了配置文件以外的所有文件。
sudo apt-get purge nginx nginx-common # 卸载所有东东，包括删除配置文件。
sudo apt-get autoremove # 在上面命令结束后执行，主要是卸载删除Nginx的不再被使用的依赖包。
sudo apt-get remove nginx-full nginx-common #卸载删除两个主要的包。　　
```

### 参考链接

{{< admonition quote >}}
[Ubuntu安装Nginx和正确卸载Nginx Nginx相关](https://www.cnblogs.com/zhaoyingjie/p/6840616.html)
{{< /admonition >}}




