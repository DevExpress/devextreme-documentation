---
id: dxForm.Options.aiIntegration
type: AIIntegration | undefined
default: undefined
---
---
##### shortDescription
Binds the Form to an AI service.

---
Use the following members to activate AI-powered **Smart Paste** functionality for the Form component:

- [AIIntegration](/api-reference/40%20Common%20Types/AIIntegration '/Documentation/ApiReference/Common_Types/AIIntegration/') class
- *'smartPaste'* button [name](/Documentation/ApiReference/UI_Components/dxForm/Types/#FormPredefinedButtonItem) (or call the [smartPaste(text)](/Documentation/ApiReference/UI_Components/dxForm/Methods/#smartPastetext) method)

---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration(provider);

    $("#form").dxForm({
        // ...
        aiIntegration,
        items: [
            {
                itemType: 'button',
                name: 'smartPaste'
            },
        ],
    });

    <!-- tab: index.html -->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="../artifacts/js/dx.ai-integration.js" charset="utf-8"></script>
        <!-- or if using CDN -->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/devextreme-dist/cdnjs_version/js/dx.ai-integration.js"></script>
    </head>

##### Angular

    <!-- tab: app.component.ts -->
    import { AIIntegration } from 'devextreme-angular/common/ai-integration';
    // ...
    export class AppComponent {
        aiIntegration = new AIIntegration(provider);
    }

    <!-- tab: app.component.html -->
    <dx-form [aiIntegration]="aiIntegration">
        <dxi-form-item
            itemType="button"
            name="smartPaste"
        ></dxi-form-item>
    </dx-form>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxForm :ai-integration="aiIntegration">
            <DxButtonItem name="smartPaste" />
        </DxForm>
    </template>

    <script setup lang="ts">
    import {
        DxForm,
        DxButtonItem,
    } from 'devextreme-vue/form';
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';

    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import React from 'react';
    import Form, {
        ButtonItem,
    } from 'devextreme-react/form';
    import { AIIntegration } from 'devextreme-react/common/ai-integration';

    const aiIntegration = new AIIntegration(provider);

    const App = () => {
        return (
            <Form aiIntegration={aiIntegration}>
                <ButtonItem name="smartPaste" />
            </Form>
        );
    }

---
