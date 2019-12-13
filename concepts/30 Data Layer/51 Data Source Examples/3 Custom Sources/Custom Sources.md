Custom data access logic can be implemented using the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') class. A developer should implement all data access operations in the CustomStore.

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
    
The DataSource supports a more brief syntax without introducing an explicit CustomStore instance.

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
    
For example, the following synthetic implementation generates an infinite read-only list:

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

In this example, **load** and **byKey** functions are synchronous, that is they instantly return a result. In the next example, we connect to a remote web service, and therefore functions return **jQuery.Deferred** promises.

[note] DevExtreme also provides store implementations for the <a href="https://github.com/DevExpress/DevExtreme-Data-BreezeJS" target="_blank">BreezeJS</a> and <a href="https://github.com/DevExpress/DevExtreme-Data-JayData" target="_blank">JayData</a> data libraries. You can use them as a reference if you decide to introduce a custom store implementation for another data library.
