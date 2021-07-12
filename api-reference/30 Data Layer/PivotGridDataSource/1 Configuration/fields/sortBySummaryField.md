---
id: PivotGridDataSource.Options.fields.sortBySummaryField
type: String
default: undefined
---
---
##### shortDescription
Sorts the field's values in the [headers](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/02%20Headers.md '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Headers') by the specified measure's summary values. Accepts the measure's [name](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/name.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#name'), [caption](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/caption.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#caption'), [dataField](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/dataField.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField'), or index in the [fields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/') array.

---
This and the [sortBySummaryPath](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortBySummaryPath.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath') properties can be used together to sort the field's values by a specific column's or row's summary values. If **sortBySummaryPath** is unspecified, the field's values are sorted by the specified measure's [grand totals](/concepts/05%20UI%20Components/PivotGrid/010%20Visual%20Elements/05%20Totals '/Documentation/Guide/UI_Components/PivotGrid/Visual_Elements/#Totals'), as it is with the `Region` field's values in the following code:

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
                caption: "Region",
                dataField: "region",
                area: "row",
                sortBySummaryField: "Sales"
            },
            // ...
            ]
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
                    caption: "Region",
                    dataField: "region",
                    area: "row",
                    sortBySummaryField: "Sales"
                },
                // ...
                ]
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
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales'
        },
        // ...
        ]
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
            caption: 'Region',
            dataField: 'region',
            area: 'row',
            sortBySummaryField: 'Sales'
        },
        // ...
        ]
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

#include common-demobutton with {
    url: ""https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/WebAPIService/
}

#####See Also#####
- [Sorting by Summary Values](/concepts/05%20UI%20Components/PivotGrid/060%20Sorting/30%20Sorting%20in%20Code/30%20Sorting%20by%20Summary%20Values.md '/Documentation/Guide/UI_Components/PivotGrid/Sorting/#Sorting_in_Code/Sorting_by_Summary_Values')
- **fields[]**.[allowSortingBySummary](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/allowSortingBySummary.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary')
- **fields[]**.[sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder')