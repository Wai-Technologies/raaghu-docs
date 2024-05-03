---
sidebar_position: 1
---

# Setup Your Development Environment

First things first! Let's setup your development environment before creating the project.

### Pre-Requirements

The following tools should be installed on your development machine:

An IDE (e.g. [Visual Studio](https://visualstudio.microsoft.com/vs/)) that supports [.NET 8.0+](https://dotnet.microsoft.com/en-us/download/dotnet) development.

[Node v16 or v18](https://nodejs.org/en) 

 [Yarn v1.20+ (not v2)^1](https://classic.yarnpkg.com/en/docs/install#windows-stable) or **npm v6+** (already installed with Node)

[ABP CLI](https://docs.abp.io/en/abp/latest/CLI) (command line interface that is used to automate some common tasks for ABP based solutions)

## Install the Raaghu CLI

Raaghu CLI is a command line interface that is used to automate some common tasks for Raaghu based solutions.

 You need to install the CLI using the following command:

````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````
If you've already installed, you can update it using the following command:

````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````