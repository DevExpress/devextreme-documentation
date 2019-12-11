In addition to entites, OData services may expose service operations. The [ODataContext](/api-reference/30%20Data%20Layer/ODataContext '/Documentation/ApiReference/Data_Layer/ODataContext/') class supports this capability. For the information on service operations, refer to the <a href="http://www.odata.org/documentation" target="_blank">OData documentation</a>.

To invoke an operation which does not return any value, use the [invoke()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/invoke(operationName_params_httpMethod).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#invokeoperationName_params_httpMethod') method.

    <!--JavaScript-->
    context.invoke("MyAction", { param: "value" });
    
To invoke an operation and get its return value, use the [get()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/get(operationName_params).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#getoperationName_params') method.

    <!--JavaScript-->
    context.get("GetSomeValue", { param: "value" });
    
One interesting case is a service operation which supports querying on top of it. In this case, the operation may be treated as a read-only entity, and input parameters can be passed to the **customQueryParams** extension of the DataSource load options.

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