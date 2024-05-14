---
sidebar_position: 1
---

# Raaghu CLI

## Raaghu CLI
Raaghu CLI (Interface de Linha de Comando) é uma ferramenta de linha de comando para realizar algumas operações comuns para soluções baseadas em Raaghu.

## Instalação
Raaghu CLI é uma ferramenta global dotnet. Instale-a usando uma janela de linha de comando:


````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````

Para atualizar uma instalação existente:

````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````


## Comandos
Aqui está a lista de todos os comandos disponíveis antes de explicar seus detalhes:

* **`help`**: Mostra ajuda sobre o uso do Raaghu CLI.
* **`new`**: Gera uma nova solução baseada nos modelos de inicialização do Raaghu.
* **`generate`**: Gera proxies do lado do cliente para usar endpoints da API HTTP.
* **`create`**: create é utilizado para gerar diferentes tipos de páginas para gerenciar relacionamentos de dados.
* **`sync`**: Ajuda-nos a conectar o frontend à solução de código-fonte dos microsserviços do backend ABP.
* **`login`**: Autentica no seu computador com seu nome de usuário e senha do raaghu.io.
* **`login --info`**: Mostra as informações de login do usuário atual.
* **`logout`**: Faz logout do seu computador se você tiver autenticado anteriormente.

## help
Mostra os usos básicos do Raaghu CLI.

Uso:

````json
raaghu help
````

Exemplos:

````json
raaghu help        # Mostra uma ajuda geral.
raaghu help new    # Mostra ajuda sobre o comando "new".
````

## new
Gera uma nova solução com base nos modelos de inicialização do Raaghu.

Uso:
````json
raaghu new <nome-da-solução> [opções]
````
Exemplo:
````json
raaghu new Raaghu.BookStore 
````
* Raaghu.BookStore é o nome da solução aqui.
* A convenção comum é nomear uma solução como *SuaEmpresa.SeuProjeto*. No entanto, você pode usar diferentes formas de nomeação, como *SeuProjeto* (sem espaços de nomeação) ou *SuaEmpresa.SeuProduto.SeuMódulo* (três níveis de espaços de nomeação).

Para mais exemplos, vá para [Amostras de Criação de Solução Raaghu CLI](./CLI-New-Command-Samples.md#new)

### Opções
* --version ou -v: Especifica a versão do Raaghu. Se a versão não for especificada, será automaticamente utilizada a versão mais recente para criar a solução.

````json
raaghu new <nome-da-solução> --version <versão>
````
````json
raaghu new <nome-da-solução> -v <versão>
````

Exemplo:

````json
raaghu new Raaghu.BookStore  --version 7.4.4
````
````json
raaghu new Raaghu.BookStore  -v 7.4.4
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

## sync 

Nos ajuda a corrigir os problemas dos microsserviços.

Uso:
```json
raaghu sync [opções]
```
Opções
- --abp : Conectar o frontend à solução comercial ABP.
  - --microservices ou -m : A solução de código-fonte dos microsserviços do backend ABP.

  Exemplos:
```json
raaghu sync --abp --microservices
``` 
```json
raaghu sync --abp -m
```
## login
Algumas funcionalidades da CLI requerem que você esteja conectado à plataforma raaghu.io. Para fazer login com seu e-mail, escreva:

````json
raaghu login              #Permite que você insira seu e-mail e senha (ocultos)
````

Um novo login com uma sessão já ativa sobrescreve a sessão anterior.

## login --info
Mostra suas informações de login, como Nome de usuário.

````json
raaghu login --info
````
## logout
Desconecta você, removendo o token de sessão do seu computador.

````json
raaghu logout
````





