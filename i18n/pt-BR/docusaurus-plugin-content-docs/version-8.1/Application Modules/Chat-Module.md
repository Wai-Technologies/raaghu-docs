---
sidebar_position: 4
---

# Bater papo

Este módulo implementa mensagens em tempo real entre usuários para um aplicativo.
## instalação
Nenhuma instalação adicional é necessária em termos de uso do ABP Suite e instalação manual, pois vem junto com o modelo de inicialização
### pacotes

Este módulo segue o [guia de práticas recomendadas de desenvolvimento de módulo](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar a [página da lista de pacotes do módulo Chat](https://abp.io/packages?moduleName=Volo.Chat "") para ver a lista de pacotes relacionados a este módulo.
### Interface de usuário
### página de bate-papo
Esta é a página que os usuários enviam mensagens uns aos outros.

![Esta é a página que os usuários enviam mensagens entre si](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/chat.png)
### interno
### Camada de Domínio
Entidades e raízes agregadas

- 
    
    Mensagem (raiz agregado): Representa uma mensagem de bate-papo. Implements IMultiTenant.
        
    - Texto: Conteúdo de mensagem.
        
    - IsAllRead: Mensagem ler informações.
        
    - ReadTime: Mensagem ler informações sobre o tempo.
        
    

- 
    
    ChatUser (aggregate root): Representa um ⁇  de chat.


Implements IUser e IUpdateUserData interfaces.

- 
    
    UserMessage: é criado para cada lado (sensor e receptor) de uma mensagem.
    
    Implements IMultiTenant e IAggregateRoot interfaces.
        
    - ChatMessageId: Id da Mensagem ⁇ .
        
    - UserId: Id de ChatUser.
        
    - TargetUserId: Id de outros ChatUser.
        
    - Lado: Estados que se trata de uma mensagem de envio ou mensagem recebida.
        
    - IsRead: Leia informações.
        
    - ReadTime: Leia informações sobre o tempo.
        
    

- 
    
    Conversação: é criado para cada lado de uma conversa entre os usuários. Implements IMultiTenant e IAggregateRoot interfaces.
    
    Implements IMultiTenant e IAggregateRoot interfaces.
        
    - UserId: Id de ChatUser.
        
    - TargetUserId: Id de outros relacionados ChatUser.
        
    - LastMessageSide: é o lado da última mensagem (enviar ou receber).
        
    - LastMessage: Conteúdo da última mensagem na conversa.
        
    - LastMessageDate: Data da última mensagem na conversa.
        
    - UnreadMessageCount: Contagem de mensagens ⁇ -vivos na conversa.
        
    


### repositórios
Este módulo segue o guia [Melhores práticas e convenções do repositório.](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories "").

Os seguintes repositórios personalizados são definidos para este módulo:

- IConversationRepository
- IUserMessageRepository
- IChatUserRepositório
- IMessageRepositório

### Serviços de Domínio

- MessagingManager

### Camada de aplicação
### Serviços de aplicativos

- ConversationAppService (implementa IConversationAppService): Usado para enviar mensagens, obter conversas entre usuários e marcar uma conversa como lida.
- SettingsAppService (implementa ISettingsAppService): usado para salvar configurações de bate-papo.
- ContactAppService (implementa IContactAppService): Usado para obter lista de contatos e contagem total de mensagens não lidas de um usuário.
- DistributedEventBusRealTimeChatMessageSender (implementa IRealTimeChatMessageSender): usado para publicar mensagens de bate-papo no barramento de eventos distribuído.
- SignalRRealTimeChatMessageSender (implements IRealTimeChatMessageSender): Usado para enviar mensagens para o cliente de sinal de destino.

