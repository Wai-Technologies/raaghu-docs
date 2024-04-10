---
sidebar_position: 6
---

# 文件管理


该模块用于上传、下载和组织文件，以层次化文件夹结构进行管理。它还支持多租户，并允许您为租户设定总大小限制。

该模块基于[BLOB存储](https://docs.abp.io/en/abp/latest/Blob-Storing)系统，因此可以使用不同的存储提供程序来存储文件内容。

请参阅[模块描述页面](https://commercial.abp.io/modules/Volo.FileManagement)以获取有关模块功能的概述。

React-UI
--------

文件管理模块基于前述的[BLOB存储](https://docs.abp.io/en/abp/latest/Blob-Storing)系统，它使用FileManagementContainer作为BLOB容器。

设置BLOB提供程序
---------------------

文件管理模块基于前述的[BLOB存储](https://docs.abp.io/en/abp/latest/Blob-Storing)系统，它使用FileManagementContainer作为BLOB容器。

您必须为FileManagementContainer设置一个BLOB提供程序。

```C#
  Configure(options =>
            {
                options.Containers.Configure(c =>
                    {
                        c.UseDatabase(); // 您也可以使用文件系统或Azure提供程序。
                    });
                });
```

请查看[BLOB存储提供程序文档](https://docs.abp.io/en/abp/latest/Blob-Storing#blob-storage-providers)以获取有关提供程序以及如何使用它们的更多信息。

### 包

该模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)，由多个NuGet和NPM包组成。如果您想了解这些包及它们之间的关系，请参阅该指南。

您可以访问[文件管理模块包列表](https://abp.io/packages?moduleName=Volo.FileManagement)页面以查看与该模块相关的包的列表。

### 用户界面

### 菜单项

文件管理模块将以下项添加到“主”菜单下的“管理”菜单项中：

* **文件管理**：列出、查看所有文件夹结构和文件。

FileManagementMenuNames类包含了菜单项名称的常量。

### 页面

文件管理

文件管理页面用于创建文件夹、上传文件并查看存储在应用程序中的文件和文件夹列表。

![文件管理页面用于创建文件夹、上传文件并查看文件夹和文件的列表](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management.png)

### 文件夹

您可以通过单击页面右上角的“创建文件夹”按钮来创建新文件夹。文件夹将在活动目录中创建。

![您可以通过单击页面右上角的“创建文件夹”按钮来创建新文件夹。文件夹将在活动目录中创建。](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-new.png)

您可以在左侧树视图上将文件夹移动到另一个目录中。

![您可以在左侧树视图上将文件夹移动到另一个目录中](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-move.png)

您可以通过单击“操作” -> “重命名”来重命名文件夹。

![您可以通过单击“操作” -> “重命名”来重命名文件夹](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-rename.png)
### 文件

您可以通过单击页面右上角的“上传文件”按钮来上传文件。这将打开一个新的模态框，以选择要上传的本地文件。文件将上传到活动目录中。

![您可以通过单击页面右上角的“上传文件”按钮来上传文件。](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-upload.png)

您可以通过在数据表上单击“操作” -> “移动”来移动文件。

![您可以通过在数据表上单击“操作” -> “移动”来移动文件。](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-move.png)
您可以通过在数据表上单击“操作” -> “重命名”来重命名文件。

![您可以通过在数据表上单击“操作” -> “重命名”来重命名文件](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/file-management-rename-edit.png)
### 数据种子

该模块不会种子任何数据。

### 内部结构

#### 领域层

聚合

该模块遵循[实体最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Entities)指南。

#### TextTemplateContent

* DirectoryDescriptor（聚合根）：表示一个文件夹。
* FileDescriptor（聚合根）：表示一个文件。

仓储

该模块遵循[仓储最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories)指南。

为该模块定义了以下自定义仓储：

* IDirectoryDescriptorRepository
* IFileDescriptorRepository

领域服务

该模块遵循[领域服务最佳实践和约定](https://docs.abp.io/en/abp/latest/Best-Practices/Domain-Services)指南。

#### 目录管理器

DirectoryManager用于管理文件夹，如创建、重命名、移动和删除。

#### 文件管理器

DirectoryManager用于管理文件夹，如创建、重命名、移动和删除。

#### 设置

该模块不定义任何设置。

#### 特性

您可以为每个租户启用或禁用此模块，还可以为每个租户设置最大存储大小。有关为该模块定义的所有特性，请参阅FileManagementFeatures类的成员。

#### 应用层

应用服务

* DirectoryDescriptorAppService（实现IDirectoryDescriptorAppService）：实现文件管理UI的用例。
* FileDescriptorAppServiceFileDescriptorAppService（实现IFileDescriptorAppService）：实现文件管理UI的用例。

#### 数据库提供程序

通用

#### 表/集合前缀和架构

默认情况下，

所有表/集合都使用Fm前缀。如果您需要更改表前缀或设置模式名称（如果您的数据库提供程序支持），请在FileManagementDbProperties类上设置静态属性。

#### 连接字符串

该模块使用FileManagement作为连接字符串名称。如果您没有定义此名称的连接字符串，它将回退到默认连接字符串。

有关详细信息，请参阅[连接字符串](https://docs.abp.io/en/abp/latest/Connection-Strings)文档。

Entity Framework Core

#### 表

* **FmDirectoryDescriptors**
* **FmFileDescriptors**

MongoDB

#### 集合

* **Fm目录描述符**
* **Fm文件描述符**

MongoDB

#### 权限

请参阅FileManagementPermissions类的成员，以获取为该模块定义的所有权限。

希望这能帮助您将英语文件转化为中文。如果您需要进一步的翻译或有其他问题，请告诉我。
