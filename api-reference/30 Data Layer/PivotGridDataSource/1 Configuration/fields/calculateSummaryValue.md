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

    <!--JavaScript-->
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

    <!--TypeScript-->
    import PivotGridDataSource from "devextreme/ui/pivot_grid/data_source";
    import { DxPivotGridModule } from "devextreme-angular";
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

    @NgModule({
        imports: [
            // ...
            DxPivotGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pivot-grid
        [dataSource]="pivotGridDataSource">
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

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

    export default {
        components: {
            DxPivotGrid
        },
        data() {
            return {
                pivotGridDataSource
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-react/pivot-grid';

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

    class App extends React.Component {
        render() {
            return (
                <PivotGrid
                    dataSource={pivotGridDataSource}
                />
            );
        }
    }
    export default App;

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

The "Profit/Loss" cell displays a difference between "Total Amount" cells in this case.

<img src="/images/pivotgrid/calculate-summary-value-2.png" alt="CalculateSummaryValue: How the cell value is counted" style="padding: 24px 0 24px 0;" /> 

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}