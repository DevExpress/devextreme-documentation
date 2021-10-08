Users can apply header filters to filter pivot grid fields. To enable this feature, set the [allowFiltering](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#allowFiltering) property to **true**. This setting adds filter icons to all headers in the [field panel](/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Display_the_Field_Panel) and [field chooser](/Documentation/Guide/UI_Components/PivotGrid/Getting_Started_with_PivotGrid/#Configure_the_Field_Chooser). Alternatively, you can set the [allowFiltering](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowFiltering) property to display the icons for individual fields. A click on a filter icon opens a pop-up menu that displays field values for users to select.

![DevExtreme PivotGrid: Header filter](/images/pivotgrid/header-filter.png)

Selected values are saved in a field's [filterValues](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterValues) property. You can also set the [filterType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#filterType) property to specify whether you want to include (default) or exclude **filterValues** to or from filter results. In this tutorial, we enable the **allowFiltering** property and use the **filterValues** property to initially filter the Calendar Year data field:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            allowFiltering: true,
            dataSource: {
                // ...
                fields: [
                    // ...
                    {
                        dataField: "[Ship Date].[Calendar Year]",
                        area: "column",
                        filterValues: [["CY 2003"], ["CY 2004"]]
                    },
                    // ...
                ],
            },
        });
    });

##### Angular

    <!-- tab: adventureworks.service.ts -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [
            // ...
            {
                dataField: "[Ship Date].[Calendar Year]",
                area: "column",
                filterValues: [["CY 2003"], ["CY 2004"]]
            },
            // ...
        ],
    });

    // ...

    <!-- tab: app.component.html -->
    <dx-pivot-grid ...
        [allowFiltering]="true">
    </dx-pivot-grid>

##### Vue

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        fields: [
            // ...
            {
                dataField: "[Ship Date].[Calendar Year]",
                area: "column",
                filterValues: [["CY 2003"], ["CY 2004"]]
            },
            // ...
        ],
    });

    // ...

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ...
            :allow-filtering="true">
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
        fields: [
            // ...
            {
                dataField: "[Ship Date].[Calendar Year]",
                area: "column",
                filterValues: [["CY 2003"], ["CY 2004"]]
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
                allowFiltering={true}>
            </PivotGrid>
        );
    }

---

If you need to customize a header filter's appearance or content, use the global [headerFilter](/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/headerFilter/) object or a field's [headerFilter](/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/Configuration/headerFilter/) object. Refer to the Header Filter demo for more information:

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/HeaderFilter/"
}