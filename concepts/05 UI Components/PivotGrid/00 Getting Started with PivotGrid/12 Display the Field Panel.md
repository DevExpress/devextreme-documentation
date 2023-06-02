A field panel is an element that displays pivot grid fields involved in summary calculation. This panel consists of the same four field areas: column, row, data, and filter. Users can drag and drop fields between these areas.

![DevExtreme PivotGrid: Field panel](/images/pivotgrid/field-panel.png)

To display the field panel, enable the [fieldPanel](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/fieldPanel '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/').[visible](/api-reference/10%20UI%20Components/dxPivotGrid/1%20Configuration/fieldPanel/visible.md '/Documentation/ApiReference/UI_Components/dxPivotGrid/Configuration/fieldPanel/#visible') property. Use other **fieldPanel** properties to configure optional features. For example, you can hide the filter field area:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#pivotGrid").dxPivotGrid({
            // ...
            fieldPanel: {
                visible: true,
                showFilterFields: false
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-pivot-grid ... >
        <dxo-field-panel
            [visible]="true"
            [showFilterFields]="false">
        </dxo-field-panel>
    </dx-pivot-grid>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxPivotGrid ... >
            <DxFieldPanel
                :visible="true"
                :show-filter-fields="false"
            />
        </DxPivotGrid>
    </template>

    <script>
    // ...
    import {
        // ...
        DxFieldPanel
    } from 'devextreme-vue/pivot-grid';

    export default {
        components: {
            // ...
            DxFieldPanel
        },
        // ...
    }
    </script>

##### React

    <!-- tab: App.js -->
    // ...
    import {
        // ...
        FieldPanel
    } from 'devextreme-react/pivot-grid';

    // ...
    export default function App() {
        return (
            <PivotGrid ... >
                <FieldPanel
                    visible={true}
                    showFilterFields={false}
                /> 
            </PivotGrid>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/PivotGrid/FieldPanel/"
}