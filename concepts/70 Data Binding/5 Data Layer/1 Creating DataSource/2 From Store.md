Pass a Store instance to the DataSource constructor.

    <!--JavaScript-->const store = new DevExpress.data.ArrayStore(data);
    const dataSource = new DevExpress.data.DataSource(store);

If you need to specify other DataSource [properties](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/'), use the following code:

    <!--JavaScript-->const store = new DevExpress.data.ArrayStore(array);
    const dataSource = new DevExpress.data.DataSource({
        sort: "name",
        pageSize: 10,
        store: store
    });

In this example, the Store instance is passed to the [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store') configuration property.

A Store can be specified implicitly. Two methods are described above ([From Array](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/0%20From%20Array.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/From_Array') and [From Url](/concepts/70%20Data%20Binding/5%20Data%20Layer/1%20Creating%20DataSource/1%20From%20url.md '/Documentation/Guide/Data_Binding/Data_Layer/#Creating_DataSource/From_url')). You can also use the following methods:

- Add the properties implementing the required data access logic to the DataSource configuration object. In this case, the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') will be automatically created within the DataSource. The properties should correspond to the [CustomStore configuration properties](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/').

        <!--JavaScript-->const dataSource = new DevExpress.data.DataSource({
            //DataSource configuration
            sort: "name",
            pageSize: 10,
            //data access logic
            load: function(loadOptions) {
                return array;
            },
            byKey: function(key) {
                return array[key];
            },
            ...
        });

- Pass a Store configuration object. This object should include the required Store configuration properties and the **type** property. **type** specifies which Store object will be created within the DataSource. 

        <!--JavaScript-->const dataSource = new DevExpress.data.DataSource({
            store: {
                type: "array",
                data: array
            }
        });

 The following Store types are available.

 - "array" - creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/')
 - "local" - creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/')
 - "odata" - creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/')
