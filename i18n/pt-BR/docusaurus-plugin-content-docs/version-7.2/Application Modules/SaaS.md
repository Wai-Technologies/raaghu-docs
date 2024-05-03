---
sidebar_position: 13
---

# Saas

Este módulo é usado para gerenciar seus locatários e edições em aplicativos multilocatários;

- Gerencie inquilinos e edições no sistema. Um inquilino pode ter uma edição.
- Definir características de inquilinos.
- Defina a cadeia de conexão dos locatários.
- Definir características de edições e inquilinos.

Consulte [a página de descrição do módulo](https://commercial.abp.io/modules/Volo.Saas "") para obter uma visão geral dos recursos do módulo.

## pacotes

Este módulo segue o [guia de práticas recomendadas de desenvolvimento de módulo](https://docs.abp.io/en/abp/latest/Best-Practices/Index "") e consiste em vários pacotes NuGet e NPM. Consulte o guia se quiser entender os pacotes e as relações entre eles.

Você pode visitar a [página da lista de pacotes do módulo ](https://abp.io/packages?moduleName=Volo.Saas "")SaaS para ver a lista de pacotes relacionados a este módulo.

### Assinatura da edição de locatário
O módulo SaaS implementa a assinatura de Edições para Locatários usando o módulo Pagamento. Para habilitá-lo, o projeto deve conter os módulos Volo.Saas e Volo.Payment e estes módulos devem ser configurados conforme mostrado abaixo.
### configuração
Em primeiro lugar, o módulo de Pagamento deve estar configurado corretamente:

- Instale o módulo Volo.Payment.
```bash
      abp add-module Volo.Payment
```
Ou você pode instalar usando o BP Suite.

- Configure o módulo Saas para usar o Payment.
```json                  
      Configure(options =&gt;
      {
      options.IsPaymentSupported = true;
      });
```

- Seguir[assinaturas](https://docs.abp.io/en/commercial/7.0/modules/payment#subscriptions "")⁇  de[Documentação do Módulo de Pagamento](https://docs.abp.io/en/commercial/7.0/modules/payment#subscriptions ""). Completo[que permite ebooks](https://docs.abp.io/en/commercial/7.0/modules/payment#enabling-webhooks "")[planos de configuração](https://docs.abp.io/en/commercial/7.0/modules/payment#configuring-plans "")seções.
- Execute o aplicativo e vá para Saas  ⁇  Edições página no seu menu Web Application.
- Crie ou Edite uma edição existente. Plan dropdown deve ser ⁇  se você fez os ⁇  ⁇  ⁇ . Escolha um plano para a edição.

### uso
O módulo SaaS não contém uma página de lista pública para listar edições para novos clientes/inquilinos assinarem. Primeiro, você precisa criar essa página em seu aplicativo. Então, quando um novo cliente/locatário selecionar uma dessas edições, você poderá criar uma assinatura e redirecionar o usuário para o módulo de pagamento conforme mostrado abaixo.

- Injete ISubscriptionAppService para criar uma assinatura para uma edição:
```json
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
Quando o pagamento for concluído com sucesso, a relação de locatário e edição será atualizada de acordo com o status da assinatura. Certifique-se de que os Web Hooks do Payment Gateway estejam configurados corretamente.

Afinal, o módulo de pagamento redirecionará o usuário para callbackUrl se configurado na configuração de pagamento com um parâmetro paymentRequestId. Nesta página você pode verificar o status da solicitação de pagamento e mostrar uma mensagem de sucesso ao usuário quando o status do pagamento for confirmado. Como a confirmação do pagamento é assíncrona, é necessário verificar repetidamente o status do pagamento até que ele seja confirmado.

### Interface de usuário
#### itens de menu
O módulo SaaS adiciona os seguintes itens ao menu "Principal", no item de menu "Administração":

- **Tenants**: Tenant página de gestão.
- **Edições**: Página de gerenciamento de edição.

As classes SaasHostMenuNames e SaasTenantMenuNames possuem as constantes para os nomes dos itens de menu.

### páginas
Gestão de inquilinos

A página de inquilinos é usada para administrar inquilinos no sistema.

![Novo inquilino](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant.png)

Você pode criar um novo locatário ou editar um locatário nesta página:

![Você pode ⁇  um novo inquilino ou editar um inquilino nesta página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant-new.png)

### Cadeia de conexão
Você pode gerenciar a cadeia de conexão de um locatário caso queira usar um banco de dados separado para um locatário específico. Se quiser usar o banco de dados Host para um locatário, selecione a opção "Usar o banco de dados compartilhado".

Você também pode usar o recurso de cadeia de conexão de banco de dados específico do módulo. Nesse caso, você deve selecionar a opção "Usar cadeia de conexão de banco de dados específica do módulo" e, em seguida, determinar seus módulos e suas cadeias de conexão. Antes de adicionar você pode verificar sua conexão clicando em "Verificar".

### características de inquilinos
Você pode definir características de inquilinos.

![Você pode definir características de inquilinos](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/tenant-features.png)

Gerenciamento de edição

A página de edições é usada para gerenciar as edições em seu sistema.

![A página de edições é usada para gerenciar as edições em seu sistema](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/editions.png)

Você pode criar uma nova edição ou editar uma edição existente nesta página:

![Criar uma nova edição ou editar uma edição existente](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/edition-new.png)

### características da edição
Você pode definir as características de uma edição nesta página:

![Definir características de uma edição nesta página](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/editions-edit.png)

