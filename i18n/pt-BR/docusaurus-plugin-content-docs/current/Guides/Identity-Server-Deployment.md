---
sidebar_position: 2
---

# Implantação do Servidor de Identidade

A configuração do IdentityServer pode ser diferente com base nas configurações de implantação. Basicamente, você precisa atualizar os dados relacionados ao cliente do servidor de identidade e atualizar suas preferências de hospedagem com base em seu ambiente de implantação.

### Atualizar origens do Cors
Corps origina configuração para gateways, ⁇  de adaga de microservices e React deve ser ⁇  para ⁇ . Isso pode ser encontrado em App configuração em appsettings.son
```json
  "CorsOrigins": 
"https://*.MyProjectName.com,http://localhost:4200,https://localhost:44307,https://localhost:44325,https://localhost:44353,https://localhost:44367,https://localhost:44388,https://localhost:44381,https://localhost:44361",
```
### Atualizar URLs permitidos para redirecionamento
Esta configuração deve ser feita se React usado como aplicativo web de back-office. Ele é encontrado sob App configuração em appsettings.son
```json
    "RedirectAllowedUrls": "http://localhost:4200,https://localhost:44307"
```