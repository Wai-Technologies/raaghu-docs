---
sidebar_position: 3
---

# 审计日志记录
以下是提供的英文Markdown文本的中文版本：

# 审计日志模块

该模块实现了应用程序的审计日志系统：

- 查看系统的所有审计日志并轻松筛选审计日志。
- 查看审计日志详细信息、执行操作和更改实体。
- 查看实体更改日志并筛选实体更改日志。
- 查看实体更改的详细信息。
- 查看实体的所有更改。
- 该模块还定义了可重用的“每天平均执行时长”和“错误率”小部件。

请参见[模块描述页面](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index)以获取模块功能的概述。

如何安装
--------------

审计日志模块已预安装在[启动模板中](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index)。因此，无需手动安装。

### 包

该模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)，由多个NuGet和NPM包组成。如果您想了解这些包和它们之间的关系，可以查看该指南。

您可以访问[审计日志模块包列表页面](https://abp.io/packages?moduleName=Volo.AuditLogging.Ui)以查看与该模块相关的包列表。

### 菜单项

审计日志模块将以下项目添加到“主菜单”下的“管理”菜单项：

- 审计日志：列出、查看和筛选审计日志和实体更改。

IAbpAuditLoggingMainMenuNames类包含了菜单项名称的常量。

### 页面

审计日志

审计日志选项卡用于列出、查看和筛选系统中的审计日志和实体更改。

![审计日志选项卡用于列出、查看和筛选系统中的审计日志和实体更改](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/audit-logs.png)

### 审计日志详细信息

您可以通过单击每个审计日志行上的放大镜图标来查看审计日志的详细信息：

- **总体：** 此选项卡包含有关审计日志的详细信息。
- **操作：** 此选项卡显示在Web请求期间执行的操作列表（包括控制器操作和应用程序服务方法调用及其参数）。
- **更改：** 此选项卡显示Web请求期间更改的实体。

**(继续中，因为UI未正确渲染)(500错误)**
