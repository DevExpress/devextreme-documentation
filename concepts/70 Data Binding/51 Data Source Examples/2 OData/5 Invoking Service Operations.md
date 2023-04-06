In addition to entites, OData services may expose service operations. The [ODataContext](/api-reference/30%20Data%20Layer/ODataContext '/Documentation/ApiReference/Data_Layer/ODataContext/') class supports this capability. For the information on service operations, refer to the <a href="http://www.odata.org/documentation" target="_blank">OData documentation</a>.

To invoke an operation which does not return any value, use the [invoke()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/invoke(operationName_params_httpMethod).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#invokeoperationName_params_httpMethod') method.

    <!--JavaScript-->
    context.invoke("MyAction", { param: "value" });
    
To invoke an operation and get its return value, use the [get()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/get(operationName_params).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#getoperationName_params') method.

    <!--JavaScript-->
    context.get("GetSomeValue", { param: "value" });
    
One interesting case is a service operation which supports querying on top of it. In this case, the operation may be treated as a read-only entity, and input parameters can be passed to the **customQueryParams** extension of the DataSource load properties.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        entities: {
            "GetSomeValue": { 
            }
        }
    });
    
    new DevExpress.data.DataSource({
        store: context.GetSomeValue,
        
        // operation parameters
        customQueryParams: {
            operationParam: "value"
        }
    });

[note]

If you target .NET for your backend API, be sure to check out <a href="https://docs.devexpress.com/eXpressAppFramework/403394/backend-web-api-service?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-source-examples-odata" target="_blank">Web API Service</a> and register your <a href="https://www.devexpress.com/security-api-free?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-source-examples-odata" target="_blank">free copy today</a>. The Solution Wizard scaffolds an OData v4 Web API Service (.NET 6+) with integrated authorization & CRUD operations powered by EF Core and our XPO ORM library. You can use OAuth2, JWT or custom authentication strategies alongside tools like Postman or Swagger (OpenAPI) for API testing.

The built-in Web API Service also filters out secured server data based on permissions granted to users. Advanced/enterprise functions include audit trail, endpoints to download reports, file attachments, check validation, obtain localized captions, etc. 

To use the free Solution Wizard (which creates the Web API Service) run the Universal Component Installer from the <a href="https://www.devexpress.com/ClientCenter/DownloadManager/?utm_source=js.devexpress.com&utm_medium=referral&utm_campaign=xaf&utm_content=data-source-examples-odata" target="_blank">DevExpress Download Manager</a>.

[/note]