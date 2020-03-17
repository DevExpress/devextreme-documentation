To remove a data item, call the **store.remove(key)** method.

    <!--JavaScript-->
    store.remove(1)
        .done(function(key) {
            //handle success
        })
        .fail(function(error) {
            //handle error
        });