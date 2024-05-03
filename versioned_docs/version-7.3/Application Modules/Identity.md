---
sidebar_position: 9
---

# Identity

This module implements the User and Role system of an application;

* Manage **roles** and **users** in the system. A user is allowed to have **multiple roles.**
* Set **permissions** in role and user levels.
* Enable/disable **two factor authentication** and user **lockout** per user.
* Manage basic **user profile** and **password.**
* Manage **claim types** in the system, set claims to roles and users.
* Setting page to manage **password complexity,** user sign-in, account and lockout.
* Supports **LDAP** authentication.
* Provides **email & phone number** verification.
* Supports social login integrations ( Microsoft, Google, Twitter.)
* Manage **organization units** in the system.
* View security logs (login, logout, change password...) in the system.

See the module description page for an overview of the module features.

Packages
--------

This module follows the [module development best practices guide](https://docs.abp.io/en/abp/latest/Best-Practices/Index) and consists of several NuGet and NPM packages. See the guide if you want to understand the packages and relations between them.

You can visit [Identity module package list page](https://abp.io/packages?moduleName=Volo.Identity.Pro) to see list of packages related with this module.

### Menu items

Identity module adds the following items to the "Main" menu, under the "Administration" menu item:

* **Roles**: Role management page.
* **Users**: User management page.
* **Claim Types**: Claim type management page.
* **Organization Units**: Organization unit management page.
* **Security Logs**: Security log search page.

IdentityMenuNames class has the constants for the menu item names.

### Pages

Role management

Roles page is used to manage roles in the system. A role is a set of permissions assigned to the users.

![New Role](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)

You can create a new role or edit a role in this page:

![You can create a new role or edit a role in this page](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-new.png)

* **Default** roles are assigned to new users by default.
* **Public** roles are visible to other users.

### Role permissions

You can manage permissions of a role:

### UI to be added

* A permission is an **action of the application** granted to roles and users.
* A user with a role will **inherit** all the permissions granted for the role.
* Any module can [define permissions](https://docs.abp.io/en/abp/latest/Authorization#permission-system). Once you define a new permission, it will be available in this page.
* Left side is the **list of modules.** Once you click to a module name, you can check/uncheck permissions related to that module.

### Role claims

You can set custom claim values for a role:

![Edit Role](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/role-claims.png)

Claim types are retrieved from the claim list defined in the Claim Types Management page (see below).

### User management

Users page is used to manage the users in your system.

![User Management ](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users.png)

You can create a new user or edit an existing user in this page:

![You can create a new user or edit an existing user in this page ](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-new.png)

* A user can have **zero or more roles** in the system.
* You can set **two factor** verification and user **lockout** settings per user.
  ![New User ](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/users-role.png)

### User permissions

A user has union of the permissions of the assigned roles. Identity module also allows to grant extra permissions to a specific user.

![Edit User ](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/user-permision.png)

* A permission is an **action of the application** granted to roles and users.
* A user with a role will **inherit** all the permissions granted for the role.
* Any module can [define permissions](https://docs.abp.io/en/abp/latest/Authorization#permission-system). Once you define a new permission, it will be available in this page.
* Left side is the **list of modules.** Once you click to a module name, you can check/uncheck permissions related to that module.

### Claim type management

Identity module allows to define custom claim types.

![New Claim Type ](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/claim.png)

* Custom claims can be used to store additional information to a user or role.
* Custom claim values then can be accessed in the application code for an authenticated user.
* Claim Types are also used by the OpenIddict module if you're using it.

### Organization Units

Organization units page is used to manage organization units, members of organization units and roles of organization units.

![Organization units page is used to manage organization units, members of organization units and roles of organization units](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

You can add a new organization unit or edit an existing organization unit on this page. In order to add a new root organization unit, click "New root unit" button and fill the opening form.

![New Organization Unit](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit.png)

In order to add a sub-unit to an existing organization unit, right click on an existing organization unit and click "Add sub-unit" context menu item. Similarly, in order to edit an organization unit, right click on an existing organization unit and click "Edit" context menu item.

![Edit Organization Unit](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/organization-Unit-edit.png)

You can manage members of an organization unit using the members tab by selection an organization unit

### Security Logs

Security logs page is used to search and view authentication related operations (login, logout, change password...) in the system.

![Security Logs](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/security-logs.png)
