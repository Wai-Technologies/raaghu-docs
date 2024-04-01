# Componentes

### Livro de histórias
Através do livro de histórias você pode visualizar e navegar pelas características do raaghu. Os snippets dos elementos permitem testar e projetar sua IU de maneira mais rápida e eficiente.

Você pode personalizar e estender ainda mais o Storybook para atender às necessidades do seu projeto. O diretório .storybook conterá arquivos de configuração e você poderá personalizar a aparência do Storybook, adicionar complementos e muito mais.

No Storybook, os componentes são frequentemente organizados em “histórias” para mostrar seus diferentes estados, variações e casos de uso. O Storybook fornece uma maneira de documentar visualmente e testar seus componentes isoladamente. Os elementos de botão são um exemplo comum de criação de histórias no Storybook.

crie o arquivo stoires para elementos específicos usando filename.stories. stotybook fornece código padrão na criação do arquivo.
```json
    import React from 'react';
    import { Story, Meta } from '@storybook/react';
    
    import MyComponent from './MyComponent'; // Import your component
    
    export default {
      title: 'MyComponent',
      component: MyComponent,
    } as Meta;
    
    const Template: Story = (args) =&gt; <mycomponent {...args}="">;
    
    export const Default = Template.bind({});
    Default.args = {
      // Add default props here
    };
    </mycomponent>
```
Então pegue o exemplo como elemento de botão. crie o arquivo button.stories.

![⁇  imagem de arquivo](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-button.png)

Substitua MyComponent pelo nome real do seu componente. Este exemplo pressupõe que seu componente se chama MyComponent.

Execute o Storybook e você deverá ver a história do seu componente na interface do Storybook.

Adicione mais histórias conforme necessário para outros componentes do seu projeto.

É isso! Agora você tem um Storybook configurado com React e TypeScript e pode usá-lo para documentar e mostrar seus componentes. Certifique-se de personalizar as configurações do Storybook e seu

Esses são o controle e a ação que passam pelos argTypes, aqui está um exemplo do elemento botão.
```json
    export default {
        title: "Elements/Button",
        component: RdsButton,
        argTypes: {
            colorVariant: {
                options: [
                    "primary",
                    "secondary",
                    "success",
                    "info",
                    "warning",
                    "danger",
                    "dark",
                    "light",
                ],
                control: { type: "select" },
            },
            size: {
                options: ["small", "medium", "large"],
                control: { type: "select" },
            },
            tooltipPlacement: {
                options: ["top", "bottom", "right", "left"],
                control: { type: "radio" },
                if: { arg: 'tooltip' }
            },
        },
    } as ComponentMeta<typeof rdsbutton="">;
    
    const Template: ComponentStory<typeof rdsbutton=""> = (args) =&gt; (
        <rdsbutton {...args}="">
    );
    </rdsbutton>
```
<typeof></typeof>
crie vários andares para elementos de botão.

Estado padrão do botão colocado abaixo
```json
    export const Default = Template.bind({});
    Default.args = {
        colorVariant: "primary",
        label: "BUTTON",
        block: false,
        size: "medium",
        showLoadingSpinner:true,
    };
```
Estado desequilibrado do botão colocado abaixo
```json
    export const Disable = Template.bind({});
    Disable.args = {
        colorVariant: "primary",
        label: "Disable",
        isDisabled: true,
        block: false,
        size: "medium",
    };
```

### controle
O controle permite ajustar e personalizar as propriedades ou acessórios de um componente no Storybook sem modificar o código-fonte. Para um componente de botão, você pode usar controles para alterar seu texto, cor, tamanho e outras propriedades relevantes. Isto é particularmente útil para testar diferentes configurações e estados dos seus componentes.

Há um painel de controle na interface do livro de histórias. Ele mostrará o controle múltiplo.

![⁇  de controle](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-control.png)
### docs
A documentação no Storybook geralmente é gerada usando complementos como @storybook/addon-docs. Ele permite que você escreva documentação para seus componentes diretamente nos arquivos de história usando uma combinação de Markdown e TSX. Esta documentação pode ser acessada na interface do Storybook, facilitando o entendimento dos desenvolvedores sobre como usar seus componentes.

![docs](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-docs.png)

