---
sidebar_position: 3
---

#  解决方案结构
# 解决方案结构

根据您指定的选项，您将获得稍微不同的解决方案结构。

默认结构
-----------------

如果您没有指定任何附加选项，您将在**aspnet-core**文件夹中获得一个解决方案，如下所示：

![默认结构](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/defaultStructure.png)

项目位于aspnet-core/src和aspnet-core/test文件夹中。aspnet-core/src文件夹包含实际应用程序，aspnet-core/test文件夹包含单元测试和测试基础项目。下面的图表显示了应用程序的层次结构和项目依赖关系：

![流程图结构](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/flow-chart.png)


下面的每个部分描述了相关的项目及其依赖关系。

### \*.域.共享项目

该项目包含常量、枚举和其他属于领域层的对象，但在解决方案中的所有项目之间共享。

例如，BookType或BookConsts（包含MaxNameLength等验证常量）是放在\*.Domain.Shared项目中的好选择。

### 依赖项:

* \*.Domain.Shared 项目不依赖于解决方案中的其他项目。所有其他项目都直接或间接地依赖于它。

### \*.Domain 项目

这是解决方案的领域层。它包含[实体](https://docs.abp.io/en/abp/latest/Entities)、[聚合根](https://docs.abp.io/en/abp/latest/Entities)、[领域服务](https://docs.abp.io/en/abp/latest/Domain-Services)、[值类型](https://docs.abp.io/en/abp/latest/Value-Types)、[存储库接口](https://docs.abp.io/en/abp/latest/Repositories)和其他领域对象。

一个Book实体、一个BookManager领域服务和一个IBookRepository接口是放在\*.Domain项目中的好例子。

### 依赖项:

* 依赖于\*.Domain.Shared，因为它使用该项目中定义的常量、枚举和其他对象。

### \*.申请.合同项目

该项目包含应用程序服务接口和应用程序层的数据传输对象（DTO）。它分离了应用程序层的接口和实现。这样，接口项目可以共享给客户端作为一个契约包。

IBookAppService接口和BookCreationDto类是放在\*.Application.Contracts项目中的好例子。

### 依赖项:

* 依赖于\*.Domain.Shared，因为它可能在应用程序服务接口和DTO中使用该项目的常量、枚举和其他共享对象。

### \*.应用项目

该项目包含[应用程序服务](https://docs.abp.io/en/abp/latest/Application-Services)的**实现**，这些服务在.Application.Contracts项目中定义了接口。

BookAppService是IBookAppService接口的实现，是放在\*.Application项目中的好例子。

### 依赖项:

* 依赖于\*.Application.Contracts 项目，以能够实现接口并使用DTO。
* 依赖于\*.Domain 项目，以能够使用领域对象，如实体、存储库接口等，来执行应用程序逻辑。

### \*.EntityFrameworkCore 项目

这是EF Core的集成项目。它定义了DbContext并实现了\*.Domain项目中定义的存储库接口。

### 依赖项:

* 依赖于\*.Domain 项目，以能够引用实体和存储库接口。

该项目仅在您选择EF Core作为数据库提供程序时可用。如果选择其他数据库提供程序，其名称将不同。

### \*.DbMigrator 项目

这是一个控制台应用程序，简化了在开发和生产环境中执行数据库迁移的操作。运行此应用程序时，它会执行以下操作：

* 如果需要，创建数据库。
* 应用未决数据库迁移。
* 如有需要，初始化数据。

请注意，该项目有自己的appsettings.json文件。如果需要更改默认的数据库连接字符串，必须在其自己的appsettings.json中设置它。

在这一点上，初始化数据非常重要。ABP具有模块化的数据种子基础架构。有关更多信息，请参阅[数据种子文档](https://docs.abp.io/en/abp/latest/Data-Seeding)。

尽管创建数据库和应用迁移似乎仅对关系数据库是必需的，但即使选择NoSQL数据库提供程序（如MongoDB），该项目也包括在内。在这种情况下，它仍然会初始化应用程序启动所必需的初始数据。

### 依赖项:

* 依赖于\*.EntityFrameworkCore 项目（对于EF Core），因为它需要访问迁移。
* 依赖于\*.Application.Contracts 项目，以能够访问权限定义，因为初始数据种子会默认授予管理员角色的所有权限。

### \*.HttpApi 项目

该项目用于定义API控制器。

大多数情况下，您无需手动定义API控制器，因为ABP的[自动
