---
sidebar_position: 7
---

# Formulários

Este módulo permite criar questionários para coletar informações. O módulo de formulários pode armazenar respostas à medida que chegam e você pode exportar os dados para um arquivo CSV. Você pode compartilhar seu formulário com outras pessoas com o link exclusivo do formulário. Você pode solicitar autenticação ou permitir resposta anônima. É semelhante ao aplicativo Formulário Google. A área de utilização é bastante ampla, você pode criar pesquisas, gerenciar inscrições em eventos, coletar endereços de e-mail para newsletter, criar um quiz e até receber uma solicitação de pedido.

Consulte [a página de descrição do módulo](https://commercial.abp.io/modules/Volo.Forms "") para obter uma visão geral dos recursos do módulo.

I SCREENSHOTOS A ADD
## interno
### Camada de domínio
Aggregados

Este módulo segue o guia de [Melhores Práticas e Convenções para Entidades.](https://docs.abp.io/en/abp/latest/Best-Practices/Entities "")

- 
    **Formulário**
        
    - A principal raiz agregada das entidades do formulário. As opções do formulário, título e descrição estão sendo armazenadas nesta entidade.
        
    

- 
    **QuestionBase**
        
    - Ele armazena perguntas do formulário. Esta entidade depende do formulário de entidade por FormId.
        
    

- 
    **FormResponse**
        
    - Cada envio de formulário é um novo registro de resposta de formulário. A resposta do formulário possui registros de resposta.
        
    


Repositórios


Este módulo segue o guia [Melhores práticas e convenções do repositório.](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories "")

Os seguintes repositórios personalizados são definidos para este módulo:

- IFormRepositório
- IQuestionRepository
- IChoiceRepositório
- IResponseRepositório

Serviços de domínio

Este módulo segue o guia de [práticas recomendadas e convenções de serviços de domínio.](https://docs.abp.io/en/abp/latest/Best-Practices/Domain-Services "")
### questionador
QuestionManager é usado para ⁇  as questões do seu formulário.
### Camada de aplicação
Serviços de aplicativos

- FormApplicationService
- QuestionAppService
- RespostaAppService

### provedores de banco de dados
Comum
### Prefixo e esquema de tabela/coleção
Todas as tabelas/coleções usam o prefixo Frm por padrão. Defina propriedades estáticas na classe FormsDbProperties se precisar alterar o prefixo da tabela ou definir um nome de esquema (se for compatível com seu provedor de banco de dados).
### Cadeia de conexão
Este módulo usa Formulários para o nome da cadeia de conexão. Se você não definir uma cadeia de conexão com esse nome, ela retornará à cadeia de conexão padrão.

Consulte a documentação das [cadeias de conexão](https://docs.abp.io/en/abp/latest/Connection-Strings "") para obter detalhes.

Centro-Quadro de Entidade / MongoDB

Tabelas / Coleções

- **FrmForms: Lista de formulários .**
- **FrmQuestions: Perguntas dos formulários**
- **FrmAnswers: Respostas da resposta do formulário.**
- **FrmChoices: Escolhas de perguntas. .**
- **FrmFormResponses: Uma nova resposta de formulário é criada sempre que o usuário envia o formulário.**

**Relacionamentos de Entidade**

![Relacionamentos de Entidade](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/entityRelationship.jpg)
### permissões
Consulte os membros da classe FormsPermissions para obter todas as permissões definidas para este módulo.
