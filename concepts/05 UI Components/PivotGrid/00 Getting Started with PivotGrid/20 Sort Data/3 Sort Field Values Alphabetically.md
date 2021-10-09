To sort field values in alphabetical order, users should click a field in the [field panel](/concepts/05%20UI%20Components/PivotGrid/00%20Getting%20Started%20with%20PivotGrid/12%20Display%20the%20Field%20Panel.md '/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Display_the_Field_Panel') or [field chooser](/concepts/05%20UI%20Components/PivotGrid/00%20Getting%20Started%20with%20PivotGrid/16%20Configure%20the%20Field%20Chooser.md '/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Configure_the_Field_Chooser'). An arrow icon indicates the sort order.

![DevExtreme PivotGrid: Sort field values by summary values](/images/pivotgrid/sorting-by-field-values.png)

Set the [allowSorting](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/allowSorting.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowSorting') property to **true** to enable this functionality for all fields. You can also set the same property for an individual field if you want to override the common setting.

Use a field's [sortOrder](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/fields/sortOrder.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder') property to specify the initial sort order. In the following code, this property is used to sort the Category and Subcategory row field values alphabetically in descending order:

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
                    sortOrder: "desc"
                }, {
                    dataField: "[Product].[Subcategory]",
                    area: "row",
                    sortOrder: "desc"
                },
                // ...
                ],
            },
            allowSorting: true,
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
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
            sortOrder: "desc"
        },
        // ...
        ],
    });

    // ...

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        [allowSorting]="true">
    </dx-pivot-grid>

##### Vue

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [{
            dataField: "[Product].[Category]",
            area: "row",
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
            sortOrder: "desc"
        },
        // ...
        ],
    });

    // ...

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            :allow-sorting="true">
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
            sortOrder: "desc"
        }, {
            dataField: "[Product].[Subcategory]",
            area: "row",
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
                allowSorting={true}>
            </PivotGrid>
        );
    }

---