To specify label text, define the [label](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#label) property. To enable floating labels, set [labelMode](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#labelMode) to *"floating"*. In floating mode, the label acts as a placeholder. When the editor is focused, the label shifts above the input field.

---
##### jQuery

    <!-- tab: index.js -->
    $("#selectBox").dxSelectBox({
        label: "Product",
        labelMode: "floating",
    });

##### ASP.NET Core Controls

    <!-- tab: Index.cshtml -->
    @(Html.DevExtreme().SelectBox()
        .Label("Product")
        .LabelMode(EditorLabelMode.Floating)
    )

##### Angular

    <!-- tab: app.component.html -->
    <dx-select-box
        label="Product"
        labelMode="floating">
    </dx-select-box>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSelectBox
            label="Product"
            label-mode="floating"
        />
    </template>

    <script setup lang="ts">
    import { DxSelectBox } from 'devextreme-vue/select-box';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { SelectBox } from 'devextreme-react/select-box';

    function App(): JSX.Element {
        return (
            <SelectBox
                label="Product"
                labelMode="floating"
            />
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorAppearanceVariants/"
}
