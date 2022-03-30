# Nvim补全配置记录


### 安装及删除nvim
```sh
sudo apt-get install neovim # 安装
sudo apt remove neovim # 删除
```
### 安装nodejs及npm
```sh
sudo apt install nodejs npm 
nodejs --version # 查看版本
```

### 升级nodejs到最新版本(coc.nvim版本要求)
```sh
sudo npm install n -g
sudo n stable
nodejs --version # 查看版本
```
### 安装vim-plug插件管理器
```sh
url -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

安装插件进入`~/.config/nvim/init.vim`输入命令`:PlugInstall`

### 使用`PlugInstall`前先更换源

<strong style='color:red'>注意：如果之前安装过插件，请全部卸载</strong>，具体办法为：删除`.local/share`文件夹下的`plugge`目录

找到下面这两行

```sh
let fmt = get(g:, 'plug_url_format', 'https://git::@github.com/%s.git')
\ '^https://git::@github\.com', 'https://github.com', '')
```

依次修改为

```sh
let fmt = get(g:, 'plug_url_format', 'https://git::@hub.fastgit.org/%s.git')
\ '^https://git::@hub.fastgit\.org', 'https://hub.fastgit.org', '')
```
