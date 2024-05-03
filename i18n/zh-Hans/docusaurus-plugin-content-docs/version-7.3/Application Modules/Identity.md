---
sidebar_position: 9
---

# 身份

此模块实现了应用程序的用户和角色系统：

* 管理系统中的**角色**和**用户**。一个用户可以拥有**多个角色**。
* 在角色和用户级别设置**权限**。
* 启用/禁用**双因素身份验证**和用户**锁定**。
* 管理基本的**用户个人资料**和**密码**。
* 在系统中管理**声明类型**，为角色和用户设置声明。
* 设置页面以管理**密码复杂性**、用户登录、帐户和锁定。
* 支持**LDAP**身份验证。
* 提供**电子邮件和电话号码**验证。
* 支持社交登录集成（Microsoft、Google、Twitter）。
* 管理系统中的**组织单位**。
* 查看系统中的安全日志（登录、注销、更改密码等）。

请参阅模块描述页面，了解该模块功能的概述。

包
--------

此模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)，由多个NuGet和NPM包组成。如果您想了解这些包以及它们之间的关系，请参阅指南。

您可以访问[身份模块包列表页面](https://abp.io/packages?moduleName=Volo.Identity.Pro)以查看与该模块相关的包的列表。

### 菜单项

身份模块将以下项目添加到 "主" 菜单下的 "管理" 菜单项：

* **角色**：角色管理页面。
* **用户**：用户管理页面。
* **声明类型**：声明类型管理页面。
* **组织单位**：组织单位管理页面。
* **安全日志**：安全日志搜索页面。

IdentityMenuNames类包含了菜单项名称的常量。

### 页面

角色管理

角色页面用于管理系统中的角色。角色是分配给用户的权限集合。

![新角色](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)
您可以在此页面创建新角色或编辑角色：

![您可以在此页面创建新角色或编辑角色](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-new.png)
* 默认角色默认分配给新用户。
* 公共角色可见给其他用户。

### 角色权限

您可以管理角色的权限：

### 待添加的用户界面

* 权限是授予角色和用户的应用程序**操作**。
* 拥有角色的用户将**继承**授予该角色的所有权限。
* 任何模块都可以[定义权限](https://docs.abp.io/en/abp/latest/Authorization#permission-system)。一旦您定义了新权限，它将在此页面可用。
* 左侧是**模块列表**。单击模块名称后，可以选中/取消选中与该模块相关的权限。

### 角色声明

您可以为角色设置自定义声明值：

![编辑角色](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-claims.png)

声明类型是从声明类型管理页面中定义的声明列表中检索的（见下文）。

### 用户管理

用户页面用于管理系统中的用户。

![用户管理](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users.png)

您可以在此页面创建新用户或编辑现有用户：

![您可以在此页面创建新用户或编辑现有用户](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-new.png)

* 用户可以在系统中拥有**零个或多个角色**。
* 您可以为每个用户设置**双因素**验证和用户**锁定**设置。
  ![新用户](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)

### 用户权限

用户具有被分配的角色的权限的并集。身份模块还允许向特定用户授予额外的权限。

![编辑用户](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/user-permision.png)

* 权限是授予角色和用户的应用程序**操作**。
* 拥有角色的用户将**继承**授予该角色的所有权限。
* 任何模块都可以[定义权限](https://docs.abp.io/en/abp/latest/Authorization#permission-system)。一旦您定义了新权限，它将在此页面可用。
* 左侧是**模块列表**。单击模块名称后，可以选中/取消选中与该模块相关的权限。

### 声明类型管理

身份模块允许定义自定义声明类型。

![新声明类型](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/claim.png)

* 自定义声明可用于存储用户或角色的附加信息。
* 然后可以在应用程序代码中为已验证的用户访问自定义声明值。
* 如果使用OpenIddict模块，声明类型也会被使用。

### 组织单位

组织单位页面用于管理组织单位、组织单位成员和组织单位角色。

![组织单位页面用于管理组织单位、组织单位成员和组织单位角色](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

您可以在此页面添加新的组织单位或编辑现有的组织单位。要添加新的根组织单位，请单击 "新根单位" 按钮并填写打开的表单。

![新组织单位](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

要向现有组织单位添加子单位，请右键单击现有组织单位，然后单击 "添加子单位" 上下文菜单项。类似地，要编辑组织单位，请右键单击现有组织单位，然后单击 "编辑" 上下文菜单项。

![编辑组织单位](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit-edit.png)

您可以使用成员选项卡管理组织单位的成员，通过选择组织单位

### 安全

日志

安全日志页面用于搜索和查看系统中与身份验证相关的操作（登录、注销、更改密码等）。

![安全日志](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/security-logs.png)


希望这有助于将英语文件转化为中文。如果您需要进一步的翻译或有其他问题，请告诉我。
