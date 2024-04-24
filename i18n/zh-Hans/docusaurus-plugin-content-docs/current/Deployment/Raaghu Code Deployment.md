# Raaghu 代码部署

#### 先决条件
- 在您的系统上安装 Node.js
- 访问目标 Web 服务器进行部署
- 部署的 ABP 应用作为后端
- 环境文件 (.env) 更改
- 确保替换后端和前端应用程序的 URL:

````json 
NODE_ENV=production
REACT_APP_URL=<Web_App_URL>
REACT_APP_API_URL=<Swagger_URL>
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=<Your_Client_ID>
REACT_APP_SCOPE=address openid email phone profile roles offline_access <Backend_application_name>
REACT_APP_REPLACE_URL=true
REACT_APP_Version=8.0
````


## 部署步骤
#### 1. 安装依赖项
通过运行以下命令确保所有必要的依赖项已安装:
````json
npm run install-all
````

#### 2. 构建代码
使用以下命令构建 React 代码:

````json
npm run build
````

此命令编译 React 代码并在 raaghu-mfe/rds_pages/host/dist 目录中生成一个生产就绪的构建。

#### 3. 复制文件
在构建过程后将特定文件复制到指定位置。使用以下命令:


````json
cp raaghu-mfe/web.config raaghu-mfe/rds_pages/host/dist   
cp raaghu-mfe/rds_pages/host/public/favicon.ico raaghu-mfe/rds_pages/host/dist
````

这些命令将 web.config 和 favicon.ico 文件复制到 raaghu-mfe/rds_pages/host/dist 目录，确保它们包含在部署包中。

#### 4. 将包上传到 Web 应用程序
最后，将 'raaghu-mfe/rds_pages/host/dist' 目录中的内容上传到您的 Web 应用程序服务器进行部署。

#### 结论
通过遵循这些步骤，您可以成功将您的 Raaghu 代码部署到 Web 服务器。确保将所有必要的文件包含在部署包中，以便在目标服务器上顺利执行。






