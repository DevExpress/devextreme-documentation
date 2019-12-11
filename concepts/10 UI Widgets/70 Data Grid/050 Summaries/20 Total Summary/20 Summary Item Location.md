By default, a total summary item is placed in the [column that provides data](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') for it. However, you can place the item to another column using the [showInColumn](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/showInColumn.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#showInColumn') option. The text [alignment](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/alignment.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#alignment') can also be changed.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            totalItems: [{
                  column: 'OrderNumber',
                  summaryType: 'count',
				  alignment: 'right'
              }, {
                  column: 'SaleAmount',
                  summaryType: 'sum',
				  alignment: 'left',
				  showInColumn: 'OrderDate',
				  // ...
              }]
        }
    });

![Total Summary](/images/DataGrid/SummaryItemLocation.png)