## Raaghu CLI - Comandos de Exemplo
O comando raaghu cria uma solução raaghu ou outros artefatos baseados em um modelo raaghu. O raaghu CLI possui vários parâmetros para criar uma nova solução raaghu. Neste documento, mostraremos alguns comandos de exemplo para criar uma nova solução. Os provedores de banco de dados disponíveis são Entity Framework Core e MongoDB. Todos os comandos começam com raaghu.

* Este projeto consiste nos seguintes comandos: help, new, login, login -info, logout.


## help
Exibe todos os comandos disponíveis.

Comando de ajuda:
````bash
raaghu help
````
Visualização:

````bash
raaghu help
Raaghu Cli

Comandos disponíveis:
   > raaghu help                    Mostra ajuda da linha de comando. Escreva `raaghu help <comando>` para um comando específico
   > raaghu new [nome-da-solução]  Executa o Comando New para Criar uma Nova Solução Raaghu
   > raaghu login                   Executa o Comando de Login
   > raaghu login -info             Executa o Comando de Informações de Login
   > raaghu logout                  Executa o Comando de Logout
````



## new
* Cria uma nova solução.
Comando new:

````bash
raaghu help new 
````

Visualização:

````bash
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
## Criar uma solução de uma versão específica
Quando você cria uma solução, ela sempre é criada com a versão mais recente. Para criar um projeto de uma versão mais antiga, você pode passar o parâmetro --version ou -v.

* Criar uma solução a partir da v7.4.4, com interface de usuário Angular e Entity Framework Core.

````bash
raaghu new RaaghuStoryBook --version 7.4.4
````
````bash
raaghu new RaaghuStoryBook -v 7.4.4
````

Para obter a lista de versões do raaghu, confira o seguinte link: https://www.nuget.org/packages/Volo.raaghu.Core/


## login
* Usado para fazer login na conta.
Comando :

````bash
raaghu login 
````

Visualização:
````bash
raaghu login
Raaghu Cli
Enter Email: emailId
Enter Password: *******
License verification successful. Tool functionality can proceed.
````

## login -info
* Usado para visualizar a conta de login.
Comando login -info:

````bash
raaghu login -info
````
Visualização:

````bash
raaghu login -info
Raaghu Cli
Executing Login Info command...
emailId is active.
````
## logout
* Usado para fazer logout da conta.
Comando logout:

````bash
raaghu logout
````
Visualização:

````bash
raaghu logout
Raaghu Cli
Executing Logout command...
Credentials removed from Credential Manager.
logged out successfully

````

## Veja também
[Documentação do raaghu CLI](CLI.md)
