---
sidebar_position: 3
---

# 解决方案结构

默认结构


![Default Structure](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-solution-structure.png)

#### *-components:
            该目录包含可重用的 UI 组件（例如登录、电子邮件、通知、个人资料、账户、弹出警报），旨在实现一致的前端开发。
#### *-elements:
           该目录涵盖基本的 UI 元素，如按钮、警报、横幅、图表、卡片等，所有这些都针对应用程序的用户界面进行了定制，以确保统一且视觉上令人愉悦的体验。
#### *-mfe:
        微前端是一种在 Web 开发中使用的架构风格，其中前端应用程序被分解为称为微前端的更小、更易管理的部分。每个微前端代表用户界面的一个独特部分，并且可以独立开发、测试和部署。这种方法类似于微服务，但专注于应用程序的前端层。
#### *-core:
        该目录包含中间件组件，负责在基于 React 的应用程序的各个部分中管理服务和业务逻辑。这些组件促进了数据和功能的无缝流动，确保在系统的各个部分之间实现协调的操作。

#### *-utils:
        utils 包含专门设计用于执行组件创建、代理生成和模块管理等重要任务的 node 脚本。这些脚本对于确保我们应用程序的开发工作流程的顺畅运行和效率至关重要。


## REACT 架构
以下是 raaghu-react 作为 UI 应用程序的一部分使用的架构


![Following are the architecture on how raaghu-react is being used as a part of UI application](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-architecture.png)

## Raaghu - 认证流程（登录页面）


![raaghu-Authentication Flow](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuAuthenticationFlow.png)

## Raaghu - 本地化


![raaghu Localization](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuLocalization.png)

## Raaghu - 页面流程

![Raaghu - Page flow](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghuPageFlow.png)