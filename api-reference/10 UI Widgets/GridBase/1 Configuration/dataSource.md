---
default: null
type: String | Array<Object> | DataSource | DataSource_Options
---
---
##### shortDescription
Specifies the origin of data for the widget.

---
This option accepts one of the following: 

- **Array of Objects**      
 A simple JavaScript array containing a collection of plain objects.

- **URL**       
 A URL to JSON data or to a service returning data in JSON format.

- **[DataSource](/api-reference/30%20Data%20Layer/DataSource '/Documentation/ApiReference/Data_Layer/DataSource/') or its [configuration object](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/')**     
 A **DataSource** is an object that provides a handy API for data processing. A **DataSource** is a stateful object, which means that it saves data processing settings and applies them each time data is loaded. All underlying data access logic of a **DataSource** is isolated in a **Store**. A **Store** provides an API for reading and modifying data. Unlike the **DataSource**, a **Store** is a stateless object.

    [note]If you use [data mapping](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map'), features like [export](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export '{basewidgetpath}/Configuration/export/') and [selection](/api-reference/10%20UI%20Widgets/dxDataGrid/3%20Methods/getSelectedRowsData().md '{basewidgetpath}/Methods/#getSelectedRowsData') may work incorrectly. We recommend using [calculated columns](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue') instead of mapping.

#include widgets-ref-datasource-fieldname-note

The widget cannot track changes that a third party makes in the data source. To bring data in the widget up to date in this case, call the [refresh()](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/refresh().md '{basewidgetpath}/Methods/#refresh') method.

#####See Also#####
- [Data Binding](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/)
- [Data Layer - Overview](/concepts/30%20Data%20Layer/5%20Data%20Layer '/Documentation/Guide/Data_Layer/Data_Layer/')
- [Data Layer - DataSource Examples](/concepts/30%20Data%20Layer/51%20Data%20Source%20Examples '/Documentation/Guide/Data_Layer/Data_Source_Examples')