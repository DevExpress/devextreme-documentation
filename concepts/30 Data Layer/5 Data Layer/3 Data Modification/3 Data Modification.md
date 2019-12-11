For read-write access to data, use a [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores') directly in addition to the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/'). You have two opportunities to obtain a Store instance.

Create a Store instance explicitly.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        key: "id",
        data: [
            {
                id: 1,
                value: "value 1"
            },
            {
                id: 2,
                value: "value 2"
            }
        ]
    });

Note that it is necessary to specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') expression to identify data items.

To load data from this Store either call **store.load(loadOptions)** or [wrap this Store with the DataSource](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/2%20From%20Store.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Store').

If you already have an existing DataSource, you can obtain the underlying Store instance via the [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method.
