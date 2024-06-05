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
