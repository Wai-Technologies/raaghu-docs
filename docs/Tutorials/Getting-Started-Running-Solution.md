---
sidebar_position: 1
---

# Web Application Development

<style>
  @import url('https://fonts.googleapis.com/css2?family=Lexend:wght@100;300;400;500;600;700;800;900&family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
</style>

# Create the Database

### Connection String

Check the connection string in the **appsettings.json** file under the .Web project.

````json
"ConnectionStrings": {"Default": "Server=localhost;Database=BookStore;Trusted_Connection=True"}
````

**About the Connection Strings and Database Management Systems**

The solution is configured to use Entity Framework Core with MS SQL Server by default. However, if you've selected another DBMS using the **-dbms** parameter on the ABP CLI **new** command (like **-dbms MySQL**), the connection string might be different for you.

EF Core supports [various ](https://learn.microsoft.com/en-us/ef/core/providers/)database providers and you can use any supported DBMS. See [the Entity Framework integration document](https://docs.abp.io/en/abp/latest/Entity-Framework-Core) to learn how to [switch to another DBMS](https://docs.abp.io/en/abp/latest/Entity-Framework-Core-Other-DBMS) if you need later.

### Cors Origins

Check the CorsOrigins in the **appsettings.json** file under the .Web project.

````json
 "CorsOrigins": "https://*.abp_react_7_3.com,http://localhost:4200,http://localhost:8080",
````
The CorsOrigins setting defines the allowed origins for Cross-Origin Resource Sharing (CORS). This setting allows requests from the specified origins. 
In this configuration, 'http://localhost:8080' is included to allow requests from a local development server, typically used for development and testing purposes.

### Database Migrations

The solution uses the [Entity Framework Core Code First Migrations.](https://learn.microsoft.com/en-us/ef/core/managing-schemas/migrations/?tabs=dotnet-core-cli) It comes with a **.DbMigrator** console application which **applies the migrations** and also **seeds the initial data.** It is useful on **development** as well as on **production** environment.

**.DbMigrator** project has its own **appsettings.json.** So, if you have changed the connection string above, you should also change this one.

### The Initial Migration

.DbMigrator application automatically **creates the Initial migration** on first run.

**If you are using Visual Studio, you can skip to the *Running the DbMigrator* section.** However, other IDEs (e.g. Rider) may have problems for the first run since it adds the initial migration and compiles the project. In this case, open a command line terminal in the folder of the `.DbMigrator` project and run the following command:

````shell
dotnet run
````

For the next time, you can just run it in your IDE as you normally do.

### Running the DbMigrator

Right click to the `.DbMigrator` project and select **Set as StartUp Project**


 Hit F5 (or Ctrl+F5) to run the application. It will have an output like shown below:



Initial [seed data](Data-Seeding.md) creates the `admin` user in the database (with the password is `1q2w3E*`) which is then used to login to the application. So, you need to use `.DbMigrator` at least once for a new database.

The solution is configured to use **MongoDB** in your local computer, so you need to have a MongoDB server instance up and running or change the connection string to another MongoDB server.

## Run the Application

Warning: When you create an ABP solution, the client-side packages are being restored by ABP CLI and Suite. But if you fetch the source-code that's commited by another team member, your **libs** folder will be empty. Before starting the application, run **abp install-libs** command in your Web directory to restore the client-side libraries. This will populate the **libs** folder. Ensure that the **.Web** project is the startup project. Run the application which will open the **login** page in your browser:


Use Ctrl+F5 in Visual Studio (instead of F5) to run the application without debugging. If you don't have a debug purpose, this will be faster.



The application is up and running. You can start developing your application based on this startup template.


## See Also

* [Web Application Development Tutorial](Getting-Started-Running-Solution.md)
