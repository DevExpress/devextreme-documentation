This object represents a whole OData service, it creates a number of [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/') instances inside, so you can access separate entities. In addition, the ODataContext includes [get()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/get(operationName_params).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#getoperationName_params') and [invoke()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/invoke(operationName_params_httpMethod).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#invokeoperationName_params_httpMethod') methods used to invoke [service operations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Invoking_Service_Operations), and the [objectLink()](/api-reference/30%20Data%20Layer/ODataContext/3%20Methods/objectLink(entityAlias_key).md '/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#objectLinkentityAlias_key') helper method to [link entities](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations).

To create an ODataContext instance, call the ODataContext constructor with the required [configuration object](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/').

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        errorHandler: function(error) {
            alert(error.message);
        },
        entities: {
            Categories: { 
                key: "CategoryID", 
                keyType: "Int32" 
            },
            MyCustomers: { 
                name: "Customers",
                key: "CustomerID", 
                keyType: "String" 
            }
        }
    });
    
In the example above, ODataContext is created to access two entities (Categories and Customers) from the service located at the *http://www.example.com/Northwind.svc* URL.

Each sub-object of the [entities](/api-reference/30%20Data%20Layer/ODataContext/1%20Configuration/entities.md '/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#entities') configuration object defines a name and configuration settings for an ODataStore within this context instance. Two ODataStore objects are impicitly created: **context.Categories** to access *http://www.example.com/Northwind.svc/Categories* and **context.MyCustomers** accessing *http://www.example.com/Northwind.svc/Customers*. Note how in the second case we specified different names for the store and the entity by using additional **name** parameter.

Now, you can create a DataSources to load data.

    <!--JavaScript-->
    var categoriesSource = new DevExpress.data.DataSource(context.Categories);

The following example illustrates how create the same DataSource providing the additional configuration.

    <!--JavaScript-->
    var categoriesSource = new DevExpress.data.DataSource({
        store: context.Categories,
        pageSize: 5,
        sort: "CategoryName"
    });    
    
To perform data modification, use Store objects directly:

    <!--JavaScript-->
    context.Categories
        .update(1, { CategoryName: "Beverages" })
        .done(doneCallback)
        .fail(failCallback);

