The field chooser allows users to manage pivot grid fields. Its window displays five field sections, four of which correspond to pivot grid areas and the fifth contains all fields. Users can drag and drop fields between these sections.

To open the field chooser, users should click the Field Chooser icon or select Show Field Chooser from a row or column header's context menu.

![DevExtreme PivotGrid: Field chooser](/images/pivotgrid/field-chooser.png)

To configure the field chooser, declare the [fieldChooser](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/fieldChooser '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/') object. Use the [enabled](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/fieldChooser/enabled.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/#enabled') property to specify whether the Field Chooser icon and the corresponding context menu command are available. This property's default value is **true**.

The All Fields section includes the fields declared in the [fields[]](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/) array and the fields auto-generated from the data source model. If the All Fields section contains a large number of fields that users find hard to navigate through, you can disable the [dataSource](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/dataSource.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/#dataSource').[retrieveFields](/api-reference/30%20Data%20Layer/PivotGridDataSource/1%20Configuration/retrieveFields.md '/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields') property to hide the auto-generated fields. Alternatively, you can enable the [allowSearch](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/fieldChooser/allowSearch.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldChooser/#allowSearch') property to allow users to search in the All Fields section.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // ...
            dataSource: {
                // ...
                // retrieveFields: false
            },
            fieldChooser: {
                allowSearch: true
            },
        });
    });

##### Angular

    <!-- tab: adventureworks.service.ts -->
    // ...
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        // retrieveFields: false
    });

    // ...

    <!-- tab: app.component.html -->
    <dx-pivot-grid ... >
        <dxo-field-chooser
            [allowSearch]="true">
        </dxo-field-chooser>
    </dx-pivot-grid>

##### Vue

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        // retrieveFields: false
    });

    // ...

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ... >
            <DxFieldChooser :allow-search="true" />
        </DxPivotGrid>
    </template>

    <script>
    // ...
    import { 
        // ...
        DxFieldChooser
    } from 'devextreme-vue/pivot-grid';

    export default {
        components: {
            // ...
            DxFieldChooser
        },
        // ...
    }
    </script>

##### React

    <!-- tab: adventureworks.service.js -->
    import PivotGridDataSource from 'devextreme/ui/pivot_grid/data_source';

    const dataSource = new PivotGridDataSource({
        // ...
        // retrieveFields: false
    });

    // ...

    <!-- tab: App.js -->
    // ...
    import {
        // ...
        FieldChooser
    } from 'devextreme-react/pivot-grid';

    const dataSource = AdventureWorksService.getPivotGridDataSource();

    export default function App() {
        return (
            <PivotGrid ... >
                <FieldChooser
                    allowSearch={true}
                />
            </PivotGrid>
        );
    }

---

DevExtreme also includes a standalone [PivotGridFieldChooser](/api-reference/10%20UI%20Components/dxPivotGridFieldChooser '/Documentation/ApiReference/UI_Components/dxPivotGridFieldChooser/') component. Unlike the field chooser integrated into the PivotGrid, the standalone field chooser can remain visible on a page at all times. Refer to the following demos for more information on both field choosers:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/IntegratedFieldChooser/",
    name: "Integrated Field Chooser"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/StandaloneFieldChooser/",
    name: "Standalone Field Chooser"
}