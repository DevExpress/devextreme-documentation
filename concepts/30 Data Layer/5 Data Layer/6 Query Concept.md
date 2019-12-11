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

Array Query can come handy when implementing a [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/'). Consider an example of connecting to a remote web service which does not support filtering on its side, so it is done in the JavaScript code.


    <!--JavaScript-->
    var store = new DevExpress.data.CustomStore({
        load: function(loadOptions) {
            var deferred = $.Deferred();
        
            // load data from the remote service
            $.getJSON("http://www.example.com/service.url").done(function(data) {
            
                // perform filtering on the client side
                var query = DevExpress.data.query(data);                
                if(loadOptions.filter)
                    query = query.filter(loadOptions.filter);
                
                deferred.resolve(query.toArray());
            });

            return deferred.promise();
        }    
    });