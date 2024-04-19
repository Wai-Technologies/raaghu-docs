---
sidebar_position: 1
---

# Raaghu CLI

Raaghu CLI (Command Line Interface) is a command line tool to perform some common operations for Raaghu based solutions.


## Installation

Raaghu CLI is a [dotnet global tool](https://www.nuget.org/packages/Waiin.Raaghu.Cli). Install it using a command line window:

````json
dotnet tool install Waiin.Raaghu.Cli
````
````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````

To update an existing installation:
````json
dotnet tool update Waiin.Raaghu.Cli
````
````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````
## Commands

Here, is the list of all available commands before explaining their details:

* **`help`**: Shows help on the usage of the Raaghu CLI.
* **`new`**: Generates a new solution based on the Raaghu.
* **`add-module`**: Adds a multi-package application module to a solution.
* **`generate-proxy`**: Generates client side proxies to use HTTP API endpoints.
* **`create`**: create is used to generate different types of pages for managing data relationships.
* **`sync`**: helps us to connect frontend to ABP backend microservices source code solution.
* **`login`**: Authenticates on your computer with your [raaghu.io](https://raaghu.io/) username and password.
* **`login-info`**: Shows the current user's login information.
* **`logout`**: Logouts from your computer if you've authenticated before.

### help

Shows basic usages of the Raaghu CLI.

Usage:

````json
raaghu help 
````

Examples:

````json
raaghu help        # Shows a general help.
raaghu help new    # Shows help about the "new" command.
````

### new

Generates a new solution based on the Raaghu.

Usage:

````json
raaghu new <solution-name> [options]
````

Example:

````json
raaghu new Raaghu.BookStore
````

* `Raaghu.BookStore` is the solution name here.
* Common convention is to name a solution is like *YourCompany.YourProject*. However, you can use different naming like *YourProject* (single level namespacing) or *YourCompany.YourProduct.YourModule* (three levels namespacing).

For more samples, go to [Raaghu CLI Create Solution Samples](CLI-New-Command-Samples.md)

#### Options
* `--version` or `-v`: Specifie the Raaghu version. If the version is not specified then it will automatically use the latest version accordingly to create the solution.

````json
raaghu new <solution-name> --version <version>
````
````json
raaghu new <solution-name> -v <version>
````

Example:

````json
raaghu new Raaghu.BookStore  --version 7.4.4
````

````json
raaghu new Raaghu.BookStore  -v 7.4.4
````


### add-module

Adds a multi-package application module to a solution by finding all packages of the module, finding related projects in the solution and adding each package to the corresponding project in the solution.

> A business module generally consists of several packages (because of layering, different database provider options or other reasons). Using add-module command dramatically simplifies adding a module to a solution. However, each module may require some additional configurations which is generally indicated in the documentation of the related module.

Usage:
```json
raaghu add-module <module-name> 
```
Examples:
```json
raaghu add-module Raaghu.Blogging
```
- This example adds the Raaghu.Blogging module to the solution.

### generate-proxy

Generates service proxies for your HTTP APIs to make easy to consume your services from the client side. Your host (server) application must be up and running before running this command.

Usage:
```json
raaghu generate-proxy 
```

### create

       create is used to generate different types of pages for managing data relationships. 

* **`create --CRUDPage`**: Makes a page for managing data (like adding, viewing, updating, and deleting).which checks relationships and execute accordingly.

Usage:
```json
raaghu create --CRUDPage
```

* **`create --SimplePage`**: Makes a basic page, which do have any relation or dependancy on other page.

Usage:
```json
raaghu create --SimplePage
```
* **`create --OneToMany`**: Creates a page for handling one to many related entities.

Usage:
```json
raaghu create --OneToMany
```
* **`create --ManyToMany`**: Makes a page for handling many to many related entities.

Usage:
```json
raaghu create --ManyToMany
```
* **`create --HybridMany`**: Creates a page for handling a mix of different relationships.

Usage:
```json
raaghu create --HybridMany
```
### sync 

 helps us to connect frontend to ABP backend microservices source code solution.

Usage:
```json
raaghu sync [options]
```

#### options

- --abp : Connect frontend to ABP Commercial solution.
  - --microservices or -m : ABP backend microservices source code solution.

Example:
```json
raaghu sync --abp --microservices
``` 
```json
raaghu sync --abp -m
```

### login

Some features of the CLI requires to be logged in to raaghu.io platform. To login with your username write:

```json
raaghu login <username>                                  # Allows you to enter your password hidden
```

A new login with an already active session overwrites the previous session.

### login-info

Shows your login information such as **Username** .
```json
raaghu login-info
```

### logout

Logs you out by removing the session token from your computer.

```json
raaghu logout
```


## See Also

* [Examples for the new command](CLI-New-Command-Samples.md)