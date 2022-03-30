# 前端基础知识


前端基础知识笔记

<!--more-->
### Html常见写法(重语义化?)

{{< image src="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/image/20210712210055.png" caption="目录结构">}}

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <h1>第一个web页面</h1>
    <h2>2级标题</h2>
    <p id="demo">我的第一个段落</p>
    <button onclick="myFunction()">点我</button>
    <!--<a href="mailto:1337425156@qq.com">给zfp发邮件</a>-->
    <header>
        <nav>
            <ul>
                <li><a href="">首页</a></li>
                <li><a href="">系统课程</a></li>
                <li><a href="">关于</a></li>
                <li><a href="">捐赠</a></li>
            </ul>
        </nav>
    </header>
    <script src="index.js">

    </script>

    <!--相对路径法:以当前位置开始查找-->
    <a href="block/1.html">点击进入1.html</a>
    <!--查找同级目录下的文件-->
    <hr>
    <a href="2.html">点击进入2.html</a>
    <hr>
    <a href="/">访问根目录/</a>
    <hr>
    <a href="/test01/block/1.html">绝对路径访问1.html</a>

    <!-- 小组件标签 -->
    <aside></aside>

    <!-- 相似的部分 -->
    <section></section>

    <main>
        <article>
            <section>

            </section>
        </article>
        <aside>

        </aside>
    </main>

</body>

</html>
```

### vscode-Html插件

- Live Server: 可以在浏览器实现同步刷新
- Easy-LESS: 方便编写css代码
- Prettier-Code formatter: 格式化代码插件 


### 未完待续
