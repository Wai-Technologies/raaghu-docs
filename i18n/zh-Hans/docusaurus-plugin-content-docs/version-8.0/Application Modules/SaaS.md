---
sidebar_position: 13
---

# 萨斯

以下是您提供的文本的中文翻译：

# Saas 模块

此模块用于在多租户应用程序中管理租户和版本；

* 管理系统中的**租户**和**版本**。一个租户可以有一个版本。
* 设置租户的**功能**。
* 设置租户的**连接字符串**。
* 设置版本和租户的**功能**。

请参阅模块描述页面，了解该模块功能的概述。

包
--------

此模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)，包含多个 NuGet 和 NPM 包。如果您想了解这些包和它们之间的关系，请参阅指南。

您可以访问[SaaS 模块包列表页面](https://abp.io/packages?moduleName=Volo.Saas)以查看与此模块相关的包的列表。

### 租户-版本订阅

SaaS 模块实现了使用 Payment 模块订阅租户的版本。要启用它，项目必须包含 Volo.Saas 和 Volo.Payment 模块，并且必须按照下面所示配置这些模块。

### 配置

首先，必须正确配置 Payment 模块：

* 安装 Volo.Payment 模块。
```
  abp add-module Volo.Payment
```

或者您可以使用 ABP Suite 安装。

* 配置 Saas 模块以使用 Payment。
```
  Configure(options =>
  {
  options.IsPaymentSupported = true;
  });
```

* 遵循 [Payment 模块文档](https://docs.abp.io/en/commercial/7.0/modules/payment) 中的 [订阅](https://docs.abp.io/en/commercial/7.0/modules/payment#subscriptions) 部分。完成 [启用 Web 钩子](https://docs.abp.io/en/commercial/7.0/modules/payment#enabling-webhooks) 和 [配置计划](https://docs.abp.io/en/commercial/7.0/modules/payment#configuring-plans) 部分。
* 运行应用程序，然后转到 Web 应用程序菜单中的 Saas > 版本页面。
* 创建或编辑一个版本。如果您之前正确执行了这些步骤，**计划**下拉菜单必须可见。为版本选择一个计划。

### 使用

SaaS 模块不包含用于列出供新客户/租户订阅的版本的面向公众的列表页面。首先，您需要在您的应用程序中创建这样一个页面。然后，当新客户/租户选择其中一个版本时，您可以创建一个订阅，并将用户重定向到支付模块，如下所示。

* 注入 `ISubscriptionAppService` 以为版本创建订阅：
```
  public class IndexModel : PageModel
  {
  protected ISubscriptionAppService SubscriptionAppService { get; }

  protected ICurrentTenant CurrentTenant { get; }

  public IndexModel(
  ISubscriptionAppService subscriptionAppService,
  ICurrentTenant currentTenant)
  {
  SubscriptionAppService = subscriptionAppService;
  CurrentTenant = currentTenant;
  }

  public async Task OnPostAsync(Guid editionId)
  {
  var paymentRequest = await SubscriptionAppService.CreateSubscriptionAsync(editionId, CurrentTenant.GetId());

  return LocalRedirectPreserveMethod("/Payment/GatewaySelection?paymentRequestId=" + paymentRequest.Id);
  }
  }
```
支付成功后，租户和版本关系将根据订阅状态进行更新。确保配置了支付网关 Web 钩子。

最后，如果在 [支付配置](https://docs.abp.io/en/commercial/7.0/modules/payment#paymentweboptions) 中配置了 callbackUrl，支付模块将重定向用户到 callbackUrl，并带有 paymentRequestId 参数。在此页面，您可以检查支付请求的状态，并在支付状态确认时向用户显示成功消息。由于支付确认是异步的，您需要重复检查支付状态，直到确认为止。

### 用户界面

#### 菜单项

SaaS 模块向“主”菜单添加以下项，位于“管理”菜单项下：

* **租户**：租户管理页面。
* **版本**：版本管理页面。

SaasHostMenuNames 和 SaasTenantMenuNames 类包含菜单项名称的常量。

#### 页面

租户管理

租户页面用于管理系统中的租户。

![新租户](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant.png)


您可以在此页面上创建新租户或编辑租户：

![您可以在此页面上创建新租户或编辑租户](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant-new.png)

### 连接字符串

您可以管理租户的连接字符串，以便为特定租户使用单独的数据库。如果要为租户使用 Host 数据库，选择“使用共享数据库”选项。

您还可以使用模块特定的数据库连接字符串功能。在这种情况下，您应选择“使用模块特定的数据库连接字符串”选项，然后可以确定您的模块及其连接字符串。在添加之前，您可以单击“检查”来检查连接。

### 租户功能

您可以设置租户的功能。

![您可以设置租户的功能](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant-features.png)

