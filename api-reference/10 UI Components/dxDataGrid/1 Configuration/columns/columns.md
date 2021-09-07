---
id: dxDataGrid.Options.columns
type: Array<dxDataGridColumn, String>
default: undefined
inheritsType: dxDataGridColumn
---
---
##### shortDescription
An array of grid columns.

---
By default, a column is created for each field of a data source object, but in most cases, it is redundant. To specify a set of columns to be created in a grid, assign an array specifying these columns to the **columns** property. Each grid column is represented in this array by an object containing column settings or by a data source field that this column is bound to. Detailed information on specifying grid columns is given in the [Columns Overview](/concepts/05%20UI%20Components/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Overview/') article.

Column properties define the behavior and appearance of a grid column. One of the other capabilities allows you to control the sorting of column values using the [allowSorting](/api-reference/_hidden/GridBaseColumn/allowSorting.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowSorting') and [sortOrder](/api-reference/_hidden/GridBaseColumn/sortOrder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#sortOrder') properties, apply a filter to grid records using the [allowFiltering](/api-reference/_hidden/GridBaseColumn/allowFiltering.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowFiltering') and [filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#filterOperations') properties, and group grid records using the [allowGrouping](/api-reference/_hidden/dxDataGridColumn/allowGrouping.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#allowGrouping') and [groupIndex](/api-reference/_hidden/dxDataGridColumn/groupIndex.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#groupIndex') properties. In addition, you can change the [visibility](/api-reference/_hidden/GridBaseColumn/visible.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#visible') and [width](/api-reference/_hidden/GridBaseColumn/width.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#width') of a column using corresponding properties.

To get or set a property or several properties for a column at runtime, use the [columnOption](/api-reference/10%20UI%20Components/GridBase/3%20Methods/columnOption(id).md '/Documentation/ApiReference/UI_Components/dxDataGrid/Methods/#columnOptionid') method with the required arguments.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Overview/"
}

#####See Also#####
- [Column Types](/concepts/05%20UI%20Components/DataGrid/15%20Columns/10%20Column%20Types/1%20Data%20Columns.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Types/')
- [Customize Column Headers](/concepts/05%20UI%20Components/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Customize_Column_Headers/')
- [Column Sizing](/concepts/05%20UI%20Components/DataGrid/15%20Columns/20%20Column%20Sizing.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Sizing/')
- [Column Reordering](/concepts/05%20UI%20Components/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Reordering/')
- [Column Fixing](/concepts/05%20UI%20Components/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_Fixing/')
- [Hide a Column Using the API](/concepts/05%20UI%20Components/DataGrid/15%20Columns/35%20Hide%20a%20Column%20Using%20the%20API.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Hide_a_Column_Using_the_API/')
- [Adaptability](/concepts/05%20UI%20Components/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Adaptability/')
- [Column and Row Indexes](/concepts/05%20UI%20Components/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/UI_Components/DataGrid/Columns/Column_and_Row_Indexes/')