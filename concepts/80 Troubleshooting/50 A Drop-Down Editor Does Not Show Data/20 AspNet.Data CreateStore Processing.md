If you call the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data#devextreme-aspnet-data).[createStore()](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method to bind a standalone editor or DataGrid/TreeList lookup column, the editor expects all data operations (including value selection) to be performed on the server. Set the [createStore()](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) [loadMode](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#loadMode) option to `raw` to process data on a client.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DropDownBox/SingleSelection/",
    name: "DropDownBox Demo"
}