Any custom data access logic can be implemented using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') class. In the CustomStore, all data access operations must be implemented by a developer.

    <!--JavaScript-->
    var myStore = new DevExpress.data.CustomStore({
        load: function(loadOptions) {
            // . . .
        },
        byKey: function(key, extra) {
            // . . .
        },
        update: function(values) {
            // . . .
        },
        . . .  
    });
    
    var dataSource = new DevExpress.data.DataSource({
        store: myStore
    });
    
DataSource supports a more brief syntax, without introducing an explicit CustomStore instance.

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            // . . .
        },
        byKey: function(key, extra) {
            // . . .
        },
        update: function(values) {
            // . . .
        },
        . . .
    });
    
As an example, consider the following synthetic implementation, which generates a read-only infinite list:

    <!--JavaScript-->
    var infiniteListSource = new DevExpress.data.DataSource({
        load: function(loadOptions) {
            var result = [ ];
            for(var i = 0; i < loadOptions.take; i++)
                result.push({ id: 1 + loadOptions.skip + i });            
            return result;
        },
        byKey: function(key) {
            return { id: key };
        }
    });

In this example, **load** and **byKey** functions are synchronous, that is they return a result right away. In the next example, we will connect to a remote web service and therefore functions will return **jQuery.Deferred** promises.
