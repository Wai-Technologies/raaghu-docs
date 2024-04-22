---
sidebar_position: 4
---
# Criando, Atualizando e Excluindo Livros

Criando um Novo Livro

Para criar um novo livro, vamos desenvolver um novo componente chamado RdsCompBook. Se precisar criar componentes adicionais, execute o código abaixo na pasta raiz.


```shell
    raaghu create:component --name=rds-comp-(name of the component)
```

Aqui, trazemos um botão de Novo Livro usando RdsButton e ao clicar, obtemos diferentes parâmetros de um formulário dentro de um RdsOffcanvas.

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

Agora adicione esta função dentro do componente de livro.


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

## Atualizando um Livro
Defina as ações para Editar em forma de array como mostrado abaixo:

```javascript
    const actions = [{ id: "edit", displayName: t("Edit"), offId: "BookEdit"}]
```
Atualize a tabela usando as ações utilizadas na tabela de dados. A tabela de dados atualizada ficará assim:


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

Adicione a função de Editar na página de Livro.


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
Adicione a propriedade do elemento RdsOffcanvas abaixo de RdsCompDatatable.

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

## Excluindo um Livro
Adicione a função de Excluir na página de Livro.

```javascript
const actions = [{ id: "Delete", displayName: t("Delete"), modalId: "bookDel" }]
                               ]
```

Integramos um componente chamado RdsCompAlertPopup para exibir um alerta durante a exclusão de um livro.

```javascript
    <RdsCompAlertPopup
            alertID={"bookDel"}
            onSuccess={onDeleteHandler}
            ></RdsCompAlertPopup>
```
Adicione a função de Excluir na página de Livro.


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

