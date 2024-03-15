---
sidebar_position: 3
---

# Solution Structure

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
Solution structure
==================

You will get a slightly different solution structure, based on the options you have specified.

Default structure
-----------------

If you don't specify any additional option, you will have a solution in the **aspnet-core** folder like the below:

![Default Structure](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/defaultStructure.png)

Projects are located in aspnet-core/src and aspnet-core/test folders. While the aspnet-core/src folder contains the actual application, aspnet-core/test folder contains unit tests and test base projects. The below diagram shows the layers & project dependencies of the application:

![flow-chart Structure](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/flow-chart.png)

Each section below describes the related project and its dependencies.

### \*.Domain.Shared project

This project contains constants, enums and the other objects which are part of the domain layer, but shared across by all projects in the solution.

For example BookType or BookConsts (contains validation constants like MaxNameLength) are good candidates to be in the \*.Domain.Shared project.

### Dependencies:

* Domain.Shared project has no dependency to other projects in the solution. All other projects depend on this directly or indirectly.

### \*.Domain project

This is the domain layer of the solution. It contains [entities,](https://docs.abp.io/en/abp/latest/Entities) [aggregate roots,](https://docs.abp.io/en/abp/latest/Entities) [domain services,](https://docs.abp.io/en/abp/latest/Domain-Services) [value types,](https://docs.abp.io/en/abp/latest/Value-Types) [repository interfaces](https://docs.abp.io/en/abp/latest/Repositories) and other domain objects.

A Book entity, a BookManager domain service and an IBookRepository interface are good examples to be inside the \*.Domain project.

### Dependencies:

* Depends on the \*.Domain.Shared because it uses constants, enums and other objects defined in that project.

### \*.Application.Contracts project

This project contains application service interfaces and Data Transfer Objects (DTO) of the application layer. It separates the interface & implementation of the application layer. In this way, the interface project can be shared to the clients as a contract package.

IBookAppService interface and BookCreationDto class are good examples to be inside the \*.Application.Contracts project.

### Dependencies:

* Depends on the \*.Domain.Shared because it may use constants, enums and other shared objects of this project in the application service interfaces and DTOs.

### \*.Application project

This project contains the [application service](https://docs.abp.io/en/abp/latest/Application-Services) **implementations** of the interfaces defined in the .Application.Contracts project.

BookAppService is the implementation of IBookAppService interface and good examples to be inside the \*.Application project.

### Dependencies:

* Depends on the \*.Application.Contracts project to be able to implement the interfaces and use the DTOs.
* Depends on the \*.Domain project to be able to use domain objects like entities, repository interfaces, etc... to perform the application logic.

### \*.EntityFrameworkCore project

This is the integration project for the EF Core. It defines the DbContext and implements repository interfaces defined in the \*.Domain project.

### Dependencies:

* Depends on the \*.Domain project to be able to reference to entities and repository interfaces.

This project is available only if you are using EF Core as the database provider. If you select another database provider, its name will be different.

### \*.DbMigrator project

This is a console application which simplifies to execute database migrations on development and production environments. When you run this application, it;

* Creates the database if necessary.
* Applies the pending database migrations.
* Seeds initial data if needed.

Notice that, this project has its own appsettings.json file. If you need to change the default database connection string, you must set it in its own appsettings.json .

Seeding initial data is important at this point. ABP has a modular data seed infrastructure. Further information see [data seeding documentation.](https://docs.abp.io/en/abp/latest/Data-Seeding)

While creating database and applying migrations seem only necessary for relational databases, this project is included even if you choose a NoSQL database provider (like MongoDB). In that case, it still seeds initial data which is necessary for the application startup.

### Dependencies:

* Depends on the \*.EntityFrameworkCore project (for EF Core) since it needs to access to the migrations.
* Depends on the \*.Application.Contracts project to be able to access permission definitions, because initial data seeder grants all permissions for the admin role by default.

### \*.HttpApi project

This project is used to define your API Controllers.

Most of the time you don't need to manually define API Controllers since ABP's [Auto API Controllers](https://docs.abp.io/en/abp/latest/API/Auto-API-Controllers) feature creates them automagically based on your application layer. However, in case, you need to write API controllers, this is the best place to do it.

### Dependencies:

* Depends on the \*.Application.Contracts project to be able to inject the application service interfaces.

### \*.HttpApi.Client project

This is project defines C# client proxies to use the HTTP APIs of the solution. You can share this library to 3rd-party clients, so they can easily consume your HTTP APIs in their .NET applications. For other type of applications, they can still use the APIs, either manually or using a tool in their own platform.

Most of the time you don't need to manually create C# client proxies, thanks to ABP's [Dynamic C# API Clients feature.](https://docs.abp.io/en/abp/latest/API/Dynamic-CSharp-API-Clients)

\*.HttpApi.Client.ConsoleTestApp project is a console application created to demonstrate the usage of the client proxies.

* Depends on the \*.Application.Contracts project to be able to share the same application service interfaces and DTOs with the remote service.

Notice that, you can delete this project & dependencies if you don't need to create C# client proxies for your APIs

### \*.Web project

This project contains the user interface (UI) of the application if you are using ASP.NET Core MVC UI. It contains Razor pages, JavaScript files, CSS files, images and so on...

This project has a appsettings.json file which contains the connection string and other configuration of the application.

### Dependencies:

* Depends on the \*.HttpApi since the UI layer needs to use APIs and application service interfaces of the solution.

If you check the source code of the \*.Web.csproj file, you will see the references to the \*.Application and the \*.EntityFrameworkCore projects. These references are actually not needed while coding your UI layer, because UI layer doesn't depend on the EF Core or the Application layer's implementation. This startup template is pre-configured for the tiered deployment, where API layer is hosted in a separate server apart from the UI layer.

However, if you don't choose the \--tiered option when you create a solution, these references will be in the \*.Web project to be able to host the Web, API and application layers in a single application endpoint. This gives you the ability to use the domain entities & repositories in your presentation layer. However, this is considered as a bad practice according to the DDD rules.

### REACT Architecture

Following are the architecture on how raaghu-react is being used as a part of UI application

![Following are the architecture on how raaghu-react is being used as a part of UI application](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghu-architecture.png)

### Raaghu - Authentication flow(login page)

![raaghu-Authentication Flow](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghuAuthenticationFlow.png)

### Raaghu - Localization

![raaghu Localization](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghuLocalization.png)

### Raaghu - Page flow

![Raaghu - Page flow](https://raw.githubusercontent.com/Wai-Technologies/raaghu-docs/development/raaghu/docs/en/images/raaghuPageFlow.png)

### What's next?

* See the Getting Started document to create a new solution and run it for this template.
