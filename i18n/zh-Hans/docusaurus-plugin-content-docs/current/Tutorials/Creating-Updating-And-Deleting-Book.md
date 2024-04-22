---
sidebar_position: 4
---
# 创建、更新和删除书籍的指南如下：

创建新书籍

要创建新的书籍，我们将开发一个名为 RdsCompBook 的新组件。如果您需要创建其他组件，请在根文件夹中运行以下代码：

```shell
    raaghu create:component --name=rds-comp-(name of the component)
```

在页面中使用 RdsButton 添加一个“新书籍”按钮，并在单击按钮时，在 RdsOffcanvas 内获取表单的不同参数：

```bash
      <RdsOffcanvas
              offcanvasbutton={
                <div>
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
                  ></RdsButton>
                </div>
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
                nameProp={"NaN"}
                priceProp={5}
                publishDateProp={""}
                typeProp={""}
                onSaveHandler={onNewCreate}
                offCanvasType={"create"}
                typeEnumItems={typeEnum}
              ></RdsCompBook>
            </RdsOffcanvas>
```

现在在书籍组件中添加这个函数：


```bash
   const onNewCreate = (datafromcomponent: any) => {
    let typeIndex = datafromcomponent.data.type
    const data = {
      name: datafromcomponent.data.name,
      price: datafromcomponent.data.price,
      publishDate: datafromcomponent.data.publishDate.toISOString().substring(0, 19),
      type: typeIndex

    }
    dispatch(postBooksRequest({ requestBody: data }) as any).then((res: any) => {
      if (res.type.includes("rejected")) {
        setAlert({
          ...Alert,
          show: true,
          message: "Something went wrong",
          color: "danger",
        });
      } else {
        setAlert({
          ...Alert,
          show: true,
          message: "Added Successfully",
          color: "success",
        });
      }
      dispatch(getBooksRequest({}) as any);
    }).catch((error: any) => {
      setAlert({
        ...Alert,
        show: true,
        message: "Something went wrong",
        color: "danger",
      });
      console.error(error);
    });
  };
```

更新书籍
定义编辑操作的动作数组如下：

```javascript
    const actions = [{ id: "edit", displayName: t("Edit"), offId: "BookEdit"}]
```

使用数据表中使用的动作更新表格。更新后的数据表如下所示：
````json 
<RdsCompDatatable >
    classes="table__userTable"
    tableHeaders={tableHeaders}
    pagination={true}
    tableData={Data} 
    actions={actions} 
    onActionSelection={onActionSelection}
    add onActionSelction here for what function you want to call
    recordsPerPage={10}
    recordsPerPageSelectListOption={true}
</RdsCompDatatable>
````
在书籍页面中添加编辑功能：


```bash
  const onEdithandler = (datafromcomponent: any) => {
    const id = dataEmit.id;
    let typeIndex = datafromcomponent.data.type
    function dateChange(inputdate: any) {
      const date = new Date(inputdate);
      const year = date.getFullYear();
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const day = date.getDate().toString().padStart(2, "0");
      const hours = date.getHours().toString().padStart(2, "0");
      const minutes = date.getMinutes().toString().padStart(2, "0");
      const seconds = date.getSeconds().toString().padStart(2, "0");
      const formattedDate = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
      return formattedDate
    }
    const data = {

      concurrencyStamp: dataEmit.concurrencyStamp,
      name: datafromcomponent.data.name,
      price: datafromcomponent.data.price,
      publishDate: dateChange(datafromcomponent.data.publishDate),
      type: typeIndex

    }
    // this is for Edit
    dispatch(putBooksRequest({ id: id, requestBody: data }) as any)
      .then((res: any) => {
        setdataEmit([{}]);
        if (res.type.includes("rejected")) {
          setAlert({
            ...Alert,
            show: true,
            message: "Error while updating",
            color: "danger",
          });
        } else {
          dispatch(getBooksRequest({}) as any);
          setAlert({
            ...Alert,
            show: true,
            message: "Updated Succesfully",
            color: "success",
          });
        }
      })
      .catch((error: any) => {
        setAlert({
          ...Alert,
          show: true,
          message: "Something went wrong",
          color: "danger",
        });
        console.error(error);
      });
  };
```

在 RdsOffcanvas 元素下面添加 RdsCompBook 属性：


```bash
   <RdsOffcanvas
            placement={"end"}
            backDrop={true}
            scrolling={false}
            preventEscapeKey={false}
            offId={"BookEdit"}
            canvasTitle={"Edit"}
            offcanvaswidth={550}
          >
            <>
              <RdsCompBook
                nameProp={dataEmit.name}
                priceProp={dataEmit.price}
                publishDateProp={dataEmit.publishDate}
                typeProp={dataEmit.type}
                offCanvasType={"update"}
                typeEnumItems={typeEnum}
                onSaveHandler={onEdithandler}
              ></RdsCompBook>
            </>
          </RdsOffcanvas>
```
## 删除书籍

在书籍页面中添加删除功能：

```javascript
const actions = [{ id: "Delete", displayName: t("Delete"), modalId: "bookDel" }]
                               ]
```

添加删除函数：


```bash
  const onDeleteHandler = () => {
    dispatch(deleteBooksRequest({ id: dataEmit.id }) as any)
      .then((res: any) => {
        if (res.type.includes("rejected")) {
          setAlert({
            ...Alert,
            show: true,
            message: "Error while deleting",
            color: "danger",
          });

        } else {

          dispatch(getBooksRequest({}) as any);
          setAlert({
            ...Alert,
            show: true,
            message: "Deleted Successfully",
            color: "success",
          });
        }
      })
      .catch((error: any) => {
        setAlert({
          ...Alert,
          show: true,
          message: "Something went wrong",
          color: "danger",
        });
        console.error(error);
      });
    setdataEmit([{}]);
  };

```
