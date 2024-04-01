
# 用户界面主题


# Raaghu React 主题

**Raaghu React 主题**已经预先安装在源代码中。因此，无需手动安装。

npm包已直接安装在项目级别，如您在根级别的**package.json**文件和raaghumfe文件夹中所见。

```bash
npm i raaghu-react-themes
```

![包](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-react-theme-package.png)

# 自定义 Raaghu React 主题

### 如何使用 raaghu-react-themes

从存储库中获取源代码，将其放在项目的根级目录中。

在以下文件夹中，您将找到所有的 **Raaghu React 主题**。

![文件夹结构](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-theme-folder.png)

### 项目级别

如果要自定义CSS、颜色变量和根据自定义主题添加新类，请按照以下步骤操作。

在根级别，你将看到 **raaghu-mfe** 文件夹，其中包含以下内容：

```json
rds-pages > host > src > App.scss
```

你会看到以下行：

```json
@import "../../../../raaghu-react-themes/src/styles/default.scss";
```

![app 文件](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-react-theme-app.png)


使用上述行，你可以访问 **raaghu-react-themes** 文件夹，因为你是通过 **default.scss** 文件来应用所有与主题相关的内容，所以我们指向 **default.scss** 文件。

在 **raaghu-react-themes** 中，你将看到两个文件夹：Public 和 src。

![文件夹结构](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-theme-folder.png)

如果你想对字体进行更改，可以进入 **public** 文件夹内的 **fonts** 文件夹。

![字体更改](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-react-public.png)

如果要自定义应用程序的元素CSS，可以进入 src 文件夹内的 **styles** 文件夹。

![项目 CSS](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/raaghu-theme-style.png)
