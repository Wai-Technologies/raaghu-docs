---
sidebar_position: 2
---

# CLI Command Samples

# Raaghu CLI - Sample Commands 

The `raaghu` command creates an raaghu solution or other artifacts based on an raaghu template. [Raaghu CLI](CLI.md) has several parameters to create a new raaghu solution. In this document we will show you some sample commands to create a new solution. All the commands starts with `raaghu`.

* This project consists of the following Commands: `help`, `new`, `login`, `login --info`, `logout`.

## help

* Displays all the available commands.

Command :

  ```json
  raaghu help
  ```
  View:
```json
raaghu help
Raaghu Cli

Available commands:
   > raaghu help                    Show command line help. Write `raaghu help <command>` for particular command
   > raaghu new [solution-name]     Execute the New Command to Create New Raaghu Solution
   > raaghu login                   Execute the Login Command
   > raaghu login -info             Execute the Login Info Command
   > raaghu logout                  Execute the Logout Command

  ```

  ## new

* Create a new solution.

Command :

  ```json
  raaghu help new 
  ```
  View:
```json
raaghu help new
Raaghu Cli

Usage:
   raaghu new <project-name> [options]

Options:
   -v|--version <version-number>  (default: latest-version)

Example(s):
   raaghu new my-project
   raaghu new my-project --version 1.0.0

  ```
  
## Create a solution from a specific version

When you create a solution, it always creates with the latest version. To create a project from an older version, you can pass the `--version` or `-v`  parameter.

* Create a solution from v7.4.4, with Angular UI and Entity Framework Core.

  ```json
  raaghu new Raaghu.BookStore --version 7.4.4
  ```
   ```json
  raaghu new Raaghu.BookStore -v 7.4.4
  ```

To get the raaghu version list, checkout following link: https://www.nuget.org/packages/Waiin.Raaghu.Cli


  ## login

* Used for login to account.

Command :

  ```json
  raaghu login 
  ```
  View:
```json
raaghu login
Raaghu Cli
Enter Email: emailId
Enter Password: *******
[##################################################] 100%
License verification successful. Tool functionality can proceed.
  ```
  ## login --info

* Used to view the login account.

Command :

  ```json
  raaghu login --info
  ```
  View:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Login Info command...
[##################################################] 100%
emailId is active.
  ```  
   ## logout

* Used to logout from the account.

Command :

  ```json
  raaghu logout
  ```
  View:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Logout command...
[##################################################] 100%
emailId Logged out successfully
  ```  

  ## generate
Generates service proxies for your HTTP APIs to make easy to consume your services from the client side. Your host (server) application must be up and running before running this command.

Command for Proxy :

```json
raaghu generate --proxy -t
``` 
```json
raaghu generate --proxy --template
``` 
View of Generate Proxy:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter URL: https://localhost:44397
Downloading swagger json...
Generating proxy...

Proxy Successfully Created.
```

## create
Create is used to generate different types of pages for managing data relationships. 

Command:

```json
raaghu create --Slice
```

View:

```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Service Name: Hospital
Slice Added Successfully
```

### To create different types of pages use the following command:

#### Example:

Makes a page for managing data (like adding, viewing, updating, and deleting).which checks relationships and execute accordingly.

Command:
```json
raaghu create --CRUDPage
```

View:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Backend Project Path: E:\Backened\source-code-backend\aspnet-core
Enter Entity Name: Hospital

Creating component...
Need to install the following packages:
generate-react-cli@8.4.6
ok to proceed? (y)
rds-comp-hospital.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.tsx
rds-comp-hospital.styled.ts was successfully created at src/rds-comp-hospital/rds-comp-hospital.styled.ts
rds-comp-hospital.test.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.test.tsx
rds-comp-hospital.stories.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.stories.tsx
index.ts is successfully created at src/rds-comp-hospital/index.ts
Component page is successfully created!!
PrivateRoute_Auth.tsx
Page "Hospitals" created successfully.
Done!!
```

## add

Add helps us for creation of new pages, components, and elements without entity data.

* **`Create new Component`**:

Command:

````json
raaghu add --component
````
````json
raaghu add -c
````

View:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --component
Checking login credentials
emailId user is logged in.
Enter component name:
navbar
Creating component...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar component
````
- we can also use **raaghu add -c** to create new component.

* **`Create new Element`**:

Command:

````json
raaghu add --element
````
````json
raaghu add -e
````

View:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --element
Checking login credentials
emailId user is logged in.
Enter element name:
navbar
Creating element...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar element
````
- we can also use **raaghu add -e** to create new element.
* **`Create new Page`**:

Command:

````json
raaghu add --Page
````
````json
raaghu add -p
````

View:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --page
Checking login credentials
emailId user is logged in.
Enter page name:
navbar
undefined page is successfully created!!
PrivateRoute_Auth.tsx
Successfully created the navbar page
````
- we can also use **raaghu add -p** to create new page.