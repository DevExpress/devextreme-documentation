To insert a new item to the Store, call the **store.insert(values)** method.

    <!--JavaScript-->
    store.insert({
            id: 3,
            value: "value 3"
        })
        .done(function(values, key) {
            //handle success
        })
        .fail(function(error) {
            //handle error
        });

Some Stores can generate a key value if you have not specified it in the **values** object. You may access it via the **key** argument of the **done** callback.