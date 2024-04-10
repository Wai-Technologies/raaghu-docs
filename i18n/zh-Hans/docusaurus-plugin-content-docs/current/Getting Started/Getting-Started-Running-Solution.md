---
sidebar_position: 3
---

# 运行解决方案

# 创建数据库

### 连接字符串

请检查.Web项目下**appsettings.json**文件中的连接字符串。

```json
"ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
```

**关于连接字符串和数据库管理系统**

该解决方案默认配置为使用Entity Framework Core与MS SQL Server。但是，如果您在ABP CLI的**new**命令中使用**-dbms**参数选择了另一个DBMS（例如**-dbms MySQL**），那么您的连接字符串可能会不同。

EF Core支持[各种](https://learn.microsoft.com/en-us/ef/core/providers/)数据库提供程序，您可以使用任何支持的DBMS。如果以后需要的话，请参考[Entity Framework集成文档](https://docs.abp.io/en/abp/latest/Entity-Framework-Core)以了解如何[切换到其他DBMS](https://docs.abp.io/en/abp/latest/Entity-Framework-Core-Other-DBMS)。

### 跨域来源

请检查.Web项目下**appsettings.json**文件中的CorsOrigins。

```json
 "CorsOrigins": "https://*.abp_react_7_3.com,http://localhost:4200,http://localhost:8080"
```

CorsOrigins设置定义了跨域资源共享（CORS）的允许来源。该设置允许来自指定来源的请求。在这个配置中，'http://localhost:8080' 被包括在内，以允许来自本地开发服务器的请求，通常用于开发和测试目的。

### 数据库迁移

该解决方案使用[Entity Framework Core Code First Migrations](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli)。它附带一个**.DbMigrator**控制台应用程序，用于**应用迁移**并**提供初始数据**。它在**开发环境**和**生产环境**都非常有用。

**.DbMigrator**项目有它自己的**appsettings.json**。因此，如果您已经更改了上面的连接字符串，也应该更改这个。

### 初始迁移

.DbMigrator应用程序会在首次运行时自动**创建初始迁移**。

**如果您使用的是Visual Studio，可以跳过*运行DbMigrator*部分。**然而，其他IDE（例如Rider）可能在首次运行时遇到问题，因为它添加了初始迁移并编译了项目。在这种情况下，打开.DbMigrator项目文件夹中的命令行终端，并运行以下命令：

```bash
dotnet run
```

下一次，您可以像平常一样在IDE中运行它。

### 运行DbMigrator

右键单击.DbMigrator项目，选择**设置为启动项目**。

![设置为启动项目](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/set-as-startup-project.png)

按下F5（或Ctrl+F5）运行应用程序。它将显示如下的输出：

![db-migrator输出](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/db-migrator-output.png)

初始[种子数据](Data-Seeding.md)在数据库中创建了`admin`用户（密码是`1q2w3E*`），该用户用于登录应用程序。因此，您需要至少运行一次`.DbMigrator`以创建新数据库。

该解决方案已配置为在本地计算机上使用**MongoDB**，因此您需要启动并运行MongoDB服务器实例，或将连接字符串更改为另一个MongoDB服务器。

## 运行应用程序

警告：当创建ABP解决方案时，客户端包是由ABP CLI和Suite恢复的。但是，如果您从另一个团队成员提交的源代码中获取源代码，您的**libs**文件夹将为空。在启动应用程序之前，请在Web目录中运行**abp install-libs**命令以还原客户端库。这将填充**libs**文件夹。确保**.Web**项目是启动项目。运行应用程序，它将在您的浏览器中打开**登录**页面：

在Visual Studio中使用Ctrl+F5（而不是F5）运行应用程序，以在没有调试目的的情况下运行应用程序，这将更快。

![swagger-ui](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/swagger-ui.png)


应用程序已启动并运行。您可以基于此启动模板开始开发您的应用程序。

## 参见

* [Web应用程序开发教程](Tutorials/Creating-The-Server-Side.md)
