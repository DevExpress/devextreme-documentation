For a read-write access to data, use a Store directly. To obtain a store instance from a DataSource, call its [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method.

	<!--JavaScript-->var store = dataSource.store();

To update a data item specified by a key, use the **update(key, values)** method of a store instance.

    <!--JavaScript-->store.update(1, { value: "new value" })
        .done(function(values) {
            // handle successful updating
        })
        .fail(function(error) {
            // handle an error
        });

Note that the second argument of the **update(key, values)** method contains only the options whose values should be changed in the data item, but not the entire item, because it will be merged with the original item object. Before updating, you may need to obtain the required item using the **byKey(key)** method of a store instance.

After a store has been updated, call the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method of the DataSource object to update data in your widget as well.

	<!--JavaScript-->dataSource.load();

For details on data modification in the Data Library, refer to the [Data Modification](/concepts/30%20Data%20Layer/5%20Data%20Layer/3%20Data%20Modification '/Documentation/Guide/Data_Layer/Data_Layer/#Data_Modification') topic.
