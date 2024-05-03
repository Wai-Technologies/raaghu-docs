---
sidebar_position: 3
---

# Página de Lista de Livros
### new solution
Para criar uma nova solução, executamos o seguinte comando.

````json
raaghu new <solution-name> [options]
````

Opções
--version ou -v: Especifique a versão do Raaghu. Se a versão não for especificada, ele usará automaticamente a versão mais recente para criar a solução.

````json
raaghu new <solution-name> --version <version>
````
````json
raaghu new <solution-name> -v <version>
````
### Generate proxy

Gera proxies de serviço para suas APIs HTTP para facilitar o consumo de seus serviços do lado do cliente. Sua aplicação host (servidor) deve estar em execução antes de executar este comando.
````json
raaghu generate-proxy 
````

### Adicionar um Arquivo de Slice
Para criar um arquivo de slice, execute o seguinte comando.


```shell
 raaghu create --Page
```

### Criar um Módulo BookStore
Para criar um novo módulo chamado BookStore na pasta raiz de uma aplicação React, execute o seguinte comando de linha de comando:

```shell
  raaghu add-module BookStore
```

## Trechos de Código
**Tabela de Dados**

Aqui, integramos uma tabela de dados usando um componente chamado RdsCompDataDable. Este componente inclui cabeçalhos de tabela e dados correspondentes.

O código se parece com o seguinte:

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

No RdsCompDataTable, podemos adicionar os dados necessários que desejamos mostrar no array tableData, juntamente com um array de ações que você requer. Além disso, podemos incluir funções necessárias usando onActionSelection.

### Estrutura de Colunas
Agora integramos cabeçalhos de tabela na tabela de dados


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
Em seguida, buscamos os dados na página de Livros e os exibimos dentro da tabela de dados.

```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```