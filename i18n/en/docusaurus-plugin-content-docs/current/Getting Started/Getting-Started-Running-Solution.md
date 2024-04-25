---
sidebar_position: 3
---

# Running the Solution

## ABP Backend Solution

#### 1. Connection String

Check the connection string in the appsettings.json file under the .Web project.
````json
"ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
````

#### 2. Modifications in appsettings.json file

Change the CorsOrigins, RedirectAllowedUrls in the **appsettings.json** file under the **.HttpApi.Host project.

````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````
The CorsOrigins setting defines the allowed origins for Cross-Origin Resource Sharing (CORS). This setting allows requests from the specified origins. 
In this configuration, 'http://localhost:8080' is included to allow requests from a local development server, typically used for development and testing purposes.
RedirectAllowedUrls setting is used to define a whitelist of safe domains to which redirection is permitted

#### 3. Run the DbMigrator
#### 4. Run the Application (navigate to swagger/index.html)
#### 5. Add OpenId Application
- Please follow these steps to add an OpenID application through the POST API using Swagger:
   - Open your API's Swagger interface.
   - Find the POST endpoint (/api/openiddict/applications) for adding data.
   - Click "Try it out" to submit the request.
   - Enter your JSON data in the request body.
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
   - Check the response for confirmation.
## Raaghu Frontend Solution


#### 1. Run the command on the root directory of your solution to install the dependencies 

````json
npm run install-all
````
#### 2. Modifications in .env file

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
#### 3. Run the command on the root directory to run the solution

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````
Above command will run the following pages 
 - rds-page-home
 - rds-page-login
 - rds-page-dashboard
 - rds-page-tenant 