---
sidebar_position: 3
---

# Executando a Solução
## Solução Backend ABP

#### 1. String de Conexão

Verifique a string de conexão no arquivo appsettings.json sob o projeto .Web.
````json
"ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
````


#### 2. Modificações no arquivo appsettings.json
Altere o CorsOrigins e RedirectAllowedUrls no arquivo appsettings.json dentro do projeto .HttpApi.Host.


````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````

A configuração CorsOrigins define as origens permitidas para Compartilhamento de Recursos de Origem Cruzada (CORS). Essa configuração permite solicitações das origens especificadas.
Nessa configuração, 'http://localhost:8080' está incluído para permitir solicitações de um servidor de desenvolvimento local, geralmente usado para fins de desenvolvimento e teste.
A configuração RedirectAllowedUrls é usada para definir uma lista branca de domínios seguros para os quais a redireção é permitida.

#### 3. Execute o DbMigrator
#### 4. Execute a Aplicação (navegue até swagger/index.html)
#### 5. Adicione uma Aplicação OpenID
- Siga estas etapas para adicionar uma aplicação OpenID por meio da API POST usando o Swagger:
  - Abra a interface Swagger da sua API.
  - Encontre o endpoint POST (/api/openiddict/applications) para adicionar dados.
  - Clique em "Try it out" para enviar a solicitação.
  - Insira seus dados JSON no corpo da solicitação.


````json
{
  "applicationType": "web",              // Type of application (e.g., web, mobile)
  "clientId": "<Your_Client_ID>",        // Client ID for the application
  "displayName": "<Your_Display_Name>"   // Display name for the application
  "clientType": "public",                // Type of client (e.g., public, confidential)
  "clientSecret": null,                  // Client secret for the application
  "consentType": "implicit",             // Type of consent (e.g., implicit, explicit,external, systematic)
  "extensionGrantTypes": [               // Extension grant types allowed
    "LinkLogin",
    "Impersonation"
  ],
  "postLogoutRedirectUris": [            // URIs to redirect to after logout
    "http://localhost:8080"
  ],
  "redirectUris": [                     // URIs to redirect to after authorization
    "http://localhost:8080"
  ],
  "allowPasswordFlow": true,
  "allowClientCredentialsFlow": true,
  "allowAuthorizationCodeFlow": true,
  "allowRefreshTokenFlow": true,
  "allowHybridFlow": false,
  "allowImplicitFlow": false,
  "allowLogoutEndpoint": true,
  "allowDeviceEndpoint": false,
  "scopes": [                           // Scopes available for the application
    "address",
    "email",
    "phone",
    "profile",
    "roles",
    "Test"                              // Backend application name
  ],
  "clientUri": "http://localhost:8080", // URI for the client application
  "logoUri": "<Logo_URI>"               // URI for the application's logo
}
````

   - Verifique a resposta para confirmação.

# Solução Frontend Raaghu
#### 1. Execute o comando no diretório raiz da sua solução para instalar as dependências

````json
npm run install-all
````

#### 2. Modificações no arquivo .env

````json
NODE_ENV=production
REACT_APP_URL=http://localhost:8080
REACT_APP_API_URL=<Swagger_URL>
REACT_APP_GRANT_TYPE=authorization_code
REACT_APP_CLIENT_ID=<Your_Client_ID>
REACT_APP_SCOPE=address openid email phone profile roles offline_access <Backend_Application_Name>
REACT_APP_REPLACE_URL=true
REACT_APP_VERSION=8.0
````

#### 3. Execute o comando no diretório raiz para rodar a solução

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````

O comando acima irá rodar as seguintes páginas:
- rds-page-home
- rds-page-login
- rds-page-dashboard
- rds-page-tenant