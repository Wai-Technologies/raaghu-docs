---
sidebar_position: 1
---

# 设置您的开发环境

Here's the provided English-language Markdown text converted into Chinese:

# 入门指南

本教程假设您已经购买了[ABP商业许可证](https://commercial.abp.io/pricing)并拥有活跃的ABP商业账户。

本文档假定您希望使用raaghu-react Pages作为UI框架，以及Entity Framework Core作为数据库提供程序。

## 设置开发环境

在创建第一个项目之前，让我们设置您的开发环境。

### 先决条件

您的开发机器上应安装以下工具：

* [Visual Studio 2022](https://visualstudio.microsoft.com/vs/) (版本17.3+，仅适用于Windows) / [Visual Studio for Mac](https://visualstudio.microsoft.com/vs/mac/)
* [.NET 7.0+](https://dotnet.microsoft.com/en-us/download/dotnet)
* [Node v18.18](https://nodejs.org/en)或更高版本
* [npm v9.5](https://www.npmjs.com/package/npm)及更高版本，或者[Yarn v1.20+ (不是v2)](https://classic.yarnpkg.com/en/docs/install#windows-stable)

### 安装ABP CLI

[ABP CLI](https://docs.abp.io/en/abp/latest/CLI)是一个命令行界面，用于自动化ABP解决方案的一些常见任务。

[ABP CLI](https://docs.abp.io/en/abp/latest/CLI)是ABP Framework的免费开源工具，也用于ABP商业应用程序开发。

首先，您需要使用以下命令安装ABP CLI：

```shell
  dotnet tool install -g Volo.Abp.Cli
```

如果您已经安装了ABP CLI，可以使用以下命令进行更新：

```shell
  dotnet tool update -g Volo.Abp.Cli
```

### 登录到您的账户

为了使用ABP商业功能，您需要使用ABP CLI登录您的账户：

```shell
abp login username 
```

它会要求输入密码，因此您必须输入您的账户密码。

您可以从[ABP Account](https://account.abp.io/Account/Login)网站自由创建一个新账户。然而，您的账户应该作为开发人员注册到组织中，以便能够使用ABP商业功能。如果您的公司拥有ABP商业许可证，请向您的经理申请将您的账户添加到组织的开发人员列表中。

### 安装ABP Suite

[ABP Suite](https://docs.abp.io/en/commercial/7.2/abp-suite/index)是一个旨在帮助您进行开发的应用程序。

![Create A New Solution](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/createANewSol.png)


首先，您需要安装ABP Suite：

```shell
  abp suite install
```

如果您已经安装了ABP Suite，可以使用以下命令进行更新：

```shell
  abp suite update
```

### 下一步

* [创建新解决方案](Creating-A-New-Solution.md)
