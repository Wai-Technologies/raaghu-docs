---
sidebar_position: 2
---

# Creating a New Solution

There are two ways of creating a new project: ABP Suite and ABP CLI

### Using ABP Suite to create a new project.

ABP Suite is recommended way to create new solutions for the ABP Commercial

Run the ABP Suite with the following command:

```shell
   abp suite
````

* This command starts the ABP Suite and opens in your default browser:

  

Click the **Create a new solution** button and fill the modal form:



Select the UI framework as raaghu-react, Database Provider, and other options based on your preferences, then click on the OK button

### Using the ABP CLI to create a new project

Use the new command of the ABP CLI to create a new project:

```shell
   abp new Acme.Bookstore -t app-pro
```

* \-t argument specifies the [startup template](https://docs.abp.io/en/commercial/7.2/startup-templates/application/index) name. app-pro is the startup template that contains the essential [ABP Commercial Modules](https://commercial.abp.io/modules) pre-installed and configured for you.
* We can also use a different level of namespaces; e.g. Bookstore, Acme.Bookstore or Acme.Retail.BookStore.

Theme
-----

### Raaghu-themes

A new, modern and stylish raaghu theme with different color options, it’s the newest theme. You can choose one out of 3 options Dark, Light and Semi Dark.

### ABP CLI commands & options

[ABP CLI document](https://docs.abp.io/en/abp/latest/CLI) covers all of the available commands and options for the ABP CLI. The main difference for the ABP Commercial is the template names. See the[ABP Commercial Startup Templates](https://docs.abp.io/en/commercial/7.2/startup-templates/index) document for other commercial templates.

### The solution structure

The solution has a layered structure (based on the [Domain Driven Design](https://docs.abp.io/en/abp/Domain-Driven-Design)) and contains unit & integration test projects. See the [solution structure document](https://docs.abp.io/en/commercial/7.2/startup-templates/application/solution-structure) to understand the solution structure in details.

### Next Step

* [Running the solution](Getting-Started-Running-Solution.md)
