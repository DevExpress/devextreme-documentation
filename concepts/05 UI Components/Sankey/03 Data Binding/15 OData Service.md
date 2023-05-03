To bind the Sankey to data from an OData service, use the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). You should declare it inside the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') configuration object because the Sankey UI component requires disabled [pagination](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate') to prevent data from partitioning.

#include data-binding-examples-odata with {
    key: "['from', 'to']"
}

### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core & XPO

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=sankey-odata-service" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=sankey-odata-service" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=sankey-odata-service" target="_blank">DevExpress Download Manager</a>.

#####See Also#####
- [DataSource Examples - OData](/concepts/70%20Data%20Binding/51%20Data%20Source%20Examples/2%20OData '/Documentation/Guide/Data_Binding/Data_Source_Examples/#OData')
- [Update Data in the Sankey](/concepts/70%20Data%20Binding/03%20Update%20Data '/Documentation/Guide/Data_Binding/Update_Data/')
