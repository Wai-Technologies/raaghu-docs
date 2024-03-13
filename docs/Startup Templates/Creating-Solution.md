---
sidebar_position: 2
---

# Creating Solution



Creating a new ABP Commercial solution
======================================

There are 2 ways of creating a new ABP Commercial solution. You can use the [ABP CLI](https://docs.abp.io/en/abp/latest/CLI) or [ABP Suite.](https://docs.abp.io/en/commercial/7.2/abp-suite/add-solution)

Creating solution via ABP CLI
-----------------------------

If you have not yet installed ABP CLI, you need to install it with the following command. To check if you already have it, write abp to the command line.

```shell
   dotnet tool install -g Volo.Abp.Cli
```

To create your solution, go to the directory where you want to create in and type the following command:

```shell
    abp new Acme.BookStore -t app-pro
```

* Acme.BookStore is the project name. Your Visual Studio Solution, .sln file will be named as Acme.BookStore.sln. The projects inside the root folder and all the namespaces will have the prefix Acme.BookStore.\*. You can give different project names like onlyBookStore or Acme.Retail.BookStore. You can use single level, two-level or three-level naming.
* \-t or \--template is the template name. For commercial apps, use app-pro.
* To discover other CLI new project options type:

  ```shell
    dotnet tool update -g Volo.Abp.Cli
  ```

### Specify the UI framework

The template provides multiple UI frameworks:

* mvc: ASP.NET Core MVC UI with Razor Pages (default)
* blazor: Blazor UI
* blazor-server: Blazor Server UI
* angular: Angular UI
* react:React UI
* maui-blazor: MAUI Blazor UI

Use \-u or \--ui option to specify the UI framework:

```shell
    abp new Acme.BookStore -t app-pro -u react
```

Specify the database provider

The template supports the following database providers:

* ef: Entity Framework Core (default)
* mongodb: MongoDB

Use \-d or \--database-provider option to specify the database provider:

```shell
 abp new Acme.BookStore -t app-pro -d mongodb
```

### Creating solution via ABP Suite

ABP Suite allows you to create a new ABP solution.

If you have not installed ABP Suite, see how to install ABP Suite.

To create a new solution, see [how to create a new solution.](https://docs.abp.io/en/commercial/7.2/abp-suite/create-solution)

### What's next?

* [Solution structure](Solution-Structure.md)
