---
sidebar_position: 7
---

# Forms 

This module allows you to create questionnaires to gather information. The forms module can store responses as they come in and you can export the data to a CSV file. You can share your form with others with your form unique link. You can request authentication or allow anonymous reply. It is similar to the Google Form application. Usage area is quite wide, you can create surveys, manage event registrations, collect email addresses for a newsletter, create a quiz, and even receive an order request.

See [the module description page](https://commercial.abp.io/modules/Volo.Forms) for an overview of the module features.

UI SCREENSHOTS TO BE ADDED

Internals
---------

### Domain layer

Aggregates

This module follows the [Entity Best Practices &amp; Conventions](https://docs.abp.io/en/abp/latest/Best-Practices/Entities) guide.

* **Form**

  * The main aggregate root of the form entities. The form options, title and description is being stored on this entity.
* **QuestionBase**

  * It stores questions of the form. This entity is dependent to form entity by FormId.
* **FormResponse**

  * Each form submit is a new form response record. The form response has answer records.

Repositories

This module follows the [Repository Best Practices &amp; Conventions](https://docs.abp.io/en/abp/latest/Best-Practices/Repositories) guide.

Following custom repositories are defined for this module:

* IFormRepository
* IQuestionRepository
* IChoiceRepository
* IResponseRepository

Domain services

This module follows the [Domain Services Best Practices &amp; Conventions](https://docs.abp.io/en/abp/latest/Best-Practices/Domain-Services) guide.

### QuestionManager

QuestionManager is used to manage the questions of your form.

### Application layer

Application services

* FormApplicationService
* QuestionAppService
* ResponseAppService

### Database providers

Common

### Table / collection prefix & schema

All tables/collections use the Frm prefix by default. Set static properties on the FormsDbProperties class if you need to change the table prefix or set a schema name (if supported by your database provider).

### Connection string

This module uses Forms for the connection string name. If you don't define a connection string with this name, it fallbacks to the Default connection string.

See the [connection strings](https://docs.abp.io/en/abp/latest/Connection-Strings) documentation for details.

Entity Framework Core / MongoDB

Tables / Collections

* **FrmForms**: Form list.
* **FrmQuestions**: Questions of the forms
* **FrmAnswers**: Answers of the form response.
* **FrmChoices**: Choices of questions.
* **FrmFormResponses**: A new form response is being created each time user submits the form.

**Entity Relationships**

![Entity Relationships](https://raaghustorageaccount.blob.core.windows.net/raaghu-docs/entityRelationship.jpg)

### Permissions

See the FormsPermissions class members for all permissions defined for this module.
