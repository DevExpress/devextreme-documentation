---
id: ColumnProperties.fieldValueTemplate
type: template
---
---
##### shortDescription
Specifies a custom template for the field value.

##### param(data): FieldTemplateData
The field's data.

##### param(container): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### return: String | UserDefinedElement
A template name or container.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/CardView/Overview/"
}

---

##### jQuery

    <!-- tab: index.js -->
    $(#dxCardView).dxCardView({
        // ...
        columns: [{
            dataField: 'Email',
            fieldValueTemplate(data) {
                return $('<a>')
                    .attr('href', `mailto:${data.field.value}`)
                    .text(data.field.text);
            }
        }]
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-card-view ... >
        <dxi-card-view-column
            dataField="Email"
            fieldValueTemplate="emailTemplate"
        ></dxi-card-view-column>
        <div *dxTemplate="let params of 'emailTemplate'">
            <a href="mailto:{{ params.field.value }}">{{ params.field.text }}</a>
        </div>
    </dx-card-view>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxCardView ... >
            <DxColumn
                data-field="Email"
                field-value-template="emailTemplate"
            />
            <template #emailTemplate="{ data }" >
                <a :href="`mailto:${data.field.value}`">{{ data.field.text }}</a>
            </template>
        </DxCardView>
    </template>

    <script setup lang="ts">
    import DxCardView, { DxColumn } from 'devextreme-vue/card-view';
    </script>

##### React

    <!-- tab: App.ts -->
    import CardView, { Column } from 'devextreme-react/card-view';

    function EmailComponent(data) {
        return (
            <a href={`mailto:${data.field.value}`}>{data.field.text}</a>
        );
    }

    function App() {
        return (
            <CardView ... >
                <Column
                    dataField="Email"
                    fieldValueComponent={EmailComponent}
                />
            </CardView>
        )
    }

---