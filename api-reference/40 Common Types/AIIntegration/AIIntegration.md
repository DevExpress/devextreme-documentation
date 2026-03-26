---
id: AIIntegration
module: common/ai-integration
export: AIIntegration
generateTypeLink: 
---
---
##### shortDescription
A class that activates AI services in DevExpress UI components.

---
This object's constructor accepts two parameters: 

- [AIProvider](/api-reference/40%20Common%20Types/AIProvider '/Documentation/ApiReference/Common_Types/AIProvider/') object (required) - specifies AI service settings. 
- [AIIntegrationOptions](/api-reference/40%20Common%20Types/AIIntegrationOptions '/Documentation/ApiReference/Common_Types/AIIntegrationOptions/') object (optional) - specifies additional properties. 

Pass the created `AIIntegration` object to components where you want to activate AI capabilities.

---
##### jQuery

You need to link `AIIntegration` source.

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration.AIIntegration(provider);

    $("#htmlEditor").dxHtmlEditor({
        // ...
        aiIntegration,
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
    <dx-html-editor [aiIntegration]="aiIntegration"></dx-html-editor>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxHtmlEditor :ai-integration="aiIntegration" />
    </template>

    <script setup lang="ts">
    import { AIIntegration } from 'devextreme-vue/common/ai-integration';
    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/common/ai-integration';
    const aiIntegration = new AIIntegration(provider);

    const App = () => {
        return (
            <HtmlEditor aiIntegration={aiIntegration} />
        );
    }

---
