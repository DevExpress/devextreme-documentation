---
title: Backend Web/REST API for JS Apps with Access Control Rights (Powered by EF Core) 
---

Besides DevExtreme UI components, your client-side JavaScript (JS) applications often require an easy-to-setup and secure Web API backend for CRUD and custom operations with a database, authentication and authorization (role-based access control, permission management). To implement such functionality, you can use [DevExpress .NET App Security & Web API Service](https://www.devexpress.com/products/net/application_framework/security-web-api-service.xml). XAF's Solution Wizard includes a "1-Click" solution to create [ASP.NET Core Web/HTTP API services](https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service) (via OData and Swagger/OpenAPI).

[Read Tutorial](https://docs.devexpress.com/eXpressAppFramework/404449/backend-web-api-service/get-started-with-web-api-service) | [Watch Videos](https://www.youtube.com/watch?v=T7y4gwc1n4w&list=PL8h4jt35t1wiM1IOux04-8DiofuMEB33G)

![Backend Web/REST API](/images/Common/backend-web-api-article-main.png)

#### Benefits

- **Powered by Entity Framework Core ORM (EF Core)**    
DevExpress Web API Service leverages the functionality of EF Core to implement CRUD operations required for your app.

- **Multiple Authentication Strategies**     
You application’s authentication mechanism can leverage built-in support for OAuth2, JWT, and OpenID. You can also implement custom authentication.

- **IDE Integration**    
If you work in Visual Studio 2022+ for Windows, the integrated Solution Wizard automatically scaffolds your Web Service to speed up application development.

Basic functionality of DevExpress Web API Service is available for free. Additional capabilities and services listed below are available as part of the [DevExpress Universal Subscription](https://www.devexpress.com/subscriptions/universal.xml):

- Audit trail
- Endpoints to download reports and file attachments
- Data validation
- Localization endpoints that return translated captions for UI elements
- Technical support and full source code

#### Get Started: Add DevExpress Web API Service Functionality

Refer to the following articles to get started:

- [Predefined Users, Roles, and Permissions](https://docs.devexpress.com/eXpressAppFramework/119065/data-security-and-safety/security-system/security-object-model/predefined-users-roles-and-permissions): describes how to configure permissions for your ORM data models or your EF Core entities.

- [JavaScript (DevExtreme) Example](https://go.devexpress.com/XAF_Security_NonXAF_DevExtreme_OData.aspx): shows a client-side HTML/JavaScript CRUD app that uses the DevExtreme Data Grid and connects to an OData v4 web service (using the ASP.NET Core Web API).

#### Authorization (Role-Based Access Control)

Web API Service apps ship with built-in Role-based Access Control (RBAC) - a part of the [Security System module](https://docs.devexpress.com/eXpressAppFramework/113366/data-security-and-safety/security-system).

You can implement fine-grain access control for object relationships, individual objects, or columns. For example, a user may be able to read the *Name* field, but not be able to modify *Salary*. Use straightforward API to check access permissions and customize UI accordingly. For example, you can mask protected editors or disable menu commands.