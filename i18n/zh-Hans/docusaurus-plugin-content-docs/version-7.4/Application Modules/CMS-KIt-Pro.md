---
sidebar_position: 5
---

# CMS 套件专业版

该模块扩展了[开源的CMS Kit模块](https://docs.abp.io/en/abp/latest/Modules/Cms-Kit/Index)，为您的应用程序添加了额外的CMS（内容管理系统）功能。

开源CMS Kit模块提供以下功能：

* 博客系统，用于创建具有多个博客支持的博客帖子。
* 标记系统，用于对任何资源（如博客帖子）进行标记。
* 评论系统，用于向任何资源（如博客帖子或产品评论页面）添加评论功能。
* 反应系统，用于向任何资源（如博客帖子或评论）添加反应（笑脸）功能。
* 评分系统，用于向任何资源添加评分功能。
* 菜单系统，用于动态管理公共菜单
* 全局资源系统，用于动态添加全局样式和脚本。
* 动态小部件系统，用于创建页面和博客帖子的动态小部件。

CMS Kit Pro版本提供以下功能：

* 通讯系统，允许用户订阅通讯。
* 联系表单系统，允许用户给您写信。
* URL转发系统，用于创建将重定向到其他页面或外部网站的URL。
* 调查系统，用于创建用户的快速调查

单击一个功能以了解并学习如何使用它。有关模块功能的概述，请参阅[模块描述页面](https://commercial.abp.io/modules/Volo.CmsKit.Pro)。

现有解决方案
------------------

如果您想将CMS Kit添加到现有的解决方案中，可以使用ABP CLI的`add-module`命令：

```shell
 abp add-module Volo.CmsKit.Pro
```

打开Domain.Shared项目中的GlobalFeatureConfigurator类，并在Configure方法中放置以下代码，以启用CMS Kit模块中的所有开源和商业功能。

```c#
  GlobalFeatureManager.Instance.Modules.CmsKit(cmsKit =>
                    {
                    cmsKit.EnableAll();});
                    GlobalFeatureManager.Instance.Modules.CmsKitPro(cmsKitPro =>
                    {
                        cmsKitPro.EnableAll();
                    });
```


或者，您可以单独启用功能，比如`cmsKit.Comments.Enable();`。

如果您使用Entity Framework Core，请不要忘记添加新迁移并更新您的数据库。
