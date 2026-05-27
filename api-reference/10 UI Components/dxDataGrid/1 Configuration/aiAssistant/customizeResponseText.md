---
id: dxDataGrid.Options.aiAssistant.customizeResponseText
type: function(command)
---
---
##### shortDescription
Customizes AI Assistant response messages for each command.

##### param(command): DataGridCommandInfo
Information about the command.

##### return: ResponseStatusTexts
Custom messages for **success** and **failure** responses.

---
**customizeResponseText** is called for each command. Use this function to customize response messages for AI Assistant commands. The chat displays these message strings below the response title. When a response includes multiple commands, the chat displays individual messages on separate lines.

When a command succeeds, the AI Assistant chat displays the response in green and prefixes the text with a checkmark button emoji (✅). When a command fails, the AI Assistant chat displays the response in red and prefixes the text with a cross mark emoji (❌).

The **command** parameter contains the following fields:

- **name**: The command's name ([DataGridPredefinedCommandNames]({basewidgetpath}/Types/DataGridPredefinedCommandNames/)).
- **args**: Command arguments. Refer to [DataGridPredefinedCommands]({basewidgetpath}/Types/DataGridPredefinedCommands/) for information about the arguments of each available command.

Configure **customizeResponseText** to return an object with the following fields:

- **success**: Text to display when the command succeeds.
- **failure**: Text to display when the command fails.

If you don't specify any of these fields, the AI Assistant chat displays the default message. 

You can use this function to translate response texts. The following code snippet uses the [locale()](/Documentation/ApiReference/Common/Utils/localization/#locale) method to specify texts for multiple locales:

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
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name}>
        <dxo-{widget-name}-ai-assistant
            [enabled]="true"
            [customizeResponseText]="customizeResponseText"
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
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName}>
            <DxAIAssistant
                :customize-response-text="customizeResponseText"
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

    function App() {
        return (
            <{WidgetName}>
                <AIAssistant
                    enabled={true}
                    customizeResponseText={customizeResponseText}
                />
            </{WidgetName}>
        );
    };

---
