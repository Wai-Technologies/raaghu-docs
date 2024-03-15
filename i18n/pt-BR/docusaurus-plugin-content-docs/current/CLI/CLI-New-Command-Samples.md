---
sidebar_position: 2
---

# Exemplos para novos comandos

## Raaghu CLI - Comandos de Exemplo
O comando raaghu cria uma solu��o raaghu ou outros artefatos baseados em um modelo raaghu. O raaghu CLI possui v�rios par�metros para criar uma nova solu��o raaghu. Neste documento, mostraremos alguns comandos de exemplo para criar uma nova solu��o. Os provedores de banco de dados dispon�veis s�o Entity Framework Core e MongoDB. Todos os comandos come�am com raaghu.

* Este projeto consiste nos seguintes comandos: help, new, login, login -info, logout.


## help
Exibe todos os comandos dispon�veis.

Comando de ajuda:
````json
raaghu help
````
Visualiza��o:

````json
raaghu help
Raaghu Cli

Comandos dispon�veis:
   > raaghu help                    Mostra ajuda da linha de comando. Escreva `raaghu help <comando>` para um comando espec�fico
   > raaghu new [nome-da-solu��o]  Executa o Comando New para Criar uma Nova Solu��o Raaghu
   > raaghu login                   Executa o Comando de Login
   > raaghu login -info             Executa o Comando de Informa��es de Login
   > raaghu logout                  Executa o Comando de Logout
````



## new
* Cria uma nova solu��o.
Comando new:

````json
raaghu help new 
````

Visualiza��o:

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
## Criar uma solu��o de uma vers�o espec�fica
Quando voc� cria uma solu��o, ela sempre � criada com a vers�o mais recente. Para criar um projeto de uma vers�o mais antiga, voc� pode passar o par�metro --version ou -v.

* Criar uma solu��o a partir da v7.4.4, com interface de usu�rio Angular e Entity Framework Core.

````json
raaghu new Raaghu.BookStore --version 7.4.4
````
````json
raaghu new Raaghu.BookStore -v 7.4.4
````

Para obter a lista de vers�es do raaghu, confira o seguinte link: https://www.nuget.org/packages/Waiin.Raaghu.Cli


## login
* Usado para fazer login na conta.
Comando :

````json
raaghu login 
````

Visualiza��o:
````json
raaghu login
Raaghu Cli
Enter Email: emailId
Enter Password: *******
License verification successful. Tool functionality can proceed.
````

## login -info
* Usado para visualizar a conta de login.
Comando login -info:

````json
raaghu login -info
````
Visualiza��o:

````json
raaghu login -info
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
Visualiza��o:

````json
raaghu logout
Raaghu Cli
Executing Logout command...
Credentials removed from Credential Manager.
logged out successfully

````

## Veja tamb�m
[Documenta��o do raaghu CLI](CLI.md)
