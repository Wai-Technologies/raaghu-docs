---
sidebar_position: 2
---

# 创建解决方案


# 创建新的ABP商业解决方案

有两种方法可以创建新的ABP商业解决方案。您可以使用[ABP CLI](https://docs.abp.io/en/abp/latest/CLI)或[ABP Suite](https://docs.abp.io/en/commercial/7.2/abp-suite/add-solution)。

通过ABP CLI创建解决方案
-----------------------------

如果您尚未安装ABP CLI，请使用以下命令进行安装。要检查是否已经安装了ABP CLI，请在命令行中输入 `abp` 。

```shell
   dotnet tool install -g Volo.Abp.Cli
```

要创建您的解决方案，请进入要创建的目录，然后键入以下命令：

```shell
    abp new Acme.BookStore -t app-pro
```

* Acme.BookStore 是项目名称。您的Visual Studio解决方案（.sln文件）将命名为 Acme.BookStore.sln。根文件夹中的项目和所有命名空间将具有前缀 Acme.BookStore.*。您可以指定不同的项目名称，如 onlyBookStore 或 Acme.Retail.BookStore。您可以使用单级、两级或三级命名。
* -t 或 --template 是模板名称。对于商业应用程序，请使用 app-pro。
* 要查看其他CLI新项目选项，请键入：

```shell
    dotnet tool update -g Volo.Abp.Cli
```

### 指定UI框架

模板提供多个UI框架：


*mvc：带有 Razor 页面的 ASP.NET Core MVC UI（默认）
* Blazor：Blazor UI
* Blazor-服务器：Blazor 服务器 UI
* 角度：角度用户界面
* 反应：反应用户界面
* maui-blazor：MAUI Blazor UI

使用 -u 或 --ui 选项来指定UI框架：

```shell
    abp new Acme.BookStore -t app-pro -u react
```

指定数据库提供程序

模板支持以下数据库提供程序：

* ef：Entity Framework Core（默认）
* mongodb：MongoDB

使用 -d 或 --database-provider 选项来指定数据库提供程序：

```shell
 abp new Acme.BookStore -t app-pro -d mongodb
```

通过ABP Suite创建解决方案

ABP Suite允许您创建新的ABP解决方案。

如果您尚未安装ABP Suite，请查看如何安装ABP Suite。

要创建新解决方案，请参阅[如何创建新解决方案](https://docs.abp.io/en/commercial/7.2/abp-suite/create-solution)。

### 下一步是什么？

* [解决方案结构](Solution-Structure.md)
