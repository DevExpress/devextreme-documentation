---
id: dxFilterBuilderField.calculateFilterExpression
type: function(filterValue, selectedFilterOperation)
---
---
##### shortDescription
Specifies the field's custom filtering rules.

##### param(filterValue): any
A user input value.

##### param(selectedFilterOperation): String
The selected filter operation.

##### return: Filter expression
A filter expression.

---
[note] When configuring the [filter builder](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/filterBuilder.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder') integrated in the **DataGrid** or **TreeList**, specify the [calculateFilterExpression](/api-reference/_hidden/GridBaseColumn/calculateFilterExpression.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateFilterExpression') in the column with the same [dataField](/api-reference/_hidden/dxFilterBuilderField/dataField.md '/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/fields/#dataField') instead.

This function must return a [filter expression](/concepts/70%20Data%20Binding/5%20Data%20Layer/2%20Reading%20Data/15%20Filtering '/Documentation/Guide/Data_Binding/Data_Layer/#Reading_Data/Filtering'). The simplest filter expression has the following format:

    [selector, selectedFilterOperation, filterValue]

- **selector**      
A data source field to be filtered. 
- **selectedFilterOperation**       
A comparison operator. One of the following: *"=", "<>", ">", ">=", "<", "<=", "between", "startswith", "endswith", "contains", "notcontains"*.    

 [note] For the *"between"* operator, the returned filter expression has a slightly different format: `[[selector, ">=", startValue], "and", [selector, "<=", endValue]]`. 

- **filterValue**        
A user input value. Values the **selector** provides are compared to this value.

In the following code, the **calculateFilterExpression** function implements an exclusive **between** operation. This is done by overriding the default inclusive implementation.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            // ...
            fields: [{
                calculateFilterExpression: function (filterValue, selectedFilterOperation) {
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
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        calculateFilterExpression (filterValue, selectedFilterOperation) {
            let field = this as any;
            if (selectedFilterOperation === "between" && Array.isArray(filterValue)) {
                var filterExpression = [
                    [field.dataField, ">", filterValue[0]], 
                    "and", 
                    [field.dataField, "<", filterValue[1]]
                ];
                return filterExpression;
            }
            // Invokes the default filtering behavior
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
        <dxi-field [calculateFilterExpression]="calculateFilterExpression" ... ></dxi-field>
    </dx-filter-builder>
    
---

In the previous code, the **defaultCalculateFilterExpression** function invokes the default behavior. You can omit the function call if you do not need it. 

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}