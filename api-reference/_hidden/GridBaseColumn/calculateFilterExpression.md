---
id: GridBaseColumn.calculateFilterExpression
type: function(filterValue, selectedFilterOperation, target)
---
---
##### shortDescription
Specifies the column's custom rules to filter data.

##### param(filterValue): any
A user input value.             
Contains an array if the `selectedFilterOperation` is one of the following: *"between"*, *"anyof"*, *"noneof"*.

##### param(selectedFilterOperation): String
A selected filter operation.

##### param(target): String
A UI element used to filter data.     
Possible values: [*"filterRow"*](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterRow '{basewidgetpath}/Configuration/filterRow/'), [*"headerFilter"*](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/headerFilter '{basewidgetpath}/Configuration/headerFilter/'), [*"filterBuilder"*](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '{basewidgetpath}/Configuration/#filterBuilder'), [*"search"*](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/searchPanel '{basewidgetpath}/Configuration/searchPanel/').

##### return: Filter expression
A filter expression.          
If you filter data [remotely](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/remoteOperations '{basewidgetpath}/Configuration/remoteOperations/'), the filter expression must not contain functions.

##### context: GridBaseColumn
The `this` keyword refers to the column's configuration.

---
The **calculateFilterExpression** function should return a [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering'). A basic filter expression has the following format:

    [selector, comparisonOperator, filterValue]

- `selector`      
A [dataField](/api-reference/_hidden/GridBaseColumn/dataField.md '{basewidgetpath}/Configuration/columns/#dataField') or function that returns column values. Pass `this.calculateCellValue` if your column contains [calculated values](/api-reference/_hidden/GridBaseColumn/calculateCellValue.md '{basewidgetpath}/Configuration/columns/#calculateCellValue').

- `comparisonOperator`       
One of the following operators: *"=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains"*.     

- `filterValue`        
A user input value. Values from the `selector` are compared to this value.

A filter expression for the *"between"* operation has a different format:

    [ [selector, ">=", startValue], "and", [selector, "<=", endValue] ]

The default *"between"* implementation is inclusive (filter results include the boundary values). In the following code, the **calculateFilterExpression** function implements an exclusive *"between"* operation:

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

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/Filtering/"
}

[note]

If you [specify a custom header filter data source](/concepts/05%20UI%20Components/DataGrid/99%20How%20To/Customize%20Header%20Filter%20Data%20Source/10%20Specify%20a%20Custom%20Data%20Source.md '/Documentation/Guide/UI_Components/DataGrid/How_To/Customize_Header_Filter_Data_Source/#Specify_a_Custom_Data_Source'), a header filter item's `value` field can contain a single value (for example, 0) or a filter expression. If it is a filter expression, the **calculateFilterExpression** function does not apply.

[/note]

#####See Also#####
- [filterValue](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterValue.md '{basewidgetpath}/Configuration/#filterValue')
- **columns[]**.[filterValue](/api-reference/_hidden/GridBaseColumn/filterValue.md '{basewidgetpath}/Configuration/columns/#filterValue')
- **columns[]**.[selectedFilterOperation](/api-reference/_hidden/GridBaseColumn/selectedFilterOperation.md '{basewidgetpath}/Configuration/columns/#selectedFilterOperation')
- **columns[]**.[filterValues](/api-reference/_hidden/GridBaseColumn/filterValues.md '{basewidgetpath}/Configuration/columns/#filterValues')
- **columns[]**.[filterType](/api-reference/_hidden/GridBaseColumn/filterType.md '{basewidgetpath}/Configuration/columns/#filterType')
- **columns[]**.[filterOperations](/api-reference/_hidden/GridBaseColumn/filterOperations.md '{basewidgetpath}/Configuration/columns/#filterOperations')
