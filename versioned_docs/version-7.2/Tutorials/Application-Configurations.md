---
sidebar_position: 5
---

# Applications Configurations

After creating the page, add the following path to the main.tsx file:

For example : -

```shell
<Route path="/employees" element={<EmployeesCompo />} />
```

Then, add the below condition to the PrivateRoute_Auth.tsx file:

```shell
else if (location.pathname == "/employee") {
      pagekey = "abp_react_7_2_2.Employees";
    }
```

pagekey = "abp_react_7_2_2."; can be found in the below file location 

```shell
lib / main-menu / page-name.ts
```
Find the pagekey value in the file located at lib/main-menu/page-name.ts:

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



Add the permission value as pagekey into PrivateRoute_Auth.tsx.
Use the same permission value on the created page:
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
