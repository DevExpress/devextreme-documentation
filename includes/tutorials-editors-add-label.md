To specify label text, define the [label](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#label) property. To enable floating labels, set [labelMode](/Documentation/ApiReference/UI_Components/dx{WidgetName}/Configuration/#labelMode) to *"floating"*. In floating mode, the label acts as a placeholder. When the editor is focused, the label shifts above the input field.

---
##### jQuery

    <!-- tab: index.js -->
    $("#{widgetName}").dx{WidgetName}({
        label: "${{label}}",
        labelMode: "floating",
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}
        label="${{label}}"
        labelMode="floating">
    </dx-{widget-name}>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}
            label="${{label}}"
            label-mode="floating"
        />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';

    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName} } from 'devextreme-react/{widget-name}';

    function App(): JSX.Element {
        return (
            <{WidgetName}
                label="${{label}}"
                labelMode="floating"
            />
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Common/EditorAppearanceVariants/"
}
