---
sidebar_position: 3
---

# Book List Page

Part 2: Book List Page
======================

### GitHub User Name and Personal Access Token (PAT) 

**GitHub** User Name can be found in your profile section or on right hand side sidebar of GitHub, example: **"john.james"**.

If you don't have a PAT, you can generate one in your GitHub account settings:

1. Go to your GitHub Settings.
2. Click on "Developer settings" in the left sidebar.
3. Click on "Personal access tokens (Classic)".
4. Generate a new token with the required permissions (at least repo for private repositories).

### GitHub CLI

Select a local Directory and run following command inside command prompt to download and output code using a local directory name where project is converted into zip

```shell
 curl -L -u (GitHub User Name):(GitHub Personal Access Token) https://github.com/(Organization)/(Repository)/archive/(Branch).zip --output (Folder Name).zip
```

now, unzip file using following command

```json
    tar -xf (folder name).zip
```

### Install NPM packages

Run below code at root level of your project folder

```shell
  raaghu install-all
```
This will help install dependency on different locations inside the project like elements, components, mfe and core

### Enviorment File (.env) Changes to run application locally

```shell
NODE_ENV=production
# REACT_APP_URL=https://abpstagereact12.raaghu.io
REACT_APP_URL=http://localhost:8080
REACT_APP_API_URL=https://abpstagereact12api.raaghu.io
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=abp_react_7_2_2_App
REACT_APP_SCOPE=address openid email phone profile roles offline_access abp_react_7_2_2
REACT_APP_REPLACE_URL=true

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
