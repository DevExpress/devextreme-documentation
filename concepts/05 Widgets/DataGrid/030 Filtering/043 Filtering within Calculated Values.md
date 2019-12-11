Filtering performed by using a [filter row](/concepts/05%20Widgets/DataGrid/030%20Filtering/020%20Filter%20Row.md '/Documentation/Guide/Widgets/DataGrid/Filtering/#Filter_Row') or the [search panel](/concepts/05%20Widgets/DataGrid/030%20Filtering/040%20Searching.md '/Documentation/Guide/Widgets/DataGrid/Filtering/#Searching') may operate incorrectly in a column with [calculated values](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue'). To restore this functionality, implement the [calculateFilterExpression](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateFilterExpression.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateFilterExpression') callback function. This function must return an array of the following items.

1. The data source field or a function that provides actual values for a grid column. Commonly, the **calculateCellValue** function is passed here.
2. The comparison operator. The following operators are available: *"=", "<>", ">", ">=", "<", "<=", "between"*, "startswith", "endswith", "contains", "notcontains"*.
3. The value typed into a filter row cell. The actual values will be compared to this value.

[note]The 'between' comparison operator is not supported on the data source level. If you need to use it, create a filter expression of the following format: [[selector, ">=", startValue], "and", [selector, "<=", endValue]] (see the code below). In case the selected filter operation is 'between', the **filterValue** field of the **calculateFilterExpression** function is an array containing the start and end values of the specified range.

The following code snippet demonstrates an example of implementing the **calculateCellValue** and **calculateFilterExpression** functions.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        columns: [{
            calculateCellValue: function (rowData) {
                return rowData.Amount * rowData.Cost;
            },
            calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                // The way of implementation in case of the 'between' comparison operator
                /*if(selectedFilterOperation === "between" && $.isArray(filterValue)) {
                    var values = [
                        [this.calculateCellValue, ">=", filterValue[0]], 
                        "and", 
                        [this.calculateCellValue, "<=", filterValue[1]]
                    ];
                    return [values, selectedFilterOperation || '=', filterValue];
                }*/
                return [this.calculateCellValue, selectedFilterOperation || '=', filterValue];
            },
            // ...
        }, //...
        ]
    });