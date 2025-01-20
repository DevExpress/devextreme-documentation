To remove a data item, call the [store.remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method.

    <!--JavaScript-->
    store.remove(1)
        .done(function(key) {
            //handle success
        })
        .fail(function(error) {
            //handle error
        });