---
sidebar_position: 4
---

# 创建、更新和删除书籍

# 第3部分：创建、更新和删除图书

创建新书 -
---------------------

为了创建新书，我们将创建一个名为RdsCompBookForm的新组件。在根目录中运行以下代码

```shell
    raaghu create:component --name=rds-comp-book-form
```

转到以下路径并执行HTML操作

   \raaghu-components\src\rds-comp-book-form

在切片文件中添加以下代码，并在额外的reducer中添加构建器案例，与fetchbooks类似

```javascript
  export const postNewBook = createAsyncThunk(
            "book/postNewBook",
            (model:any) => { return proxy.bookPOST(model).then((result:any)=>{
                       return result
             } ) } );
```

在这里，我们使用RdsButton带来一个新书按钮，点击时获取表单的不同参数，这些参数在RdsOffcanvas中

```javascript
    <RdsOffcanvas
    offcanvasbutton=`<div>`
    <RdsButton
        type={"button"}
        label={"New Book"}
        iconColorVariant="light"
        size="small"
        colorVariant="primary"
        icon="plus"
        iconFill={false}
        iconStroke={true}
        iconHeight="12px"
        iconWidth="12px"
    >`</RdsButton>`
    `</div>`
    }
        placement={"end"}
        backDrop={true}
        scrolling={false}
        preventEscapeKey={false}
        offId={"newBook"}
        canvasTitle={"New Book"}
        offcanvaswidth={550}
        >
    <RdsCompBook
        NameProp = {""}
        TypeProp = {""}
        PublishDateProp = {""}
        PriceProp = {""}
        onSaveHandler={onNewCreate}
        offCanvasType={"create"}
        TypeEnumItems={TypeEnum}
        >`</RdsCompBook>`
    `</RdsOffcanvas>`
```

现在在图书组件中添加此功能

```javascript
   const onNewCreate = (datafromcomponent: any) => {
        let TypeIndex = datafromcomponent.data.Type
        const data = {
        name: datafromcomponent.data.Name,
        type:TypeIndex,
        publishDate: datafromcomponent.data.PublishDate.toISOString().substring(0, 19),
        price: datafromcomponent.data.Price
    }
    dispatch(postBooksRequest({requestBody:data}) as any).then((res: any) => {
    if (res.type.includes("rejected")) {
    setAlert={
                ...Alert,
                show: true,
                message: "Something went wrong",
                color: "danger",
            };
        }
        else {
                setAlert={
                    ...Alert,
                    show: true,
                    message: "Added Successfully",
                    color: "success",
                };
            }
                dispatch(getBooksRequest({}) as any);
                }).catch((error: any) => {
                setAlert={
                            ...Alert,
                            show: true,
                            message: "Something went wrong",
                            color: "danger",
                        };
            console.error(error);
        });
    };
```

### 更新一本书 -

在表单中为编辑定义操作，如下所示

```javascript
    const actions = [{ id: "edit", displayName: t("Edit"), offId: "BookEdit"}]
```

使用在数据表中使用的操作来更新表格。更新后的数据表如下所示

    `<RdsCompDatatable classes="table__userTable" tableHeaders={tableHeaders} pagination={true}
        tableData={Data} actions={actions}onActionSelection={onActionSelection} recordsPerPage={5}  recordsPerPageSelectListOption={true}><`/RdsCompDatatable >

在切片文件中添加以下代码，并在额外的reducer中添加构建器案例，与fetchbook类似

```javascript
    export const putBooksRequest = createAsyncThunk(
    'book/putBooksRequest',
    async   ({
                id,
                requestBody,
            }:{
                id: string,
                requestBody?: DemoSuite2_Books_BookUpdateDto,
            }) => {
                const response = await BookService.putBooks({
                id,
                requestBody,
            });
                return response;
            }
    );
```

在BookSlice的额外reducer中添加这些构建器案例

```javascript
    builder.addCase(putBooksRequest.pending, (state) => {
        state.loading = true;
    });
        builder.addCase(putBooksRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.error = "";
    });
        builder.addCase(putBooksRequest.rejected,(state, action)=> {
        state.loading = false;
        state.error = action.error.message || "出了点问题";
    });
```

在Book Page中添加编辑功能

```javascript
  const onEdithandler = (datafromcomponent: any) => {
    const id = dataEmit.id;
    let TypeIndex = datafromcomponent.data.Type
    function dateChange (inputdate:any)
    {
        const date = new Date(inputdate);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day =
