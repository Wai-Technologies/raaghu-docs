---
sidebar_position: 3
---
# 运行解决方案
## ABP 后端解决方案

#### 1. 连接字符串

检查位于 .Web 项目下的 appsettings.json 文件中的连接字符串。

````json
"ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
````

#### 2. 在 appsettings.json 文件中进行修改

在 .HttpApi.Host 项目 下的 appsettings.json 文件中修改 CorsOrigins 和 RedirectAllowedUrls。

````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````

CorsOrigins 设置定义了跨域资源共享（CORS）的允许来源。该设置允许来自指定来源的请求。在此配置中，“http://localhost:8080” 被包括以允许来自本地开发服务器的请求，通常用于开发和测试目的。RedirectAllowedUrls 设置用于定义允许重定向的安全域名白名单。

#### 3. 运行 DbMigrator
#### 4. 运行应用程序（导航到 swagger/index.html）

#### 5. 添加 OpenId 应用程序
- 请按照以下步骤通过 Swagger 的 POST API 添加一个 OpenID 应用程序：
  - 打开您的 API 的 Swagger 界面。
  - 找到用于添加数据的 POST 端点（/api/openiddict/applications）。
  - 点击“试用”以提交请求。
  - 在请求体中输入您的 JSON 数据。

  
````json
{
  "applicationType": "web",              // Type of application (e.g., web, mobile)
  "clientId": "<Your_Client_ID>",        // Client ID for the application
  "displayName": "<Your_Display_Name>"   // Display name for the application
  "clientType": "public",                // Type of client (e.g., public, confidential)
  "clientSecret": null,                  // Client secret for the application
  "consentType": "implicit",             // Type of consent (e.g., implicit, explicit,external, systematic)
  "extensionGrantTypes": [               // Extension grant types allowed
    "LinkLogin",
    "Impersonation"
  ],
  "postLogoutRedirectUris": [            // URIs to redirect to after logout
    "http://localhost:8080"
  ],
  "redirectUris": [                     // URIs to redirect to after authorization
    "http://localhost:8080"
  ],
  "allowPasswordFlow": true,
  "allowClientCredentialsFlow": true,
  "allowAuthorizationCodeFlow": true,
  "allowRefreshTokenFlow": true,
  "allowHybridFlow": false,
  "allowImplicitFlow": false,
  "allowLogoutEndpoint": true,
  "allowDeviceEndpoint": false,
  "scopes": [                           // Scopes available for the application
    "address",
    "email",
    "phone",
    "profile",
    "roles",
    "Test"                              // Backend application name
  ],
  "clientUri": "http://localhost:8080", // URI for the client application
  "logoUri": "<Logo_URI>"               // URI for the application's logo
}
````

- 检查响应以确认操作成功。

# Raaghu 前端解决方案
#### 1. 在解决方案的根目录运行以下命令以安装依赖项
````json
npm run install-all
````

#### 2. 修改 .env 文件

````json
NODE_ENV=production
REACT_APP_URL=http://localhost:8080
REACT_APP_API_URL=<Swagger_URL>
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=<Your_Client_ID>
REACT_APP_SCOPE=address openid email phone profile roles offline_access <Backend_Application_Name>
REACT_APP_REPLACE_URL=true
REACT_APP_VERSION=8.0
````

#### 3. 在根目录运行以下命令以运行解决方案

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````

以上命令将运行以下页面：

rds-page-home
rds-page-login
rds-page-dashboard
rds-page-tenant