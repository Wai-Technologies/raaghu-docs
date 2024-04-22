---
sidebar_position: 3
---

# Book List Page

### Generate Proxy

To create proxies, we run the following command at the root level.

````json
raaghu new <solution-name> [options]
````
### Options
* `--version` or `-v`: Specify the Raaghu version. If the version is not specified, it will automatically use the latest version to create the solution.

````json
raaghu new <solution-name> --version <version>
````
````json
raaghu new <solution-name> -v <version>
````

### Adding a Slice file


To create a slice file, run the following command.

```shell
 raaghu create:slice Book
```

### Create a BookStore Module

To create a new module named BookStore in the root folder and a Book page within it for a React application, run the following command line.

```shell
  raaghu create:page --moduleName=BookStore --pageName=book --projectName=Acme.BookStore
```
Replace Acme.BookStore with the actual name of your local project. 
::::note Note
 Creating a page is case-sensitive, so ensure the page name (**book**) is in lowercase as specified.
::::
### Code Snippets

**Data Table**

Here, we integrate a data table using a component called RdsCompDataDable. This component includes table headers and corresponding data.

code looks like as shown below
```javascript
   <RdsCompDatatable
     classes="table__userTable"
     tableHeaders={tableHeaders}
     pagination={true}
     tableData={Data}  
     actions={actions} // add action={[ add array of actions you require]} here to have action dropdown
     onActionSelection={onActionSelection}
     // add onActionSelction here for what function you want to call
     recordsPerPage={10}
     recordsPerPageSelectListOption={true}
    ></RdsCompDatatable>`
```
In RdsCompDataTable, we can add the necessary data we want to show in the tableData array, along with an array of actions that you require. Additionally, we can include necessary functions using onActionSelection.

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

Next, we fetch data in the Books Page and display it within the data table.

```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```
