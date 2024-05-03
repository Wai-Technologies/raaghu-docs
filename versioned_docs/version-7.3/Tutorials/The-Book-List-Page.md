---
sidebar_position: 3
---

# Book List Page

### new solution

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
### generate-proxy

Generates service proxies for your HTTP APIs to make easy to consume your services from the client side. Your host (server) application must be up and running before running this command.

````json
raaghu generate-proxy 
````

### Adding a Slice file


To create a slice file, run the following command.

```shell
 raaghu create --Page
```

### Create a BookStore Module

To create a new module named BookStore in the root folder for a React application, run the following command line.

```shell
 raaghu add-module BookStore
```

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
