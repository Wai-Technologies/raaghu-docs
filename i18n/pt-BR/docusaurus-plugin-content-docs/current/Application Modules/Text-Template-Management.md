---
sidebar_position: 14
---

# Gerenciamento de modelos de texto

Este módulo é usado para armazenar e editar o conteúdo do modelo para [o sistema de modelos de texto](https://docs.abp.io/en/abp/latest/Text-Templating "") da estrutura ABP. Portanto, talvez você precise entendê-lo para entender melhor o propósito deste módulo.

Existem diferentes casos de uso do sistema de modelos de texto. Por exemplo, [o Módulo de Conta](https://docs.abp.io/en/commercial/7.0/modules/Account "") o utiliza para definir modelos de envio de e-mails quando precisa enviar e-mails aos usuários (como enviar e-mail de "link de redefinição de senha"). Este módulo fornece UI para editar facilmente esses modelos de email.

Ver[a página de descrição do módulo](https://commercial.abp.io/modules/Volo.TextTemplateManagement "")para uma visão geral dos recursos do módulo. .
## Interface de usuário
### itens de menu
O módulo Gerenciamento de modelos de texto adiciona os seguintes itens ao menu "Principal", no item de menu "Administração":

- **Text Templates**: List, visualizar e filtrar modelos de texto.

TextTemplateManagementMainMenuNames class tem as constantes para os nomes dos itens do menu.
### páginas
Text Templates

A página Modelos de Texto é usada para visualizar a lista de modelos definidos na aplicação.

![Text Templates página é usada para visualizar a lista de modelos](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/text-template.png)

Clique em Ações -> Editar Conteúdo para editar o conteúdo de um modelo. Existem dois tipos de UI para editar o conteúdo de um modelo:

![Editar conteúdo para um modelo](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/text-template-edit.png)
