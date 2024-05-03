---
sidebar_position: 5
---

# Kit CMS Pró

Este módulo estende [o módulo CMS Kit](https://docs.abp.io/en/abp/latest/Modules/Cms-Kit/Index "") de código aberto e adiciona recursos adicionais de CMS (Content Management System) ao seu aplicativo.

Os seguintes recursos são fornecidos pelo módulo CMS Kit de código aberto:

- Sistema de blog para criar postagens de blog com suporte a vários blogs.
- Sistema de marcação para marcar qualquer tipo de recurso, como um post do blog.
- Sistema de comentários para adicionar recurso de comentários a qualquer tipo de recurso, como postagem de blog ou página de avaliação de produto.
- Sistema de reação para adicionar recurso de reações (smileys) a qualquer tipo de recurso, como uma postagem de blog ou um comentário.
- Sistema de classificação para adicionar recurso de classificação a qualquer tipo de recurso.
- Sistema de menu para gerenciar menus públicos dinamicamente
- Sistema de recursos globais para adicionar estilos e scripts globais dinamicamente.
- Sistema de widget dinâmico para criar widgets dinâmicos para postagens de páginas e blogs.

E os seguintes recursos são fornecidos pela versão CMS Kit pro:

- Sistema de newsletter para permitir que os usuários assinem newsletters.
- Sistema de formulário de contato para permitir que os usuários escrevam mensagens para você.
- Sistema de encaminhamento de URL para criar URLs que redirecionam para outras páginas ou sites externos.
- Sistema de enquetes para criar enquetes rápidas para usuários

Clique em um recurso para entender e aprender como usá-lo. Consulte [a página de descrição do módulo](https://commercial.abp.io/modules/Volo.CmsKit.Pro "") para obter uma visão geral dos recursos do módulo.
## Soluções Existentes
Se quiser adicionar o kit CMS à sua solução existente, você pode usar o comando add-module da CLI do ABP:

     abp add-module Volo.CmsKit.Pro

Abra a classe GlobalFeatureConfigurator no Domain.Shared projeto e ⁇  o seguinte código para o método Configure para habilitar todos os recursos abertos e comerciais no ⁇  MS Kit.


Alternativamente, você pode habilitar recursos individualmente, como cmsKit.Comments.Enable();

Se você estiver usando o Entity Framework Core, não esqueça de adicionar uma nova migração e atualizar seu banco de dados.
