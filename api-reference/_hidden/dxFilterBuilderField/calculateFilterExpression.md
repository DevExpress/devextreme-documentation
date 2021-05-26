---
id: dxFilterBuilderField.calculateFilterExpression
type: function(filterValue, selectedFilterOperation)
---
---
##### shortDescription
Specifies the field's custom rules to filter data.

##### param(filterValue): any
<!-- %param(filterValue)% -->

##### param(selectedFilterOperation): String
<!-- %param(selectedFilterOperation)% -->

##### return: Filter expression
A filter expression.

---
[note] When you configure the [filterBuilder](/api-reference/10%20UI%20Components/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#filterBuilder') integrated in the DataGrid or TreeList, specify the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/columns/#calculateFilterExpression') in the column with the same [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#dataField') instead.

The **calculateFilterExpression** function must return a [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering'). The simplest filter expression has the following format:

    [selector, comparisonOperator, filterValue]

- `selector`      
A [dataField]({basewidgetpath}/Configuration/fields/#dataField) to filter.

- `comparisonOperator`       
One of the following operators: *"=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains"*.     

- `filterValue`        
A user input value. Values from the `selector` are compared to this value.

In the following code, the **calculateFilterExpression** function implements an exclusive *"between"* operation. The function overrides the default inclusive implementation. Note that for the *"between"* operation, the filter expression has a different format:

    [ [selector, ">=", startValue], "and", [selector, "<=", endValue] ]

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            // ...
            fields: [{
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
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            const field = this as any;
            // Override implementation for the "between" filter operation
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                const filterExpression = [
                    [field.dataField, ">", filterValue[0]], 
                    "and", 
                    [field.dataField, "<", filterValue[1]]
                ];
                return filterExpression;
            }
            // Invoke the default implementation for other filter operations
            return field.defaultCalculateFilterExpression.apply(field, arguments);
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ... >
        <dxi-field ...
            [calculateFilterExpression]="calculateFilterExpression">
        </dxi-field>
    </dx-filter-builder>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFilterBuilder>
            <DxField ...
                :calculate-filter-expression="calculateFilterExpression"
            />
        </DxFilterBuilder>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFilterBuilder, {
        DxField
    } from 'devextreme-vue/filter-builder';

    export default {
        components: {
            DxFilterBuilder,
            DxField
        },
        data() {
            return {
                calculateFilterExpression (filterValue, selectedFilterOperation) {
                    const field = this;
                    // Override implementation for the "between" filter operation
                    if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                        const filterExpression = [
                            [field.dataField, ">", filterValue[0]], 
                            "and", 
                            [field.dataField, "<", filterValue[1]]
                        ];
                        return filterExpression;
                    }
                    // Invoke the default implementation for other filter operations
                    return field.defaultCalculateFilterExpression.apply(field, arguments);
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import FilterBuilder, {
        Field
    } from 'devextreme-react/filter-builder';

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
            <FilterBuilder>
                <Field ...
                    calculateFilterExpression={calculateFilterExpression}
                />
            </FilterBuilder>
        );
    }
    
---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}

#####See Also#####
- **fields[]**.[filterOperations](/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/fields/#filterOperations)
- [groupOperations](/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/#groupOperations)
- [customOperations](/Documentation/ApiReference/UI_Components/dxFilterBuilder/Configuration/customOperations/)

<!-- import * from 'api-reference\_hidden\GridBaseColumn\calculateFilterExpression.md' -->