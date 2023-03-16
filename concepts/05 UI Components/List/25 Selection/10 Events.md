The List UI component fires the [selectionChanged](/api-reference/10%20UI%20Components/CollectionWidget/4%20Events/selectionChanged.md '/Documentation/ApiReference/UI_Components/dxList/Events/#selectionChanged') event when an item is selected or when the selection is cancelled. The UI component also fires the [selectAllValueChanged](/api-reference/10%20UI%20Components/dxList/4%20Events/selectAllValueChanged.md '/Documentation/ApiReference/UI_Components/dxList/Events/#selectAllValueChanged') event when the [*"Select All"*](/api-reference/10%20UI%20Components/dxList/1%20Configuration/selectAllMode.md '/Documentation/ApiReference/UI_Components/dxList/Configuration/#selectAllMode') check box has changed its value. If the functions that handle these events are not going to be changed during the lifetime of the UI component, assign them to the corresponding **on*EventName*** properties when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onSelectionChanged: function(e) {
                const addedItems = e.addedItems;
                const removedItems = e.removedItems;
                // Handler of the "selectionChanged" event
            },
            onSelectAllValueChanged: function(e) {
                const newCheckBoxValue = e.value;
                // Handler of the "selectAllValueChanged" event
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-list ...
        (onSelectionChanged)="onSelectionChanged($event)"
        (onSelectAllValueChanged)="onSelectAllValueChanged($event)">
    </dx-list>

    <!--TypeScript-->
    import { DxListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onSelectionChanged (e) {
            const addedItems = e.addedItems;
            const removedItems = e.removedItems;
            // Handler of the "selectionChanged" event
        }
        onSelectAllValueChanged (e) {
            const newCheckBoxValue = e.value;
            // Handler of the "selectAllValueChanged" event
        }
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxList ...
            @selection-changed="onSelectionChanged"
            @select-all-value-changed="onSelectAllValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';
    import DxList from 'devextreme-vue/list';

    export default {
        components: {
            DxList
        },
        // ...
        methods: {
            onSelectionChanged (e) {
                const addedItems = e.addedItems;
                const removedItems = e.removedItems;
                // Handler of the "selectionChanged" event
            },
            onSelectAllValueChanged (e) {
                const newCheckBoxValue = e.value;
                // Handler of the "selectAllValueChanged" event
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import List from 'devextreme-react/list';

    const onSelectionChanged = (e) => {
        const addedItems = e.addedItems;
        const removedItems = e.removedItems;
        // Handler of the "selectionChanged" event
    };
    const onSelectAllValueChanged = (e) => {
        const newCheckBoxValue = e.value;
        // Handler of the "selectAllValueChanged" event
    }

    export default function App() {
        return (
            <List ...
                onSelectionChanged={onSelectionChanged}
                onSelectAllValueChanged={onSelectAllValueChanged}
            />
        );
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/"
}

---
##### jQuery

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxList/Methods/#oneventName_eventHandler') method.

    <!--JavaScript-->
    const selectionChangedEventHandler1 = function(e) {
        // First handler of the "selectionChanged" event
    };

    const selectionChangedEventHandler2 = function(e) {
        // Second handler of the "selectionChanged" event
    };

    $("#listContainer").dxList("instance")
        .on("selectionChanged", selectionChangedEventHandler1)
        .on("selectionChanged", selectionChangedEventHandler2);

---

#####See Also#####
#include common-link-handleevents
- [List API Reference](/api-reference/10%20UI%20Components/dxList '/Documentation/ApiReference/UI_Components/dxList/')