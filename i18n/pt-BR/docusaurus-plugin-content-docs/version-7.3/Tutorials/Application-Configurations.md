---
sidebar_position: 5
---
# Configurações das Aplicações
Após criar a página, adicione o seguinte caminho ao arquivo main.tsx:

Por exemplo:


```shell
<Route path="/employees" element={<EmployeesCompo />} />
```

Em seguida, adicione a seguinte condição ao arquivo PrivateRoute_Auth.tsx:

```shell
else if (location.pathname == "/employee") {
      pagekey = "abp_react_7_2_2.Employees";
    }
```
A variável pagekey = "abp_react_7_2_2."; pode ser encontrada no seguinte local de arquivo:

```shell
lib / main-menu / page-name.ts
```

Encontre o valor da variável pagekey no arquivo localizado em lib/main-menu/page-name.ts:


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

Adicione o valor da permissão como pagekey no arquivo PrivateRoute_Auth.tsx.
Use o mesmo valor de permissão na página criada:

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
