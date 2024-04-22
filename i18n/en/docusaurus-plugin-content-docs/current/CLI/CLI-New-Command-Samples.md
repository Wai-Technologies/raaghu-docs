---
sidebar_position: 2
---

# CLI New Command Samples

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
raaghu login --info
Raaghu Cli
Executing Login Info command...
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
raaghu logout
Raaghu Cli
Executing Logout command...
Credentials removed from Credential Manager.
logged out successfully
  ```  