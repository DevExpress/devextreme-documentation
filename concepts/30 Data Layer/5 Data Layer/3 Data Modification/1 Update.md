To update a data item specified by the key, use the **store.update(key, values)** method.

    <!--JavaScript-->
    store.update(1, { value: "new value" })
        .done(function(values) {
            //handle successfull updating
        })
        .fail(function(error) {
            //handle error
        });

Note that the second argument of the **update(key, values)** method contains only the properties whose values should be changed in the data item, but not the entire item, because it will be merged with the original item object.

In a common scenario, before updating, you need to load the required item using the **store.byKey(key)** method.