---
id: GridBaseColumn.calculateFilterExpression
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies the column's custom rules to filter data. Does not apply if you set the column's [headerFilter]({basewidgetpath}//Configuration/columns/headerFilter/).[dataSource]({basewidgetpath}/Configuration/columns/headerFilter/#dataSource).

##### param(filterValue): any
A user input value.             
Contains an array if the `selectedFilterOperation` is one of the following: *"between"*, *"anyof"*, *"noneof"*.

##### param(selectedFilterOperation): String
A selected filter operation.

##### param(target): String
A UI element used to filter data.     
Possible values: [*"filterRow"*]({basewidgetpath}/Configuration/filterRow/), [*"headerFilter"*]({basewidgetpath}/Configuration/headerFilter/), [*"filterBuilder"*]({basewidgetpath}/Configuration/#filterBuilder), [*"search"*]({basewidgetpath}/Configuration/searchPanel/).

##### return: Filter expression
A filter expression.          
If you filter data [remotely]({basewidgetpath}/Configuration/remoteOperations/), the filter expression must not contain functions.

---
The **calculateFilterExpression** function must return a [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering'). The simplest filter expression has the following format:

    [selector, comparisonOperator, filterValue]

- `selector`      
A [dataField]({basewidgetpath}/Configuration/columns/#dataField) or function that returns column values. Pass `this.calculateCellValue` if your column contains [calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').

- `comparisonOperator`       
One of the following operators: *"=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains"*.     

- `filterValue`        
A user input value. Values from the `selector` are compared to this value.

In the following code, the **calculateFilterExpression** function implements an exclusive *"between"* operation. The function overrides the default inclusive implementation. Note that for the *"between"* operation, the filter expression has a different format:

    [ [selector, ">=", startValue], "and", [selector, "<=", endValue] ]

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            columns: [{
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
                    // Override implementation for the "between" filter operation
                    if (selectedFilterOperation === "between" && $.isArray(filterValue)) {
                        const filterExpression = [
                            [this.dataField, ">", filterValue[0]], 
                            "and", 
                            [this.dataField, "<", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    // Invoke the default implementation for other filter operations
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
            const column = this as any;
            // Override implementation for the "between" filter operation
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                const filterExpression = [
                    [column.dataField, ">", filterValue[0]], 
                    "and", 
                    [column.dataField, "<", filterValue[1]]
                ];
                return filterExpression;
            }
            // Invoke the default implementation for other filter operations
            return column.defaultCalculateFilterExpression.apply(column, arguments);
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
        <dxi-column ...
            [calculateFilterExpression]="calculateFilterExpression">
        </dxi-column>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxColumn ...
                :calculate-filter-expression="calculateFilterExpression"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import Dx{WidgetName}, {
        DxColumn
    } from 'devextreme-vue/{widget-name}';

    export default {
        components: {
            Dx{WidgetName},
            DxColumn
        },
        data() {
            return {
                calculateFilterExpression (filterValue, selectedFilterOperation) {
                    const column = this;
                    // Override implementation for the "between" filter operation
                    if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                        const filterExpression = [
                            [column.dataField, ">", filterValue[0]], 
                            "and", 
                            [column.dataField, "<", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    // Invoke the default implementation for other filter operations
                    return column.defaultCalculateFilterExpression.apply(column, arguments);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import {WidgetName}, {
        Column
    } from 'devextreme-react/{widget-name}';

    function calculateFilterExpression (filterValue, selectedFilterOperation) {
        // Override implementation for the "between" filter operation
        if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
            const filterExpression = [
                [this.dataField, ">", filterValue[0]], 
                "and", 
                [this.dataField, "<", filterValue[1]]
            ];
            return filterExpression;
        }
        // Invoke the default implementation for other filter operations
        return this.defaultCalculateFilterExpression.apply(this, arguments);
    }

    export default function App() {
        return (
            <{WidgetName}>
                <Column ...
                    calculateFilterExpression={calculateFilterExpression}
                />
            </{WidgetName}>
        );
    }
    
---

#include uiwidgets-ref-functioncontext with { 
    value: "column's configuration"
}

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}

#####See Also#####
- [filterValue]({basewidgetpath}/Configuration/#filterValue)
- **columns[]**.[filterValue]({basewidgetpath}/Configuration/columns/#filterValue)
- **columns[]**.[selectedFilterOperation]({basewidgetpath}/Configuration/columns/#selectedFilterOperation)
- **columns[]**.[filterValues]({basewidgetpath}/Configuration/columns/#filterValues)
- **columns[]**.[filterType]({basewidgetpath}/Configuration/columns/#filterType)
- **columns[]**.[filterOperations]({basewidgetpath}/Configuration/columns/#filterOperations)