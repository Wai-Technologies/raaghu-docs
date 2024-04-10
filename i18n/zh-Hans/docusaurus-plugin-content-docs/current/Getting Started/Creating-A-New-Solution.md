---
sidebar_position: 2
---

# 创建新解决方案

创建新项目
-----------

有两种创建新项目的方式：ABP Suite 和 ABP CLI

### 使用ABP Suite创建新项目

ABP Suite是为ABP商业版创建新解决方案的推荐方式

使用以下命令运行ABP Suite：

```shell
   abp suite
```

* 这个命令启动ABP Suite，并在您的默认浏览器中打开它：

![创建新解决方案](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/zh-Hans/images/createANewSol.png)

点击**创建新解决方案**按钮并填写模态表单：

![创建新解决方案的模态表单](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/zh-Hans/images/createSol.png)

根据您的喜好选择UI框架，数据库提供程序和其他选项，然后点击确定按钮。

### 使用ABP CLI创建新项目

使用ABP CLI的`new`命令来创建新项目：

```shell
   abp new Acme.Bookstore -t app-pro
```

* `-t`参数指定了[启动模板](https://docs.abp.io/en/commercial/7.2/startup-templates/application/index)的名称。`app-pro`是一个包含了预先安装和配置的[ABP商业模块](https://commercial.abp.io/modules)的启动模板。
* 我们也可以使用不同级别的命名空间，例如`Bookstore`、`Acme.Bookstore`或`Acme.Retail.BookStore`。

主题
-----

### Raaghu主题

Raaghu主题是一个全新的、时尚的主题，提供不同的颜色选项，是最新的主题。您可以从Dark、Light和Semi Dark中选择一个。

### ABP CLI命令和选项

[ABP CLI文档](https://docs.abp.io/en/abp/latest/CLI)涵盖了ABP CLI的所有可用命令和选项。ABP商业版的主要区别在于模板名称。查看[ABP商业版启动模板](https://docs.abp.io/en/commercial/7.2/startup-templates/index)文档以了解其他商业模板。

### 解决方案结构

该解决方案具有分层结构（基于[领域驱动设计](https://docs.abp.io/en/abp/Domain-Driven-Design)）并包含单元测试和集成测试项目。请查看[解决方案结构文档](https://docs.abp.io/en/commercial/7.2/startup-templates/application/solution-structure)以详细了解解决方案结构。

### 下一步

* [运行解决方案](Getting-Started-Running-Solution.md)
