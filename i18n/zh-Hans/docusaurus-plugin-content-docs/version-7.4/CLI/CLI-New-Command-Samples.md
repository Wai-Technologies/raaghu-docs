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
raaghu login -info
Raaghu Cli
Executing Login Info command...
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
raaghu logout
Raaghu Cli
Executing Logout command...
Credentials removed from Credential Manager.
logged out successfully
```

## 参见

* [raaghu CLI 文档](CLI.md)