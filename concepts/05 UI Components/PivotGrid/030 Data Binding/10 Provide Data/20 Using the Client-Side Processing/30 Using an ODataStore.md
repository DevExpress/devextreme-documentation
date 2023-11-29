<a href="http://www.odata.org" target="_blank">OData</a> is a universal open protocol for consuming data APIs. The DevExtreme data library provides a special type of Store to access OData web services, called [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/'). The following code is sufficient to provide data for PivotGrid using an ODataStore.

	<!--JavaScript-->var pivotGridDataSource = {
		store: {
			type: 'odata',
			url: 'http://url/to/the/source'
		}
	};


An ODataStore has many more properties available for configuring. For the full list, refer to the [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') reference section.

After you have created a data source configuration object, you need to bind it to your grid. Refer to the [Bind Data](/concepts/05%20UI%20Components/PivotGrid/030%20Data%20Binding/20%20Bind%20Data.md '/Documentation/Guide/UI_Components/PivotGrid/Data_Binding/#Bind_Data') section to learn how to do this.

#### A 1-Click Solution for CRUD Web API Services with Role-based Access Control via EF Core

If you target .NET for your backend API, be sure to check out [Web API Service](https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and register your [free copy today](https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore). The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core ORM. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.
The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc.

To use the free Solution Wizard (which creates the Web API Service), run the Universal Component Installer from the [DevExpress Download Manager](https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-layer-odatastore) and use our predefined template in Visual Studio 2022+.

[Read Tutorial](https://docs.devexpress.com/eXpressAppFramework/404449/backend-web-api-service/get-started-with-web-api-service) | View Examples: [JavaScript (DevExtreme)](https://go.devexpress.com/XAF_Security_NonXAF_DevExtreme_OData.aspx) & [JavaScript (Svelte)](https://github.com/oliversturm/demo-dx-webapi-js/tree/stage-6) | [Watch Videos](https://www.youtube.com/watch?v=T7y4gwc1n4w&list=PL8h4jt35t1wiM1IOux04-8DiofuMEB33G)