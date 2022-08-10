# Picgo图床

<!--more-->
{{< admonition warning >}}
请不要再使用gitee作为图床，因为gitee加了防盗链，使用一段时间后所有图片的外链都会失效，挺麻烦的
{{< /admonition >}}
## 1.github上的操作

**1.登陆自己的GitHub,创建一个新的仓库用来保存上传的图片**

<center>{{< image src="/images/img/20191127201912.png" caption="">}}</center>

**2.创建自己的token**

1.点击`settings`

<center>{{< image src="/images/img/20191127202137.png" caption="">}}</center>

2.点击`Developer settings`

<center>{{< image src="/images/img/20191127202235.png" caption="">}}</center>

3.点击`Personal access tokens`

<center>{{< image src="/images/img/20191127202416.png" caption="">}}</center>

4.点击`Generate new token`,生成自己的token

<center>{{< image src="/images/img/20191127202610.png" caption="">}}</center>

5.填写完毕信息后直接`Generate token`

<center>{{< image src="/images/img/20191127203039.png" caption="">}}</center>

6.保存好`token密钥`

**<span style="color:red">注意:生成的token只会在第一次进入这个页面会出现,所以请先不要关闭这个页面,等后面配置好picgo再关闭</span>**

## 2.配置picgo和jsDelivr加速

- 没有下载`picgo`的朋友,[请点此下载]( https://molunerfinn.com/PicGo/ )
- 设定仓库名：按照 `用户名/图床仓库名` 的格式填写
- 设定分支名：`master`
- 设定 Token：粘贴之前生成的 `Token`
- 指定存储路径：填写想要储存的路径，如 `img/`，这样就会在仓库下创建一个名为 `img` 的文件夹，图片将会储存在此文件夹中
- 设定自定义域名：它的的作用是，在图片上传后，PicGo 会按照`自定义域名+上传的图片名`的方式生成访问链接，放到粘贴板上，因为我们要使用 `jsDelivr` 加速访问，所以可以设置为`https://cdn.jsdelivr.net/gh/用户名/图床仓库名`,如`/images/`

**我的配置如下图**

<center>{{< image src="/images/img/20191127203458.png" caption="">}}</center>


**在`github`中的显示如图**

<center>{{< image src="/images/img/20191127203834.png" caption="">}}</center>

## 3.配置完成

**直接上传你的图片即可**

<center>{{< image src="/images/img/20191127204007.png" caption="">}}</center>

## ~~4.配置gitee图床~~

由于github图床不是很稳定，并且由于服务器在国外的原因，访问速度不够快，所以本节给出了gitee图床的配置

{{< admonition >}}

在配置gitee图床前，需要在gitee上新建一个仓库用来存储你的图片！

{{< /admonition >}}

我的配置图片如下：

<center>{{< image src="/images/img/20210810235002.png" caption="配置截图">}}</center>

- repo：用户名/仓库名称，比如我自己的仓库**Barneys/myfiles/**，也可以直接复制仓库的url

- branch：分支，这里写上master

- token：填入码云的私人令牌

- path：路径，一般写上img

- customPath：提交消息，这一项和下一项customURL都不用填。在提交到码云后，会显示提交消息，插件默认提交的是 Upload 图片名 by picGo - 时间

**repo**注意不要填错！！！

<center>{{< image src="/images/img/20210811000715.png" caption="">}}</center>

**token获取：进入个人设置，点击私人令牌**

<center>{{< image src="/images/img/20210810235507.png" caption="">}}</center>

点击生成新令牌，填写私人令牌描述(随便填一个名称)，选中**Projects**

<center>{{< image src="/images/img/20210811000118.png" caption="新建令牌">}}</center>

复制生成的**token**

<center>{{< image src="/images/img/20210811000247.png" caption="生成token">}}</center>

最后，gitee上的图片超过1M需要登陆验证，所以用在hugo上的图片需要保证在1M以内，可以使用[**compress**](https://github.com/JuZiSang/picgo-plugin-compress#readme)插件来实现

<center>{{< image src="/images/img/20210811000913.png" caption="插件">}}</center>


## 5.参考
1.[Github+jsDelivr+PicGo 打造稳定快速、高效免费图床](https://blog.csdn.net/qq_36759224/article/details/98058240?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162861072116780271579294%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=162861072116780271579294&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29-1-98058240.first_rank_v2_pc_rank_v29&utm_term=GitHub%2BjsDelivr%2BPicGo%E6%89%93%E9%80%A0%E7%A8%B3%E5%AE%9A%E5%BF%AB%E9%80%9F%E9%AB%98%E6%95%88%E5%9B%BE%E5%BA%8A&spm=1018.2226.3001.4187)

2.[PicGo配置Gitee图床](https://blog.csdn.net/huyande123/article/details/107170214?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522162860943316780366576455%2522%252C%2522scm%2522%253A%252220140713.130102334.pc%255Fall.%2522%257D&request_id=162860943316780366576455&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~first_rank_v2~rank_v29_name-1-107170214.first_rank_v2_pc_rank_v29&utm_term=gitee%E5%9B%BE%E5%BA%8A&spm=1018.2226.3001.4187)

