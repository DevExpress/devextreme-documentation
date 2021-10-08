Users can sort field values by totals and grand totals of the opposite dimension. For instance, to sort column field values, users should right-click a row field value and select one of the commands from the context menu:

![DevExtreme PivotGrid: Sort field values by summary values](/images/pivotgrid/sorting-by-summary-values.png)

Set the [allowSortingBySummary](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowSortingBySummary) property to **true** to enable this functionality for all fields. You can also set the same property for an individual field if you want to override the common setting.

To sort field values by grand totals, set the [sortBySummaryField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField) property to a data field used for sorting. If you want to sort field values by totals, you should also specify the [sortBySummaryPath](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath) property. To control the sort order, use the [sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder) property.

In the following code, the Category and Subcategory row field values are sorted by Sales Amount grand total values in descending order:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            dataSource: {
                // ...
                fields: [{
                    dataField: "[Product].[Category]",
                    area: "row",
                    sortBySummaryField: "[Measures].[Sales Amount]",
                    sortOrder: "desc"
                }, {
                    dataField: "[Product].[Subcategory]",
                    area: "row",
                    sortBySummaryField: "[Measures].[Sales Amount]",
                    sortOrder: "desc"
                },
                // ...
                ],
            },
            allowSortingBySummary: true,
        });
    });

##### Angular

    <!-- tab: adventureworks.service.ts -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [{
            dataField: "[Product].[Category]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        },
        // ...
        ],
    });

    // ...

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        [allowSortingBySummary]="true">
    </dx-pivot-grid>

##### Vue

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [{
            dataField: "[Product].[Category]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        },
        // ...
        ],
    });

    // ...

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            :allow-sorting-by-summary="true">
        </DxPivotGrid>
    </template>

    <script>
    // ...
    </script>

##### React

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [{
            dataField: "[Product].[Category]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
            sortBySummaryField: "[Measures].[Sales Amount]",
            sortOrder: "desc"
        },
        // ...
        ],
    });

    // ...

    <!-- tab: App.js -->
    // ...
    export default function App() {
        return (
            <PivotGrid ...
                allowSortingBySummary={true}>
            </PivotGrid>
        );
    }

---
