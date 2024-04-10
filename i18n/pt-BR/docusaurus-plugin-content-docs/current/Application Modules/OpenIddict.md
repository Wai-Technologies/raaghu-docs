---
sidebar_position: 10
---

# OpenIddict

Este módulo fornece funcionalidade de integração e gerenciamento para a biblioteca OpenIddict;

- Construído sobre[OpenIddict-core](https://github.com/openiddict/openiddict-core "")biblioteca.
- Gerenciar escopos de aplicativos e APIs no sistema.
- Definir permissões para clientes.

Consulte [a página de descrição do módulo](https://commercial.abp.io/modules/Volo.OpenIddict "") para obter uma visão geral dos recursos do módulo.
## Interface de usuário
### itens de menu
O módulo OpenIddict adiciona os seguintes itens ao menu "Principal", no item de menu "Administração":

- **Aplicações**: Página de gestão de aplicativos.
- **Scopes**: Página de gerenciamento de escopo.

A classe OpenIddictProMenus tem as constantes para os nomes dos itens do menu.
## páginas
Gestão de Aplicações

A página de aplicações é usada para gerenciar OpenIddict aplicações. Um aplicativo representa aplicativos hospedados que podem solicitar tokens de seu servidor de autenticação.

![Novo aplicativo](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/appliaction.png)


Você pode criar um novo aplicativo ou editar aplicativos existentes nesta página:

![⁇  uma nova ⁇  ou editar aplicativos ⁇](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/appliaction-new.png) ![Editar ⁇](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/appliaction-edit.png)


API Gestão de Escopos

O módulo OpenIddict permite gerenciar o escopo da API. Para permitir que os aplicativos solicitem tokens de acesso para APIs, você precisa definir escopos de API.

![New Scope](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/scope.png)

Você pode criar um novo recurso de API ou editar um recurso de API existente nesta página:

![New Scope](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/scope-edit.png)
