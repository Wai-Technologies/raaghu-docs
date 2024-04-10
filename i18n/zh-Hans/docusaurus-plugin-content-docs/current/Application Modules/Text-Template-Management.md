---
sidebar_position: 14
---

# 文本模板管理

此模块用于存储和编辑 ABP 框架的[文本模板系统](https://docs.abp.io/en/abp/latest/Text-Templating)的模板内容。因此，您可能需要了解它，以更好地理解此模块的目的。

文本模板系统有不同的用途。例如，[账户模块](https://docs.abp.io/en/commercial/7.0/modules/Account)在需要向用户发送电子邮件时（例如发送“重置密码链接”电子邮件）使用它来定义模板。此模块提供了 UI，以便轻松编辑这些电子邮件模板。

请参阅[模块描述页面](https://commercial.abp.io/modules/Volo.TextTemplateManagement)以了解该模块功能的概述。

用户界面
--------------

### 菜单项

文本模板管理模块将以下项目添加到“主”菜单，位于“管理”菜单项下：

* **文本模板**：列出、查看和筛选文本模板。

TextTemplateManagementMainMenuNames 类包含菜单项名称的常量。

### 页面

文本模板

文本模板页面用于查看应用程序中定义的模板列表。

![文本模板页面用于查看模板列表](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/text-template.png)

单击“操作” -> “编辑内容”以编辑模板的内容。有两种类型的 UI 用于编辑模板内容：

![编辑模板内容](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/text-template-edit.png)