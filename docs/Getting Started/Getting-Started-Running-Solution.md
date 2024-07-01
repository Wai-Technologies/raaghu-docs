---
sidebar_position: 3
---

# Running the Solution

## ABP Backend Solution

#### 1. Modifications in appsettings.json file

Change the CorsOrigins, RedirectAllowedUrls in the **appsettings.json** file under the **.HttpApi.Host project.

````json
 "CorsOrigins": "http://localhost:8080",
 "RedirectAllowedUrls": "http://localhost:8080"
````
The CorsOrigins setting defines the allowed origins for Cross-Origin Resource Sharing (CORS). This setting allows requests from the specified origins. 
In this configuration, 'http://localhost:8080' is included to allow requests from a local development server, typically used for development and testing purposes.
RedirectAllowedUrls setting is used to define a whitelist of safe domains to which redirection is permitted

#### 2. Run the DbMigrator
#### 3. Run the Application (navigate to swagger/index.html)

## Raaghu Frontend Solution

#### 1. Run the command on the root directory of your solution to install the dependencies 

````json
npm run install-all
````
#### 2. Generate Proxy 

```json
raaghu generate --proxy -t
``` 
or

```json
raaghu generate --proxy --template
``` 
For more information look at [Generate Proxy](../CLI/CLI-New-Command-Samples.md#generate)

#### 3. Run the command on the root directory to run the solution

````json
npm run start --projects=host,rds-page-home,rds-page-login,rds-page-dashboard,rds-page-tenant
````
Above command will run the following pages 
 - rds-page-home
 - rds-page-login
 - rds-page-dashboard
 - rds-page-tenant 