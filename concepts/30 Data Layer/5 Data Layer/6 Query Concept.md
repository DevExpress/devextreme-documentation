Besides [DataSource and Stores](/concepts/30%20Data%20Layer/5%20Data%20Layer/0%20Overview.md '/Documentation/Guide/Data_Layer/Data_Layer/#Overview'), DevExtreme data layer has one more useful concept named [Query](/api-reference/30%20Data%20Layer/Query '/Documentation/ApiReference/Data_Layer/Query/'). Query is an abstract chainable interface which provides functionality to evaluate data queries.

There are several implementations of this interface, and they are used internally in some Stores as part of the **load()** method. While Query is considered internal instrument, one implementation, which is a wrapper over a JavaScript array, is particularly interesting, and can be used in the application code.

Here is an example:
    
    <!--JavaScript-->
    var processedArray = DevExpress.data.query(inputArray)
        .filter([ [ "value", ">=", 10 ], "and", [ "value", "<=", 90 ]])
        .sortBy("lastName")
        .thenBy("firstName")
        .select("lastName", "firstName", "value")
        .toArray();
        
The full list of supported methods is given in the [Query API reference](/api-reference/30%20Data%20Layer/Query/3%20Methods '/Documentation/ApiReference/Data_Layer/Query/Methods/').