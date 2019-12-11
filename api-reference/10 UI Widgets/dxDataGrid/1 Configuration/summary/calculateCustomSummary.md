---
type: function(options)
---
---
##### shortDescription
Allows you to use a custom aggregate function to calculate the value of a summary item.

##### param(options): Object
Summary information.

##### field(options.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance').

##### field(options.name): String
The [name](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/name.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#name') of the summary item.

##### field(options.summaryProcess): String
Indicates the stage of the summary item calculation; equals *'start'*, *'calculate'* or *'finalize'*.

##### field(options.value): any
If the custom summary item is calculated by a [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column'), this field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

##### field(options.totalValue): any
The resulting summary item value.

---
If [predefined aggregate functions](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/summaryType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType') do not meet your requirements, implement a custom one and assign it to the **calculateCustomSummary** option. This function will be called for each summary item whose **summaryType** property is set to *'custom'*.

When implementing the function, you can access useful information through the object passed to this function as its argument. Use the **name** field of this object to identify the summary item. 

To access data, use the **value** field. This data depends on whether you have set the [column](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems/column.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column') field of the summary item or not. If you have, the **value** field contains the value from a cell of this column. Otherwise, it contains a whole object from the data source.

The calculation of a summary item value is conducted in several phases. Usually, you need to initialize **totalValue** on start. Then, you modify **totalValue** in the calculation phase. In the final phase, you adjust **totalValue**. To identify the current phase, check the value of the **summaryProcess** field.

The following code demonstrates a general structure of the **calculateCustomSummary** function. In this code, the [totalItems](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/summary/totalItems '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/') array contains two custom summary items. Within the **calculateCustomSummary** function, the **name** field identifies each summary item. Actions that follow depend on the calculation stage, which is obtained using the **summaryProcess** field.

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            summary: {
                totalItems: [
                    { summaryType: 'custom', name: 'CustomSummary1' },
                    { summaryType: 'custom', name: 'CustomSummary2' }
                ],
                calculateCustomSummary: function (options) {
                    // Calculating "CustomSummary1"
                    if (options.name == 'CustomSummary1') {
                        if (options.summaryProcess == 'start') {
                            // Initializing "totalValue" here
                        }
                        if (options.summaryProcess == 'calculate') {
                            // Modifying "totalValue" here
                        }
                        if (options.summaryProcess == 'finalize') {
                            // Assigning the final value to "totalValue" here
                        }
                    }

                    // Calculating "CustomSummary2"
                    if (options.name == 'CustomSummary2') {
                        // ...
                        // Same "if" statements here
                    }
                }
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-summary [calculateCustomSummary]="calculateSummary">
            <dxi-total-item
                summaryType="custom"
                name="customSummary1">
            </dxi-total-item>
            <dxi-total-item
                summaryType="custom"
                name="customSummary2">
            </dxi-total-item>
        </dxo-summary>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        calculateSummary (options) {
            // Calculating "CustomSummary1"
            if (options.name == 'CustomSummary1') {
                if (options.summaryProcess == 'start') {
                    // Initializing "totalValue" here
                }
                if (options.summaryProcess == 'calculate') {
                    // Modifying "totalValue" here
                }
                if (options.summaryProcess == 'finalize') {
                    // Assigning the final value to "totalValue" here
                }
            }

            // Calculating "CustomSummary2"
            if (options.name == 'CustomSummary2') {
                // ...
                // Same "if" statements here
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariescustomsummarytotals/"
}

#####See Also#####
- [Custom Aggregate Function](/concepts/05%20Widgets/DataGrid/65%20Summaries/30%20Custom%20Aggregate%20Function.md '/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/')