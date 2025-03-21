To enable read-write access to data, directly connect to a [Store](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/What_Are_Stores') in addition to [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/').

To obtain a Store instance, do one of the following:

1. Create a Store instance explicitly.

        <!--JavaScript-->
        const store = new DevExpress.data.ArrayStore({
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

    [note] Specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key') expression to identify data items.

    To load data from the Store, call [store.load(loadOptions)](/api-reference/30%20Data%20Layer/CustomStore/3%20Methods/load(options).md '/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions') or [wrap the Store with the DataSource](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/2%20From%20Store.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/From_Store').

2. To obtain the underlying Store instance from an existing DataSource, use the [store()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/store().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store') method.
