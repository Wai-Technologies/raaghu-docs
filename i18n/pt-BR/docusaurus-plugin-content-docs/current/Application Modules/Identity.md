---
sidebar_position: 9
---

# Identidade

Este módulo implementa o sistema de Usuário e Função de uma aplicação;

- Gerenciar funções e usuários no sistema. Um usuário pode ter múltiplas funções.
- Defina permissões em níveis de função e usuário.
- Ativar/desativar autenticação de dois fatores e bloqueio de usuário por usuário.
- Gerenciar perfil de usuário básico e senha.
- Gerencie tipos de declarações no sistema, defina declarações para funções e usuários.
- Página de configuração para gerenciar a complexidade da senha, login do usuário, conta e bloqueio.
- Apoia a autenticação DAP.
- Fornece verificação de número de e-mail e telefone.
- Suporta integrações de login social (Microsoft, Google, Twitter).
- Gerenciar unidades organizacionais no sistema.
- Veja os logs de segurança (login, logotipo, ⁇  a senha...) no sistema.

Consulte a página de descrição do módulo para obter uma visão geral dos recursos do módulo.
## pacotes

Este módulo segue o [guia de práticas recomendadas de desenvolvimento de](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") módulo e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar a [página da lista de pacotes do módulo Identity](https://abp.io/packages?moduleName=Volo.Identity.Pro "") para ver a lista de pacotes relacionados a este módulo.

### itens de menu
O módulo Identidade adiciona os seguintes itens ao menu "Principal", no item de menu "Administração":

- **Roles: Página de gerenciamento de funções.**
- **Usuários: Página de gerenciamento de usuários**
- **Tipos de Claim: Página de gerenciamento de tipo de reivindicação.**
- **Unidades de ⁇ : Página de gerenciamento de unidades organizacionais.**
- **Logs de segurança: Página de busca de log de segurança.**

A classe IdentityMenuNames tem as constantes para os nomes dos itens do menu.
### páginas
Gerenciamento de funções

A página Funções é usada para gerenciar funções no sistema. Uma função é um conjunto de permissões atribuídas aos usuários.

![Novo papel](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)

Você pode criar uma nova função ou editar uma função nesta página:

![Você pode ⁇  um novo papel ou editar um papel nesta página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-new.png)

- As funções **padrão** são atribuídas a novos usuários por padrão.
- As funções **públicas** ficam visíveis para outros usuários.

### permissões de papel
Você pode gerenciar permissões de um papel:
### ui ser adicionada

- Uma permissão é uma ação do aplicativo concedida a funções e usuários.
- Um usuário com uma função herdará todas as permissões concedidas para a função.
- Qualquer módulo pode [definir permissões.](https://docs.abp.io/en/abp/latest/Authorization#permission-system "") Depois de definir uma nova permissão, ela estará disponível nesta página.
- O lado esquerdo está a lista de módulos. Depois de clicar no nome de um módulo, você pode marcar/desmarcar as permissões relacionadas a esse módulo.

### Reivindicações de função
Você pode definir valores de reivindicação personalizados para um papel:

![Editar papel](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-claims.png)

Os tipos de reclamação são recuperados da lista de reclamações ⁇  na página de Gestão de Tipos de Claim (ver abaixo).
### Gerenciamento de usuários
A página de usuários é usada para gerenciar os usuários em seu sistema.

![Gerenciamento de Usuários](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users.png)

Você pode criar um novo usuário ou editar um usuário existente nesta página:

![Você pode ⁇  um novo ⁇  ou editar um ⁇  existente nesta página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-new.png)

- Um usuário pode ter zero ou mais funções no sistema.
- Você pode definir configurações de verificação de dois fatores e bloqueio de usuário por usuário.
  ![Novo Usuário](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)

### Permissões de usuário
Um usuário possui a união das permissões das funções atribuídas. O módulo de identidade também permite conceder permissões extras a um usuário específico.

![Editar Usuário](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/user-permision.png)

- Uma permissão é uma ação do aplicativo concedida a funções e usuários.
- Um usuário com uma função herdará todas as permissões concedidas para a função.
- Qualquer módulo pode [definem permissões](https://docs.abp.io/en/abp/latest/Authorization#permission-system "") Depois de definir uma nova permissão, ela estará disponível nesta página
- O lado esquerdo está a lista de módulos. Depois de clicar no nome de um módulo, você pode marcar/desmarcar as permissões relacionadas a esse módulo.

### gestão do tipo de reivindicação
O módulo de identidade permite definir tipos de declaração personalizados.

![Novo Tipo de Reclamação](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/claim.png)

- As declarações personalizadas podem ser usadas para armazenar informações adicionais para um usuário ou função.
- Os valores de declaração personalizados podem então ser acessados ​​no código do aplicativo para um usuário autenticado.
- Os tipos de declaração também são usados ​​pelo módulo OpenIddict se você estiver usando-o.

### Unidades organizacionais
A página unidades organizacionais é usada para gerenciar unidades organizacionais, membros de unidades organizacionais e funções de unidades organizacionais.

![A página de unidades de ⁇  é usada para gerenciar unidades de ⁇ , ⁇  de unidades de ⁇  e ⁇  de unidades de ⁇](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

Você pode adicionar uma nova unidade organizacional ou editar uma unidade organizacional existente nesta página. Para adicionar uma nova unidade organizacional raiz, clique no botão "Nova unidade raiz" e preencha o formulário de abertura.

![Nova unidade de ⁇](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

Para adicionar uma subunidade a uma unidade organizacional existente, clique com o botão direito em uma unidade organizacional existente e clique no item de menu de contexto "Adicionar subunidade". Da mesma forma, para editar uma unidade organizacional, clique com o botão direito em uma unidade organizacional existente e clique no item do menu de contexto "Editar".

![Editar Unidade de Organização](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit-edit.png)

Você pode gerenciar membros de uma unidade organizacional usando a guia membros selecionando uma unidade organizacional
### logs de segurança
A página de logs de segurança é usada para pesquisar e visualizar operações relacionadas à autenticação (login, logout, alteração de senha...) no sistema.

![Logs de segurança](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/security-logs.png)

