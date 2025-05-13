Stepper offers multiple properties that you can use to configure selection at runtime:

- [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanged/)    
A function that is called after selection has changed.
- [onSelectionChanging](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanging/)    
A function that is called before selection changes.
- [selectedIndex](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedIndex/)    
The selected item index.
- [selectedItem](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedItem/)    
The selected item object.

This tutorial uses **onSelectionChanged** to disable steps as users move through the component.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#stepper").dxStepper({
            // ...
            onSelectionChanged: ({ component, addedItems }) => {
                const items = component.option("items");
                const newIndex = items.findIndex(item => addedItems[0].label === item.label);
                component.option(`items[${newIndex - 1}].disabled`, true);
            },
        });
    });


##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper (onSelectionChanged)="onSelectionChanged($event)">
        // ...
    </dx-stepper>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        // ...
    })
    export class AppComponent {
        onSelectionChanged(e: DxStepperTypes.SelectionChangedEvent) {
            const newItem = e.addedItems[0];
            const items = e.component.option('items');
            const newIndex = items.findIndex((item) => newItem.label === item.label);
            e.component.option(`items[${newIndex - 1}].disabled`, true);
        }
    }


##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
        // ...
        const onSelectionChanged = (e: DxStepperTypes.SelectionChangedEvent) => {
            const newItem = e.addedItems[0];
            const items = e.component.option('items');
            const newIndex = items.findIndex((item) => newItem.label === item.label);
            e.component.option(`items[${newIndex - 1}].disabled`, true);
        };
    </script>
    <template>
        <DxStepper @selection-changed="onSelectionChanged">
            <!-- ... -->
        </DxStepper>
    </template>


##### React

    <!-- tab: App.tsx -->
    const onSelectionChanged = (e: StepperTypes.SelectionChangedEvent) => {
        const newItem = e.addedItems[0];
        const items = e.component.option('items');
        const newIndex = items.findIndex((item: StepperTypes.Item) => newItem.label === item.label);
        e.component.option(`items[${newIndex - 1}].disabled`, true);
    };

    export default function App(): JSX.Element {
        return (
            <Stepper onSelectionChanged={onSelectionChanged}>
                // ...
            </Stepper>
        );
    }


---