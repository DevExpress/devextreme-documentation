<a href="http://www.odata.org" target="_blank">OData</a> is a universal open protocol for consuming data APIs. The DevExtreme data library provides a special type of Store to access OData web services, called [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). The following code is sufficient to provide data for PivotGrid using an ODataStore.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		}
	};


An ODataStore has many more properties available for configuring. For the full list, refer to the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/05%20UI%20Components/PivotGrid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Components/PivotGrid/Data_Binding/#Bind_Data') section to learn how to do this.

#### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core & XPO

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=pivot-odata-service" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=pivot-odata-service" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=pivot-odata-service" target="_blank">DevExpress Download Manager</a>.