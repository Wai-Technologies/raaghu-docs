---
sidebar_position: 3
---

# Executando a Solução
## Solução Backend ABP

#### 1.Modificações no arquivo appsettings.json
Altere o CorsOrigins e RedirectAllowedUrls no arquivo appsettings.json dentro do projeto .HttpApi.Host.

````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````

A configuração CorsOrigins define as origens permitidas para Compartilhamento de Recursos de Origem Cruzada (CORS). Essa configuração permite solicitações das origens especificadas.
Nessa configuração, 'http://localhost:8080' está incluído para permitir solicitações de um servidor de desenvolvimento local, geralmente usado para fins de desenvolvimento e teste.
A configuração RedirectAllowedUrls é usada para definir uma lista branca de domínios seguros para os quais a redireção é permitida.

#### 2. Execute o DbMigrator
#### 3. Execute a Aplicação (navegue até swagger/index.html)

# Solução Frontend Raaghu

#### 1. Execute o comando no diretório raiz da sua solução para instalar as dependências

````json
npm run install-all
````

#### 2. Gerar Proxy

```json
raaghu generate --proxy -t
``` 
ou

```json
raaghu generate --proxy --template
``` 
Para mais informações, consulte [Gerar Proxy](../CLI/CLI-New-Command-Samples.md#generate)

#### 3. Execute o comando no diretório raiz para rodar a solução

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````

O comando acima irá rodar as seguintes páginas:
- rds-page-home
- rds-page-login
- rds-page-dashboard
- rds-page-tenant