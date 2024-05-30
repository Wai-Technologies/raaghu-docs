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
## generate
Gera proxies de serviço para suas APIs HTTP para facilitar o consumo de seus serviços do lado do cliente. Sua aplicação host (servidor) deve estar em execução antes de executar este comando.

Uso:
```json
raaghu generate [opções]
```
#### Opções
--proxy: Usado para conexão.
  - t ou --template: Usado para criar o proxy do modelo de aplicativo.
  - m ou --microservices: Usado para criar o proxy de microsserviços.

Exemplo:

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

## create

create é utilizado para gerar diferentes tipos de páginas para gerenciar relacionamentos de dados.

- Primeiro, você precisa executar o comando **`Slice`** para criar os diferentes tipos de páginas CRUD:
```json
raaghu create --Slice
```

### Para criar diferentes tipos de páginas, use os seguintes comandos:

* **`create --CRUDPage`**: Cria uma página para gerenciar dados (como adicionar, visualizar, atualizar e excluir) que verifica relacionamentos e executa conforme necessário.
Uso:
```json
raaghu create --CRUDPage
```
* **`create --SimplePage`**: Cria uma página básica, que não tem relação ou dependência com outras páginas.
Uso:
```json
raaghu create --SimplePage
```
* **`create --OneToMany`**: Cria uma página para lidar com entidades relacionadas de um para muitos.
Uso:
```json
raaghu create --OneToMany
```
* **`create --ManyToMany`**: Cria uma página para lidar com entidades relacionadas de muitos para muitos.
Uso:
```json
raaghu create --ManyToMany
```
* **`create --HybridMany`**: Cria uma página para lidar com uma mistura de diferentes relacionamentos.
Uso:
```json
raaghu create --HybridMany
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