# Latex入门教程(2)


Latex入门教程第二篇
<!--more-->

### 常用操作

> 1.命令行操作

使用命令行打开相关文档

```bash
texdoc ctex // Ctex中文排版宏集
texdoc lshort-zh-cn // latex2e中文文档
texdoc symbols-a4 // 各类数学符号表
texdoc beamer // beamer模板制作对应文档
```

使用命令行编译tex文件

```bash
xelatex test.tex // 编译文件
test.pdf // 打开pdf
```

使用`latexmk`进行多次编译

```bash
latexmk xxx.tex -pdf -xelatex  // 编译中文，生成pdf
latexmk xxx.tex -pdf   // 编译英文，生成pdf
```


