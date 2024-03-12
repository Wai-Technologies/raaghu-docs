---
sidebar_position: 2
---

# Identity Server Deployment

Identity Server Deployment
==========================

IdentityServer configuration may be different based on deployment configurations. Basically, you need update identityserver client related data and update your hosting preferences based on your deployment environment.

### Update Cors Origins

Cors origins configuration for **gateways, microservices** swagger authorization and **React** must be updated for deployment. This can be found under **App** configuration in appsettings.json

```json
   "CorsOrigins": "https://*.MyProjectName.com,http://localhost:4200,https://localhost:8080",
```

### Update Redirect Allowed Urls

This configuration must be done if React used as back-office web application. It is found under App configuration in appsettings.json

```json
"RedirectAllowedUrls": "http://localhost:4200,https://localhost:8080"
```
