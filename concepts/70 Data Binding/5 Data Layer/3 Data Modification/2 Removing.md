To remove a data item, call the [store.remove(key)](/api-reference/30%20Data%20Layer/Store/3%20Methods/remove(key).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey') method.

    <!--JavaScript-->
    store.remove(1)
        .done(function(key) {
            //handle success
        })
        .fail(function(error) {
            //handle error
        });