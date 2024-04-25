---
sidebar_position: 5
---


# 以下是应用程序配置的指南：

在创建页面后，将以下路径添加到 main.tsx 文件中：

例如：-

```shell
<Route path="/employees" element={<EmployeesCompo />} />
```

然后，将以下条件添加到 PrivateRoute_Auth.tsx 文件中：

```shell
else if (location.pathname == "/employee") {
      pagekey = "abp_react_7_2_2.Employees";
    }
```

pagekey = "abp_react_7_2_2."; 可以在以下文件位置找到：

```shell
lib / main-menu / page-name.ts
```

在 lib/main-menu/page-name.ts 文件中查找 pagekey 的值：


```shell
const PageNotFound = [{
  "key": "PageNotFound",
  "label": "PageNotFound",
  "icon": "icons",
  "path": "/pagenotfound",
  "permission": "raaghu.PageNotFound",
  "subTitle": "subtitle here"
}]; export default PageNotFound;
```

将权限值作为 pagekey 添加到 PrivateRoute_Auth.tsx 中。
在创建的页面上使用相同的权限值：

```shell
useEffect(() => {
    setPagePermission({ ...pagePermission, create: isgrantedpolicies('abp_react_7_2_2.Employees.Create', configData), })
    const IsEdit = isgrantedpolicies('abp_react_7_2_2.Employees.Edit', configData);
    const IsDelete = isgrantedpolicies('abp_react_7_2_2.Employees.Delete', configData);
    let resultArray = [];
 
    if (IsEdit) {
        resultArray.push({ id: "edit", displayName: t("AbpUi.Edit"), offId: "EmployeeEdit" })
    }
    if (IsDelete) {
        resultArray.push({ id: "delete", displayName: t("AbpUi.Delete"), modalId: "EmployeeDel" })
    }
 
    setActions(resultArray)
}, [configData]);
```
