---
sidebar_position: 2
---

# CLI 新命令示例

# Raaghu CLI - 示例命令

`raaghu` 命令基于 raaghu 模板创建一个 raaghu 解决方案或其他工件。[raaghu CLI](CLI.md) 具有多个参数用于创建新的 raaghu 解决方案。在这个文档中，我们将展示一些创建新解决方案的示例命令。所有命令都以 `raaghu` 开头。

* 该项目包括以下命令：`help`、`new`、`login`、`login -info`、`logout`。


## 帮助

* 显示所有可用命令。

帮助命令：

```json
raaghu help
```

视图：

```json
raaghu help
Raaghu Cli

可用命令：
   > raaghu help                    显示命令行帮助。对于特定命令，请写成 `raaghu help <command>`
   > raaghu new [solution-name]     执行 New 命令以创建新的 Raaghu 解决方案
   > raaghu login                   执行 Login 命令
   > raaghu login -info             执行 Login Info 命令
   > raaghu logout                  执行 Logout 命令
```


## 新建

* 创建一个新的解决方案。

新建命令：

```json
raaghu help new 
```

视图：

```json
raaghu help new
Raaghu Cli

Usage:
   raaghu new <project-name> [options]

Options:
   -v|--version <version-number>  (default: latest-version)

Example(s):
   raaghu new my-project
   raaghu new my-project --version 1.0.0


```

## 从特定版本创建解决方案

当您创建一个解决方案时，它总是使用最新版本创建。要从旧版本创建项目，您可以传递 `--version` 或 `-v` 参数。

* 从 v7.4.4 创建一个解决方案，使用 Angular UI 和 Entity Framework Core。

  ```json
  raaghu new Raaghu.BookStore --version 7.4.4
  ```
   ```json
  raaghu new Raaghu.BookStore -v 7.4.4
  ```

获取 raaghu 版本列表，请查看以下链接：https://www.nuget.org/packages/Waiin.Raaghu.Cli


## 登录

* 用于登录账户。

登录命令：

```json
raaghu login 
```

视图：

```json
raaghu login
Raaghu Cli
Enter Email: emailId
Enter Password: *******
[##################################################] 100%
License verification successful. Tool functionality can proceed.
```

## 登录 -- 信息

* 用于查看登录账户。

登录信息命令：

```json
raaghu login --info
```

视图：

```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Login Info command...
[##################################################] 100%
emailId is active.
```

## 注销

* 用于从账户注销。

注销命令：

```json
raaghu logout
```

视图：

```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Executing Logout command...
[##################################################] 100%
emailId Logged out successfully
```



## 生成代理
为您的 HTTP API 生成服务代理，以便轻松从客户端使用您的服务。在运行此命令之前，您的主机（服务器）应用程序必须正在运行。

注销命令：
```json
raaghu generate --proxy -t
``` 
```json
raaghu generate --proxy --template
``` 

视图：
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter URL: https://localhost:44397
Downloading swagger json...
Generating proxy...

Proxy Successfully Created.
```

## 创建

 用于生成管理数据关系的不同类型页面。 

- 首先，您需要运行 **`Slice`** 命令来创建不同类型的 CRUD 页面

注销命令：
```json
raaghu create --Slice
```

视图：

```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Service Name: Hospital
Slice Added Successfully
```

#### 要创建不同类型的页面，请使用以下命令：

创建一个用于管理数据（例如添加、查看、更新和删除）的页面。检查关系并相应执行。

注销命令：
```json
raaghu create --CRUDPage
```
视图：
```json
Raaghu CLI
If you need help navigating through commands, use 'raaghu help' for a list of commands.
Checking login credentials
emailId is logged in.
Enter Backend Project Path: E:\Backened\source-code-backend\aspnet-core
Enter Entity Name: Hospital

Creating component...
Need to install the following packages:
generate-react-cli@8.4.6
ok to proceed? (y)
rds-comp-hospital.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.tsx
rds-comp-hospital.styled.ts was successfully created at src/rds-comp-hospital/rds-comp-hospital.styled.ts
rds-comp-hospital.test.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.test.tsx
rds-comp-hospital.stories.tsx was successfully created at src/rds-comp-hospital/rds-comp-hospital.stories.tsx
index.ts is successfully created at src/rds-comp-hospital/index.ts
Component page is successfully created!!
PrivateRoute_Auth.tsx
Page "Hospitals" created successfully.
Done!!
```


## add

add 命令帮助我们创建不带实体数据的新页面、组件和元素。
* **`创建新组件`**:

命令：
````json
raaghu add --component
````
````json
raaghu add -c
````

视图:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --component
Checking login credentials
emailId user is logged in.
Enter component name:
navbar
Creating component...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar component
````
- 我们也可以使用 raaghu add -c 来创建新组件。

* **`创建新元素`**:

命令:

````json
raaghu add --element
````
````json
raaghu add -e
````

视图:

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --element
Checking login credentials
emailId user is logged in.
Enter element name:
navbar
Creating element...
navbar.tsx was successfully created at src/navbar/navbar.tsx
navbar.styled.ts was successfully created at src/navbar/navbar.styled.ts
navbar.test.tsx was successfully created at src/navbar/navbar.test.tsx
navbar.stories.tsx was successfully created at src/navbar/navbar.stories.tsx
index.ts is successfully created at src/navbar/index.ts
Successfully created the navbar element
````
- 我们也可以使用 raaghu add -e 来创建新元素。
* **`创建新页面`**:

命令：

````json
raaghu add --Page
````
````json
raaghu add -p
````

视图：

````json
Raaghu Cli
Please provide a command. Use 'raaghu help' for a list of commands.
raaghu add --page
Checking login credentials
emailId user is logged in.
Enter page name:
navbar
undefined page is successfully created!!
PrivateRoute_Auth.tsx
Successfully created the navbar page
````
- 我们也可以使用 raaghu add -p 来创建新页面。