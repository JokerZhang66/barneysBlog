# Hugo添加文章加密功能

1.找到`themes\LoveIt\layouts\posts\single.html`文件,在`{{- $params := .Scratch.Get "params" -}}`的下一行添加下列内容：
```html
    {{- $password := $params.password | default "" -}}
    {{- if ne $password "" -}}
		<script>
			(function(){
				if({{ $password }}){
					if (prompt('请输入文章密码') != {{ $password }}){
						alert('密码错误！');
						if (history.length === 1) {
							window.opener = null;
							window.open('', '_self');
							window.close();
						} else {
							history.back();
						}
					}
				}
			})();
		</script>
    {{- end -}}
```
2.之后只要在文章的头部加上password属性即可进行加密，只有输入了正确密码才能打开文章，否则会回退到之前的页面。用法如下：
```
---
title: 随笔
password: test
---
```

