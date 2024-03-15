---
sidebar_position: 2
---

# 身份认证服务器部署

# 身份服务器部署

根据部署配置，IdentityServer 的配置可能会有所不同。基本上，您需要根据部署环境的要求更新 IdentityServer 客户端相关的数据，并更新您的主机首选项。

### 更新 Cors 起源

对于部署，需要更新**网关、微服务**、Swagger 授权和**React**的跨源配置。这可以在 appsettings.json 文件中的**App**配置下找到。

```json
   "CorsOrigins": "https://*.MyProjectName.com,http://localhost:4200,https://localhost:44307,https://localhost:44325,https://localhost:44353,https://localhost:44367,https://localhost:44388,https/localhost:44381,https://localhost:44361",
```

### 更新重定向允许的 URL

如果使用 React 作为后台 Web 应用程序，则必须进行此配置。这可以在 appsettings.json 文件的**App**配置下找到。

```json
"RedirectAllowedUrls": "http://localhost:4200,https://localhost:44307"
```
