---
sidebar_position: 3
---
# Página de Lista de Livros
## Raaghu CLI

Raaghu CLI (Command Line Interface) é uma ferramenta de linha de comando para realizar algumas operações comuns para o Raaghu Frontend Studio criado pela WAi Technologies.

## Processo de Instalação para Raaghu CLI
Raaghu CLI é uma ferramenta global do dotnet. Instale-a usando uma janela de linha de comando:


````shell
dotnet tool install Waiin.Raaghu.Cli
````
````shell
dotnet tool install -g Waiin.Raaghu.Cli
````
````shell
dotnet tool install --global Waiin.Raaghu.Cli
````

Para atualizar uma instalação existente:

````shell
dotnet tool update Waiin.Raaghu.Cli
````
````shell
dotnet tool update -g Waiin.Raaghu.Cli
````
````shell
dotnet tool update --global Waiin.Raaghu.Cli
````
### Login no Raaghu CLI

Após instalar o Raaghu CLI, precisamos fazer o login para usar o recurso da CLI. Para fazer login, use o seguinte comando:


```bash
raaghu login                                  # Allows you to enter your password which is hidden
```
### Criar Nova Solução
Gera uma nova solução com base nos Comandos do Raaghu.

Uso:

````bash
raaghu new <solution-name> [options]
````

Example:

````bash
raaghu new Raaghu.BookStore
````
* `Raaghu.BookStore` é o nome da solução aqui.
* A convenção comum é nomear uma solução como SuaEmpresa.SeuProjeto. No entanto, você pode usar um nome diferente como SeuProjeto (com espaçamento de um nível) ou SuaEmpresa.SeuProduto.SeuMódulo (com espaçamento de três níveis).

### Opções
--version ou -v: Especifica a versão do Raaghu. Se a versão não for especificada, será usada automaticamente a versão mais recente para criar a solução.

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
### Instalar Pacotes NPM

Execute o código abaixo no nível raiz da pasta do seu projeto:

```shell
  raaghu install-all
```
Isso ajudará a instalar as dependências em diferentes locais dentro do projeto, como elementos, componentes, mfe e core.

#### Alterações no Arquivo de Ambiente (.env) para executar o aplicativo localmente

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

Devem ser feitas alterações no arquivo .env em relação ao ID do cliente do backend e ao Scope.

### Gerar Proxy
para criar proxies, executamos o seguinte comando no nível raiz

```shell
  raaghu create:proxy --url=https://raaghu-react.azurewebsites.net
```
Você pode mencionar a URL do backend local criado a partir da suíte abp.

### Adicionando um arquivo Slice
Execute o seguinte comando para criar um arquivo Slice


```shell
 raaghu create:slice Book
```
### Criar um Módulo BookStore

Execute a seguinte linha de comando para criar um novo Módulo, chamado BookStore no diretório raiz e uma página Book dentro dele do aplicativo React

```shell
  raaghu create:page --moduleName=BookStore --pageName=book --projectName=Acme.BookStore
```

Você pode mencionar o nome do projeto como o nome do seu projeto local.
Observação: A criação de uma página diferencia maiúsculas de minúsculas. O nome da página deve estar em letras minúsculas

## Trechos de Código
#### Tabela de Dados

Aqui integramos uma Tabela de Dados usando um componente RdsCompDataDable com cabeçalhos de tabela e dados correspondentes a ele.

O código se parece com o mostrado abaixo

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

no RdsCompDataTable, podemos adicionar os dados necessários que queremos mostrar em tableData e o seguinte array de ações que você requer, bem como a função necessária usando onActionSelection

### Estrutura de Coluna
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
Agora realizamos a busca de dados na página de Livros e os exibimos dentro da tabela de dados


```shell
    useEffect(() => {
        dispatch(getBooksRequest({}) as any);
    }, []);
```


### a próxima parte

- [próxima parte](Creating-Updating-And-Deleting-Book.md "")deste tutorial.

