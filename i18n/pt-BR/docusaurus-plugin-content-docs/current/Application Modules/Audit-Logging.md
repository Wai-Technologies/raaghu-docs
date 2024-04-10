---
sidebar_position: 3
---

# Registro de auditoria

Este módulo implementa o sistema Audit Logging de uma aplicação;

- Veja todos os logs de auditoria do sistema e os logs de auditoria do filtro facilmente.
- Exibir detalhes de log de auditoria, ações executadas e entidades alteradas.
- Veja todas as alterações de entidades e filtre os logs de alterações de entidades.
- Visualize detalhes de uma alteração de entidade.
- Veja todas as alterações de uma entidade.
- Este módulo também define widgets reutilizáveis ​​de "Duração média de execução por dia" e "Taxa de erros".

Consulte [a página de descrição do](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index "") módulo para obter uma visão geral dos recursos do módulo.

## como instalar

A identidade está pré-instalada [nos modelos de inicialização.](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index "") Portanto, não há necessidade de instalá-lo manualmente.

### pacotes

Este módulo segue o [guia de práticas recomendadas de](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") desenvolvimento de módulo e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar a página de lista de pacotes do módulo [Audit Logging para ver a lista de pacotes](https://abp.io/packages?moduleName=Volo.AuditLogging.Ui "") relacionados a este módulo.

### itens de menu
O módulo de logs de auditoria adiciona os seguintes itens ao menu "Principal", no item de menu "Administração"

- Logs de auditoria: liste, visualize e filtre logs de auditoria e alterações de entidade.

IAbpAuditLoggingMainMenuNames classe tem as constantes para os nomes dos itens de menu.
### páginas
Logs de auditoria

A guia Logs de auditoria é usada para listar, visualizar e filtrar logs de auditoria e alterações de entidade no sistema.

![A aba de logs de auditoria é usada para listar, visualizar e filtrar logs de auditoria e ⁇  de ⁇  no sistema](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/audit-logs.png)
### Detalhes do registro de auditoria
Você pode visualizar detalhes de um log de auditoria clicando no ícone da lupa em cada linha do log de auditoria:

- **Geral: Esta guia contém informações detalhadas sobre o log de auditoria.**
- **Ações: Esta aba mostra uma lista de ações (ações do controlador e chamadas de métodos de serviço da aplicação com seus parâmetros) executadas durante uma solicitação web.**
- **Mudanças: Esta guia mostra as entidades alteradas durante a solicitação da web.**

