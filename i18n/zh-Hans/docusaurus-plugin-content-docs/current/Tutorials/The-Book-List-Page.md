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
为您的 HTTP API 生成服务代理，以便轻松从客户端使用您的服务。在运行此命令之前，您的主机（服务器）应用程序必须正在运行。

用法:
```json
raaghu generate [选项]
```

#### 选项
--proxy：用于连接。
  - t 或 --template：用于创建应用程序模板代理。
  - m 或 --microservices：用于创建微服务代理。

示例：

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

## 创建

 用于生成管理数据关系的不同类型页面。 

- 首先，您需要运行 **`Slice`** 命令来创建不同类型的 CRUD 页面：
```json
raaghu create --Slice
```

### 要创建不同类型的页面，请使用以下命令：

* **`create --CRUDPage`**: 创建一个用于管理数据（例如添加、查看、更新和删除）的页面。检查关系并相应执行。
用法:
```json
raaghu create --CRUDPage
```
* **`create --SimplePage`**: 创建一个基本页面，不依赖其他页面或关系。
用法:

```json
raaghu create --SimplePage
```
* **`create --OneToMany`**: 创建用于处理一对多相关实体的页面。
用法:
```json
raaghu create --OneToMany
```
* **`create --ManyToMany`**: 创建用于处理多对多相关实体的页面。
用法:

```json
raaghu create --ManyToMany
```
* **`create --HybridMany`**: 创建用于处理不同关系混合的页面。
用法:
```json
raaghu create --HybridMany
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