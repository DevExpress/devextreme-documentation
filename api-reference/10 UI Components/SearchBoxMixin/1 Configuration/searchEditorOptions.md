---
id: SearchBoxMixin.Options.searchEditorOptions
type: dxTextBox_Options
default: {}
---
---
##### shortDescription
Configures the search panel.

---
The component implements a DevExtreme [TextBox](/Documentation/Guide/UI_Components/TextBox/Overview/) component to display a search panel. Define [TextBox Configuration](/api-reference/10%20UI%20Components/dxTextBox/1%20Configuration '/Documentation/ApiReference/UI_Components/dxTextBox/Configuration/') properties in **searchEditorOptions** to customize the search panel:

---

##### jQuery

    <!-- tab: index.js -->
    $('#{widgetname}').dx{WidgetName}({
        searchEditorOptions: {
            label: "Email",
            labelMode: "floating",
            showClearButton: true,
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        [searchEnabled]="true"
        [searchEditorOptions]="textboxOptions"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module } from "devextreme-angular/ui/{widget-name}"
    import { DxTextBoxTypes } from 'devextreme-angular/ui/text-box';
    
    // ...
    export class AppComponent {
        textboxOptions: DxTextBoxTypes.Properties = {
            label: "Email",
            labelMode: "floating",
            showClearButton: true,
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
    import { Dx{WidgetName} } from 'devextreme-vue/{widget-name}';
    import { type DxTextBoxTypes } from 'devextreme-vue/text-box';

    const textboxOptions: DxTextBoxTypes.Properties = {
        label: "Email",
        labelMode: "floating",
        showClearButton: true,
    }

    </script>

    <template>
        <Dx{WidgetName}
            :search-enabled="true"
            :search-editor-options="textboxOptions"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName} } from 'devextreme-react/{widget-name}';
    import { type DxTextBoxTypes } from 'devextreme-react/text-box';

    function App() {
        const textboxOptions: DxTextBoxTypes.Properties = {
            label: "Email",
            labelMode: "floating",
            showClearButton: true,
        }

        return (
            <>
                <{WidgetName}
                    searchEnabled={true}
                    searchEditorOptions={textboxOptions}
                />
            </>
        )
    }

---

#include widgets-config-object-option-note with {
    optionName: "searchEditorOptions"
}