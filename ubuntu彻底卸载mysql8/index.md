# Ubuntu20.04彻底卸载mysql8.0


1.查看`mysql`依赖 

```sh
dpkg --list|grep mysql
```

2.卸载` mysql-common`

```sh
sudo apt-get remove mysql-common
```

3.卸载`mysql-server-8.0`

```sh
sudo apt-get autoremove --purge mysql-server-8.0
```

4.清除残留数据

```sh
dpkg -l|grep ^rc|awk '{print$2}'|sudo xargs dpkg -P
```

5.再次查看MySQL的剩余依赖项: 

````sh
dpkg --list|grep mysql
````

(这里一般就没有输出了，如果有执行下一步)

6.继续删除剩余依赖项

````sh
sudo apt-get autoremove --purge mysql-apt-config
````

7.删除`/etc/mysql`和`/var/lib/mysql`文件夹

```sh
sudo rm -rf /etc/mysql /var/lib/mysql
```

{{< admonition quote >}}

参考:[Ubuntu20.04 安装和卸载MySQL8](https://www.cnblogs.com/zhangxuel1ang/p/13456116.html)

{{< /admonition >}}
