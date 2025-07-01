This help topic describes how to improve PivotGrid performance when binding and processing large data sets.

[note] To enhance component performance, we recommend you process data before binding it to PivotGrid.

### Enable Remote Operations

The DevExtreme PivotGrid performs all data operations such as filtering and grouping on the client side. To enhance component performance, enable **PivotGridDataSource**.[remoteOperations](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#remoteOperations) to process data on the server side. PivotGrid **remoteOperations** support [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) and [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) store types. 

### Enable Virtual Scrolling

Enable virtual scrolling to render cells as users scroll them into view. Set **scrolling**.[mode](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/scrolling/#mode) to *"virtual"*.

### Enable Pagination

Enable pagination to load data in portions. To do this, enable **PivotGridDataSource**.[paginate](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#paginate).

### Disable the Expand All Button

The "Expand All" button can request a lot of data from your data source at once. This can strain your server resources and cause other performance issues with your application if you are using a remote data store. Disable [allowExpandAll](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowExpandAll) if you are using large remote datasets to avoid issues with data loading.

### Enable State Storing

[stateStoring](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/) can improve component usability when working with large datasets. Users can save their view settings after interacting with PivotGrid to continue working with the component at a later date. You can also implement the [customSave](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customSave) and [customLoad](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/stateStoring/#customLoad) functions to set up multiple save states.