Pass a Store instance to the DataSource constructor.

    <!--JavaScript-->var store = new DevExpress.data.ArrayStore(data);
    var dataSource = new DevExpress.data.DataSource(store);

If you need to specify other DataSource [options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/'), use the following code.

    <!--JavaScript-->var store = new DevExpress.data.ArrayStore(array);
    var dataSource = new DevExpress.data.DataSource({
        sort: "name",
        pageSize: 10,
        store: store
    });

In this example, the Store instance is passed to the [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store') configuration option.

A Store can be specified implicitly. Two possibilities are described above ([From Array](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/0%20From%20Array.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/From_Array') and [From Url](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_From_Url)). In addition, you can use the following.

- Add the properties implementing the required data access logic to the DataSource configuration object. In this case, the [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') will be automatically created within the DataSource. The properties should correspond to the [CustomStore configuration options](/api-reference/30%20Data%20Layer/CustomStore/1%20Configuration '/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/').

        <!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
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

- Pass a Store configuration object. Besides the required Store configuration options, this object should contain the **type** property that specifies which Store object will be created within the DataSource. 

        <!--JavaScript-->var dataSource = new DevExpress.data.DataSource(
            store: {
                type: "array",
                data: array
            }
        });

 The following Store types are available.

 - "array" - creates an [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/')
 - "local" - creates a [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/')
 - "odata" - creates an [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/')
