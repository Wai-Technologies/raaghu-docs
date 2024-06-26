---
sidebar_position: 1
---

# 发行说明
发布说明
=============

### 版本 7.3 (与 ABP 商业版 7.3 兼容)

* 添加了基于命令行的 CRUD 页面生成，支持不同类型的关系，如一对一、一对多和多对多关系。
* 对 7.2 版本进行了许多增强和修复。

### 版本 7.2 (与 ABP 商业版 7.2 兼容)

* 在侧边导航菜单上添加了租户和用户的权限。
* 对 7.2 版本进行了许多增强和修复。
* 集成了不同用户的聊天模块。
* 对 7.2 版本进行了增强和修复。

### 版本 7.1 (与 ABP 商业版 7.1 兼容)

* 允许在 SaaS 模块中模拟任意用户。
* 成功的用户可以在“我的帐户”中添加个人资料图片。
* 对 7.1 版本进行了许多增强和修复。

### 版本 7.0 (与 ABP 商业版 7.0 兼容)

* 应用程序完全兼容 ABP，包括内置页面，如仪表板、租户、用户、设置、语言等等。
* **可完全替代和自定义的组件：**数据表、文件上传器、表单、电子邮件等。
* 易于切换到浅色、深色和半深色主题选项。
* Adobe XD UI 套件设计库。
* 登录页面上提供不同的语言选择选项。
* 仪表板和模块中的更改语言功能。
* 启用了新功能，自动生成具有不同 HTTP 客户端支持的 DTO、服务和模式的自动服务代理。
* 自定义图标库，具有更多的添加和增强功能。
* 引入了用户查看元素、组件并检查不同状态下行为的 Storybook。
* 在下面的部分中提到了集成在应用程序中的模块。
* 为不同模块实现了本地化。

### 模块

#### 帐户

* 提供带有用户名和密码的登录页面。
* 提供注册页面以创建新帐户。
* 实施了 Identity Server 身份验证服务器的用户界面和功能。

#### 审计日志

* 提供审计日志报告的用户界面，用于审计基础设施，允许搜索、筛选和显示审计日志实体和实体更改日志。
* 包含关于每个客户端请求的关键数据，如 HTTP 方法、HTTP 返回状态、请求执行持续时间以及成功或失败情况。

#### SaaS

* 包括租户和版本等页面。
* 允许管理租户，其中租户是您应用程序的客户。
* 允许创建版本，其中版本可以分配给租户的不同功能集。
* 允许主机用户更改租户用户的密码。

#### 博客

* 在单个应用程序中创建多个博客。

#### CMS Kit

* 提供页面管理系统，用于管理动态页面。
* 博客系统，用于创建博客并发布文章。
* 标签系统，用于为任何类型的资源添加标签，如博客文章。
* 评论系统，添加评论功能到任何类型的资源，如博客文章。

#### 文件管理

* 用于上传和组织文件的分层文件夹结构。
* 该模块基于 BLOB 存储系统，可以使用不同的存储提供程序来存储文件内容。

#### 表单

* 创建调查，管理活动注册，收集电子邮件地址用于新闻通讯，创建弹出式测验，甚至获取订单请求。

#### 身份

* 在系统中管理角色和用户，允许用户拥有多个角色。
* 允许在角色和用户级别设置权限。
* 启用/禁用两因素身份验证和用户锁定。
* 管理基本用户配置文件和密码。
* 在系统中管理声明类型，将声明分配给角色和用户。
* 设置页面用于管理密码复杂性、用户登录、帐户和锁定。
* 支持社交登录互动（Microsoft、Google、Twitter）。

#### 语言管理

* 管理应用程序语言和本地化文本。
* 动态添加或删除语言。
* 动态更改用户界面上的所有文本。
* 具有添加、删除、更新语言的功能。
* 包括一种语言文本，将应用程序的用户界面翻译成新语言或更新现有语言的文本。

#### OpenId

* 包括应用程序和范围等页面。
* 应用程序页面提供添加或编辑应用程序等功能。
* 应用程序列表页面上提供一系列权限的范围。

#### 付款

* 功能包括支付网关集成。
* 支持一次性或重复性付款。
