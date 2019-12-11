---
type: Object
---
---
##### shortDescription
Specifies options for column fixing.

---
When a total column width is greater than the width of the grid's container, [horizontal scrolling](/concepts/05%20Widgets/DataGrid/015%20Data%20Navigation/30%20Scrolling/030%20Horizontal%20Scrolling.md '/Documentation/Guide/Widgets/DataGrid/Data_Navigation/#Scrolling/Horizontal_Scrolling') appears. This may happen in the following cases:

- when all columns have a specified [width](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/width.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width');
- when the grid's [columnAutoWidth](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnAutoWidth.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnAutoWidth') option is set to *false*.

If you need specific columns to be displayed on screen regardless of the scrolling performed, set the **columnFixing** | [enabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columnFixing/enabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/#enabled') option to *true*. In this instance, the columns for which the [fixed](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixed.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixed') option is set to *true* will be anchored to the grid's edge. For instance, the command columns, the ones containing check boxes to select rows or links to save/delete rows, will be fixed since their **fixed** option is set to *true*. 

You can anchor an unlimited number of columns to any grid edge. To specify a required edge, use a column's [fixedPosition](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/fixedPosition.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#fixedPosition') option.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridcolumnscolumncustomization" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>