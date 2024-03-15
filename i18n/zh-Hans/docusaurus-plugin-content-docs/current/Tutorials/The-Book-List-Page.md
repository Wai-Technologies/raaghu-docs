---
sidebar_position: 3
---

# 图书列表页面
# 第2部分：图书列表页面

Github CLI
----------

选择一个本地目录，运行以下命令以下载并输出代码，使用一个本地目录名称，其中项目已经转换为zip

```json
 curl -L https://github.com/Wai-Technologies/raaghu-react/archive/development-abp.zip --output (文件夹名称).zip
```

现在，使用以下命令解压文件

```json
    tar -xf (文件夹名称).zip
```

### 安装NPM包

在项目根目录下运行以下代码

```shell
  raaghu install-all
```

### 安装Abp-React-Core

在项目根目录下运行以下代码

```shell
  raaghu create:core
```

### 生成代理

为了创建代理，我们在根目录下运行以下命令

```shell
  raaghu create:proxy --url=https://raaghu-react.azurewebsites.net
```

### 创建一个图书商店模块

运行以下命令在根目录下创建一个新的模块，命名为BookStore，并在其中创建一个React应用的Book页面

```shell
  raaghu create:page --moduleName=BookStore--pageName=book --projectName=Acme.BookStore
```

**注意：创建页面区分大小写。页面名称应该使用小写字母**

### 代码片段

**数据表格**

在这里，我们使用一个包含表头和相应数据的RdsCompDataDable组件来集成数据表格。

代码如下所示：

```javascript
    <RdsCompDatatable
        classes="table__userTable"
        tableHeaders={tableHeaders}
        pagination={true}
        tableData={Data}
        onActionSelection={onActionSelection}
        recordsPerPage={5}
        recordsPerPageSelectListOption={true}
    >`
    </RdsCompDatatable>`
```

在RdsCompDataTable中，我们可以添加要在tableData中显示的必要数据以及您所需的操作数组以及使用onActionSelection的必要函数

### 列结构

现在我们将表头集成到数据表中

```shell
const tableHeaders = [
    {
        "displayName": "名称",
        "name": "Name",
        "key": "name",
        "datatype": "text",
        "sortable": true,
        "element": "RdsInput"
    },
    {
        "displayName": "类型",
        "name": "Type",
        "key": "type",
        "datatype": "text",
        "sortable": true,
        "element": "RdsSelectList"
    },
    {
        "displayName": "发布日期",
        "name": "PublishDate",
        "key": "publishDate",
        "datatype": "text",
        "sortable": true,
        "element": "RdsDatePicker"
    },
    {
        "displayName": "价格",
        "name": "Price",
        "key": "price",
        "datatype": "text",
        "sortable": true,
        "element": "RdsInput"
    }
    ]添加切片文件我们现在添加一个切片文件，它定义了一个状态片段及其相应的reducer函数    export const getBooksRequest = createAsyncThunk(
    'book/getBooksRequest',
    async ({
        filterText,
        name,
        type,
        publishDateMin,
        publishDateMax,
        priceMin,
        priceMax,
        sorting,
        skipCount,
        maxResultCount,
    }:{
        filterText?: string,
        name?: string,
        type?: DemoSuite2_Books_BookType,
        publishDateMin?: string,
        publishDateMax?: string,
        priceMin?: number,
        priceMax?: number,
        sorting?: string,
        skipCount?: number,
        maxResultCount?: number,
    }) => {
        const response = await BookService.getBooks({
        filterText,
        name,
        type,
        publishDateMin,
        publishDateMax,
        priceMin,
        priceMax,
        sorting,
        skipCount,
        maxResultCount,
    });        return response;    }
    );
```

在BookSlice的额外reducer中添加这些构建器案例

```shell
    builder.addCase(getBooksRequest.pending, (state) => {
        state.loading = true;
    });
        builder.addCase(getBooksRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
        state.getBooks = action.payload
    });        builder.addCase(getBooksRequest.rejected,(state, action)=> {
        state.loading = false;
        state.error = action.error.message || "出现了一些问题";
    });
```

现在我们在Books页面中执行获取数据并在数据表中显示它

```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```

### 下一部分

* 请参见本教程的[下一部分](Creating-Updating-And-Deleting-Book.md)。
