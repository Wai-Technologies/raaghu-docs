---
sidebar_position: 1
---

# Raaghu CLI

## Raaghu CLI
Raaghu CLI (Interface de Linha de Comando) é uma ferramenta de linha de comando para realizar algumas operações comuns para soluções baseadas em Raaghu.

## Instalação
Raaghu CLI é uma ferramenta global dotnet. Instale-a usando uma janela de linha de comando:

````json
dotnet tool install Waiin.Raaghu.Cli
````
````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````

To update an existing installation:
````json
dotnet tool update Waiin.Raaghu.Cli
````
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
* **`login`**: Autentica no seu computador com seu nome de usuário e senha do raaghu.io.
* **`login-info`**: Mostra as informações de login do usuário atual.
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

Para mais exemplos, vá para [Amostras de Criação de Solução Raaghu CLI](CLI-New-Command-Samples.md)

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

## login
Algumas funcionalidades do CLI requerem estar logado na plataforma raaghu.io. Para fazer login com seu nome de usuário, escreva:
````json
raaghu login <nome-de-usuário>                           # Permite que você digite sua senha de forma oculta
````
Um novo login com uma sessão já ativa substitui a sessão anterior.

## login-info
Mostra suas informações de login, como Nome de usuário.

````json
raaghu login-info
````
## logout
Desconecta você, removendo o token de sessão do seu computador.

````json
raaghu logout
````

## Veja também
[Exemplos para o comando new](CLI-New-Command-Samples.md)





