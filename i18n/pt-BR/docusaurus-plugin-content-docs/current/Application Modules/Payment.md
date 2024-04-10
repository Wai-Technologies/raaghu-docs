---
sidebar_position: 12
---

# Pagamento

O módulo de pagamento implementa a integração do gateway de pagamento de um aplicativo. Ele oferece opções de pagamento único e pagamento recorrente.

- Apoios[Stripe](https://stripe.com/en-in ""), [PayPal](https://www.paypal.com/in/home ""), [2Checkout](https://www.2checkout.com/ ""), [PayU](https://corporate.payu.com/ ""), [Iyzico](https://www.iyzico.com/en "")[Alias](https://global.alipay.com/platform/site/ihome "")gateways de pagamento.
- Consulte [a página de descrição do módulo](https://commercial.abp.io/modules/Volo.Payment "") para obter uma visão geral dos recursos do módulo.

## pacotes de gateway suportados
Para usar um gateway de pagamento, você precisa adicionar pacotes NuGet relacionados ao seu projeto relacionado, conforme explicado na seção Instalação manual acima, e adicionar DependsOn ao seu módulo relacionado. Por exemplo, se você não quiser usar PayU, não precisa usar seus pacotes NuGet.

Depois de adicionar pacotes de um gateway de pagamento ao seu aplicativo, você também precisa configurar as opções do módulo de pagamento global e as opções para os módulos de pagamento que você adicionou. Consulte a seção Opções abaixo.

### criando um gateway de pagamento personalizado
Se você precisar de um gateway de pagamento diferente dos existentes, poderá criar seu próprio gateway de pagamento personalizado. São necessárias duas etapas para criar um gateway de pagamento personalizado. A primeira é criar um objeto de gateway de pagamento que implemente IPaymentGateway. Esta interface expõe as principais operações de pagamento sem qualquer UI. A segunda etapa é criar a UI para o gateway de pagamento. Esta UI é usada para redirecionar o usuário ao gateway de pagamento e validar o pagamento.

Siga as [instruções aqui](https://docs.abp.io/en/commercial/7.0/modules/payment-custom-gateway "") para criar um gateway de pagamento personalizado.

### pacotes
Este módulo segue o [guia de práticas recomendadas de desenvolvimento de módulo](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar a [página da lista de pacotes do módulo de pagamento](https://abp.io/packages?moduleName=Volo.Payment "") para ver a lista de pacotes relacionados a este módulo

### Interface de usuário
#### páginas públicas
Selecção de gateway de pagamento

Esta página permite selecionar um gateway de pagamento. Se houver um gateway de pagamento configurado para aplicação final, esta página será ignorada.
#### Páginas de pré-pagamento PayU
Esta página é usada para enviar o nome, sobrenome e endereço de e-mail do usuário ao PayU.
#### páginas de admin
Página de planos de pagamento

Os planos de pagamento de assinaturas podem ser gerenciados nesta página. Você pode conectar assinaturas externas para cada gateway a um plano.

![Páginas de administração](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-plan.png)
Página de Pedido de Pagamento

Esta página lista todas as operações de solicitação de pagamento no aplicativo.

![Páginas de administração](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/payment-request.png)

