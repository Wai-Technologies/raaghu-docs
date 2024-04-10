---
sidebar_position: 4
---

# Chat

This module implements real time messaging between users for an application.

Installation
------------

No further installation is needed in terms of using ABP Suite and Manual Installation as it comes along with startup template

### Packages

This module follows the [module development best practices guide](https://docs.abp.io/en/abp/latest/Best-Practices/Index) and consists of several NuGet and NPM packages. See the guide if you want to understand the packages and relations between them.

You can visit [Chat module package list page](https://abp.io/packages?moduleName=Volo.Chat) to see list of packages related with this module.

### User interface

### Chat page

This is the page that users send messages to each other.

![This is the page that users send messages to each other](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/chat.png)

### Internals

### Domain Layer

Entities and aggregate roots

* Message (aggregate root): Represents a chat message. Implements IMultiTenant.

  * Text: Message content.
  * IsAllRead: Message read information.
  * ReadTime: Message read time information.
* ChatUser (aggregate root): Represents a chat user.

Implements IUser and IUpdateUserData interfaces.

* UserMessage: is created for each side (sender and receiver) of a message.

  Implements IMultiTenant and IAggregateRoot interfaces.

  * ChatMessageId: Id of related Message.
  * UserId: Id of related ChatUser.
  * TargetUserId: Id of other related ChatUser.
  * Side: States that if it is a send message or received message.
  * IsRead: Read information.
  * ReadTime: Read time information.
* Conversation: is created for each side of a conversation between users. Implements IMultiTenant and IAggregateRoot interfaces.

  Implements IMultiTenant and IAggregateRoot interfaces.

  * UserId: Id of related ChatUser.
  * TargetUserId: Id of other related ChatUser.
  * LastMessageSide: States the side of the latest message (send or received).
  * LastMessage: Content of the last message in the conversation.
  * LastMessageDate: Date of the last message in the conversation.
  * UnreadMessageCount: Count of unread messages in the conversation.

### Repositories

This module follows the [Repository Best Practices &amp; Conventions](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories) guide.

Following custom repositories are defined for this module:

* IConversationRepository
* IUserMessageRepository
* IChatUserRepository
* IMessageRepository

### Domain Services

* MessagingManager

### Application layer

### Application services

* ConversationAppService (implements IConversationAppService): Used to send messages, get conversation between users and mark a conversation as read.
* SettingsAppService (implements ISettingsAppService): Used to save chat settings.
* ContactAppService (implements IContactAppService): Used to get list of contacts and total unread message count of a user.
* DistributedEventBusRealTimeChatMessageSender (implements IRealTimeChatMessageSender): Used to publish chat messages to distributed event bus.
* SignalRRealTimeChatMessageSender (implements IRealTimeChatMessageSender): Used to send messages to target SignalR client.
