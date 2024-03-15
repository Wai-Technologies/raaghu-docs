---
sidebar_position: 2
---

# Criando Solução

# Criando uma nova solução comercial ABP
Existem 2 maneiras de criar novas soluções comerciais da ABP. Você pode usar o WP [CLI](https://docs.abp.io/en/abp/latest/CLI "") ou [o ABP Suite](https://docs.abp.io/en/commercial/7.2/abp-suite/add-solution "").

## Criando solução via ABP CLI
Se você ainda não instalou o ABP CLI, será necessário instalá-lo com o seguinte comando. Para verificar se você já o possui, escreva abp na linha de comando.

```bash
  dotnet tool install -g Volo.Abp.Cli
```
Para criar sua solução, vá até o diretório onde deseja criar e digite o seguinte comando:
```bash
 abp new Acme.BookStore -t app-pro
```

- 
    
  Acme.BookStore é o nome do projeto. Sua solução do Visual Studio, arquivo .sln será nomeado como Acme.BookStore.sln. Os projetos dentro da pasta raiz e todos os namespaces terão o prefixo Acme.BookStore.*. Você pode fornecer nomes de projetos diferentes, como onlyBookStore ou Acme.Retail.BookStore. Você pode usar nomenclatura de nível único, dois níveis ou três níveis.

- 
    
    -t ou --template é o nome do modelo. Para aplicações comerciais, use app-pro.

- 
    
   Para descobrir outras novas opções de projeto da CLI, digite:
```bash
   dotnet tool update -g Volo.Abp.Cli
```


### Especifique a estrutura da IU
O modelo fornece várias estruturas de UI:

- mvc: SP.ET Core VC I com Páginas Razor (default)
- blazon: Blazor UI
- blazon-servidor: Blazor Server UI
- angular: I angular
- reagem:React I
- Mai-blazon: MAUI Blazor I

Use -u ou --ui ⁇  para especificar o quadro UI:
```bash
   abp new Acme.BookStore -t app-pro -u react
```
Especifique o provedor de banco de dados

O modelo oferece suporte aos seguintes provedores de banco de dados:

- ef: Entity Framework Core (predefinição)
- mongodb: MongoDB

Use -d ou --database-provider ⁇  para especificar o provedor de banco de dados:
```bash
   abp new Acme.BookStore -t app-pro -d mongodb
```
### Criando solução via ABP Suite
ABP Suite permite criar uma nova solução ABP.

Caso você não tenha instalado o ABP Suite, veja como instalar o ABP Suite.

Para criar uma nova solução, veja [como criar uma nova solução.](https://docs.abp.io/en/commercial/7.2/abp-suite/create-solution "")
### Qual é o próximo?

- [Estrutura da solução](Solution-Structure.md "")

