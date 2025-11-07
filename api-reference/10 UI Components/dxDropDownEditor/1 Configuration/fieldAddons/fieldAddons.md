---
id: dxDropDownEditor.Options.fieldAddons
type: FieldAddons
default: null
---
---
##### shortDescription
Specifies {WidgetName} input field addons.

---
Field addons are custom markup containers that you can add to either side of the {WidgetName} input field. The component arranges visual elements in the following order: [beforeTemplate](/api-reference/10%20UI%20Components/dxDropDownEditor/1%20Configuration/fieldAddons/beforeTemplate.md '{basewidgetpath}/Configuration/fieldAddons/#beforeTemplate'), {WidgetName} input, [afterTemplate](/api-reference/10%20UI%20Components/dxDropDownEditor/1%20Configuration/fieldAddons/afterTemplate.md '{basewidgetpath}/Configuration/fieldAddons/#afterTemplate').

---

##### jQuery

    <!-- tab: index.js -->
    $('#{widget-name}-container').dx{WidgetName}({
        fieldAddons: {
            beforeTemplate(data, element) {
                element.append(
                    $('<i>').addClass('dx-icon-chevronprev'),
                );
            },
            afterTemplate(data, element) {
                element.append(
                    $('<i>').addClass('dx-icon-chevronnext'),
                );
            },
        },
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        [fieldAddons]="fieldAddons"
    >
        <dxo-{widget-name}-field-addons
            beforeTemplate="before{WidgetName}"
            afterTemplate="after{WidgetName}"
        ></dxo-{widget-name}-field-addons>
        <div *dxTemplate="let data of 'before{WidgetName}'">
            <i class="dx-icon-chevronprev"></i>
        </div>
        <div *dxTemplate="let data of 'after{WidgetName}'">
            <i class="dx-icon-chevronnext"></i>
        </div>
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { Dx{WidgetName}, DxFieldAddons } from 'devextreme-vue/{widget-name}';

    </script>

    <template>
        <Dx{WidgetName}
            :field-addons="fieldAddons"
        >
            <DxFieldAddons
                before-template="before{WidgetName}"
                after-template="after{WidgetName}"
            />
            <template #before{WidgetName}="{ data }">
                <i class="dx-icon-chevronprev"></i>
            </template>
            <template #after="{ data }">
                <i class="dx-icon-chevronnext"></i>
            </template>
        </Dx{WidgetName}>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, FieldAddons } from 'devextreme-react/{widget-name}';

    function before{WidgetName}Render(data) {
        return (
            <i class="dx-icon-chevronprev"></i>
        );
    }

    function after{WidgetName}Render(data) {
        return (
            <i class="dx-icon-chevronnext"></i>
        );
    }

    function App() {
        return (
            <{WidgetName}>
                <FieldAddons
                    beforeRender={before{WidgetName}Render}
                    afterRender={after{WidgetName}Render}
                />
            </{WidgetName}>
        );
    }

---
