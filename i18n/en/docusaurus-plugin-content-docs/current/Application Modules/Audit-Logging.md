---
sidebar_position: 3
---

# Audit Logging

This module implements the Audit Logging system of an application;

* See all audit logs of the system and filter audit logs easily.
* View audit log details, executed actions and changed entities.
* See all changes of entities and filter entity change logs.
* View details of an entity change.
* View all changes of an entity.
* This module also defines reusable "Average Execution Duration Per Day" and "Error Rate" widgets.

See [the module description page](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index) for an overview of the module features.

How to install
--------------

Identity is pre-installed in [the startup templates.](https://docs.abp.io/en/commercial/7.0/Startup-Templates/Index) So, no need to manually install it.

### Packages

This module follows the [module development best practices guide](https://docs.abp.io/en/abp/latest/Best-Practices/Index) and consists of several NuGet and NPM packages. See the guide if you want to understand the packages and relations between them.

You can visit [Audit Logging module package list page](https://abp.io/packages?moduleName=Volo.AuditLogging.Ui) to see list of packages related with this module.

### Menu items

Audit logs module adds the following items to the "Main" menu, under the "Administration" menu item:

* Audit Logs: List, view and filter audit logs and entity changes.

IAbpAuditLoggingMainMenuNames class has the constants for the menu item names.

### Pages

Audit Logs

Audit logs tab is used to list, view and filter audit logs and entity changes in the system.

![Audit logs tab is used to list, view and filter audit logs and entity changes in thesystem](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/audit-logs.png)

### Audit Log Details

You can view details of an audit log by clicking the magnifier icon on each audit log line:

* **Overall**: This tab contains detailed information about audit log.
* **Actions**: This tab shows list of actions (controller actions and application service method calls with their parameters) executed during a web request.
* **Changes**: This tab shows changed entities during the web request.

**(To be continued as the UI is not rendering properly)(500 error)**
