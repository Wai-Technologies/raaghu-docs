---
sidebar_position: 12
---

# 支付

支付模块实现了应用程序的支付网关集成。它提供一次性付款和定期付款选项。

* 支持 [Stripe](https://stripe.com/en-in)、[PayPal](https://www.paypal.com/in/home)、[2Checkout](https://www.2checkout.com/)、[PayU](https://corporate.payu.com/)、[Iyzico](https://www.iyzico.com/en) 和 [Alipay](https://global.alipay.com/platform/site/ihome) 支付网关。

请参阅模块描述页面，了解该模块功能的概述。

支持的网关包
--------------------------

要使用支付网关，您需要像上面在手动安装部分中所解释的那样，将相关的 NuGet 包添加到相关项目中，并将 `DependsOn` 添加到相关模块。例如，如果您不想使用 PayU，就不必使用它的 NuGet 包。

在将支付网关的包添加到您的应用程序后，您还需要配置全局支付模块选项以及您已添加的支付模块的选项。请参阅下面的选项部分。

### 创建自定义支付网关

如果您需要与现有网关不同的支付网关，您可以自己创建自定义支付网关。创建自定义支付网关需要两个步骤。第一步是创建实现 `IPaymentGateway` 的支付网关对象。这个接口公开了核心的支付操作，没有任何用户界面。第二步是创建支付网关的用户界面。这个用户界面用于将用户重定向到支付网关并验证支付。

请按照[此处的说明](https://docs.abp.io/en/commercial/7.0/modules/payment-custom-gateway)创建自定义支付网关。

### 包

此模块遵循[模块开发最佳实践指南](https://docs.abp.io/en/abp/latest/Best-Practices/Index)并包含多个 NuGet 和 NPM 包。如果您想了解这些包和它们之间的关系，请参阅指南。

您可以访问[支付模块包列表页面](https://abp.io/packages?moduleName=Volo.Payment)以查看与该模块相关的包的列表。

### 用户界面

#### 公共页面

支付网关选择

此页面允许选择支付网关。如果为最终应用程序配置了一个支付网关，此页面将被跳过。

#### PayU 预付款页面

此页面用于将用户的姓名、姓氏和电子邮件地址发送到 PayU。

#### 管理员页面

支付计划页面

此页面用于管理订阅的支付计划。您可以为每个网关将外部订阅连接到计划中。

![管理员页面](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-plan.png)
支付请求页面

此页面列出了应用程序中的所有支付请求操作。

![管理员页面](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-request.png)


希望这有助于将英语文件转化为中文。如果您需要进一步的翻译或有其他问题，请告诉我。
