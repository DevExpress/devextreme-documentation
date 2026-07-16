---
id: AIAssistant.customizeResponseText
type: function(command)
---
---
##### shortDescription
Customizes AI Assistant response messages for each command.

##### param(command): CommandInfo
Information about the command.

##### return: ResponseStatusTexts
Custom messages for **success** and **failure** responses.

---
**customizeResponseText** is called for each command. Use this function to customize response messages for AI Assistant commands. The chat displays these messages below the response title. If a response includes multiple commands, the chat displays each message on a separate line.

When a command succeeds, the AI Assistant chat displays the response in green and prefixes the text with a checkmark button emoji (✅). When a command fails, the AI Assistant chat displays the response in red and prefixes the text with a cross mark emoji (❌).

The **command** parameter contains the following fields:

- **name**: The command's name ([PredefinedCommandNames](/api-reference/40%20Common%20Types/15%20grids/PredefinedCommandNames '/Documentation/ApiReference/Common_Types/grids/PredefinedCommandNames/')).
- **args**: Command arguments. Refer to [PredefinedCommands](/api-reference/40%20Common%20Types/15%20grids/PredefinedCommands '/Documentation/ApiReference/Common_Types/grids/PredefinedCommands/') for information about the arguments of each available command.

Configure **customizeResponseText** to return an object with the following fields:

- **success**: Text to display when the command succeeds.
- **failure**: Text to display when the command fails.

If you do not specify any of these fields, the AI Assistant chat displays the default message.

You can use this function to localize response text. The following code snippet uses the [locale()](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/Utils/localization/#locale') method to specify text for multiple locales:

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
