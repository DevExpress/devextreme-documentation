This help topic describes how to improve PivotGrid performance when binding and processing large data sets.

### Enable Remote Operations

The DevExtreme PivotGrid performs all data operations, such as filtering and grouping, on the client side. To enhance component performance, enable **PivotGridDataSource**.[remoteOperations](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/remoteOperations.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations') to process data on the server side. PivotGrid **remoteOperations** support [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/') and [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/') store types, along with **CustomStore** instances created with [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md).[createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference).

For more information about the **createStore** method, refer to the following topic: [Web API, PHP and MongoDB Data Sources](/concepts/70%20Data%20Binding/00%20Specify%20a%20Data%20Source/30%20Web%20API%2C%20PHP%2C%20MongoDB.md '/Documentation/Guide/Data_Binding/Specify_a_Data_Source/Web_API,_PHP,_MongoDB/')

For more information about integrating a Web API service with PivotGrid, refer to the following demo:

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/"
}

### Enable Virtual Scrolling

Enable virtual scrolling to render cells as users scroll them into view. Set **scrolling**.[mode](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/scrolling/mode.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/scrolling/#mode') to *"virtual"*.

### Enable Pagination

When binding the component to an OLAP Cube with an **XmlaStore**, you can enable pagination to load data in portions. To do this, enable **PivotGridDataSource**.[paginate](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/paginate.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#paginate').

### Disable the Expand All Button

The "Expand All" button can request a lot of data from your data source at once. This can strain server resources and cause other performance issues with your application if you are using a remote data store. Disable [allowExpandAll](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/allowExpandAll.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowExpandAll') if you are using large remote datasets to avoid issues with data loading.

### Enable State Storing

[stateStoring](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/') can improve component usability when working with large datasets. Users can save their view settings after interacting with PivotGrid to continue working with the component at a later date. You can also implement the [customSave](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring/customSave.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customSave') and [customLoad](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/stateStoring/customLoad.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customLoad') functions to set up multiple save states.