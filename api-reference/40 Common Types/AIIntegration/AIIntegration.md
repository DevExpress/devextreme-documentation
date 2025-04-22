---
id: AIIntegration
module: common/ai-integration
export: AIIntegration
---
---
##### shortDescription
A type of the main AI integration class.

---
You must create an instance of this class by passing in an object of the [AIProvider](/Documentation/ApiReference/Common_Types/AIProvider/) type. This instance should then be passed to any components that support AI features.

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
    import { AIIntegration } from 'devextreme-angular/ai-integration';
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
    import { AIIntegration } from 'devextreme-vue/ai-integration';
    const aiIntegration = new AIIntegration(provider);
    </script>

##### React

    <!-- tab: App.tsx -->
    import { AIIntegration } from 'devextreme-react/ai-integration';
    const aiIntegration = new AIIntegration(provider);

    const App = () => {
        return (
            <HtmlEditor aiIntegration={aiIntegration} />
        );
    }

---