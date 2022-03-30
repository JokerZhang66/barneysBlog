# Hugo发布博客流程


使用 hugo 编写文章必会指令

<!--more-->

### 常用指令

> 1.新建文章

在博客根目录下进行，我的根目录为`F:\hugo\myblog`,使用下面指令在`post`文件夹下新建,新建后将`draft`修改为`false`；

```
hugo new posts/xxxx.md
```

> 2.本地预览和修改

可在`http://localhost:1313/`预览和修改内容

```
hugo server
或
hugo server -e production(可以展示评论，cdn等内容)
```

> 3.本地生成静态资源

```
hugo
```

> 4.提交 public 资源到 github 仓库

```
git add .
git commit -m '提交说明'
git push -u origin master
```
> 5.gitee搭建博客参考

[使用Hugo + Gitee Pages 搭建个人博客](https://yinshuaiguo.gitee.io/blog/post/%E4%BD%BF%E7%94%A8hugo-+-gitee-pages-%E6%90%AD%E5%BB%BA%E4%B8%AA%E4%BA%BA%E5%8D%9A%E5%AE%A2/)

