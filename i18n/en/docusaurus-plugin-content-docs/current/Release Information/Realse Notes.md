---
sidebar_position: 1
---

# Release Notes

### Release 7.3 (Compatible with ABP commercial 7.3)

* Added a Command Line Based CRUD Page generation for different relationships such as one-to-one, one-to-many and many-to-many relationships.
* Many enhancements and fixes for the 7.2 version.

### Release 7.2 (Compatible with ABP commercial 7.2)

* Added permission on Side Navigation menus for **Tenant** and **User**
* Many enhancements and fixes for the 7.2 version.
* Integration of the chat module for different users.
* Enhancements and fixes for 7.2 version

### Release 7.1 (Compatible with ABP commercial 7.1)

* Allow to **impersonate** an arbitrary **user** in the SaaS module.
* Successful User can add profile picture in MyAccounts
* Many enhancements and fixes for the 7.1 version.
* Enhancements and fixes for 7.1 version

### Release 7.0 (Compatible with ABP commercial 7.0)

* Application fully compatible with ABP including built-in pages such as Dashboards, Tenant, User, settings, languages and much more.
* **Fully replaceable and customizable Components:** Data table, File Uploader, Forms, email, etc.
* Easy to switch to light, dark and semi dark theming options.
* Adobe XD UI kit design library.
* Different language selection options are available on the Login page.
* Change language feature in dashboard and modules
* Enabled new feature of auto service proxy generation with DTO, services and schemas with different http client support.
* Custom icon library with more additions and enhancements.
* Introduction of a storybook for user to view elements, components and check behavior in different states.
* Modules integrated in the applications are mentioned in the following section.
* Implemented Localization for different Modules

### MODULES

### Account

* Provides a login page with username and password.
* Provides a register page to create a new account.
* Implements Identity server authentication server UI and functionality.

### Audit Logging

* Provides the audit log reporting UI for the auditing infrastructure and allows to search, filter, and show audit log entities and entity change logs.
* Consist critical data about each client request such as HTTP method, HTTP return status , request execution duration and the success failure respectively.

### SaaS

* Includes Pages like Tenant and Edition
* Allows to manage tenants where a tenant is a customer of your application.
* Allows to create editions where an edition can have different feature set of your application assigned to tenants.
* Allow host users to change the password of a user of a tenant.

#### Blog

* Create multiple blogs in a single application.

### CMS Kit

* Provides a page management system to manage dynamic pages.
* A blog system to create blogs and publish posts.
* Tag system to tag any kind of resources, like blog posts.
* Comment system to add comments feature to any kind of resource, like blog posts.

### File Management

* It is used to upload and organize files in a hierarchical folder structure.
* This module is based on BLOB Storing system, where it can use different storage providers for storing file contents.

### Forms

* Create surveys, manage event registrations, collect email addresses for a newsletter , create a pop quiz or even get an order request.

### Identity

* Manages role and users in the system wherein user is allowed to have multiple roles.
* Allows permissions in role and user levels.
* Enable/disable two factor authentication and user lockout per user.
* Manage basic user profile and password.
* Manages claim types in the system , set claims to role and users.
* Setting page to manage password complexity, user sign-in, account and lockout.
* Supports social login interactions (Microsoft, Google, Twitter.)

### Language Management

* Manages application languages and localization texts.
* Dynamically add or remove languages.
* Dynamically change all texts on the UI
* Features like add, remove, update the language
* Includes a language text that translates the application’s UI to a new language or update texts for an existing language.

### OpenId

* Includes pages like Application and Scopes
* Application Page providing features like add or edit applications
* A set of range of permissions available on applications list page

### Payment

* Features includes integration for payment gateways
* Supports one-time or recurring payments
