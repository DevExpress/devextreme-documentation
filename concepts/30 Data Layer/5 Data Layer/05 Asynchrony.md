All Data transferring operations in the data layer are asynchronous, whether it be an access to a remote service or to local data. It is made to support the universal Store interface, regardless of the source of data you access. These operations return the [jQuery.Deferred](https://api.jquery.com/jQuery.Deferred) promise. Use methods of the returned promise to specify callbacks - **done()** for successful operation completion and **fail()** for operation failure.

    <!--JavaScript-->
    dataSource.load()
        .done(function(result) {
            //success callback
        })
        .fail(function(error) {
            //error callback
        });

When implementing [custom data access logic](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples/3%20Custom%20Sources '/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources'), you are not required to create the **jQuery.Deferred** object within a function implementing a data access operation. It is enough to return an object compatible with **jQuery.Deferred**.
