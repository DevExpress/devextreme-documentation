---
id: ColumnProperties.fieldTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the field.

##### param(data): FieldTemplateData
The field's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/FieldTemplate"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        columns: [{
            // ...
            fieldTemplate(data) {
                return $('<div>')
                    .addClass('task__progress')
                    .dxProgressBar({
                        value: data.field.value,
                    });
            }
        }]
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxi-card-view-column ...
            fieldTemplate="progressTemplate"
        ></dxi-card-view-column>
        <div *dxTemplate="let data of 'progressTemplate'">
            <dx-progress-bar
                [value]="data.field.value"
            ></dx-progress-bar>
        </div>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumn ...
                field-template="progressTemplate"
            />
            <template #progressTemplate="{ data }">
                <DxProgressBar
                    :value="data.field.value"
                />
            </template>
        </DxCardView>
    </template>

    <script setup lang="ts">
    import { DxCardView, DxColumn } from 'devextreme-vue/card-view';
    import { DxProgressBar } from 'devextreme-vue/progress-bar';

    // ...
    </script>

##### React

    <!-- tab: App.tsx -->
    import CardView, { Column, CardViewTypes } from 'devextreme-react/card-view';
    import { ProgressBar } from 'devextreme-react/progress-bar';

    function progressRender(data: CardViewTypes.FieldTemplateData) {
        return (
            <ProgressBar value={data.field.value} />
        )
    }

    // ...
    function App() {
        return (
            <CardView ... >
                <Column ...
                    fieldRender={progressRender}
                />
            </CardView>
        )
    }

---