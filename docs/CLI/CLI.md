---
sidebar_position: 1
---

# Raaghu CLI

Raaghu CLI (Command Line Interface) is a command line tool to perform some common operations for Raaghu based solutions.


## Installation

Raaghu CLI is a [dotnet global tool](https://www.nuget.org/packages/Waiin.Raaghu.Cli). Install it using a command line window:


````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````

To update an existing installation:

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
* **`generate`**: Generates client side proxies to use HTTP API endpoints.
* **`create`**: Create is used to generate different types of pages for managing data relationships.
* **`sync`**: Helps us to connect frontend to ABP backend microservices source code solution.
* **`login`**: Authenticates on your computer with your [raaghu.io](https://raaghu.io/) email and password.
* **`login --info`**: Shows the current user's login information.
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
* The common convention for naming a solution is like "YourCompany.YourProject." However, you can use different naming conventions such as "YourProject" (single-level namespacing) or "YourCompany.YourProduct.YourModule" (three-level namespacing).

For more samples, go to [Raaghu CLI Create Solution Samples](CLI.md#new)

#### Options
* `--version` or `-v`: Specify the Raaghu version. If the version is not specified, it will automatically use the latest version to create the solution.

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

### generate

Generates service proxies for your HTTP APIs to make easy to consume your services from the client side. Your host (server) application must be up and running before running this command.

Usage:
```json
raaghu generate [options]
```
#### options

- --proxy : Used for connection.
  - -t or --template : Used to create the application template proxy.
  - -m or --microservices : Used to create the microservices proxy.

Example:
```json
raaghu generate --proxy -t
``` 
```json
raaghu generate --proxy --template
``` 
```json
raaghu generate --proxy -m
```
```json
raaghu generate --proxy --microservices
```

### create

       Create is used to generate different types of pages for managing data relationships. 

- First you need to run the **`Slice`** command to create the differnt types of crud pages :

```json
raaghu create --Slice
```

### To create different types of pages use the following commands:


* **`create --CRUDPage`**: Makes a page for managing data (like adding, viewing, updating, and deleting).which checks relationships and execute accordingly.

Usage:
```json
raaghu create --CRUDPage
```

* **`create --SimplePage`**: Creates a basic page, which do have any relation or dependancy on other page.

Usage:
```json
raaghu create --SimplePage
```
* **`create --OneToMany`**: Creates a page for handling one to many related entities.

Usage:
```json
raaghu create --OneToMany
```
* **`create --ManyToMany`**: Creates a page for handling many to many related entities.

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

 Helps us to connect frontend to ABP backend microservices source code solution.

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

Some features of the CLI requires to be logged in to raaghu.io platform. To login with your email write:

```json
raaghu login              #Allows you to enter your email and password(hidden)
```
A new login with an already active session overwrites the previous session.

* **`login --info`**:

Shows your login information such as **email** .
```json
raaghu login-info
```

### logout

Logs you out by removing the session token from your computer.

```json
raaghu logout
```
