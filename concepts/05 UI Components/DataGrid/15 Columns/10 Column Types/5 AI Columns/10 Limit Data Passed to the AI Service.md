Default AI requests include all data from rows visible in the {WidgetName} container. This data includes fields of hidden columns and fields not bound to a column. To save AI resources, you can configure the component to include only relevant data fields. Modify the **AIColumnRequestCreatingEvent**.[data](/Documentation/26_2/ApiReference/UI_Components/dxDataGrid/Types/AIColumnRequestCreatingEvent/#data) parameter within [onAIColumnRequestCreating](/api-reference/10%20UI%20Components/dxDataGrid/1%20Configuration/onAIColumnRequestCreating.md '/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#onAIColumnRequestCreating') as follows:

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
