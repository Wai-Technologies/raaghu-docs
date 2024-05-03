---
sidebar_position: 1
---
# Configurando o Ambiente de Desenvolvimento

Primeiro as primeiras coisas! Vamos configurar o seu ambiente de desenvolvimento antes de criar o projeto.

### Pré-requisitos

As seguintes ferramentas devem estar instaladas na sua máquina de desenvolvimento:
- Um IDE (por exemplo,[Visual Studio](https://visualstudio.microsoft.com/vs/)) que suporte desenvolvimento .NET 8.0+.
- [Node v16 ou v18](https://nodejs.org/en) 
- [Yarn v1.20+ (não v2)^1 ou npm v6+] (https://nodejs.org/en)
- [ABP CLI](https://docs.abp.io/en/abp/latest/CLI) (interface de linha de comando usada para automatizar algumas tarefas comuns - - para soluções baseadas em ABP)

# Instalando o Raaghu CLI
O Raaghu CLI é uma interface de linha de comando usada para automatizar algumas tarefas comuns para soluções baseadas em Raaghu.

Você precisa instalar o CLI usando o seguinte comando:


````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````
Se você já o instalou, pode atualizá-lo usando o seguinte comando:

````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````