---
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies a callback function that defines filters for customary calculated grid cells.

##### param(filterValue): any
A user input value.

##### param(selectedFilterOperation): String
The currently selected filter operation.

##### param(target): String
Identifies the type of the filtering UI element where the filter expression was set.<br/>Possible values: "filterRow", "headerFilter" and "search".

##### return: Filter expression
A filter expression.

---
When you use the [calculateCellValue](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/calculateCellValue.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue') option to populate a column with data, you are required to implement the **calculateFilterExpression** callback function in order to perform filtering and search operations in this column. This action is required, because these operations are performed on data source objects, not on grid records.

The implemented function must return an array of the following items.

**1.** The data source field or a function providing actual values for a grid column. Commonly, the **calculateCellValue** function is passed here.		
**2.** The comparison operator. The following operators are available: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.		
**3.** A user input value. The actual values will be compared to this value.

[note]The 'between' comparison operator is not supported on the data source level. If you need to use it, create a filter expression of the following format: [[selector, ">=", startValue], "and", [selector, "<=", endValue]] (see the code below). In case the selected filter operation is 'between', the **filterValue** field of the **calculateFilterExpression** function is an array containing the start and end values of the specified range.

The following code snippet demonstrates an example of **calculateCellValue** and **calculateFilterExpression** function implementation.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        columns: [{
            calculateCellValue: function (rowData) {
                return rowData.Amount * rowData.Cost;
            },
            calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                // The way of implementation in case of the 'between' comparison operator
                /*if(selectedFilterOperation === "between" && $.isArray(filterValue)) {
                    var filterExpression = [
                        [this.calculateCellValue, ">=", filterValue[0]], 
                        "and", 
                        [this.calculateCellValue, "<=", filterValue[1]]
                    ];
                    return filterExpression;
                }*/
                return [this.calculateCellValue, selectedFilterOperation || '=', filterValue];
            },
            // ...
        }, //...
        ]
    });

[note] To invoke the default behavior, call the **this.defaultCalculateFilterExpression(filterValue, selectedFilterOperation)** function and return its result.