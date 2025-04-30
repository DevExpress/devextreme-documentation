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
This object's constructor accepts an [AIProvider](/api-reference/40%20Common%20Types/AIProvider '/Documentation/ApiReference/Common_Types/AIProvider/') object that specifies AI service settings. Pass the created `AIIntegration` object to components where you want to activate AI capabilities.

---
##### jQuery

    <!-- tab: index.js -->
    const aiIntegration = new DevExpress.aiIntegration(provider);

    $("#htmlEditor").dxHtmlEditor({
        // ...
        aiIntegration,
    });

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