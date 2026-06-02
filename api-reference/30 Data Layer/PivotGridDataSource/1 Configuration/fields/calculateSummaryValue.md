---
id: PivotGridDataSource.Options.fields.calculateSummaryValue
type: function(e)
default: undefined
---
---
##### shortDescription
Specifies a custom post-processing function for summary values.

##### param(e): dxPivotGridSummaryCell
The cell whose summary value is being processed.

##### return: Number | null
The cell's new summary value.

---
This and [other post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') allow you to perform additional calculations on each summary value and take into account neighboring cell summary values. You can hide specific rows if the **calculateSummaryValue** property returns **null**, and the [hideEmptySummaryCells](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/hideEmptySummaryCells.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#hideEmptySummaryCells') property is **true**.

On the following image, pivot grid cells display indexes that show the order in which the **calculateSummaryValue** function is called. This order stays the same even if the layout is changed, for example, if rows or columns are [sorted differently](/concepts/05%20UI%20Components/PivotGrid/060%20Sorting/10%20Sorting.md '/Documentation/Guide/UI_Components/PivotGrid/Sorting/') or the total columns are [relocated](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/showTotalsPrior.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#showTotalsPrior').

![DevExtreme PivotGrid: Summary calculation order](/images/DataGrid/pivotgrid-summary-calculation-order.png)

The following code snippet shows how to use **calculateSummaryValue** to implement a custom "Profit/Loss" column.


<img src="/images/pivotgrid/calculate-summary-value-1.png" alt="DevExtreme PivotGrid: Profit/Loss column" style="padding: 24px 0 24px 0;" /> 

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Profit/Loss",
                dataType: "number",
                format: "currency",
                area: "data",
                calculateSummaryValue: function(summaryCell) {
                    const prevCell = summaryCell.prev('column', true);
                    if (prevCell) {
                        const prevVal = prevCell.value("Total Amount");
                        const currentVal = summaryCell.value("Total Amount");
                        return currentVal - prevVal;
                    }
                    return null;
                }
            }]
        });

        $("#pivotGridContainer").dxPivotGrid({
            dataSource: pivotGridDataSource
        });
    });
    

##### Angular

    <!-- app.component.ts -->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                // ...
                fields: [{
                    caption: "Profit/Loss",
                    dataType: "number",
                    format: "currency",
                    area: "data",
                    calculateSummaryValue: function(summaryCell) {
                        const prevCell = summaryCell.prev('column', true);
                        if (prevCell) {
                            const prevVal = prevCell.value("Total Amount");
                            const currentVal = summaryCell.value("Total Amount");
                            return currentVal - prevVal;
                        }
                        return null;
                    }
                }]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: "Profit/Loss",
            dataType: "number",
            format: "currency",
            area: "data",
            calculateSummaryValue: function(summaryCell) {
                const prevCell = summaryCell.prev('column', true);
                if (prevCell) {
                    const prevVal = prevCell.value("Total Amount");
                    const currentVal = summaryCell.value("Total Amount");
                    return currentVal - prevVal;
                }
                return null;
            }
        }]
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: "Profit/Loss",
            dataType: "number",
            format: "currency",
            area: "data",
            calculateSummaryValue: function(summaryCell) {
                const prevCell = summaryCell.prev('column', true);
                if (prevCell) {
                    const prevVal = prevCell.value("Total Amount");
                    const currentVal = summaryCell.value("Total Amount");
                    return currentVal - prevVal;
                }
                return null;
            }
        }]
    });

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            // ...
            .Fields(fields => {
                fields.Add()
                    // ...
                    .CalculateSummaryValue("calculateSummaryValue");
            })
        )
    )

    <script type="text/javascript">
        function calculateSummaryValue (summaryCell) {
            const prevCell = summaryCell.prev('column', true);
            if (prevCell) {
                const prevVal = prevCell.value("Total Amount");
                const currentVal = summaryCell.value("Total Amount");
                return currentVal - prevVal;
            }
            return null;
        }
    </script>

---

The "Profit/Loss" cell displays the difference between "Total Amount" cells in this case.

<img src="/images/pivotgrid/calculate-summary-value-2.png" alt="CalculateSummaryValue: How the cell value is counted" style="padding: 24px 0 24px 0;" /> 

To add a new grand totals column, add an item to **fields** and check that the **calculateSummaryValue()** function parameter has no parent cells in the *"column"* direction:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            fields: [{
                caption: 'Sales Average',
                summaryType: 'avg',
                calculateSummaryValue(cell){
                    const isGrandTotalCell = !cell.parent("column");  
                    if(isGrandTotalCell){  
                        return cell.value();  
                    }  
                    return null;  
                },
            }]
        });
    });
    

##### Angular

    <!-- app.component.ts -->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    // ...
    export class AppComponent {
        pivotGridDataSource: PivotGridDataSource;
        constructor() {
            this.pivotGridDataSource = new PivotGridDataSource({
                fields: [{
                    caption: 'Sales Average',
                    summaryType: 'avg',
                    calculateSummaryValue(cell){
                        const isGrandTotalCell = !cell.parent("column");  
                        if(isGrandTotalCell){  
                            return cell.value();  
                        }  
                        return null;  
                    },
                }]
            });
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Sales Average',
            summaryType: 'avg',
            calculateSummaryValue(cell){
                const isGrandTotalCell = !cell.parent("column");  
                if(isGrandTotalCell){  
                    return cell.value();  
                }  
                return null;  
            },
        }]
    });
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            caption: 'Sales Average',
            summaryType: 'avg',
            calculateSummaryValue(cell){
                const isGrandTotalCell = !cell.parent("column");  
                if(isGrandTotalCell){  
                    return cell.value();  
                }  
                return null;  
            },
        }]
    });

---

You can configure **calculateSummaryValue** to apply custom aggregation logic to total and grand total rows and columns. For more information, see the following example:

#include btn-open-github with {
    href: "https://github.com/DevExpress-Examples/devextreme-pivotgrid-grand-total-and-total-detection"
}

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}
