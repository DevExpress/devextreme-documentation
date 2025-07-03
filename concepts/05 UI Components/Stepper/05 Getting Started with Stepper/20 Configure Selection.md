The following Stepper properties allow you to configure selection at runtime:

- [onSelectionChanged](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/onSelectionChanged.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanged/')    
A function that is called after selection has changed.
- [onSelectionChanging](/api-reference/10%20UI%20Components/dxStepper/1%20Configuration/onSelectionChanging.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanging/')    
A function that is called before selection changes.
- [selectedIndex](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedIndex.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedIndex/')    
The selected item index.
- [selectedItem](/api-reference/10%20UI%20Components/CollectionWidget/1%20Configuration/selectedItem.md '/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#selectedItem/')    
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
    <dx-stepper 
        [items]="steps"
        (onSelectionChanged)="onSelectionChanged($event)">
        // ...
    </dx-stepper>

    <!-- tab: app.component.ts -->
    // ...

    @Component({
        // ...
    })
    export class AppComponent {
        onSelectionChanged(e: DxStepperTypes.SelectionChangedEvent): void {
            const newItem = e.addedItems[0];
            const newIndex = this.steps.findIndex(item => item.label === newItem.label);

            if (newIndex > 0 && !this.steps[newIndex - 1].disabled) {
                this.steps[newIndex - 1].disabled = true;
            }
        }
    }


##### Vue

    <!-- tab: App.vue -->
    <script setup lang="ts">
        // ...
        const onSelectionChanged = (e: DxStepperTypes.SelectionChangedEvent) => {
            const newItem = e.addedItems[0];
            const newIndex = items.findIndex((item) => item.label === newItem.label);
            if (newIndex > 0) {
                items[newIndex - 1].disabled = true;
            }
        };
    </script>
    <template>
        <DxStepper ref="stepperRef" @selection-changed="onSelectionChanged">
            <!-- ... -->
        </DxStepper>
    </template>


##### React

    <!-- tab: App.tsx -->
    // ...

    export default function App(): JSX.Element {
        // ...

        function onSelectionChanged(e: StepperTypes.SelectionChangedEvent): void {
            const newItem = e.addedItems[0];
            const newIndex = steps.findIndex((item) => item.label === newItem.label);

            if (newIndex > 0 && !steps[newIndex - 1].disabled) {
                const updated = [...steps];
                updated[newIndex - 1] = { ...updated[newIndex - 1], disabled: true };
                setSteps(updated);
            }
        }

        return (
            <Stepper onSelectionChanged={onSelectionChanged}>
                // ...
            </Stepper>
        );
    }


---