---
id: PivotGridDataSourceField.sortBySummaryPath
type: Array<Number, String>
default: undefined
---
---
##### shortDescription
Specifies a path to the column or row whose summary values should be used to sort the field's values in the [headers](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers').

---
This and the [sortBySummaryField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField') options are applied together. If this option is not specified, the field's values are sorted by the [grand totals](/concepts/05%20Widgets/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals') of the measure that **sortBySummaryField** specifies.

In the following example, geographic regions displayed in the row header are sorted by sales in the second quarter of 2015:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
            fields: [{
                caption: "Sales",
                dataField: "sales",
                area: "data",
                isMeasure: true,
                summaryType: "sum"
            }, {
                caption: "Date",
                dataField: "date",
                dataType: "date",
                area: "column"
            }, {
                caption: "Region",
                dataField: "region",
                area: "row",
                sortBySummaryField: "Sales",
                sortBySummaryPath: [2015, 2]
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
                    caption: "Sales",
                    dataField: "sales",
                    area: "data",
                    isMeasure: true,
                    summaryType: "sum"
                }, {
                    caption: "Date",
                    dataField: "date",
                    dataType: "date",
                    area: "column"
                }, {
                    caption: "Region",
                    dataField: "region",
                    area: "row",
                    sortBySummaryField: "Sales",
                    sortBySummaryPath: [2015, 2]
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
            caption: 'Sales',
            dataField: 'sales',
            area: 'data',
            isMeasure: true,
            summaryType: 'sum'
        }, {
            caption: 'Date',
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales',
            sortBySummaryPath: [2015, 2]
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
            caption: 'Sales',
            dataField: 'sales',
            area: 'data',
            isMeasure: true,
            summaryType: 'sum'
        }, {
            caption: 'Date',
            dataField: 'date',
            dataType: 'date',
            area: 'column'
        }, {
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales',
            sortBySummaryPath: [2015, 2]
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

---

#####See Also#####
- [Sorting by Summary Values](/concepts/05%20Widgets/PivotGrid/060%20Sorting/30%20Sorting%20in%20Code/30%20Sorting%20by%20Summary%20Values.md '/Documentation/Guide/Widgets/PivotGrid/Sorting/#Sorting_in_Code/Sorting_by_Summary_Values')