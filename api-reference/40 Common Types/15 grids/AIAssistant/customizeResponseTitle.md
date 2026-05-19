---
id: AIAssistant.customizeResponseTitle
type: function(status, commandNames)
---
---
##### shortDescription
Customizes AI Assistant response titles.

##### param(status): Enums.ResponseStatus
The response status. If a response includes multiple requested commands, all must succeed for this parameter to return *"success"*.

##### param(commandNames): Array<String>
An array of requested commands ([PredefinedCommandNames]({basewidgetpath}/PredefinedCommandNames/)).

##### return: String
The custom response title.

---
Use this function to customize the titles of AI Assistant response messages.

You can use this function to translate response texts. The following code snippet uses the [locale()](/Documentation/ApiReference/Common/Utils/localization/#locale) method to specify texts for multiple locales:

---

##### jQuery

    <!-- tab: index.js -->
    const currentLocale = DevExpress.localization.locale();

    $('#{widget-name}-container').dx{WidgetName}({
        aiAssistant: {
            customizeResponseTitle(status, commandNames) {
                switch (currentLocale) {
                    case 'en':
                        return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
                    case 'fr':
                        return { /* Translated texts */ };
                }
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
        <dxo-data-grid-ai-assistant
            [enabled]="true"
            [customizeResponseTitle]="customizeResponseTitle"
        ></dxo-data-grid-ai-assistant>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';
    import { locale } from "devextreme/localization";

    export class AppComponent {
        currentLocale = locale();
        customizeResponseTitle = (status, commandNames) => {
            switch (this.currentLocale) {
                case 'en':
                    return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
                case 'fr':
                    return { /* Translated texts */ };
            }
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxAIAssistant
                :customize-response-title="customizeResponseTitle"
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, DxAIAssistant, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';
    import { locale } from "devextreme/localization";

    const currentLocale = locale();
    function customizeResponseTitle(status, commandNames) {
        switch (currentLocale) {
            case 'en':
                return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
            case 'fr':
                return { /* Translated texts */ };
        }
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, AIAssistant, type {WidgetName}Types } from 'devextreme-react/{widget-name}';
    import { locale } from "devextreme/localization";

    const currentLocale = locale();
    function customizeResponseTitle(status, commandNames) {
        switch (currentLocale) {
            case 'en':
                return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
            case 'fr':
                return { /* Translated texts */ };
        }
    };

    function App() {
        return (
            <{WidgetName}>
                <AIAssistant
                    enabled={true}
                    customizeResponseTitle={customizeResponseTitle}
                />
            </{WidgetName}>
        );
    };

---
