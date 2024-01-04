<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>
Language Management Module
==========================

This module implements the Language management system of an application;

* Manage **languages** in the system.
* Translate texts in the UI.
* Enable / Disable **languages.**
* Select **default language** in the UI.

See [the module description page](https://commercial.abp.io/modules/Volo.LanguageManagement) for an overview of the module features.

User Interface
--------------

### Menu Items

Language management module adds the following items to the "Main" menu, under the "Administration" menu item:

* **Languages**: Language management page.
* **Language Texts**: Language text management page.

LanguageManagementMenuNames class has the constants for the menu item names.

### Pages

Languages

Languages page is used to manage languages in the system.

![New Language](./images/language.png)

You can create a new language or edit an existing language in this page:

![Create New Language](./images/language-new.png) ![Edit Language](./images/language-edit.png)

* **Enabled** languages can be selected as the system language.

### Language Texts

Language texts page is used to manage texts in different languages.

![Language Texts](./images/langauge-text.png)

You can translate a text for a language or edit the already existing translation in this page.

![edit the already existing translation in this page](./images/language-text-edit.png)
