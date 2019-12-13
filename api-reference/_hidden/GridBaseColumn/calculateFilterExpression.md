---
id: GridBaseColumn.calculateFilterExpression
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies the column's custom filtering rules.

##### param(filterValue): any
A user input value.

##### param(selectedFilterOperation): String
The selected filter operation.

##### param(target): String
The UI element where the filter expression was set.  
Possible values: *"filterRow"*, *"headerFilter"*, *"filterBuilder", and *"search"*.

##### return: Filter expression
A filter expression. If you are using [remoteOperations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/remoteOperations '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/'), it should not contain functions.

---
This function must return a [filter expression](/concepts/30%20Data%20Layer/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering'). The simplest filter expression has the following format:

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field or a function providing actual column values. Pass **this.calculateCellValue** if your column contains [calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    

 [note] For the *"between"* operator, the returned filter expression has a slightly different format: `[[selector, ">=", startValue], "and", [selector, "<=", endValue]]`. 

- **filterValue**        
A user input value. Values the **selector** provides are compared to this value.

In the following code, the **calculateFilterExpression** function implements an exclusive **between** operation. This is done by overriding the default inclusive implementation.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Implementation for the "between" comparison operator
                    if (selectedFilterOperation === "between" && $.isArray(filterValue)) {
                        var filterExpression = [
                            [this.dataField, ">", filterValue[0]], 
                            "and", 
                            [this.dataField, "<", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    // Invokes the default filtering behavior
                    return this.defaultCalculateFilterExpression.apply(this, arguments);
                },
                // ...
            }]
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            let column = this as any;
            // Implementation for the "between" comparison operator
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                var filterExpression = [
                    [column.dataField, ">", filterValue[0]], 
                    "and", 
                    [column.dataField, "<", filterValue[1]]
                ];
                return filterExpression;
            }
            // Invokes the default filtering behavior
            return column.defaultCalculateFilterExpression(arguments);
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ... >
        <dxi-column [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-column>
    </dx-{widget-name}>
    
---

In the previous code, the **defaultCalculateFilterExpression** function invokes default behavior. You can omit this function call if you so choose.

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

