# 修复Uptime Kuma一个小错误


### 问题描述

{{< image src="/images/img/20220317194822.png" caption="">}}

### 解决方案

{{< image src="/images/img/20220317200358.png" caption="">}}

在`location /`中添加下列两行:

```sh
proxy_set_header   Upgrade $http_upgrade;
proxy_set_header   Connection "upgrade";
```

