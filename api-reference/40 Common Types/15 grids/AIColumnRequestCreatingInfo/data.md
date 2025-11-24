---
id: AIColumnRequestCreatingInfo.data
type: Array<Object>
---
---
##### shortDescription
{WidgetName} data included in the AI request.

---
The default {WidgetName} behavior is to include all data from visible rows in AI requests, including data not bound to a column and data of hidden columns. This gives LLMs broader context, but increases the component's use of AI resources. To save AI credits, you can modify this parameter to limit the data included in AI requests:

---

##### jQuery

    <!-- tab: index.js -->
    $('#{widget-name}-container').dx{WidgetName}({
        onAIColumnRequestCreating(e) {
            e.data = e.data.map((item) => ({
                ID: item.ID,
                // ...
            }));
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onAIColumnRequestCreating)="handleAIColumnRequestCreating($event)"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

    export class AppComponent {
        handleAIColumnRequestCreating(e: Dx{WidgetName}Types.AIColumnRequestCreatingEvent) {
            e.data = e.data.map((item) => ({
                ID: item.ID,
                // ...
            }));
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            :on-a-i-column-request-creating={handleAIColumnRequestCreating}
        />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    function handleAIColumnRequestCreating(e: Dx{WidgetName}Types.AIColumnRequestCreatingEvent) {
        e.data = e.data.map((item) => ({
            ID: item.ID,
            // ...
        }));
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';

    function handleAIColumnRequestCreating(e: {WidgetName}Types.AIColumnRequestCreatingEvent) {
        e.data = e.data.map((item) => ({
            ID: item.ID,
            // ...
        }));
    };

    function App() {
        return (
            <{WidgetName} ...
                onAIColumnRequestCreating={handleAIColumnRequestCreating}
            />
        );
    };

---

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/DataGrid/AIColumns/",
    name: "DataGrid"
}
#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/TreeList/AIColumns/",
    name: "TreeList"
}
