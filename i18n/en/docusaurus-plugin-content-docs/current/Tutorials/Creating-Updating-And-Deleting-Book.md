---
sidebar_position: 4
---

# Creating, Updating and Deleting Book

Creating a new Book 
---------------------

To create a new book, we will develop a new component called RdsCompBook. If you need to create additional components, please run the code below in the root folder.

```shell
    raaghu create:component --name=rds-comp-(name of the component)
```
Here, we bring a button of a New Book using RdsButton and on clicking, we get different parameters of a form inside a RdsOffcanvas
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
Now add this function inside book component

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

### Updating a new Book 

Define the actions for Edit in the form of an array as shown below

```javascript
    const actions = [{ id: "edit", displayName: t("Edit"), offId: "BookEdit"}]
```

Update table using actions used in data table. Updated data table will look like

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


Add the Edit function in Book Page

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

Add property of RdsOffcanvas element below RdsCompDatatable

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

### Deleting a new Book 

Add Edit function in Book Page

```javascript
const actions = [{ id: "Delete", displayName: t("Delete"), modalId: "bookDel" }]
                               ]
```

We integrate a component called RdsCompAlertPopup to display alert during deleting a book list

```javascript
    <RdsCompAlertPopup
            alertID={"bookDel"}
            onSuccess={onDeleteHandler}
            ></RdsCompAlertPopup>
```

Add delete function in Book Page

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
