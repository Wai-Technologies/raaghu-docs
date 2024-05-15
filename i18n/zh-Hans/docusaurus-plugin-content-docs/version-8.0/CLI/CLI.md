---
sidebar_position: 1
---

# Raaghu CLI

Raaghu CLI（命令行界面）是一个命令行工具，用于执行基于 Raaghu 的解决方案的一些常见操作。

## 安装
Raaghu CLI 是一个 dotnet 全局工具。请使用命令行窗口进行安装：

````json
dotnet tool install -g Waiin.Raaghu.Cli
````
````json
dotnet tool install --global Waiin.Raaghu.Cli
````

## 要更新现有安装：

````json
dotnet tool update -g Waiin.Raaghu.Cli
````
````json
dotnet tool update --global Waiin.Raaghu.Cli
````


## 命令

这里是所有可用命令的列表，稍后将详细解释它们：

* **`help`**: 显示关于 Raaghu CLI 使用的帮助信息。
* **`new`**: 根据 Raaghu [启动模板](Startup-Templates/Index.md) 生成一个新的解决方案。
* **`generate`**: 生成客户端代理，以使用 HTTP 应用程序接口 终端点。
* **`create`**: 创建 用于生成不同类型的页面，用于管理数据关系。
* **`sync`**: 帮助我们解决微服务问题。
* **`login`**: 使用您的 [raaghu.io](https://raaghu.io/) 用户名和密码在您的计算机上进行身份验证。
* **`login --info`**: 显示当前用户的登录信息。
* **`logout`**: 如果您之前进行过身份验证，则从计算机注销。

## 帮助
显示 Raaghu CLI 的基本用法。

用法:

````json
raaghu help 
````

示例:

````json
raaghu help        # 显示一般帮助信息。
raaghu help new    # 显示关于 "new" 命令的帮助信息。
````


## 新
于 Raaghu 启动模板 生成一个新的解决方案。

用法:

````json
raaghu new <solution-name> [选项]

````
示例:

````json
raaghu new Raaghu.BookStore 
````
* Raaghu.BookStore 这里是解决方案的名称。"
* 通常的约定是将解决方案命名为 YourCompany.YourProject。但是，您也可以使用不同的命名方式，例如 YourProject（单级命名空间）或 YourCompany.YourProduct.YourModule（三级命名空间）。
有关更多示例，请访问 [Raaghu CLI 创建解决方案示例](CLI-New-Command-Samples.md)

#### 选项
--version 或 -v：指定 Raaghu 版本。如果未指定版本，则将自动使用最新版本来创建解决方案。
````json
raaghu new <solution-name> --version <version>
````
````json
raaghu new <solution-name> -v <version>
````

示例:

````json
raaghu new Raaghu.BookStore  --version 7.4.4
````
````json
raaghu new Raaghu.BookStore  -v 7.4.4
````


## 生成代理
为您的 HTTP API 生成服务代理，以便轻松从客户端使用您的服务。在运行此命令之前，您的主机（服务器）应用程序必须正在运行。

用法:
```json
raaghu generate [选项]
```

#### 选项
--proxy：用于连接。
  - t 或 --template：用于创建应用程序模板代理。
  - m 或 --microservices：用于创建微服务代理。

示例：

```json
raaghu generate --proxy -t
``` 
```json
raaghu generate --proxy --template
``` 
```json
raaghu generate --proxy -m
```
```json
raaghu generate --proxy --microservices
```

## 创建

 用于生成管理数据关系的不同类型页面。 

- 首先，您需要运行 **`Slice`** 命令来创建不同类型的 CRUD 页面：
```json
raaghu create --Slice
```

### 要创建不同类型的页面，请使用以下命令：

* **`create --CRUDPage`**: 创建一个用于管理数据（例如添加、查看、更新和删除）的页面。检查关系并相应执行。
用法:
```json
raaghu create --CRUDPage
```
* **`create --SimplePage`**: 创建一个基本页面，不依赖其他页面或关系。
用法:

```json
raaghu create --SimplePage
```
* **`create --OneToMany`**: 创建用于处理一对多相关实体的页面。
用法:
```json
raaghu create --OneToMany
```
* **`create --ManyToMany`**: 创建用于处理多对多相关实体的页面。
用法:

```json
raaghu create --ManyToMany
```
* **`create --HybridMany`**: 创建用于处理不同关系混合的页面。
用法:
```json
raaghu create --HybridMany
```

## 同步

 同步帮助我们解决微服务问题。

 用法:
 ```json
raaghu sync [options]
```

#### 选项
- --abp：将前端连接到 ABP 商业解决方案。
   - --microservices 或 -m：ABP 后端微服务源代码解决方案。
示例：

```json
raaghu sync --abp --microservices
``` 
```json
raaghu sync --abp -m
```


## 登录
CLI 的某些功能需要登录到 raaghu.io 平台。要使用用户名登录，请执行以下操作：

````json
raaghu login <username>                                  # 允许您输入隐藏的密码
````
使用已经激活的会话进行新的登录会覆盖先前的会话。


## 登录 -- 信息
显示您的登录信息，例如 用户名 。

````json
raaghu login --info
````


## 注销
通过从您的计算机中删除会话令牌来注销您。

````json
raaghu logout
````
