
---

##### jQuery

To customize the appearance of [items](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/) in the SelectBox drop-down menu, configure [itemTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#itemTemplate) (customizes all items) or **items[]**.[template](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/#template) (customizes individual items).

    <!-- tab: index.js -->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            itemTemplate: function(data) {
                return $("<div>").append(
                    $("<img>").attr("src", data.imgSrc)
                );
            },
        });
    });

##### Angular

To customize the appearance of [items](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/) in the SelectBox drop-down menu, configure [itemTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#itemTemplate) (customizes all items) or **items[]**.[template](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/#template) (customizes individual items).

    <!-- tab: app.component.html -->
    <dx-select-box ...
        itemTemplate="item"
    >
        <div *dxTemplate="let data of 'item'">
            <img src="{{ data.imgSrc }}" />
        </div>
    </dx-select-box>

##### Vue

To customize the appearance of [items](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/) in the SelectBox drop-down menu, configure [itemTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#itemTemplate) (customizes all items) or **items[]**.[template](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/#template) (customizes individual items).

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            item-template="item"
        >
            <template #item="{ data }">
                <img :src="data.imgSrc">
            </template>
        </DxSelectBox>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    </script>

##### React

To customize the appearance of [items](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/) in the SelectBox drop-down menu, configure [itemRender](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#itemRender)/[itemComponent](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#itemComponent) (customize all items) or **items[]**.[render](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/#render)/[component](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/items/#component) (customize individual items).

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { SelectBox } from 'devextreme-react/select-box';

    function itemRender(data) {
        return (
            <img src={data.imgSrc} />
        );
    }

    function App() {
        return (
            <SelectBox ... 
                itemRender={itemRender}
            />
        );
    }

---

---

##### jQuery

You can also customize the SelectBox input field. Configure **fieldAddons**.[beforeTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#beforeTemplate) and **fieldAddons**.[afterTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#afterTemplate) to display custom markup to the left/right of the component input:

    <!-- tab: index.js -->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            fieldAddons: {
                beforeTemplate: function(data) {
                    return $("<div>").append(
                        $("<img>").attr("src", data.imgSrc)
                    );
                },
            }
        });
    });

##### Angular

You can also customize the SelectBox input field. Configure **fieldAddons**.[beforeTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#beforeTemplate) and **fieldAddons**.[afterTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#afterTemplate) to display custom markup to the left/right of the component input:

    <!-- tab: app.component.html -->
    <dx-select-box ... >
        <dxo-select-box-field-addons
            beforeTemplate="before"
        ></dxo-select-box-field-addons>
        <div *dxTemplate="let data of 'before'">
            <img src="{{ data.imgSrc }}" />
        </div>
    </dx-select-box>

##### Vue

You can also customize the SelectBox input field. Configure **fieldAddons**.[beforeTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#beforeTemplate) and **fieldAddons**.[afterTemplate](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#afterTemplate) to display custom markup to the left/right of the component input:

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ... >
            <DxFieldAddons
                before-template="before"
            />
            <template #before="{ data }"">
                <img :src="data.imgSrc">
            </template>
        </DxSelectBox>
    </template>

    <script setup lang="ts">
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { DxSelectBox, DxFieldAddons } from 'devextreme-vue/select-box';

    </script>

##### React

You can also customize the SelectBox input field. Configure **fieldAddons**.[beforeRender](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#beforeRender)/[beforeComponent](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#beforeComponent) and **fieldAddons**.[afterRender](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#afterRender)/[afterComponent](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/fieldAddons/#afterComponent) to display custom markup to the left/right of the component input:

    <!-- tab: App.tsx -->
    import React from 'react';
    import 'devextreme/dist/css/dx.fluent.blue.light.css';

    import { SelectBox, FieldAddons } from 'devextreme-react/select-box';

    function beforeRender(data) {
        return (
            <img src={data.imgSrc} />
        );
    }

    function App() {
        return (
            <SelectBox ... >
                <FieldAddons
                    beforeRender={beforeRender}
                />
            </SelectBox>
        );
    }

---

#####See Also#####
- [SelectBox API Reference](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, item appearance, customize, templates, template, field template
