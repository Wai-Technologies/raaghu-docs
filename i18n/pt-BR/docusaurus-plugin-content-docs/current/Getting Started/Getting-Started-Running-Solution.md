---
sidebar_position: 3
---

# Criando uma nova solução
# Crie o banco de dados

### Cadeia de conexão
Verifique a cadeia de conexão no arquivo appsettings.json no projeto .Web.
```json
    "ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
```
**Sobre as cadeias de conexão e sistemas de gerenciamento de banco de dados**

A solução está configurada para usar o Entity Framework Core com MS SQL Server por padrão. No entanto, se você selecionou outro DBMS usando o parâmetro -dbms no novo comando da CLI do ABP (como -dbms MySQL), a cadeia de conexão poderá ser diferente para você.

En Core ⁇[vários](https://learn.microsoft.com/en-us/ef/core/providers/ "")provedores de banco de dados e você pode usar qualquer MS suportado. Ver[o documento de ⁇  do ⁇  de Entidade](https://docs.abp.io/en/abp/latest/Entity-Framework-Core "")aprender a aprender[alternar para outro MS](https://docs.abp.io/en/abp/latest/Entity-Framework-Core-Other-DBMS "")Se ⁇  mais tarde.

O EF Core suporta [vários](https://learn.microsoft.com/en-us/ef/core/providers/ "") provedores de banco de dados e você pode usar qualquer SGBD suportado. Consulte o [documento de integração do Entity Framework 
para](https://docs.abp.io/en/abp/latest/Entity-Framework-Core "") aprender [como alternar para outro SGBD](https://docs.abp.io/en/abp/latest/Entity-Framework-Core-Other-DBMS ""), se necessário posteriormente.

### origens de carros
Verifique o CorsOrigins no arquivo **appsettings.json** no projeto .Web.
```json
     "CorsOrigins": "https://*.abp_react_7_3.com,http://localhost:4200,http://localhost:8080",
```
A configuração CorsOrigins define as origens permitidas para Cross-Origin Compartilhamento de Recursos (COR). Esta configuração permite pedidos das origens ⁇ . Nesta configuração, '[http://localhost: 8080](http://localhost:8080 "")' está ⁇  para ⁇  pedidos de um servidor de desenvolvimento local, tipicamente usado para desenvolvimento e testes propósitos.

### migrações de banco de dados
A ⁇  utiliza o[Entity Framework Core Código Primeira Migração.](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli "")Ele vem com uma ⁇  de console .DbMigrator que ⁇  as migrações e também semeia os dados iniciais. É ⁇  no desenvolvimento, bem como no ambiente de produção.

**.DbMigrator projeto tem seus ⁇  aplicativosettings.son. ⁇ , se você ⁇  a corda de ⁇  acima, você também deve ⁇  este.**
### The Initial Migration
O aplicativo .DbMigrator cria automaticamente **a migração inicial na primeira** execução.

**Se você estiver usando Visual Studio, você pode pular para a ⁇  Running DbMigrator . No entanto, outro é (por exemplo. Rider) pode ter problemas para a primeira corrida desde que adiciona a ⁇  inicial e compila o projeto. Neste caso, abra um terminal de linha de comando na pasta da**`.DbMigrator`projetar e ⁇  o seguinte comando:
```bash
dotnet run
```
Pela próxima vez, pode ⁇ -lo na sua DE, como normalmente faz.

### executando o dbmigrator

Clique com o botão direito no projeto .DbMigrator e selecione Definir como projeto de inicialização

![projeto set-as-startup-](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/set-as-startup-project.png)

Pressione F5 (ou Ctrl+F5) para executar o aplicativo. Ele terá uma saída como mostrada abaixo:

![db-migrator-output](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/db-migrator-output.png)

Inicial[dados de ⁇](Data-Seeding.md "")`admin`⁇  no banco de dados (com a senha é`1q2w3E*`) que é então usado para iniciar sessão na ⁇ . Por isso, tens de usar`.DbMigrator`Pelo menos uma vez para uma nova base de dados.

A solução está configurada para usar o MongoDB em seu computador local, portanto, você precisa ter uma instância do servidor MongoDB instalada e em execução ou alterar a cadeia de conexão para outro servidor MongoDB.

## Execute o aplicativo

Aviso: Ao criar uma solução ABP, os pacotes do lado do cliente estão sendo restaurados pelo ABP CLI e Suite. Mas se você buscar o código-fonte enviado por outro membro da equipe, sua pasta libs estará vazia. Antes de iniciar o aplicativo, execute o comando abp install-libs em seu diretório da Web para restaurar as bibliotecas do lado do cliente. Isso preencherá a pasta libs. Certifique-se de que o projeto .Web seja o projeto de inicialização. Execute o aplicativo que abrirá a página de login no seu navegador:

Pressione F5 (ou Ctrl+F5) para executar o aplicativo. Ele terá uma saída como mostrada abaixo:

![adgger-ui](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/swagger-ui.png)

Use Ctrl+F5 no Visual Studio (em vez de F5) para executar o aplicativo sem depuração. Se você não tiver um propósito de depuração, isso será mais rápido
## ver também

- [Tutorial de desenvolvimento de aplicações web](Tutorials/Creating-The-Server-Side.md "")

