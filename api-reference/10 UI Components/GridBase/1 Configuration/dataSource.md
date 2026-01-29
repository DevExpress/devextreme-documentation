---
id: GridBase.Options.dataSource
type: Store | DataSource | DataSource_Options | String | Array<any> | null
default: null
---
---
##### shortDescription
Binds the UI component to data.

---
#include common-dataSource-description with {
    widget_works_with: "The DataGrid works with collections of objects. We recommend that you use a plain object in data (no circulars, no prototypes, etc.). The DataGird uses **JSON.stringify** and other recursive methods. Circular object references can crash native recursive algorithms (such as serializers) with stack overflows.",

    array_key_note: " and specify the [keyExpr](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#keyExpr')",

    array_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/BatchEditing)",

    json_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest)",

    odata_key_note: " Make sure to specify the [key](/api-reference/30%20Data%20Layer/Store/1%20Configuration/key.md '/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key').",

    odata_view_demo: "[View Example](https://github.com/DevExpress-Examples/devextreme-datagrid-odata)", 

    create_store_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/WebAPIService)",

    custom_store_view_demo: "[View Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/CustomDataSource)",

    remote_operations_note: "- If the component gets data from a server, configure [remoteOperations](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/remoteOperations/') to notify {WidgetName} about data operations on the server.",

    calculated_columns_note: "- Features like [export](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/export '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/export/'), [selection](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/selection '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/'), [grouping](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/grouping '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/grouping/'), and [summaries](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/summary '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/summary/') work incorrectly with [mapped data objects](/api-reference/30%20Data%20Layer/DataSource/1%20Configuration/map.md '/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#map'). To integrate these features, use [calculated columns](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateCellValue') instead of mapped objects."

}
