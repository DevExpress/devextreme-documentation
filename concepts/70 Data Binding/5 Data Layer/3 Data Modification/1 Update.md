To update a data item specified by the key, use the [store.update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) method.

    <!--JavaScript-->
    store.update(1, { value: "new value" })
        .done(function(values) {
            //handle successful updating
        })
        .fail(function(error) {
            //handle error
        });

[note] The second argument of the **update(key, values)** method contains only the properties whose values should be changed, not the entire item. This argument merges with the original item.

Before updating, use the [store.byKey(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#byKeykey_extraOptions) method to load the required item.