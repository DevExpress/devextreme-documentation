To update a data item specified by the key, use the [store.update(key, values)](/api-reference/30%20Data%20Layer/Store/3%20Methods/update(key_values).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values') method.

    <!--JavaScript-->
    store.update(1, { value: "new value" })
        .done(function(values) {
            //handle successful updating
        })
        .fail(function(error) {
            //handle error
        });

[note] The second argument of the **update(key, values)** method contains only the properties whose values should be changed, not the entire item. This argument merges with the original item.

Before updating, use the [store.byKey(key)](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/byKey(key_extraOptions).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions') method to load the required item.