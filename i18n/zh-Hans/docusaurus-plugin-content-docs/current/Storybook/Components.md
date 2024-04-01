# 定制化

### Storybook（故事书）

通过**Storybook**，您可以可视化和浏览 raaghu 的功能。元素的代码片段允许您更快速、更高效地测试和设计您的用户界面。

您可以进一步自定义和扩展Storybook，以满足您的项目需求。`.storybook` 目录将包含配置文件，您可以自定义Storybook的外观，添加插件等等。

在Storybook中，组件通常被组织成“故事”以展示它们的不同状态、变化和用例。Storybook提供了一种在隔离环境中直观地记录和测试组件的方法。按钮元素是在Storybook中创建故事的常见示例。

为特定元素创建 **filename.stories** 文件。Storybook会在文件创建时提供默认的代码。

```json
import React from 'react';
import { Story, Meta } from '@storybook/react';

import MyComponent from './MyComponent'; // 导入您的组件

export default {
  title: 'MyComponent',
  component: MyComponent,
} as Meta;

const Template: Story = (args) => <MyComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  // 在这里添加默认属性
};
```

所以以按钮元素为例，创建 **button.stories** 文件。

![故事文件图像](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-button.png)
将 `MyComponent` 替换为您组件的实际名称。此示例假定您的组件命名为 `MyComponent`。

运行Storybook，您应该在Storybook用户界面中看到您的组件故事。

根据需要为项目中的其他组件添加更多故事。

就是这样！您现在已经设置了一个使用React和TypeScript的Storybook，并且可以使用它来记录和展示您的组件。确保自定义Storybook配置和您的项目

这些是通过 `argTypes` 传递的控件和操作，以下是按钮元素的示例。

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
} as ComponentMeta<typeof RdsButton>;

const Template: ComponentStory<typeof RdsButton> = (args) => (
    <RdsButton {...args} />
);
```

为按钮元素创建多个故事。

按钮的默认状态显示如下
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

按钮的禁用状态显示如下
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
### 控件

控件允许您在Storybook中调整和自定义组件的属性或属性，而不需要修改源代码。对于按钮组件，您可以使用控件来更改其文本、颜色、大小和其他相关属性。这对于测试组件的不同配置和状态特别有帮助。

Storybook UI 中有 **控制面板**。它将显示多个控件。

![控制面板](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-control.png)

### 文档

Storybook中的文档通常是使用像 @storybook/addon-docs 这样的插件生成的。它允许您在您的故事文件中直接使用Markdown和TSX的组合来为组件编写文档。这些文档可以从Storybook界面访问，使开发人员更容易理解如何使用您的组件。

![文档](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/storybook-docs.png)


这段代码是将英文Markdown文件翻译成了中文。如果有任何进一步的问题或需要进一步的翻译，请告诉我。
