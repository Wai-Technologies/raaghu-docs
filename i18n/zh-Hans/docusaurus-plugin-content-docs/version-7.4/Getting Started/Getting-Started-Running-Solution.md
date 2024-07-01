---
sidebar_position: 3
---
# 运行解决方案
## ABP 后端解决方案

#### 1.在 appsettings.json 文件中进行修改

在 .HttpApi.Host 项目 下的 appsettings.json 文件中修改 CorsOrigins 和 RedirectAllowedUrls。

````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````
CorsOrigins 设置定义了跨域资源共享（CORS）的允许来源。该设置允许来自指定来源的请求。在此配置中，“http://localhost:8080” 被包括以允许来自本地开发服务器的请求，通常用于开发和测试目的。RedirectAllowedUrls 设置用于定义允许重定向的安全域名白名单。

#### 2. 运行 DbMigrator
#### 3. 运行应用程序（导航到 swagger/index.html）

# Raaghu 前端解决方案

#### 1. 在解决方案的根目录运行以下命令以安装依赖项
````json
npm run install-all
````

#### 2.  生成代理

```json
raaghu generate --proxy -t
``` 

或者
```json
raaghu generate --proxy --template
``` 
有关更多信息，请查看 [生成代理](../CLI/CLI-New-Command-Samples.md#generate)

#### 3. 在根目录运行以下命令以运行解决方案

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````

以上命令将运行以下页面：

rds-page-home
rds-page-login
rds-page-dashboard
rds-page-tenant