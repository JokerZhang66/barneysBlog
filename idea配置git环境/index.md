# IDEA配置Git环境

IDEA和Git交互
<!--more-->
### Git bash配置Git

1.设置全局用户信息

```shell
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

2.创建SSH

```shell
ssh-keygen -t rsa -C "你的邮箱"
```

一直回车，那么就会默认生成`id_rsa`和`id_rsa.pub`两个秘钥文件

3.将`id_rsa.pub`中的内容添加到key中生成新的SSH key

![](/images/img/20211008134803.png)

4.测试是否与github成功建立连接

![](/images/img/20211008135015.png)

如果显示要填入密码，就输入你的github账号和密码

### IDEA配置

**1.在IDEA中设置Git**

依次点击`File-->Setting->Version Control-->Git`,找到`git.exe`的路径，最后**apply->ok**

![](/images/img/20211007232821.png)

**2. 在IDEA中设置Github**

依次点击`File-->Setting->Version Control-->GibHub`

![](/images/img/image-20211007233914319.png)

**连接成功！**

![](/images/img/20211007234012.png)

**3.项目导入**

先在github上创建对应的仓库，复制仓库地址

![](/images/img/20211007235031.png)

回到IDEA中，选择`VCS---Get from Version Control...`,进入后在URL处填入上图复制的地址，`Directory`选择该项目所在文件夹

![](/images/img/20211007235249.png)

选择完成后，直接点击`clone`按钮

![](/images/img/20211007235335.png)

成功克隆到本地！

### 实操

1.新建一个新仓库，复制一下仓库地址(**推荐使用SSH地址**)

![](/images/img/20211008133226.png)

2.将该仓库克隆到本地

![](/images/img/20211008133432.png)

3.克隆成功

![](/images/img/20211008133507.png)

4.新建一个Module

![](/images/img/20211008133542.png)

5.写一点代码(Hello,world!)

![](/images/img/20211008133644.png)

6.本地commit提交

![](/images/img/20211008133758.png)

提交成功!

![](/images/img/20211008133841.png)

7.Push到Github

![](/images/img/20211008134005.png)

推送成功!

![](/images/img/20211008134033.png)

查看github仓库更新后的结果

![](/images/img/20211008134128.png)

大功告成！
