# Hugo导航栏添加二级菜单

1.将`themes\LoveIt\layouts\partials\header.html`修改为下列内容:
```html
{{- /* Desktop header */ -}}
<header class="desktop" id="header-desktop">
    <div class="header-wrapper">
        <div class="header-title">
            <a href="{{ .Site.Home.RelPermalink }}" title="{{ .Site.Title }}">
                {{- with .Site.Params.header.title -}}
                {{- with .logo -}}
                {{- dict "Src" . "Class" "logo" | partial "plugin/image.html" -}}
                {{- end -}}
                {{- with .pre -}}
                <span class="header-title-pre">{{ . | safeHTML }}</span>
                {{- end -}}
                {{- if .typeit -}}
                {{- $id := dict "Content" .name "Scratch" $.Scratch | partial "function/id.html" -}}
                <span id="{{ $id }}" class="typeit"></span>
                {{- dict $id (slice $id) | dict "typeitMap" | merge ($.Scratch.Get "this") | $.Scratch.Set "this" -}}
                {{- else -}}
                {{- .name -}}
                {{- end -}}
                {{- with .post -}}
                <span class="header-title-post">{{ . | safeHTML }}</span>
                {{- end -}}
                {{- else -}}
                {{- .Site.Title -}}
                {{- end -}}
            </a>
        </div>
        <div class="menu">
            <div class="menu-inner">
                <!-- {{- range .Site.Menus.main -}}
                    {{- $url := .URL | relLangURL -}}
                    {{- with .Page -}}
                        {{- $url = .RelPermalink -}}
                    {{- end -}}
                    <a class="menu-item{{ if $.IsMenuCurrent `main` . | or ($.HasMenuCurrent `main` .) | or (eq $.RelPermalink $url) }} active{{ end }}" href="{{ $url }}"{{ with .Title }} title="{{ . }}"{{ end }}{{ if (urls.Parse $url).Host }} rel="noopener noreffer" target="_blank"{{ end }}>
                        {{- .Pre | safeHTML }} {{ .Name }} {{ .Post | safeHTML -}}
                    </a>
                {{- end -}} -->
                {{- range .Site.Menus.main -}}
                {{ if .HasChildren }}
                <div class="dropdown">
                    <a {{ if .URL }}href="{{ .URL }}" {{ else }}href="javascript:void(0);" {{ end }}
                        class="menu-item menu-more dropbtn" title="{{ .Title }}" {{ if eq .Post "_blank"
                        }}target="_blank" rel="noopener" {{ end }}>
                        {{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
                    </a>
                    <div class="menu-more-content dropdown-content">
                        {{- range .Children -}}
                        {{- $url := .URL | relLangURL -}}
                        {{- with .Page -}}
                        {{- $url = .RelPermalink -}}
                        {{- end -}}
                        <a href="{{ $url }}" title="{{ .Title }}" {{ if eq .Post "_blank" }}target="_blank"
                            rel="noopener" {{ end }}>{{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{
                            .Post | safeHTML -}}{{ end }}</a>
                        {{- end -}}
                    </div>
                </div>
                {{ else }}
                {{- $url := .URL | relLangURL -}}
                {{- with .Page -}}
                {{- $url = .RelPermalink -}}
                {{- end -}}
                <a class="menu-item{{ if $.IsMenuCurrent `main` . | or ($.HasMenuCurrent `main` .) | or (eq $.RelPermalink $url) }} active{{ end }}"
                    href="{{ $url }}" {{ with .Title }} title="{{ . }}" {{ end }}{{ if (urls.Parse $url).Host }}
                    rel="noopener noreffer" target="_blank" {{ end }}>
                    {{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
                </a>
                {{- end -}}
                {{- end -}}

                {{- if .Site.Menus.main -}}
                <span class="menu-item delimiter"></span>
                {{- end -}}
                {{- if .Site.IsMultiLingual -}}
                <a href="javascript:void(0);" class="menu-item language" title="{{ T " selectLanguage" }}">
                    {{- .Language.LanguageName -}}
                    <i class="fas fa-chevron-right fa-fw"></i>
                    <select class="language-select" id="language-select-desktop" onchange="location = this.value;">
                        {{- if eq .Kind "404" -}}
                        {{- /* https://github.com/dillonzq/LoveIt/issues/378 */ -}}
                        {{- range .Sites -}}
                        {{- $link := printf "%v/404.html" .LanguagePrefix -}}
                        <option value="{{ $link }}" {{ if eq . $.Site }} selected{{ end }}>
                            {{- .Language.LanguageName -}}
                        </option>
                        {{- end -}}
                        {{- else -}}
                        {{- range .AllTranslations -}}
                        <option value="{{ .RelPermalink }}" {{ if eq .Lang $.Lang }} selected{{ end }}>
                            {{- .Language.LanguageName -}}
                        </option>
                        {{- end -}}
                        {{- end -}}
                    </select>
                </a>
                {{- end -}}
                {{- if .Site.Params.search.enable -}}
                <span class="menu-item search" id="search-desktop">
                    <input type="text"
                        placeholder="{{ .Site.Params.search.placeholder | default (T `searchPlaceholder`) }}"
                        id="search-input-desktop">
                    <a href="javascript:void(0);" class="search-button search-toggle" id="search-toggle-desktop"
                        title="{{ T `search` }}">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                    <a href="javascript:void(0);" class="search-button search-clear" id="search-clear-desktop"
                        title="{{ T `clear` }}">
                        <i class="fas fa-times-circle fa-fw"></i>
                    </a>
                    <span class="search-button search-loading" id="search-loading-desktop">
                        <i class="fas fa-spinner fa-fw fa-spin"></i>
                    </span>
                </span>
                {{- end -}}
                <a href="javascript:void(0);" class="menu-item theme-switch" title="{{ T " switchTheme" }}">
                    <i class="fas fa-adjust fa-fw"></i>
                </a>
            </div>
        </div>
    </div>
</header>

{{- /* Mobile header */ -}}
<header class="mobile" id="header-mobile">
    <div class="header-container">
        <div class="header-wrapper">
            <div class="header-title">
                <a href="{{ .Site.Home.RelPermalink }}" title="{{ .Site.Title }}">
                    {{- with .Site.Params.header.title -}}
                    {{- with .logo -}}
                    {{- dict "Src" . "Class" "logo" | partial "plugin/image.html" -}}
                    {{- end -}}
                    {{- with .pre -}}
                    <span class="header-title-pre">{{ . | safeHTML }}</span>
                    {{- end -}}
                    {{- if .typeit -}}
                    {{- $id := dict "Content" .name "Scratch" $.Scratch | partial "function/id.html" -}}
                    <span id="{{ $id }}" class="typeit"></span>
                    {{- dict $id (slice $id) | dict "typeitMap" | merge ($.Scratch.Get "this") | $.Scratch.Set "this"
                    -}}
                    {{- else -}}
                    {{- .name -}}
                    {{- end -}}
                    {{- with .post -}}
                    <span class="header-title-post">{{ . | safeHTML }}</span>
                    {{- end -}}
                    {{- else -}}
                    {{- .Site.Title -}}
                    {{- end -}}
                </a>
            </div>
            <div class="menu-toggle" id="menu-toggle-mobile">
                <span></span><span></span><span></span>
            </div>
        </div>
        <div class="menu" id="menu-mobile">
            {{- if .Site.Params.search.enable -}}
            <div class="search-wrapper">
                <div class="search mobile" id="search-mobile">
                    <input type="text"
                        placeholder="{{ .Site.Params.search.placeholder | default (T `searchPlaceholder`) }}"
                        id="search-input-mobile">
                    <a href="javascript:void(0);" class="search-button search-toggle" id="search-toggle-mobile"
                        title="{{ T `search` }}">
                        <i class="fas fa-search fa-fw"></i>
                    </a>
                    <a href="javascript:void(0);" class="search-button search-clear" id="search-clear-mobile"
                        title="{{ T `clear` }}">
                        <i class="fas fa-times-circle fa-fw"></i>
                    </a>
                    <span class="search-button search-loading" id="search-loading-mobile">
                        <i class="fas fa-spinner fa-fw fa-spin"></i>
                    </span>
                </div>
                <a href="javascript:void(0);" class="search-cancel" id="search-cancel-mobile">
                    {{ T `cancel` }}
                </a>
            </div>
            {{- end -}}
            {{- $currentPage := . -}}
            {{- range .Site.Menus.main -}}
            {{ if .HasChildren }}
                <div class="dropdown">
                    <a {{ if .URL }}href="{{ .URL }}"{{ else }}href="javascript:void(0);"{{ end }} class="menu-item menu-more dropbtn" title="{{ .Title }}" {{ if eq .Post "_blank" }}target="_blank" rel="noopener"{{ end }}>
                        {{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
                    </a>
                    <div class="menu-more-content dropdown-content">
                        {{- range .Children -}}
                            {{- $url := .URL | relLangURL -}}
                            {{- with .Page -}}
                                {{- $url = .RelPermalink -}}
                            {{- end -}}
                                <a href="{{ $url }}" title="{{ .Title }}" {{ if eq .Post "_blank" }}target="_blank" rel="noopener"{{ end }}>{{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}</a>
                        {{- end -}}
                    </div>
                </div>
            {{ else }}
                {{- $url := .URL | relLangURL -}}
                {{- with .Page -}}
                    {{- $url = .RelPermalink -}}
                {{- end -}}
                <a class="menu-item{{ if $.IsMenuCurrent `main` . | or ($.HasMenuCurrent `main` .) | or (eq $.RelPermalink $url) }} active{{ end }}" href="{{ $url }}"{{ with .Title }} title="{{ . }}"{{ end }}{{ if (urls.Parse $url).Host }} rel="noopener noreffer" target="_blank"{{ end }}>
                    {{- .Pre | safeHTML }} {{ .Name }} {{ if ne .Post "_blank" }}{{ .Post | safeHTML -}}{{ end }}
                </a>
            {{- end -}}
        {{- end -}}

            <!-- {{- range .Site.Menus.main -}}
            {{- $url := .URL | relLangURL -}}
            {{- with .Page -}}
            {{- $url = .RelPermalink -}}
            {{- end -}} -->
            <!-- <a class="menu-item" href="{{ $url }}" title="{{ .Title }}" {{ if (urls.Parse $url).Host }}
                rel="noopener noreffer" target="_blank" {{ end }}>
                {{- .Pre | safeHTML }}{{ .Name }}{{ .Post | safeHTML -}}
            </a>
            {{- end -}} -->
            <a href="javascript:void(0);" class="menu-item theme-switch" title="{{ T " switchTheme" }}">
                <i class="fas fa-adjust fa-fw"></i>
            </a>
            {{- if .Site.IsMultiLingual -}}
            <a href="javascript:void(0);" class="menu-item" title="{{ T " selectLanguage" }}">
                {{- .Language.LanguageName -}}
                <i class="fas fa-chevron-right fa-fw"></i>
                <select class="language-select" onchange="location = this.value;">
                    {{- if eq .Kind "404" -}}
                    {{- /* https://github.com/dillonzq/LoveIt/issues/378 */ -}}
                    {{- range .Sites -}}
                    {{- $link := printf "%v/404.html" .LanguagePrefix -}}
                    <option value="{{ $link }}" {{ if eq . $.Site }} selected{{ end }}>
                        {{- .Language.LanguageName -}}
                    </option>
                    {{- end -}}
                    {{- else -}}
                    {{- range .AllTranslations -}}
                    <option value="{{ .RelPermalink }}" {{ if eq .Lang $.Lang }} selected{{ end }}>
                        {{- .Language.LanguageName -}}
                    </option>
                    {{- end -}}
                    {{- end -}}
                </select>
            </a>
            {{- end -}}
        </div>
    </div>
</header>
<div class="search-dropdown desktop">
    <div id="search-dropdown-desktop"></div>
</div>
<div class="search-dropdown mobile">
    <div id="search-dropdown-mobile"></div>
</div>

{{ if or .Params.math .Site.Params.math }}
{{ partial "math.html" . }}
{{ end }}
```

