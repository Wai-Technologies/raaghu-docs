---
sidebar_position: 1
---
# 设置您的开发环境
首先要做的事情是设置您的开发环境，然后才能创建项目。

#### 先决条件
您的开发机器上应安装以下工具：

- 一个支持 .NET 8.0+ 开发的 IDE（例如 [Visual Studio](https://visualstudio.microsoft.com/vs/)）。

- [Node v16 或 v18](https://nodejs.org/en) 

- [Yarn v1.20+（非 v2）^1 或 npm v6+](https://classic.yarnpkg.com/en/docs/install#windows-stable)

- [ABP CLI](https://docs.abp.io/en/abp/latest/CLI)（用于自动化一些 ABP 解决方案常见任务的命令行界面）

# 安装 Raaghu CLI
Raaghu CLI 是一个命令行界面，用于自动化一些 Raaghu 解决方案的常见任务。

您需要使用以下命令安装 CLI：

````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````
如果您已经安装了，可以使用以下命令更新：

````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````