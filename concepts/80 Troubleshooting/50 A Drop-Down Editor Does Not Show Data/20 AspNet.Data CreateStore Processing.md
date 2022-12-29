If you call the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data#devextreme-aspnet-data).[createStore()](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method to bind a standalone editor or DataGrid/TreeList lookup column, the editor expects all data operations (including value selection) to be performed on the server. Use the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data#devextreme-aspnet-data) library to obtain correct data in the [Controller](https://docs.devexpress.com/AspNetCore/401020/devextreme-based-controls/concepts/bind-controls-to-data/api-controllers) for .NET-based applications. If you have another back-end type, adjust your server logic to return data in the proper format according to the [loadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/) parameters.

Examine your network requests to learn which [loadOptions](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/) parameters you need to specify. In the example below the parameter is `filter`.

![DataGrid Lookup Network Request Parameters](/images/Troubleshooting/datagrid-lookup-network-request-parameters.png)

if your back-end does not support server operations, set the [createStore()](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) [loadMode](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode) option to `raw` to process data on a client.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/",
    name: "DropDownBox Demo"
}

#####See Also#####
- [Server-Side Data Processing](Documentation/Guide/Data_Binding/Specify_a_Data_Source/Custom_Data_Sources/#Load_Data/Server-Side_Data_Processing).