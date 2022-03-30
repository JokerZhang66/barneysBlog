# Latex入门教程(1)


Latex配置问题总结
<!--more-->

### 使用vscode + texlive搭建Latex环境的坑

> 1.配置环境变量

{{< image src="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/image/enviroment.png" caption="环境变量">}}

windows利用`powershell`可以查看是否安装Latex成功，使用==管理员==身份运行，输入下面的指令

```
xelatex 
xelatex -v
```

{{< image src="https://jokerzhangimg.oss-cn-beijing.aliyuncs.com/image/20210702151907.png" caption="验证是否安装成功">}}

{{< admonition tip "提示">}}

如果环境变量未生效可以试着将其移至首位

{{< /admonition >}}

> 2.配置settings.json

新版的配置文件如下

```json
"latex-workshop.latex.recipes": [
        {
          "name": "xelatex",
          "tools": [
            "xelatex"
          ]
        },
        {
          "name": "xelatex -> bibtex -> xelatex*2",
          "tools": [
            "xelatex",
            "bibtex",
            "xelatex",
            "xelatex"
          ]
        }
      ],
      "latex-workshop.latex.tools": [
        {
          "name": "latexmk",
          "command": "latexmk",
          "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "-pdf",
            "%DOC%"
          ]
        },
        {
          "name": "xelatex",
          "command": "xelatex",
          "args": [
            "-synctex=1",
            "-interaction=nonstopmode",
            "-file-line-error",
            "%DOC%"
          ]
        },
        {
          "name": "bibtex",
          "command": "bibtex",
          "args": [
            "%DOCFILE%"
          ]
        }
      ],
      "latex-preview.command": "xelatex"
```

