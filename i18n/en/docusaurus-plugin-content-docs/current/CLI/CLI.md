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