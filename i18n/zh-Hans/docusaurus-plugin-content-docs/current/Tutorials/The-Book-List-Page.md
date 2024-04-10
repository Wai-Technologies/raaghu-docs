---
sidebar_position: 3
---

# 书籍列表页面

### Raaghu CLI

Raaghu CLI（命令行界面）是一种由 WAi Technologies 创建的命令行工具，用于执行 Raaghu Frontend Studio 的一些常见操作。

### Raaghu CLI 的安装过程

Raaghu CLI 是一个 [dotnet 全局工具](https://www.nuget.org/packages/Waiin.Raaghu.Cli)。使用命令行窗口安装它：


````shell
dotnet tool install Waiin.Raaghu.Cli
````
````shell
dotnet tool install -g Waiin.Raaghu.Cli
````
````shell
dotnet tool install --global Waiin.Raaghu.Cli
````

要更新现有安装：

````shell
dotnet tool update Waiin.Raaghu.Cli
````
````shell
dotnet tool update -g Waiin.Raaghu.Cli
````
````shell
dotnet tool update --global Waiin.Raaghu.Cli
````

### 登录到 Raaghu CLI
安装 Raaghu CLI 后，我们需要登录才能使用 CLI 功能。使用以下命令登录：


```bash
raaghu login                                  # Allows you to enter your password which is hidden
```
### 创建新解决方案
基于 Raaghu 命令生成新解决方案。

用法：

````bash
raaghu new <solution-name> [options]
````

示例：

````bash
raaghu new Raaghu.BookStore
````

这里的 Raaghu.BookStore 是解决方案名称。
通常约定的解决方案命名为 YourCompany.YourProject。但是，您也可以使用不同的命名方式，比如 YourProject（单层命名空间）或 YourCompany.YourProduct.YourModule（三层命名空间）。
选项
--version 或 -v：指定 Raaghu 版本。如果未指定版本，则将自动使用最新版本创建解决方案。



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

### 安装 NPM 包
在项目文件夹的根目录运行以下代码：

```shell
  raaghu install-all
```

这将帮助在项目的不同位置安装依赖项，如元素、组件、mfe 和核心。

### 本地运行应用所需的环境文件（.env）更改

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
应该根据后端客户端 ID 和 Scope 在 .env 文件中进行更改。

### 生成代理
要创建代理，我们在根目录运行以下命令：

```shell
  raaghu create:proxy --url=https://raaghu-react.azurewebsites.net
```

您可以指定从 abp 套件创建的本地后端的 URL。

### 添加一个 Slice 文件
运行以下命令创建一个 Slice 文件


```shell
 raaghu create:slice Book
```
### 创建一个 BookStore 模块
运行以下命令在根文件夹上创建一个新模块，命名为 BookStore，并在其中创建一个 React 应用程序的 Book 页面

```shell
  raaghu create:page --moduleName=BookStore --pageName=book --projectName=Acme.BookStore
```

您可以将 projectName 指定为本地项目名称。
#### 注意：创建页面区分大小写。页面名称应为小写字母

## 代码片段
#### 数据表

在这里，我们使用一个具有表头和相应数据的组件 RdsCompDataDable 集成了一个数据表。

代码看起来像下面这样

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

在 RdsCompDataTable 中，我们可以添加要在 tableData 中显示的必要数据，以及您需要的操作的数组以及使用 onActionSelection 的必要函数。

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

现在我们在 Books 页面中获取数据并在数据表中显示它


```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```

### 下一部分

* 请参见本教程的[下一部分](Creating-Updating-And-Deleting-Book.md)。
