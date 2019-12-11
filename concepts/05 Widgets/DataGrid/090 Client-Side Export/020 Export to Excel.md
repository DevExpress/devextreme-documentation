The **DataGrid** widget exports data to excel as it is presented in the grid - with sorting, filtering and grouping applied. Data types in the resulting Excel file are kept - numbers stay numbers, dates stay dates. This allows users to work with the exported data in Excel without any data transformations. For instance, users can use the exported data in Excel formulas, summaries, etc.

![DevExtreme DataGrid Export to Excel](/images/DataGrid/Export_ToExcel.png)

[note]Take into account the limitations related to Excel possibilities when exporting grid data to Excel.

- While the **DataGrid** widget supports any number of nesting levels in data [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/grouping '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/'), the range of possible nesting levels in Excel is from 0 to 7.
- While the **DataGrid** widget supports a number of [formats](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/format.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#format'), including custom ones, only the following formats are supported in Excel: 'currency', 'fixedPoint', 'percent', 'decimal', 'exponential',  'thousands', 'millions', 'billions', 'trillions', 'longDate', 'longTime', 'longDateLongTime', 'shortDateShortTime', 'monthAndDay', 'monthAndYear', 'shortDate', 'shortTime', 'day', 'dayOfWeek', 'month', 'year'.

You can enable some Excel features beforehand, using the following grid options:

- **export** | [excelFilterEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/excelFilterEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#excelFilterEnabled')

- **export** | [excelWrapTextEnabled](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/export/excelWrapTextEnabled.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#excelWrapTextEnabled')

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgridexportexport/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=uFXD6NG3lo8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=50" class="button orange small fix-width-155" target="_blank">Watch Video</a>