2.找到`themes\LoveIt\assets\css\_custom.scss`文件，添加下列内容：
```scss
/* 子菜单栏 */
.dropdown {
  display: inline-block;
}

/* 子菜单的内容 (默认隐藏) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  line-height: 1.3rem;
}

/* 子菜单的链接 */
.dropdown-content a {
  padding: 10px 18px 10px 14px;
  text-decoration: none;
  display: block;
  & i {
    margin-right: 3px;
  }
}

/* 鼠标移上去后修改子菜单链接颜色 */
.dropdown-content a:hover {
  background-color: #f1f1f1;
  border-radius: 4px;
}

/* 在鼠标移上去后显示子菜单 */
.dropdown:hover .dropdown-content {
  display: block;
}

@media screen and (max-width: 680px) {
    .dropdown {
      display: inline;
    }
  .dropdown:hover .dropdown-content {
    display: inline;
    z-index: 1;
    margin-top: -2em;
    margin-left: 3em;
  }
  .dropdown-content a:hover {
    background-color: transparent;
  }
}
```
3.在`config.toml`中添加导航栏二级标题
我的配置文件如下，效果可点击本博客的导航栏自行查看：
```
[languages.zh-cn.menu]
  [[languages.zh-cn.menu.main]]
      identifier = "posts"
      # 你可以在名称 (允许 HTML 格式) 之前添加其他信息, 例如图标
      pre = ""
      # 你可以在名称 (允许 HTML 格式) 之后添加其他信息, 例如图标
      post = ""
      name = "所有文章"
      url = "/posts/"
      title = ""
      weight = 1
    [[languages.zh-cn.menu.main]]
      identifier = "tags"
      pre = ""
      post = ""
      name = "标签"
      url = "/tags/"
      title = ""
      weight = 2
    [[languages.zh-cn.menu.main]]
      identifier = "categories"
      pre = ""
      post = ""
      name = "分类"
      url = "/categories/"
      title = ""
      weight = 3
    [[languages.zh-cn.menu.main]]
        identifier = "research"
        pre = ""
        name = "科研生活"
        url = ""
        title = ""
        weight = 4
    # 导航栏二级菜单
    [[languages.zh-cn.menu.main]]
        parent = "research" 
        identifier = "papers"
        pre = ""
        post = "_blank"
        name = "论文笔记"
        url = "/categories/papers/"
        title = ""
        weight = 4
    [[languages.zh-cn.menu.main]]
        parent = "research"
        identifier = "DP"
        pre = ""
        post = "_blank"
        name = "差分隐私"
        url = "/DP/"
        title = ""
        weight = 4
    [[languages.zh-cn.menu.main]]
        identifier = "door"
        pre = ""
        name = "传送门"
        url = ""
        title = ""
        weight = 5
    # 导航栏二级菜单
    [[languages.zh-cn.menu.main]]
      identifier = "friends"
      pre = ""
      post = "_blank"
      name = "友链"
      url = "/friends/"
      title = ""
      weight = 5
      parent = "door"
    [[languages.zh-cn.menu.main]]
      parent = "door"
      identifier = "message"
      pre = ""
      post = ""
      name = "留言板"
      url = "/message/"
      title = ""
      weight = 5
    [[languages.zh-cn.menu.main]]
      parent = "door"
      identifier = "about"
      pre = ""
      post = ""
      name = "关于"
      url = "/about/"
      title = ""
      weight = 5

    [[languages.zh-cn.menu.main]]
      identifier = "gitee"
      pre = "<i class='fab fa-github' style='color:red'></i>"
      post = ""
      name = ""
      url = "https://gitee.com/Barneys"
      title = "gitee"
      weight = 6
    [[languages.zh-cn.menu.main]]
      identifier = "github"
      pre = "<i class='fab fa-github' style='color:black'></i>"
      post = ""
      name = ""
      url = "https://GitHub.com/JokerZhang66"
      title = "GitHub"
      weight = 7
```
子菜单其实和原本的菜单一样写法，只是多了一个`parent`属性，用来定位到对应的父菜单的`identifier`。

通过给菜单配置一个`post = "_blank"`属性来将该菜单设置为在新窗口打开该链接，如果`post`属性填其他值则依然作为原本的功能使用：即给`name`添加后缀。
