To insert a new item into the Store, call the [store.insert(values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/insert(values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues') method.

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

Some Stores can generate a key value if it is not specified in the **values** object. Access it through the **key** argument of the **done** callback.