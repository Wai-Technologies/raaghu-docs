---
sidebar_position: 4
---

# 聊天
以下是提供的英文Markdown文本的中文版本：

# 聊天模块

该模块实现了应用程序用户之间的实时消息传递。

安装
------------

在使用ABP Suite和手动安装方面不需要进一步的安装，因为它随启动模板一起提供。

### 包

该模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)，由多个NuGet和NPM包组成。如果您想了解这些包及它们之间的关系，可以查看该指南。

您可以访问[聊天模块包列表页面](https://abp.io/packages?moduleName=Volo.Chat)以查看与该模块相关的包列表。

### 用户界面

### 聊天页面

这是用户之间发送消息的页面。

![这是用户之间发送消息的页面]https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/chat.png

### 内部结构

### 领域层

实体和聚合根

* 消息（聚合根）：表示聊天消息。实现IMultiTenant。

  * 文本：消息内容。
  * IsAllRead：消息阅读信息。
  * ReadTime：消息阅读时间信息。
* 聊天用户（聚合根）：表示聊天用户。

实现了IUser和IUpdateUserData接口。

* UserMessage：为每个消息的一方（发送方和接收方）创建。

  实现了IMultiTenant和IAggregateRoot接口。

  * ChatMessageId：相关消息的Id。
  * UserId：相关ChatUser的Id。
  * TargetUserId：相关ChatUser的其他Id。
  * Side：表示是发送的消息还是接收的消息。
  * IsRead：阅读信息。
  * ReadTime：阅读时间信息。
* 会话：为用户之间的每一方的会话创建。实现了IMultiTenant和IAggregateRoot接口。

  实现了IMultiTenant和IAggregateRoot接口。

  * UserId：相关ChatUser的Id。
  * TargetUserId：相关ChatUser的其他Id。
  * LastMessageSide：表示会话中最新消息的一方（发送或接收）。
  * LastMessage：会话中最后一条消息的内容。
  * LastMessageDate：会话中最后一条消息的日期。
  * UnreadMessageCount：会话中未读消息的计数。

### 存储库

该模块遵循[存储库最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories)指南。

为该模块定义了以下自定义存储库：

* IConversationRepository
* IUserMessageRepository
* IChatUserRepository
* IMessageRepository

### 领域服务

*消息管理器

### 应用程序层

### 应用程序服务

* ConversationAppService（实现IConversationAppService）：用于发送消息、获取用户之间的会话并标记会话为已读。
* SettingsAppService（实现ISettingsAppService）：用于保存聊天设置。
* ContactAppService（实现IContactAppService）：用于获取用户的联系人列表和总未读消息计数。
* DistributedEventBusRealTimeChatMessageSender（实现IRealTimeChatMessageSender）：用于将聊天消息发布到分布式事件总线。
* SignalRRealTimeChatMessageSender（实现IRealTimeChatMessageSender）：用于将消息发送到目标SignalR客户端。
