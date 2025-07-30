---
id: dxButton.Options.onContentReady
type: function(e)
---
---
##### shortDescription
A function that is executed when the UI component is rendered and each time the component is repainted.

##### param(e): ui/button:ContentReadyEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

---
<!-- Description goes here -->

---

##### jQuery

    <!-- tab: index.js -->
    $('#button').dxButton({
        text: 'Confirm',
        onContentReady(e) {
            e.element.focus()
        }
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-button
        text="Confirm"
        (onContentReady)="handleContentReady($event)"
    ></dx-button>

    <!-- tab: app.component.ts -->
    export class AppComponent {
        handleContentReady(e: DxButtonTypes.ContentReadyEvent) {
            e.component.focus();
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxButton
            text="Confirm"
            @contentReady="handleContentReady($event)"
        />
    </template>

    <script setup lang="ts">
    import { DxButton, type DxButtonTypes } from 'devextreme-vue/button';

    function handleContentReady(e: DxButtonTypes.ContentReadyEvent) {
        e.component.focus();
    }

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Button, type ButtonTypes } from 'devextreme-react/button';

    function handleContentReady(e: ButtonTypes.ContentReadyEvent) {
        e.component.focus();
    }

    function App() {
        return (
            <Button
                text="Confirm"
                onContentReady={handleContentReady}
            />
        )
    }

---