---
sidebar_position: 5
---

# CMS Kit Pro

This module extends the [open-source CMS Kit module](https://docs.abp.io/en/abp/latest/Modules/Cms-Kit/Index) and adds additional CMS (Content Management System) capabilities to your application.

The following features are provided by the open source CMS Kit module:

* Blogging system to create publish blog posts with multiple blog support.
* Tagging system to tag any kind of resource, like a blog post.
* Comment system to add comments feature to any kind of resource, like blog post or a product review page.
* Reaction system to add reactions (smileys) feature to any kind of resource, like a blog post or a comment.
* Rating system to add rating feature to any kind of resource.
* Menu system to manage public menus dynamically
* Global resources system to add global styles and scripts dynamically.
* Dynamic widget system to create dynamic widgets for page and blog posts.

And the following features are provided by the CMS Kit pro version:

* Newsletter system to allow users to subscribe to newsletters.
* Contact form system to allow users to write messages to you.
* URL forwarding system to create URLs that redirect to other pages or external websites.
* Poll system to create quick polls for users

Click on a feature to understand and learn how to use it. See [the module description page](https://commercial.abp.io/modules/Volo.CmsKit.Pro) for an overview of the module features.

Existing Solutions
------------------

If you want to add the CMS kit to your existing solution, you can use the ABP CLI add-module command:

```shell
 abp add-module Volo.CmsKit.Pro
```

Open the GlobalFeatureConfigurator class in the Domain.Shared project and place the following code to the Configure method to enable all open-source and commercial features in the CMS Kit module.

```c#
  GlobalFeatureManager.Instance.Modules.CmsKit(cmsKit =>
                    {
                    cmsKit.EnableAll();});
                    GlobalFeatureManager.Instance.Modules.CmsKitPro(cmsKitPro =>
                    {
                        cmsKitPro.EnableAll();
                    });
```


Alternatively, you can enable features individually, like cmsKit.Comments.Enable();.

If you are using Entity Framework Core, do not forget to add a new migration and update your database.
