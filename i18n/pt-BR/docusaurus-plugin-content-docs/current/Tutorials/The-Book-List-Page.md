---
sidebar_position: 3
---

# Página da lista de livros
# parte 2: lista de livros página
## github cli
Selecione um diretório local e execute o seguinte comando para baixar e gerar o código usando um nome de diretório local onde o projeto é convertido em zip
```json
 curl -L https://github.com/Wai-Technologies/raaghu-react/archive/development-abp.zip --output (folder name).zip
```
agora, até o arquivo usando o seguinte comando
```json
 tar -xf (folder name).zip
```
### instalar pacotes num
Execute o código abaixo no nível raiz da pasta do seu projeto
```bash
 raaghu install-all
```
### instalar amp-react-core
Execute o código abaixo no nível raiz da pasta do seu projeto
```bash
  raaghu create:core
```
### geram proxy
para criar proxies, executamos o seguinte comando no nível raiz
```bash
      raaghu create:proxy --url=https://raaghu-react.azurewebsites.net
```
### Crie um módulo de livraria
Execute a seguinte linha de comando para criar um novo módulo, chamado BookStore na pasta raiz e uma página de livro dentro dele do aplicativo React
```bash
    raaghu create:page --moduleName=BookStore--pageName=book --projectName=Acme.BookStore
```
**Nota: A criação de uma página diferencia maiúsculas de minúsculas. o nome da página deve estar em letras minúsculas**
### snippets de código
**Tabela de dados**

Aqui nós integramos uma Tabela de Dados usando um componente RdsCompDataComponenteDable tendo cabeçalhos de mesa e dados relacionados a ele.

código parece como ⁇  abaixo
```json
        <rdscompdatatable classes="table__userTable" tableheaders="{tableHeaders}" pagination="{true}" tabledata="{Data}" onactionselection="{onActionSelection}" recordsperpage="{5}" recordsperpageselectlistoption="{true}">`
        </rdscompdatatable>`
```
em RdsCompDataTable, podemos adicionar os dados necessários que queremos mostrar em tableData e seguir o conjunto de ações que você precisa, bem como a função necessária usando onActionSelection

### Estrutura da Coluna
Agora integramos cabeçalhos de tabela na tabela de dados
```json
    const tableHeaders = [
        {
            "displayName": "NAME",
            "name": "Name",
            "key": "name",
            "datatype": "text",
            "sortable": true,
            "element": "RdsInput"
        },
        {
            "displayName": "TYPE",
            "name": "Type",
            "key": "type",
            "datatype": "text",
            "sortable": true,
            "element": "RdsSelectList"
        },
        {
            "displayName": "PUBLISHDATE",
            "name": "PublishDate",
            "key": "publishDate",
            "datatype": "text",
            "sortable": true,
            "element": "RdsDatePicker"
        },
        {
            "displayName": "PRICE",
            "name": "Price",
            "key": "price",
            "datatype": "text",
            "sortable": true,
            "element": "RdsInput"
        }
        ]Adding a Slice FileWe now add a slice file that defines a piece of state and its corresponding reducer functions    export const getBooksRequest = createAsyncThunk(
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
        }) =&gt; {
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

Adicionar estes casos construtor dentro de BookSlice extra ⁇

        builder.addCase(getBooksRequest.pending, (state) =&gt; {
            state.loading = true;
        });
            builder.addCase(getBooksRequest.fulfilled, (state, action) =&gt; {
            state.loading = false;
            state.error = "";
            state.getBooks = action.payload
        });        builder.addCase(getBooksRequest.rejected,(state, action)=&gt; {
            state.loading = false;
            state.error = action.error.message || "Something went wrong";
        });
```

Agora realizamos dados de gravura na página de livros e exibimo-lo dentro da ⁇  de dados
```json
        useEffect(() =&gt; {
            dispatch(getBooksRequest({}) as any);
        }, []);
```
### a próxima parte

- [próxima parte](Creating-Updating-And-Deleting-Book.md "")deste tutorial.

