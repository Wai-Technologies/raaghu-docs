---
sidebar_position: 6
---

# Gerenciamento de arquivos

Este módulo é usado para fazer upload, download e organizar arquivos em uma estrutura hierárquica de pastas. Também é compatível com multilocação e você pode determinar o limite de tamanho total para seus inquilinos.

Este módulo é baseado no sistema [BLOB Storing](https://docs.abp.io/en/abp/latest/Blob-Storing ""), portanto pode utilizar diferentes provedores de armazenamento para armazenar o conteúdo do arquivo.

Consulte [a página de descrição do](https://commercial.abp.io/modules/Volo.FileManagement "") módulo para obter uma visão geral dos recursos do módulo.

## reage-ui
O módulo de gerenciamento de arquivos é baseado no sistema de armazenamento [BLOB conforme](https://docs.abp.io/en/abp/latest/Blob-Storing "") definido anteriormente e usa FileManagementContainer como um contêiner BLOB.
## Configurando provedor BLOB
O módulo de gerenciamento de arquivos é baseado no sistema de armazenamento [BLOB conforme](https://docs.abp.io/en/abp/latest/Blob-Storing "") definido anteriormente e usa FileManagementContainer como um contêiner BLOB.

Você deve definir um provedor LB para o FileManagementContainer.


Por favor, ⁇[LB Storage Fornece ⁇](https://docs.abp.io/en/abp/latest/Blob-Storing#blob-storage-providers "")para mais informações sobre os provedores e como utilizá-los.
### pacotes

Este módulo segue o [guia de práticas recomendadas de desenvolvimento de módulo](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar[Lista de pacotes de ⁇  de gestão de arquivos](https://abp.io/packages?moduleName=Volo.FileManagement "")página para ver a lista de pacotes relacionados com este ⁇ .
### Interface de usuário
### itens de menu
O módulo Gerenciamento de Arquivos adiciona os seguintes itens ao menu "Principal", no item de menu "Administração":

- **Gerenciamento de arquivos: Listar, ver toda a estrutura de pastas e arquivos.**

FileManagementMenuNames classe tem as constantes para os nomes dos itens do menu.
### páginas
Gestão de Arquivos

A página de Gestão de Arquivos é usada para ⁇  pastas, carregar arquivos e visualizar a lista de pastas e arquivos que ⁇ am na ⁇ .

![A página de Gestão de Arquivos é usada para ⁇  pastas, carregar arquivos e visualizar a lista de pastas](.https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management.png)
### pastas
A página Gerenciamento de arquivos é usada para criar pastas, fazer upload de arquivos e visualizar a lista de pastas e arquivos armazenados no aplicativo.

![Você pode ⁇  uma nova pasta clicando em Criar ⁇  de pasta que está ⁇  no topo da página. A pasta será ⁇  no ⁇  ⁇ .](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-new.png)

Você pode mover uma pasta para outro diretório na visualização em árvore esquerda.

![Você pode mover uma pasta para outro ⁇  na vista de ⁇  esquerda](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-move.png)

Você pode renomear uma pasta clicando em Ações -> Renomear na tabela.

![Você pode renomear uma pasta](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-rename.png)
### arquivos
Você pode fazer upload de arquivos clicando no botão Carregar arquivos localizado no canto superior direito da página. Isso abrirá um novo modal para selecionar seus arquivos locais para upload. Os arquivos serão carregados no diretório ativo.

![Você pode carregar arquivos clicando em Adicionar arquivos ⁇  que ⁇  no topo da página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-upload.png)

Você pode mover arquivos clicando em Ações -> Mover na tabela de dados.

![Você pode mover arquivos clicando Actions Move na ⁇  de dados.](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-move.png)

Você pode renomear um arquivo clicando em Ações -> Renomear na tabela de dados.

![Você pode renomear um arquivo clicando Actions Rename na ⁇  de dados](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-rename-edit.png)
### Semente de dadoss
Este módulo não propaga nenhum dado.
### interno
#### Camada de Domínio
Aggregados

Este módulo segue o guia de [Melhores Práticas e Convenções para Entidades.](https://docs.abp.io/en/abp/latest/Best-Practices/Entities "").
#### texttemplatecontent

- DirectoryDescriptor (raiz agregada): Representa uma pasta.
- FileDescriptor (aggregate root): Representa um arquivo.

Repositórios
Este módulo segue o guia [Melhores práticas e convenções do repositório.](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories "")

Os seguintes repositórios personalizados são definidos para este modu


- Descrição do IDRepositório
- IFileDescriptorRepositório

Serviços de Domínio
Este módulo segue o guia de práticas recomendadas e convenções [de serviços de domínio.](https://docs.abp.io/en/abp/latest/Best-Practices/Domain-Services "")      
#### Gerenciador de diretório
DirectoryManager é usado para gerenciar suas pastas como criar, renomear, mover e excluir.
#### filemanager
DirectoryManager é usado para gerenciar suas pastas como criar, renomear, mover e excluir.
#### Configurações
Este módulo não define nenhuma configuração.
#### recursos
Você pode ativar ou desativar este módulo para cada locatário e também pode definir o tamanho máximo de armazenamento para cada locatário. Consulte os membros da classe FileManagementFeatures para todos os recursos definidos para este módulo.
#### Camada de aplicação
Serviços de aplicativos

- DirectoryDescriptorAppService (implements IDirectoryDescriptorAppService): implementa os casos de uso da gerência de arquivos I.
- Descrição do arquivoAppServiceDescriptorAppService (implements IFileDescriptorAppService): Implica os casos de uso da gerência de arquivos I.

#### provedores de banco de dados
Comum
#### Prefixo e esquema de tabela/coleção
Todas as ⁇ /coleções usam o prefixo Fm por padrão. Definir propriedades ⁇ icas na classe FileManagementDbProperties se você precisa ⁇  o prefixo de ⁇  ou definir um nome de esquema (se suportado pelo seu provedor de banco de dados).
#### Cadeia de conexão
Todas as tabelas/coleções usam o prefixo Fm por padrão. Defina propriedades estáticas na classe FileManagementDbProperties se precisar alterar o prefixo da tabela ou definir um nome de esquema (se for compatível com seu provedor de banco de dados).

Consulte a documentação das [cadeias de conexão](https://docs.abp.io/en/abp/latest/Connection-Strings "") para obter detalhes.

Núcleo do Entity Framework
#### mesas

- **FmDirectoryDescrição**
- **FmFileDescriptors**

MongoDB
#### coleções

- **FmDirectoryDescrição**
- **FmFileDescriptors**

MongoDB
#### permissões
Consulte os membros da classe FileManagementPermissions para obter todas as permissões definidas para este módulo.
