---
sidebar_position: 12
---

# Payment

Payment module implements payment gateway integration of an application. It provides one time payment and recurring payment options.

* Supports [Stripe](https://stripe.com/en-in), [PayPal](https://www.paypal.com/in/home), [2Checkout](https://www.2checkout.com/), [PayU](https://corporate.payu.com/), [Iyzico](https://www.iyzico.com/en) and [Alipay](https://global.alipay.com/platform/site/ihome) payment gateways.

See [the module description page](https://commercial.abp.io/modules/Volo.Payment) for an overview of the module features.

Supported Gateway Packages
--------------------------

In order to use a Payment Gateway, you need to add related NuGet packages to your related project as explained in Manual Installation section above and add DependsOn to your related module. For example, if you don't want to use PayU, you don't have to use its NuGet packages.

After adding packages of a payment gateway to your application, you also need to configure global payment module options and options for the payment modules you have added. See the Options section below.

### Creating a custom payment gateway

If you require a different payment gateway than existing ones, you can create a custom payment gateway by your own. 2 steps are required to create a custom payment gateway. First is creating a payment gateway object that implements IPaymentGateway. This interface exposes core payment operations without any UI. Second step is creating UI for the payment gateway. This UI is used to redirect user to payment gateway and validate payment.

Follow the [instructions here](https://docs.abp.io/en/commercial/7.0/modules/payment-custom-gateway) to create a custom payment gateway.

### Packages

This module follows the [module development best practices guide](https://docs.abp.io/en/abp/latest/Best-Practices/Index) and consists of several NuGet and NPM packages. See the guide if you want to understand the packages and relations between them.

You can visit [Payment module package list page](https://abp.io/packages?moduleName=Volo.Payment) to see list of packages related with this module

### User interface

#### Public Pages

Payment gateway selection

This page allows selecting a payment gateway. If there is one payment gateway configured for final application, this page will be skipped.

#### PayU prepayment pages

This page is used to send Name, Surname and Email Address of user to PayU.

#### Admin Pages

Payment plans page

Payment plans for subscriptions can be managed on this page. You can connect external subscriptions for each gateway to a plan.

![Admin Pages](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-plan.png)

Payment Request Page

This page lists all the payment request operations in application.

![Admin Pages](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-request.png)
