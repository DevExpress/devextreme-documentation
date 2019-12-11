If you need to process data using the remote web service, enable the remote operations. They are useful when the grid works with large amount of data, because in that case [remote operations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/') make the grid responses faster.

The following remote operations are available.

- [filtering](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/filtering.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#filtering')
- [sorting](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/sorting.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#sorting')
- [paging](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/paging.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#paging')
- [grouping](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/grouping.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#grouping')
- [summary](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations/summary.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary')

See the [How to implement a data service that supports remote operations for DataGrid](https://www.devexpress.com/Support/Center/Example/Details/T334360) example for more information about implementing a data service that supports remote operations for the **DataGrid** widget.

Remote operations introduce a number of restrictions that are listed below.

- The widget does not support sorting, grouping and filtering by the [calculated columns](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue').
- Custom grouping and custom sorting configuration using **functions** are not supported ([calculateGroupValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateGroupValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue') and [calculateSortValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateSortValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue') accept strings only).
