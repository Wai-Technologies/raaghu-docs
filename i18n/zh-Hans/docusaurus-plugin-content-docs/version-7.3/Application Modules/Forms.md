---
sidebar_position: 7
---

# 形式 

该模块允许您创建调查问卷以收集信息。表单模块可以在信息提交时存储响应，并且您可以将数据导出到CSV文件中。您可以通过表单的唯一链接与他人分享您的表单。您可以请求身份验证或允许匿名回复。它类似于Google表单应用程序。使用领域非常广泛，您可以创建调查、管理活动注册、收集电子邮件地址用于新闻通讯、创建测验，甚至接收订单请求。

请参阅[模块描述页面](https://commercial.abp.io/modules/Volo.Forms)以获取有关模块功能的概述。

UI屏幕截图将会被添加

内部结构
---------

### 领域层

聚合

该模块遵循[实体最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Entities)指南。

* **表单（Form）**

  * 表单实体的主要聚合根。表单的选项、标题和描述存储在此实体上。
* **问题基础（QuestionBase）**

  * 存储表单的问题。此实体依赖于表单实体的FormId。
* **表单响应（FormResponse）**

  * 每次表单提交都是一个新的表单响应记录。表单响应包含答案记录。

仓储

该模块遵循[仓储最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories)指南。

为此模块定义了以下自定义仓储：

* IForm存储库
* IQuestion存储库
* IChoice存储库
* IResponse存储库

领域服务

该模块遵循[领域服务最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Domain-Services)指南。

### 问题管理器

QuestionManager用于管理您表单的问题。

### 应用层

应用服务

* 表单申请服务
* 问题应用服务
* 响应应用服务

### 数据库提供程序

通用

表/集合前缀和架构

默认情况下，所有表/集合都使用Frm前缀。如果需要更改表前缀或设置模式名称（如果您的数据库提供程序支持），请在FormsDbProperties类上设置静态属性。

连接字符串

该模块使用Forms作为连接字符串名称。如果您没有定义此名称的连接字符串，它将回退到默认连接字符串。

有关详细信息，请参阅[连接字符串](https://docs.abp.io/en/abp/latest/Connection-Strings)文档。

Entity Framework Core / MongoDB

表/集合

* **FrmForms**：表单列表。
* **FrmQuestions**：表单的问题
* **FrmAnswers**：表单响应的答案。
* **FrmChoices**：问题的选项。
* **FrmFormResponses**：每当用户提交表单时都会创建一个新的表单响应。

**实体关系**

![实体关系](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/entityRelationship.jpg)

### 权限

有关为该模块定义的所有权限，请参阅FormsPermissions类的成员。

希望这有助于将英语文件转化为中文。如果您需要进一步的翻译或有其他问题，请告诉我。
