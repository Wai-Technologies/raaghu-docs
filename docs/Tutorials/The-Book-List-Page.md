---
sidebar_position: 3
---

# Book List Page

### Raaghu CLI

Raaghu CLI (Command Line Interface) is a command line tool to perform some common operations for Raaghu Frontend Suite created by Wai Technologies.

### Installation Process for Raaghu CLI

Raaghu CLI is a [dotnet global tool](https://www.nuget.org/packages/Waiin.Raaghu.Cli). Install it using a command line window:

````shell
dotnet tool install Waiin.Raaghu.Cli
````
````shell
dotnet tool install -g Waiin.Raaghu.Cli
````
````shell
dotnet tool install --global Waiin.Raaghu.Cli
````

To update an existing installation:
````shell
dotnet tool update Waiin.Raaghu.Cli
````
````shell
dotnet tool update -g Waiin.Raaghu.Cli
````
````shell
dotnet tool update --global Waiin.Raaghu.Cli
````
### Login to Raaghu CLI

After installing Raaghu CLI, we need to login, to use CLI Feature. To Login use command as follows:

```bash
raaghu login                                  # Allows you to enter your password which is hidden
```

### Create New Solution

Generates a new solution based on the Raaghu Commands.

Usage:

````bash
raaghu new <solution-name> [options]
````

Example:

````bash
raaghu new Raaghu.BookStore
````

* `Raaghu.BookStore` is the solution name here.
* Common convention is to name a solution is like *YourCompany.YourProject*. However, you can use different naming like *YourProject* (single level namespacing) or *YourCompany.YourProduct.YourModule* (three levels namespacing).


 Options
* `--version` or `-v`: Specifie the Raaghu version. If the version is not specified then it will automatically use the latest version accordingly to create the solution.

````bash
raaghu new <solution-name> --version <version>
````
````bash
raaghu new <solution-name> -v <version>
````

Example:

````bash
raaghu new Raaghu.BookStore  --version 7.4.4
````

````bash
raaghu new Raaghu.BookStore  -v 7.4.4
````


### Install NPM packages

Run below code at root level of your project folder

```shell
  raaghu install-all
```
This will help install dependency on different locations inside the project like elements, components, mfe and core

### Enviorment File (.env) Changes to run application locally

```shell
NODE_ENV=production
REACT_APP_URL=http://localhost:8080
REACT_APP_API_URL= ##Backend Url Here
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID= ##Backend Client Id Here
REACT_APP_SCOPE=address openid email phone profile roles offline_access ##Backend Client Id without _App Here
REACT_APP_REPLACE_URL=true
REACT_APP_Version=8.0

```
There sholude be changes made on .env file with respeact to backend client id and Scope.

### Generate Proxy

to create proxies, we run following command at root level

```shell
  raaghu create:proxy --url=https://raaghu-react.azurewebsites.net
```
You can mention the url of the locally backend created from abp suite.

### Adding a Slice file

Run the following command to create a slice file 

```shell
 raaghu create:slice Book
```

### Create a BookStore Module

Run following command line to create a new Module, named BookStore on root folder and a Book page within it of React application

```shell
  raaghu create:page --moduleName=BookStore --pageName=book --projectName=Acme.BookStore
```
You can mention projectName as your local project name.
**Note:Creating a page is case sensitive. name of page should be in small letters**

### Code Snippets

**Data Table**

Here we integrate a Data Table using a component RdsCompDataDable component having table headers and data corresponding to it.

code looks like as shown below
```javascript
   <RdsCompDatatable
     classes="table__userTable"
     tableHeaders={tableHeaders}
     pagination={true}
     tableData={Data} // data
     actions={actions} // add action={[ add array of actions you require]} here to have action dropdown
     onActionSelection={onActionSelection}
     // add onActionSelction here for what function you want to call
     recordsPerPage={10}
     recordsPerPageSelectListOption={true}
    ></RdsCompDatatable>`
```
in RdsCompDataTable, we can add the neccessary data we want to show in tableData and following array of actions that you require as well as neccessary function using onActionSelection

### Column Structure

Now we integrate table headers in data table 

```bash 
const tableHeaders = [
  { 
    "displayName": "Name",
    "key": "name",
    "datatype": "text", 
    "sortable": true 
  }, 
  { 
    "displayName": "Price", 
    "key": "price", 
    "datatype": "text", 
    "sortable": true 
  }, 
  { 
    "displayName": "Publish Date", 
    "key": "publishDate", 
    "datatype": "text", 
    "sortable": true 
  }, 
  { 
    "displayName": "Type", 
    "key": "type", 
    "datatype": "text", 
    "sortable": true 
  }
]
```

We now perform fetching data in Books Page and displaying it inside data table

```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```

### The Next Part

* See the [next part](Creating-Updating-And-Deleting-Book.md) of this tutorial.
