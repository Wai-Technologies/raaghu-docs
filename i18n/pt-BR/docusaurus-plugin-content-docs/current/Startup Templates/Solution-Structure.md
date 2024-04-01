---
sidebar_position: 3
---

# Estrutura da Solução

Você obterá uma estrutura de solução ligeiramente diferente, com base nas opções especificadas.
## estrutura padrão
Se você não especificar nenhuma opção adicional, você terá uma solução na pasta aspnet-core como a abaixo:

![Estrutura padrão](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/defaultStructure.png)

Os projetos estão localizados nas pastas aspnet-core/src e aspnet-core/test. Embora a pasta aspnet-core/src contenha o aplicativo real, a pasta aspnet-core/test contém testes de unidade e projetos básicos de teste. O diagrama abaixo mostra as camadas e dependências do projeto do aplicativo:

![estrutura de fluxograma](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/flow-chart.png)

Cada seção abaixo descreve o projeto relacionado e suas dependências.
### *.domain.shared projeto
Este projeto contém constantes, enumerações e outros objetos que fazem parte da camada de domínio, mas compartilhados por todos os projetos da solução.

Por exemplo, BookType ou BookConsts (contém constantes de validação como MaxNameLength) são bons candidatos para estar no projeto *.Domain.Shared.

### dependências:

O projeto Domain.Shared não depende de outros projetos da solução. Todos os outros projetos dependem disso direta ou indiretamente.

