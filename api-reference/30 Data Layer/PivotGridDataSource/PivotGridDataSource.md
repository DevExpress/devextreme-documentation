---
module: ui/pivot_grid/data_source
type: object
inherits: ..\..\10 UI Widgets\EventsMixin\EventsMixin.md
---
---
##### lib
dx.web.js, dx.viz-web.js, dx.all.js

##### shortDescription
An object that provides access to data for the [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget.

---
The PivotGridDataSource object is a connection between a [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') widget and the data provided by a web service or data stored locally. The DataSource underlying data access logic is isolated in a [Store](/concepts/30%20Data%20Layer/5%20Data%20Layer/1%20Creating%20DataSource/3%20What%20Are%20Stores.md '/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores'). You can use the following Store types in the PivotGridDataSource.

* [ArrayStore](/api-reference/30%20Data%20Layer/ArrayStore '/Documentation/ApiReference/Data_Layer/ArrayStore/')		
	Provides access to an in-memory array.

* [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/')		
	Provides access to a remote OLAP service.

* [LocalStore](/api-reference/30%20Data%20Layer/LocalStore '/Documentation/ApiReference/Data_Layer/LocalStore/')		
	Provides access to an HTML5 web storage.

* [ODataStore](/api-reference/30%20Data%20Layer/ODataStore '/Documentation/ApiReference/Data_Layer/ODataStore/')		
	Provides access to a remote OData service.

* [CustomStore](/api-reference/30%20Data%20Layer/CustomStore '/Documentation/ApiReference/Data_Layer/CustomStore/')		
	A Store that enables you to implement your own data access logic.

To create a PivotGridDataSource instance, call its constructor and pass the [configuration object](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/') to it.

    <!--JavaScript-->var myDataSource = new DevExpress.data.PivotGridDataSource(pivotGridDataSourceConfig);

The core field of the configuration object is [store](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/store '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/'). If your Store type is [XmlaStore](/api-reference/30%20Data%20Layer/XmlaStore '/Documentation/ApiReference/Data_Layer/XmlaStore/'), no additional configuration is required, whereas if you use other Store types, you also need to describe your data for [PivotGrid](/api-reference/10%20UI%20Widgets/dxPivotGrid '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/') by assigning the list of fields to the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

To associate a PivotGridDataSource instance with the widget, pass this instance to the dataSource option of the widget.

    <!--HTML--><div data-bind="dxPivotGrid: { dataSource: myDataSource }"></div>

You can also pass the PivotGridDataSource configuration object to the dataSource option. In this case, the PivotGridDataSource instance will be automatically created within the widget.

    <!--HTML--><div data-bind="dxPivotGrid: { dataSource: pivotGridDataSourceConfig }"></div>

[note] If you create a PivotGridDataSource instance outside the widget, be sure to [dispose](/api-reference/30%20Data%20Layer/PivotGridDataSource/3%20Methods/dispose().md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#dispose') of it when it is no longer used. If the PivotGridDataSource is created within the widget, it will be disposed of automatically.

Refer to the [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') and [Data Layer](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/') topics for more information about working with data in DevExtreme.