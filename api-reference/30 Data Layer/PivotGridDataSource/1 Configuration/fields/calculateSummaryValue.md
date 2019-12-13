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

##### return: Number
The cell's new summary value.

---
This and [other post-processing functions](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/summaryDisplayMode.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode') allow you to perform additional calculations on each summary value and take into account neighboring cells' summary values.

On the following image, pivot grid cells display indexes that show the order in which the **calculateSummaryValue** function is called. This order stays the same even if the layout is changed, for example, if rows or columns are [sorted differently](/concepts/05%20Widgets/PivotGrid/060%20Sorting/10%20Sorting.md '/Documentation/Guide/Widgets/PivotGrid/Sorting/') or the total columns are [relocated](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/showTotalsPrior.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#showTotalsPrior').

![DevExtreme PivotGrid: Summary calculation order](/images/DataGrid/pivotgrid-summary-calculation-order.png)

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                // ...
                calculateSummaryValue: function (summaryCell) {
                    // Your code goes here
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
                    // ...
                    calculateSummaryValue: function (summaryCell) {
                        // Your code goes here
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
        <dx-pivot-grid
            :data-source="pivotGridDataSource"
        />
    </template>
    
    <script>
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';
    import DxPivotGrid from 'devextreme-vue/pivot-grid';

    const pivotGridDataSource = new PivotGridDataSource({
        // ...
        fields: [{
            // ...
            calculateSummaryValue: function (summaryCell) {
                // Your code goes here
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
            // ...
            calculateSummaryValue: function (summaryCell) {
                // Your code goes here
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
            // Your code goes here
        }
    </script>

---

#include uiwidgets-ref-functioncontext with { 
    value: "field's configuration"
}