### *.projecto de ⁇
Esta é a ⁇  de ⁇  da ⁇ . Contém[entidades,](https://docs.abp.io/en/abp/latest/Entities "") [raizes agregadas,](https://docs.abp.io/en/abp/latest/Entities "") [⁇  de ⁇ ,](https://docs.abp.io/en/abp/latest/Domain-Services "") [tipos de valor,](https://docs.abp.io/en/abp/latest/Value-Types "") [interfaces de repositório](https://docs.abp.io/en/abp/latest/Repositories "")e outros objetos de ⁇ .

Esta é a camada de domínio da solução. Ele contém [entidades](https://docs.abp.io/en/abp/latest/Entities ""), [raízes agregadas](https://docs.abp.io/en/abp/latest/Entities ""), [serviços de domínio](https://docs.abp.io/en/abp/latest/Domain-Services ""), [tipos de valores](https://docs.abp.io/en/abp/latest/Value-Types ""), [interfaces de repositório](https://docs.abp.io/en/abp/latest/Repositories "") e outros objetos de domínio.

Uma entidade Book, um serviço de domínio BookManager e uma interface IBookRepository são bons exemplos para estar dentro do projeto *.Domain.

### dependências:

O projeto Domain.Shared não depende de outros projetos da solução. Todos os outros projetos dependem disso direta ou indiretamente.

### *.application.contratos do projecto
Este projeto contém interfaces de serviço de aplicação e objetos de transferência de dados (DTO) da camada de aplicação. Ele separa a interface e a implementação da camada de aplicação. Desta forma, o projeto de interface pode ser compartilhado com os clientes como um pacote de contrato.

A interface IBookAppService e a classe BookCreationDto são bons exemplos para estar dentro do projeto *.Application.Contracts.
### dependências:

- Depende do *.Domain.Shared pois pode utilizar constantes, enums e outros objetos compartilhados deste projeto nas interfaces de serviço da aplicação e DTOs.

### *.projecto de ⁇
Este projecto ⁇[serviço de ⁇](https://docs.abp.io/en/abp/latest/Application-Services "")implementações das interfaces ⁇  no projeto .Application.Contratos.

BookAppService é a ⁇  da interface IBookAppService e bons ⁇  para estar dentro do projeto *.Application .
### dependências:

- Depende do *.Domain.Shared pois pode utilizar constantes, enums e outros objetos compartilhados deste projeto nas interfaces de serviço da aplicação e DTOs.
- Depende do projeto *.Domain para poder utilizar objetos de domínio como entidades, interfaces de repositório, etc... para realizar a lógica da aplicação.

### *.entityframeworkcore projeto
Este é o projeto de integração do EF Core. Ele define o DbContext e implementa interfaces de repositório definidas no projeto *.Domain.

### dependências:

- Depende do projeto *.Domain para poder fazer referência a entidades e interfaces de repositório.

Este projeto estará disponível apenas se você estiver usando o EF Core como provedor de banco de dados. Se você selecionar outro provedor de banco de dados, seu nome será diferente.

### *. projeto de dbmigrator
Este é um aplicativo de console que simplifica a execução de migrações de banco de dados em ambientes de desenvolvimento e produção. Quando você executa este aplicativo, ele;

- Cria o banco de dados, se necessário.
- Aplicar as migrações pendentes do banco de dados.
- Seeds dados iniciais, se necessário.

Observe que este projeto tem seu próprio arquivo appsettings.json. Se precisar alterar a string de conexão do banco de dados padrão, você deverá defini-la em seu próprio appsettings.json .

Os dados iniciais de semeadura são importantes neste momento. A BP tem uma ⁇  modular de ⁇  de dados. Mais informações ver[⁇  de ⁇  de dados.](https://docs.abp.io/en/abp/latest/Data-Seeding "")

Embora a criação de banco de dados e a aplicação de migrações pareçam necessárias apenas para bancos de dados relacionais, este projeto está incluído mesmo se você escolher um provedor de banco de dados NoSQL (como MongoDB). Nesse caso, ele ainda semeia os dados iniciais necessários para a inicialização do aplicativo.

### dependências:

- Depende do projeto *.EntityFrameworkCore (para EF Core), pois precisa acessar as migrações.
- Depende do projeto *.Application.Contracts para poder acessar as definições de permissão, porque o semeador de dados inicial concede todas as permissões para a função de administrador por padrão.

### *.httpapi projeto
Este projeto é usado para definir seus API Controladores.

Na maioria das vezes, você não precisa definir manualmente os controladores de API, pois o recurso [Auto API Controllers](https://docs.abp.io/en/abp/latest/API/Auto-API-Controllers "") do ABP os cria automaticamente com base na sua camada de aplicativo. Porém, caso você precise escrever controladores de API, este é o melhor lugar para fazê-lo.
### dependências:

- Depende do projeto *.Application.Contracts para poder injetar as interfaces de serviço da aplicação.

### *.httpapi.client project
Este projeto define proxies de cliente C# para usar as APIs HTTP da solução. Você pode compartilhar essa biblioteca com clientes de terceiros, para que eles possam consumir facilmente suas APIs HTTP em seus aplicativos .NET. Para outros tipos de aplicações, eles ainda podem utilizar as APIs, seja manualmente ou através de uma ferramenta em sua própria plataforma.

A maior parte do tempo você não precisa ⁇  ⁇  proxies do cliente C ⁇ , ⁇  à BP's[Dynamic C ⁇  API Clientes ⁇ .](https://docs.abp.io/en/abp/latest/API/Dynamic-CSharp-API-Clients "")

O projeto *.HttpApi.Client.ConsoleTestApp é um aplicativo de console criado para demonstrar o uso dos proxies do cliente.

- Depende do projeto *.Application.Contracts para poder compartilhar as mesmas interfaces de serviço de aplicativo e DTOs com o serviço remoto.

Observe que você pode excluir este projeto e dependências se não precisar criar proxies de cliente C# para suas APIs
### *.web projeto
Este projeto contém a interface do usuário (UI) do aplicativo se você estiver usando a UI do ASP.NET Core MVC. Ele contém páginas Razor, arquivos JavaScript, arquivos CSS, imagens e assim por diante...

Este projeto possui um arquivo appsettings.json que contém a string de conexão e outras configurações do aplicativo.

### dependências:

- Depende do *.HttpApi, pois a camada UI precisa usar APIs e interfaces de serviço de aplicativo da solução.

Se você verificar o código-fonte do arquivo *.Web.csproj, verá as referências aos projetos *.Application e *.EntityFrameworkCore. Na verdade, essas referências não são necessárias ao codificar sua camada de UI, porque a camada de UI não depende do EF Core ou da implementação da camada de aplicativo. Este modelo de inicialização é pré-configurado para implantação em camadas, onde a camada API é hospedada em um servidor separado da camada UI.

No entanto, se você não escolher a opção --tiered ao criar uma solução, essas referências estarão no projeto *.Web para poder hospedar as camadas da Web, da API e do aplicativo em um único endpoint do aplicativo. Isso lhe dá a capacidade de usar entidades e repositórios de domínio em sua camada de apresentação. No entanto, isto é considerado uma má prática de acordo com as regras do DDD.

### reagem arquitetura
Seguem-se a arquitetura sobre como raaghu-react está sendo usado como parte de UI aplicações

![Seguem-se a arquitetura sobre como raaghu-react está sendo usado como parte de UI aplicações](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-architecture.png)
### raaghu - ⁇  de autenticação (página de login)
![raaghu-Authentication Flow](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuAuthenticationFlow.png)
### raaghu - localização
![localização de raaghu](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuLocalization.png)
### raaghu - ⁇  da página
![Raghu - Fluxo de página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuPageFlow.png)
### o que se segue?

- [Consulte](Getting-Started.html "") o documento de introdução para criar uma nova solução e executá-la para este modelo.

