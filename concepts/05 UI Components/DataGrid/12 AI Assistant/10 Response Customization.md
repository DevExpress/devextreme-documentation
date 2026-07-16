AI Assistant allows you to customize AI responses using the following callbacks:

- [customizeResponseTitle](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/aiAssistant/customizeResponseTitle.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#customizeResponseTitle'): Customizes response titles (first line in a response)
- [customizeResponseText](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/aiAssistant/customizeResponseText.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/aiAssistant/#customizeResponseText'): Customizes response messages (all lines below the title)

You can use these callbacks to localize responses. The following code snippet uses the [locale()](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/Utils/localization/#locale') utility method to specify response messages and titles for multiple locales:

---

##### jQuery

    <!-- tab: index.js -->
    const currentLocale = DevExpress.localization.locale();

    $('#{widget-name}-container').dx{WidgetName}({
        aiAssistant: {
            customizeResponseText(command) {
                switch (currentLocale) {
                    case 'en':
                        return {
                            success: `Command succeeded: ${command.name}`,
                            failure: `Command failed: ${command.name}`,
                        };
                    case 'fr':
                        return { /* Translated texts */ };
                }
            },
            customizeResponseTitle(status, commandNames) {
                switch (currentLocale) {
                    case 'en':
                        return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
                    case 'fr':
                        return /* Translated texts */;
                }
            },
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
        <dxo-{widget-name}-ai-assistant
            [enabled]="true"
            [customizeResponseText]="customizeResponseText"
            [customizeResponseTitle]="customizeResponseTitle"
        ></dxo-{widget-name}-ai-assistant>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';
    import { locale } from "devextreme/localization";

    export class AppComponent {
        currentLocale = locale();
        customizeResponseText = (command) => {
            switch (this.currentLocale) {
                case 'en':
                    return {
                        success: `Command succeeded: ${command.name}`,
                        failure: `Command failed: ${command.name}`,
                    };
                case 'fr':
                    return { /* Translated texts */ };
            }
        };
        customizeResponseTitle = (status, commandNames) => {
            switch (this.currentLocale) {
                case 'en':
                    return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
                case 'fr':
                    return /* Translated texts */;
            }
        };
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxAIAssistant
                :customize-response-text="customizeResponseText"
                :customize-response-title="customizeResponseTitle"
            />
        </Dx{WidgetName}>
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, DxAIAssistant, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';
    import { locale } from "devextreme/localization";

    const currentLocale = locale();
    function customizeResponseText(command) {
        switch (currentLocale) {
            case 'en':
                return {
                    success: `Command succeeded: ${command.name}`,
                    failure: `Command failed: ${command.name}`,
                };
            case 'fr':
                return { /* Translated texts */ };
        }
    };
    function customizeResponseTitle(status, commandNames) {
        switch (currentLocale) {
            case 'en':
                return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
            case 'fr':
                return /* Translated texts */;
        }
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, AIAssistant, type {WidgetName}Types } from 'devextreme-react/{widget-name}';
    import { locale } from "devextreme/localization";

    const currentLocale = locale();
    function customizeResponseText(command) {
        switch (currentLocale) {
            case 'en':
                return {
                    success: `Command succeeded: ${command.name}`,
                    failure: `Command failed: ${command.name}`,
                };
            case 'fr':
                return { /* Translated texts */ };
        }
    };
    function customizeResponseTitle(status, commandNames) {
        switch (currentLocale) {
            case 'en':
                return `${status.toUpperCase()}: ${commandNames.join(', ')}`;
            case 'fr':
                return /* Translated texts */;
        }
    };

    function App() {
        return (
            <{WidgetName}>
                <AIAssistant
                    enabled={true}
                    customizeResponseText={customizeResponseText}
                    customizeResponseTitle={customizeResponseTitle}
                />
            </{WidgetName}>
        );
    };

---
