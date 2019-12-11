---
default: null
type: String | Array | DataSource | DataSource_Options
---
---
##### shortDescription
Specifies a data source for the grid.

---
This option accepts one of the following.

- Array of objects      
 A simple JavaScript array containing a collection of plain objects.

- URL       
 A URL to JSON data or to a service returning data in JSON format.

- [DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')      
 A DataSource is an object that provides a handy API for data processing. A DataSource is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a DataSource is isolated in a Store. A Store provides an API for reading and modifying data. Unlike the DataSource, a Store is a stateless object.
    [note]If you use [data mapping](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map') and [export](/concepts/05%20Widgets/DataGrid/090%20Client-Side%20Export '/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/') data to a file, the changes made to data by the map function are ommitted in the exported file. The same occurs while [getting data of the selected rows](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData'). It is better to use [calculated columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') instead of mapping.


By default, a column is generated for each field of data source objects, although you can specify a custom array of columns using the [columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/') option. To get more information about specifying grid columns, see the [Specifying Grid Columns](/concepts/05%20Widgets/DataGrid/001%20Visual%20Elements/010%20Grid%20Columns/020%20Specifying%20Grid%20Columns.md '/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Specifying_Grid_Columns') topic.

When using a data source that changes dynamically, the **DataGrid** widget cannot track changes. To update the widget in this case, call its [refresh()](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/refresh().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#refresh') method.

For more information on how to implement a data source and bind it to your grid, refer to the [Data Binding](/concepts/05%20Widgets/DataGrid/010%20Data%20Binding '/Documentation/Guide/Widgets/DataGrid/Data_Binding/') topic.