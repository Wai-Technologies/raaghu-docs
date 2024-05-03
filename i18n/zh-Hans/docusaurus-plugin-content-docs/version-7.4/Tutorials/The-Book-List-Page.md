---
sidebar_position: 3
---
# 书籍列表页面

### 新方案
要创建新解决方案，我们运行以下命令。

````json
raaghu new <solution-name> [options]
````

选项
--version 或 -v：指定 Raaghu 版本。如果未指定版本，将自动使用最新版本创建解决方案。

````json
raaghu new <solution-name> --version <version>
````
````json
raaghu new <solution-name> -v <version>
````
## 生成代理

为您的 HTTP API 生成服务代理，以便从客户端轻松地消耗您的服务。在运行此命令之前，您的主机（服务器）应用程序必须处于运行状态。

````json
raaghu generate-proxy 
````


### 添加片段文件
要创建片段文件，请运行以下命令。

```shell
 raaghu create --Page
```

## 创建 BookStore 模块
要在根文件夹中创建一个名为 BookStore 的新模块，并在其中创建一个名为 Book 的页面用于 React 应用程序，请运行以下命令行

```shell
  raaghu add-module BookStore
```

## 代码片段
**数据表**

在这里，我们使用一个名为 RdsCompDataDable 的组件集成了一个数据表。此组件包含表头和相应的数据。

代码如下所示

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

在 RdsCompDataTable 中，我们可以在 tableData 数组中添加我们希望在表格中显示的必要数据，以及您需要的动作数组。另外，我们可以使用 onActionSelection 包含必要的函数。

### 列结构
现在我们在数据表中集成了表头



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
接下来，我们在 Books 页面中获取数据并将其显示在数据表中。

```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```