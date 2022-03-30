# Github下载加速

加速下载github上的文件的方式有很多，后面再补充！
<!--more-->
### 使用代理加速
端口号视你的代理软件有所不同！
```
git config --global http.https://github.com.proxy http://127.0.0.1:1217
git config --global https.https://github.com.proxy https://127.0.0.1:1217
```
打开`~/.gitconfig`文件，内容如下：
```sh
[http "https://github.com"]
	proxy = http://127.0.0.1:1217
[https "https://github.com"]
	proxy = https://127.0.0.1:1217

```
