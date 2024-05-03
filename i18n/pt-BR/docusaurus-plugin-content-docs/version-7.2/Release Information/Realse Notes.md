---
sidebar_position: 1
---

# Notas de versão

### Versão 7.3 (compatível com o comercial ABP 7.3)

- Adicionada uma geração de página CRUD baseada em linha de comando para diferentes relacionamentos, como relacionamentos um para um, um para muitos e muitos para muitos.
- Muitas melhorias e correções para a versão 7.2.

### Versão 7.2 (compatível com comercial ABP 7.2)

- Adicionada permissão nos menus de navegação lateral para locatário e usuário.
- Muitas melhorias e correções para a versão 7.2.
- Integração do módulo de chat para diferentes usuários.
- Melhorias e correções para a versão 7.2

### Versão 7.1 (compatível com comercial ABP 7.1)

- Permitir representar um usuário arbitrário no módulo SaaS.
- O usuário bem-sucedido pode adicionar uma foto de perfil em Minhas contas
- Muitas melhorias e correções para a versão 7.1.
- Melhorias e correções para a versão 7.1

### Versão 7.0 (compatível com ABP comercial 7.0)

- Aplicativo totalmente compatível com ABP, incluindo páginas integradas como Dashboards, Tenant, User, configurações, idiomas e muito mais.
- Componentes totalmente substituíveis e personalizáveis: tabela de dados, uploader de arquivos, formulários, email, etc.
- Fácil de mudar para opções de temas claros, escuros e semiescuros.
- Biblioteca de design de kit de UI do Adobe XD.
- Diferentes opções de seleção de idioma estão disponíveis na página de login.
- Recurso de alteração de idioma no painel e módulos
- Habilitado novo recurso de geração automática de proxy de serviço com DTO, serviços e esquemas com diferentes suportes ao cliente http.
- Biblioteca de ícones personalizados com mais adições e melhorias.
- Introdução de um livro de histórias para o usuário visualizar elementos, componentes e verificar o comportamento em diferentes estados.
- Os módulos integrados nas aplicações são mencionados na seção seguinte.
- Localização implementada para diferentes módulos

### MÓDULOS
#### conta

- Fornece uma página de login com nome de usuário e senha.
- Fornece uma página de registro para criar uma nova conta.
- Implementa a interface e a funcionalidade do servidor de autenticação do servidor de identidade.

#### registro de auditoria

- Fornece a UI de relatórios de log de auditoria para a infraestrutura de auditoria e permite pesquisar, filtrar e mostrar entidades de log de auditoria e logs de alterações de entidade.
- Consistem em dados críticos sobre cada solicitação do cliente, como método HTTP, status de retorno HTTP, duração da execução da solicitação e falha no sucesso, respectivamente.

#### diz

- Inclui páginas como Tenant e Edition
- Permite gerenciar locatários onde um locatário é cliente do seu aplicativo.
- Permite criar edições onde uma edição pode ter diferentes conjuntos de recursos do seu aplicativo atribuídos aos locatários.
- Permitir que os usuários do host alterem a senha de um usuário de um locatário.

#### Blogue

- Crie vários blogs em um único aplicativo.

#### cms kit

- Fornece um sistema de gerenciamento de páginas para gerenciar páginas dinâmicas.
- Um sistema de blog para criar blogs e publicar postagens.
- Sistema de tags para marcar qualquer tipo de recurso, como postagens de blog.
- Sistema de comentários para adicionar recurso de comentários a qualquer tipo de recurso, como postagens de blog.

#### gestão de arquivos

- Ele é usado para fazer upload e organizar arquivos em uma estrutura hierárquica de pastas.
- Este módulo é baseado no sistema BLOB Storing, onde pode utilizar diferentes provedores de armazenamento para armazenar o conteúdo dos arquivos.

#### formas

- Crie pesquisas, gerencie inscrições em eventos, colete endereços de e-mail para um boletim informativo, crie um questionário ou até mesmo receba uma solicitação de pedido.

#### identidade

- Gerencia funções e usuários no sistema em que o usuário pode ter várias funções.
- Permite permissões em níveis de função e usuário.
- Ativar/desativar autenticação de dois fatores e bloqueio de usuário por usuário.
- Gerenciar perfil de usuário básico e senha.
- Gerencia tipos de declarações no sistema, define declarações para funções e usuários.
- Página de configuração para gerenciar a complexidade da senha, login do usuário, conta e bloqueio.
- Suporta interações de login social (Microsoft, Google, Twitter).

#### gestão linguística

- Gerencia idiomas de aplicativos e textos de localização.
- Adicione ou remova idiomas dinamicamente.
- Altere dinamicamente todos os textos na UI
- Recursos como adicionar, remover, atualizar o idioma
- Inclui um texto de idioma que traduz a interface do usuário do aplicativo para um novo idioma ou atualiza textos para um idioma existente.

#### openid

- Inclui páginas como Aplicativo e Escopos
- Página do aplicativo que fornece recursos como adicionar ou editar aplicativos
- Um conjunto de permissões disponíveis na página de lista de aplicativos

#### pagamento

- Os recursos incluem integração para gateways de pagamento
- Suporta pagamentos únicos ou recorrentes

