---
id: dxDataGrid.Options.onAIColumnRequestCreating
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed before an AI column request is created.

##### param(e): ui/data_grid:AIColumnRequestCreatingEvent
Information about the event.

##### field(e.additionalInfo): Object
Additional data to include in the request.

##### field(e.cancel): Boolean
Allows you to cancel the request.

##### field(e.column): GridBaseColumn
The AI column that initiated the request.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Array<Object>
An array of {WidgetName} records.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.useCache): Boolean
Specifies whether to cache request parameters.

---
This handler allows you to modify or cancel AI column requests. The following code snippet demonstrates how to cancel an AI column request that includes more than 100 {WidgetName} records:

---

##### jQuery

    <!-- tab: index.js -->
    $('#{widgetname}-container').dx{WidgetName}({
        onAIColumnRequestCreating(e) {
            if (e.data.length > 100) {
                e.cancel = true;
            }
        },
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ...
        (onAIColumnRequestCreating)="handleAIColumnRequestCreating($event)"
    ></dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { Dx{WidgetName}Module, type Dx{WidgetName}Types } from 'devextreme-angular/ui/{widget-name}';

    //...
    export class AppComponent {
        handleAIColumnRequestCreating(e: Dx{WidgetName}Types.AIColumnRequestCreatingEvent) {
            if (e.data.length > 100) {
                e.cancel = true;
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <Dx{WidgetName} ...
            @ai-column-request-creating="handleAIColumnRequestCreating"
        />
    </template>

    <script setup lang="ts">
    import { Dx{WidgetName}, type Dx{WidgetName}Types } from 'devextreme-vue/{widget-name}';

    function handleAIColumnRequestCreating(e: Dx{WidgetName}Types.AIColumnRequestCreatingEvent) {
        if (e.data.length > 100) {
            e.cancel = true;
        }
    }
    </script>

##### React

    <!-- tab: App.tsx -->
    import { {WidgetName}, type {WidgetName}Types } from 'devextreme-react/{widget-name}';

    function handleAIColumnRequestCreating(e: {WidgetName}Types.AIColumnRequestCreatingEvent) {
        if (e.data.length > 100) {
            e.cancel = true;
        }
    }

    function App() {
        return (
            <{WidgetName} ...
                onAIColumnRequestCreating={handleAIColumnRequestCreating}
            />
        )
    }

---
