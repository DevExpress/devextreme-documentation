SelectBox uses the [Popup](/concepts/05%20UI%20Components/Popup/00%20Getting%20Started%20with%20Popup '/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/') component as a drop-down menu. To customize the menu, specify [Popup properties](/api-reference/10%20UI%20Components/dxPopup/1%20Configuration '/Documentation/ApiReference/UI_Components/dxPopup/Configuration/') in the [dropDownOptions](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/dropDownOptions.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#dropDownOptions') object:

---
##### jQuery

    <!-- tab: index.js -->
    $("#selectBox").dxSelectBox({
        dropDownOptions: {
            height: 150,
        },
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .DropDownOptions(o => o.Height(150))
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box>
        <dxo-select-box-drop-down-options
            [height]="150"
        ></dxo-select-box-drop-down-options>
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox>
            <DxDropDownOptions :height="150" />
        </DxSelectBox>
    </template>

    <script setup lang="ts">
    import { DxSelectBox, DxDropDownOptions } from 'devextreme-vue/select-box';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { SelectBox, DropDownOptions } from 'devextreme-react/select-box';

    export default function App() {
        return (
            <SelectBox>
                <DropDownOptions height={150} />
            </SelectBox>
        );
    }

---


You have configured basic SelectBox features. To take a more detailed look at this UI component, explore the following resources:

* [Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview/)
* [API Reference](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')