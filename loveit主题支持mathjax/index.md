# LoveIt主题支持MathJax

1.将`config.toml`中的KaTeX数学公式支持修改为false
```
[params.page.math]
      enable = false
```
2.新建`themes\LoveIt\layouts\partials\math.html`文件，添加一下内容
```html
<script type="text/x-mathjax-config">
    MathJax.Hub.Config({
        tex2jax: {
            inlineMath: [['$','$'], ['\\(','\\)']],
            displayMath: [['$$','$$'], ['\[','\]']],
            processEscapes: true,
            processEnvironments: true,
            skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
            TeX: {
                equationNumbers: { autoNumber: "AMS" },
                extensions: ["AMSmath.js", "AMSsymbols.js"]
            }
        }
    });
</script>
<script type="text/javascript" async src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/MathJax.js?config=TeX-MML-AM_CHTML"></script>

<style>
code.has-jax {
    font: inherit;
    font-size: 100%;
    background: inherit;
    border: inherit;
    color: #515151;
}
</style>

<script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body, {
            delimiters: [
              {left: "$$", right: "$$", display: true},
              {left: "$", right: "$", display: false}
            ]
        });
    });
</script>
```
3.在`themes\LoveIt\layouts\partials\header.html`中的最后添加下列内容
```html
{{ if or .Params.math .Site.Params.math }}
    {{ partial "math.html" . }}
{{ end }}
```
4.<strong style='color:red'>在每篇文章最开始的`Front Matter`中使用`math: true`表示启用MathJax公式支持</strong>



