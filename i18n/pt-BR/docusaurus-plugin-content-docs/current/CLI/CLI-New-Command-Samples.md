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
raaghu login --info
Raaghu Cli
Executing Login Info command...
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
raaghu logout
Raaghu Cli
Executing Logout command...
Credentials removed from Credential Manager.
logged out successfully

````
