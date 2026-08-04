SelectBox uses the [Popup](/Documentation/Guide/UI_Components/Popup/Getting_Started_with_Popup/) component as a drop-down menu. To customize the menu, specify [Popup properties](/Documentation/ApiReference/UI_Components/dxPopup/Configuration/) in the [dropDownOptions](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#dropDownOptions) object:

---
##### jQuery

    <!-- tab: index.js -->
    $("#selectBox").dxSelectBox({
        dropDownOptions: {
            height: 150,
        },
        // ...
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box>
        <dxo-select-box-drop-down-options
            [height]="150"
        ></dxo-select-box-drop-down-options>
    </dx-select-box>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        dropDownOptions = {
            height: 150,
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox>
            <DxDropDownOptions :height="150" />
        </DxSelectBox>
    </template>

    <script setup lang="ts">
    // ...

    const dropDownOptions = {
        height: 150,
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    // ...
    
    const dropDownOptions = {
        height: 150,
    };

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