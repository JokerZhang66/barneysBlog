# Linux下安装zsh

以官方文档为准
<!--more-->
安装oh-my-zsh前的准备：

- A Unix-like operating system: macOS, Linux, BSD. On Windows: WSL2 is preferred, but cygwin or msys also mostly work.
- [Zsh](https://www.zsh.org/) should be installed (v4.3.9 or more recent is fine but we prefer 5.0.8 and newer). If not pre-installed (run `zsh --version` to confirm), check the following wiki instructions here: [Installing ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)
- `curl` or `wget` should be installed
- `git` should be installed (recommended v2.4.11 or higher)

### 1.Ubuntu安装zsh

其他系统自行查看:[Installing ZSH](https://github.com/ohmyzsh/ohmyzsh/wiki/Installing-ZSH)

```sh
sudo apt install zsh
```

### 2.安装oh-my-zsh

github地址：[https://github.com/ohmyzsh/ohmyzsh](https://github.com/ohmyzsh/ohmyzsh)

```sh
sh -c "$(wget -O- https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
```

{{< image src="/images/img/20220215211324.png" caption="安装成功">}}

### 3.修改主题

使用`vim`打开`.zshrc`配置文件

```
vim ~/.zshrc
```

修改主题为`ZSH_THEME="ys"`

{{< image src="/images/img/20220215211921.png" caption="修改主题">}}

退出`zsh`，<strong style="color:red">重新进入`zsh`即可生效</strong>

### 4.安装插件

在`~/.oh-my-zsh/plugins`中可以看到所有自带的插件，将插件名称添加到`.zshrc`中`plugin`字段中.

例如：

```sh
plugins=(
  git
  bundler
  dotenv
  macos
  rake
  rbenv
  ruby
)
```

#### 安装第三方插件

以安装`zsh-autosuggestions`举例，插件地址在：[https://github.com/zsh-users/zsh-autosuggestions](https://github.com/zsh-users/zsh-autosuggestions)

将该项目直接克隆到`plugins`文件夹下

```sh
cd ~/.oh-my-zsh/plugins  
git clone git@github.com:zsh-users/zsh-autosuggestions.git    
```

最后将插件名称添加到`.zshrc`中`plugin`字段中.

```sh
plugins=(
	zsh-autosuggestions
)
```

退出`zsh`，<strong style="color:red">重新进入`zsh`即可生效</strong>
