Pass the required array to the DataSource constructor.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource(array);

If you need to specify other DataSource [configuration options](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/'), use another form.

    <!--JavaScript-->var dataSource = new DevExpress.data.DataSource({
        // array of data
        store: array,

        // additional configuration options
        sort: "name",
        pageSize: 10
    });

In this case, the array is passed to the [store](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#store') option of the configuration object.
