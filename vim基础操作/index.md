# vim基础操作

vim基础操作
<!--more-->
## vim指令

### 基础命令

`h`左    ` j `下     ` k` 上     ` l`右

`b`:回退

`p`:粘贴

`y`:复制

`u`:撤消

`d`:剪切

`i`:进入`insert`模式

`a`:在当前光标后进入`insert`模式

`o`:在当前光标的下一行进入`insert`模式

`c`:剪切并进入`insert`模式

`v`：直接进入可视化visual模式，选择文本

`w`:保存

`q`:退出

`/`：使用 `/`+`你要搜索的字符`快速定位

`shift + g`: 跳转到文本最后一行

`gg`: 跳转到第一行第一个字符

先使用`gg`移动到首行，使用:`.,$d`删除所有文字

### 常用指令

1.按住<span style="color:red">`{`</span>跳转到下一个段落

2.按住<span style="color:red">`}`</span>跳转到上一个段落

3.按住<span style="color:red">`%`</span>跳转到`[]`或者`{}`两边

4.要使vim中文不乱码，在配置文件vimrc中添加

```
set fileencodings=utf-8,ucs-bom,cp936,big5  
set fileencoding=utf-8
```

5.先按<span style="color:red">`d`</span>跳转到再按数字键再按方向键往哪个方向剪切几个字符

比如d5-> 表示向右删除5个字符

6.按两下<span style="color:red">`d`</span>或者<span style='color:red'>`c`</span>剪切一行

7.按<span style="color:red">`p`</span>粘贴内容

8.组合键<span style="color:red">`cw`</span>删除字符并进入`insert`模式

9.撤销操作：按`esc`退出进入`command`模式，按<span style='color:red'>`u`</span>撤销前一个操作

10.剪切操作：在`command`模式下按<span style="color:red">`v`</span>进入`visual`模式，按上下选中多行，按<span style='color:red'>`c`</span>或者<span style='color:red'>`d`</span>剪切

11.粘贴操作：按`command`模式下按<span style='color:red'>`p`</span>粘贴剪切的内容

12.vim中的左下上右代表的键还有`H J K L`

13.另存为：<span style='color:red'>`wq`</span>   + `文件名.后缀名`

14.按两下<span style="color:red">`y`</span>复制一行,再按`p`粘贴

15.vim是在**terminal**中运行的，按**【Ctrl+Alt+T】**打开终端之后

16.在command模式下，vim中可以用【Page Up】和【Page Down】来进行翻页，vim中还支持【Ctrl+ F】来进行向下翻页，用【Ctrl+B】进行向上翻页。

17.在command模式下，vim中还支持【数字+GG】快速定位，进行跳转到某一行的操作。

18.在command模式下，vim支持【数字+J】表示向下多少行，【数字+K】表示向上多少行的操作。如果想要取消上述操作按【Esc】键即可取消。

19.全局替换

```
: % s/要替换的字符串/替换后的内容/g （g代表全局替换）
```

20.按<span style='color:red'>`u `</span>撤消上一步操作

21.按<span style='color:red'>`ctrl + r`</span>取消上一步被撤销的操作

22.分屏命令

    `vs`:左右分屏
    `sp`:上下分屏

23.normal 和 insert 模式相互切换

    按下`ctrl + [` 或者`ctrl + c`退出`insert`模式

    在normal模式下输入gi进入最后一次编辑的地方

24.在`insert`模式下进行删除的快捷键<span style='color:red'>这些命令同样可以在终端下使用</span>

    `ctrl + h`:删除上一个字符

    `ctrl + w`：删除上一个单词

    `ctrl + u`：删除这一行

25.`gg`将光标移动到文件开头

    `G`将光标移动到文件结尾

## vim多文件操作

分屏命令：`vs` 和 `sp`

打开多个缓冲区   `:e + 文件名`

使用   `:ls`  显示所有的缓冲区

使用`:b + n`回到第n个缓冲区(如果文件没被修改过,请在b后面加上`!`)

使用`bprevious`回到上一个缓冲区

使用`ctrl + w`切换不同的窗口

左右交换窗口可以使用`ctrl + w` + `L`

可以使用`vs+文件名分屏`

## vim 安装插件

vim在linux下的配置文件的地址有以下两者方法

```
vim /home/用户名/.vimrc(比如vim /home/zhangfp/.vimrc)
或者
vim ~/.vimrc
```

linux下安装插件管理器`vim_plug`

```
curl -fLo ~/.local/share/nvim/site/autoload/plug.vim --create-dirs \
    https://raw.githubusercontent.com/junegunn/vim-plug/master/plug.vim
```

将以下信息写入`.vimrc`中

```
" Specify a directory for plugins
" - For Neovim: stdpath('data') . '/plugged'
" - Avoid using standard Vim directory names like 'plugin'
call plug#begin('~/.vim/plugged')

" Make sure you use single quotes

" Shorthand notation; fetches https://github.com/junegunn/vim-easy-align
Plug 'junegunn/vim-easy-align'

" Any valid git URL is allowed
Plug 'https://github.com/junegunn/vim-github-dashboard.git'

" Multiple Plug commands can be written in a single line using | separators
Plug 'SirVer/ultisnips' | Plug 'honza/vim-snippets'

" On-demand loading
Plug 'scrooloose/nerdtree', { 'on':  'NERDTreeToggle' }
Plug 'tpope/vim-fireplace', { 'for': 'clojure' }

" Using a non-master branch
Plug 'rdnetto/YCM-Generator', { 'branch': 'stable' }

" Using a tagged release; wildcard allowed (requires git 1.9.2 or above)
Plug 'fatih/vim-go', { 'tag': '*' }

" Plugin options
Plug 'nsf/gocode', { 'tag': 'v.20150303', 'rtp': 'vim' }

" Plugin outside ~/.vim/plugged with post-update hook
Plug 'junegunn/fzf', { 'dir': '~/.fzf', 'do': './install --all' }

" Unmanaged plugin (manually installed and updated)
Plug '~/my-prototype-plugin'

" Initialize plugin system
call plug#end()
```

使用命令更新配置文件

```
:source ~/.vimrc 
```

加入自己想用的插件

```
call plug#begin('~/.vim/plugged')
" 将该插件加入到插件列表
Plug 'mhinz/vim-startify'
call plug#end()
```

开始安装插件

```
:PlugInstall 
```

