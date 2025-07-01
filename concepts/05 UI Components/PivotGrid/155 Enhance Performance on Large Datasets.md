### Process Data Before Binding to the Component

The DevExtreme PivotGrid performs all data processing operations such as filtering and sorting on the client side. To enhance component performance, you can process data on your server before binding it to PivotGrid. For instance, bind the component to an [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) to access an OLAP cube following the XMLA standard.

### Enable Remote Operations

PivotGridDataSource.remoteOperations

### Enable Virtual Scrolling

scrolling.mode = "virtual"

### Enable Pagination

PivotGridDataSource.paginate

### Disable the Expand All Option

The "Expand All" button can request a lot of data from your data source at once. This can strain your server resources and cause other performance issues with your application if you are using a remote data store. Disable **allowExpandAll** if you are using large remote datasets to avoid issues with data loading.

### Enable State Storing

stateStoring