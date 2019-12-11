The **List** widget can display the loading panel when it is loading data. Set the [indicateLoading](/api-reference/10%20UI%20Widgets/dxList/1%20Configuration/indicateLoading.md '/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#indicateLoading') option to *true* to enable this feature.

    <!--JavaScript-->
    var listOptions = {
        dataSource: new DevExpress.data.DataSource(myDataStore),
        indicateLoading: true
    }

[note]This option affects only the load panel displayed when the bound [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') is loading data after the [load()](/api-reference/30%20Data%20Layer/DataSource/3%20Methods/load().md '/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load') method is called. The load indicator displayed when the list is being updated is always enabled regardless of the option value.