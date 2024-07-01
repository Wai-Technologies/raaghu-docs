---
sidebar_position: 2
---

# Exemplos para novos comandos

## Raaghu CLI - Comandos de Exemplo
O comando raaghu cria uma solução raaghu ou outros artefatos com base em um modelo raaghu. O Raaghu CLI possui vários parâmetros para criar uma nova solução raaghu. Neste documento, vamos mostrar alguns exemplos de comandos para criar uma nova solução. Todos os comandos começam com raaghu.

* Este projeto consiste nos seguintes comandos: help, new, login, login -info, logout.


## help
Exibe todos os comandos exibir.

Comando de ajuda:
````json
raaghu help
````
visualizar:

````json
raaghu help
Raaghu Cli

comandos disponíveis:
   > raaghu help                    Mostra ajuda da linha de comando. Escreva `raaghu help <comando>` para um comando particular
   > raaghu new [nome-da-solu��o]  Executa o Comando New para Criar uma Nova solução Raaghu
   > raaghu login                   Executa o Comando de Login
   > raaghu login -info             Executa o Comando de informação de Login
   > raaghu logout                  Executa o Comando de Logout
````



## new
* Cria uma nova solução.
Comando new:

````json
raaghu help new 
````

visualizar:

````json
raaghu help new
Raaghu Cli

Usage:
   raaghu new <project-name> [options]

Options:
   -v|--version <version-number>  (default: latest-version)

Example(s):
   raaghu new my-project
   raaghu new my-project --version 1.0.0
````
## Criar uma solução a partir de uma versão específica.
Quando você cria uma solução, ela sempre é criada com a versão mais recente. Para criar um projeto a partir de uma versão mais antiga, você pode passar o parâmetro --version ou -v.

````json
raaghu new Raaghu.BookStore --version 7.4.4
````
````json
raaghu new Raaghu.BookStore -v 7.4.4
````

Para obter a lista de versão do raaghu, confira o seguinte link: https://www.nuget.org/packages/Waiin.Raaghu.Cli


## login
* Usado para fazer login na conta.
Comando :

````json
raaghu login 
````

visualizar:
````json
raaghu login
Raaghu Cli
Enter Email: emailId
Enter Password: *******
[##################################################] 100%
License verification successful. Tool functionality can proceed.
````

## login --info
* Usado para visualizar a conta de login.
Comando login -info:

````json
raaghu login --info
````
visualizar:

````json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Login Info command...
[##################################################] 100%
emailId is active.
````
## logout
* Usado para fazer logout da conta.
Comando logout:

````json
raaghu logout
````
visualizar:

````json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Logout command...
[##################################################] 100%
emailId Logged out successfully
````
## generate
Gera proxies de serviço para suas APIs HTTP para facilitar o consumo de seus serviços do lado do cliente. Sua aplicação host (servidor) deve estar em execução antes de executar este comando.

Comando:
```json
raaghu generate --proxy -t
``` 
```json
raaghu generate --proxy --template
``` 

visualizar:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter URL: https://localhost:44397
Downloading swagger json...
Generating proxy...

Proxy Successfully Created.
```

## create

create é utilizado para gerar diferentes tipos de páginas para gerenciar relacionamentos de dados.

- Primeiro, você precisa executar o comando **`Slice`** para criar os diferentes tipos de páginas CRUD

Comando:
```json
raaghu create --Slice
```
visualizar:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Service Name: Hospital
Slice Added Successfully
```

#### Para criar diferentes tipos de páginas, use os seguintes comandos:


Cria uma página para gerenciar dados (como adicionar, visualizar, atualizar e excluir) que verifica relacionamentos e executa conforme necessário.

Comando:
```json
raaghu create --CRUDPage
```

visualizar:

View:
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Backend Project Path: E:\Backened\source-code-backend\aspnet-core
Enter Entity Name: Hospital

Creating component...
Need to install the following packages:
generate-react-cli@8.4.6
ok to proceed? (y)
rds-comp-hospital.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.tsx
rds-comp-hospital.styled.ts was successfully created at src/rds-comp-hospital/rds-comp-hospital.styled.ts
rds-comp-hospital.test.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.test.tsx
rds-comp-hospital.stories.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.stories.tsx
index.ts is successfully created at src/rds-comp-hospital/index.ts
Component page is successfully created!!
PrivateRoute_Auth.tsx
Page "Hospitals" created successfully.
Done!!
```
## add

O comando add nos ajuda a criar novas páginas, componentes e elementos sem dados de entidade.
* **`Criar novo Componente`**:
Comando:
````json
raaghu add --component
````
````json
raaghu add -c
````

Visualização:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --component
Checking login credentials
emailId user is logged in.
Enter component name:
navbar
Creating component...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar component
````
- Também podemos usar raaghu add -c para criar um novo componente.

* **`Criar novo Elemento`**:

Comando:

````json
raaghu add --element
````
````json
raaghu add -e
````

Visualização:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --element
Checking login credentials
emailId user is logged in.
Enter element name:
navbar
Creating element...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar element
````
-Também podemos usar raaghu add -e para criar um novo elemento.

* **`Criar nova Página`**:

Comando:

````json
raaghu add --Page
````
````json
raaghu add -p
````

Visualização:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --page
Checking login credentials
emailId user is logged in.
Enter page name:
navbar
undefined page is successfully created!!
PrivateRoute_Auth.tsx
Successfully created the navbar page
````
- Também podemos usar raaghu add -p para criar uma nova página. 