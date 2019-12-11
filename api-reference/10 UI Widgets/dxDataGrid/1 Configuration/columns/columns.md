---
default: undefined
type: Array<dxDataGridColumn>
---
---
##### shortDescription
An array of grid columns.

---
By default, a column is created for each field of a data source object, but in most cases, it is redundant. To specify a set of columns to be created in a grid, assign an array specifying these columns to the **columns** option. Each grid column is represented in this array by an object containing column settings or by a data source field that this column is bound to. Detailed information on specifying grid columns is given in the [Columns Overview](/concepts/05%20Widgets/DataGrid/15%20Columns/00%20Overview.md '/Documentation/Guide/Widgets/DataGrid/Columns/Overview/') article.

Column options define the behavior and appearance of a grid column. One of the other capabilities allows you to control the sorting of column values using the [allowSorting](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowSorting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowSorting') and [sortOrder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/sortOrder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder') options, apply a filter to grid records using the [allowFiltering](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/allowFiltering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowFiltering') and [filterOperations](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/filterOperations.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterOperations') options, and group grid records using the [allowGrouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/allowGrouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping') and [groupIndex](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex') options. In addition, you can change the [visibility](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/visible.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visible') and [width](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width') of a column using corresponding options.

To get or set an option or several options for a column at runtime, use the [columnOption](/api-reference/10%20UI%20Widgets/GridBase/3%20Methods/columnOption(id).md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid') method with the required arguments.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridcolumnscolumncustomization/"
}
<a href="https://www.youtube.com/watch?v=FAZJ4fHjfss&index=3&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Column Types](/concepts/05%20Widgets/DataGrid/15%20Columns/10%20Column%20Types '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Types/')
- [Customize Column Headers](/concepts/05%20Widgets/DataGrid/15%20Columns/15%20Customize%20Column%20Headers.md '/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/')
- [Column Sizing](/concepts/05%20Widgets/DataGrid/15%20Columns/20%20Column%20Sizing.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Sizing/')
- [Column Reordering](/concepts/05%20Widgets/DataGrid/15%20Columns/25%20Column%20Reordering '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Reordering/')
- [Column Fixing](/concepts/05%20Widgets/DataGrid/15%20Columns/30%20Column%20Fixing.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/')
- [Hide a Column Using the API](/concepts/05%20Widgets/DataGrid/15%20Columns/35%20Hide%20a%20Column%20Using%20the%20API.md '/Documentation/Guide/Widgets/DataGrid/Columns/Hide_a_Column_Using_the_API/')
- [Adaptability](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/')
- [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/')