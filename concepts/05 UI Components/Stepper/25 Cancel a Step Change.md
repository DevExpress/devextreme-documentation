You can cancel a step change in the Stepper [onSelectionChanging](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanging) event handler. To do this, assign a Boolean value or Promise that returns a Boolean to [SelectionChangingEvent](/Documentation/ApiReference/UI_Components/dxStepper/Types/SelectionChangingEvent/).[cancel](/Documentation/ApiReference/UI_Components/dxStepper/Types/SelectionChangingEvent/#cancel). The code snippet below implements a DevExtreme [confirm](/Documentation/ApiReference/Common/Utils/ui/dialog/#confirmmessageHtml_title) dialog that asks users for confirmation before moving the component's selected step back.

---

##### jQuery

    <!-- tab: index.js -->
    $("#stepper").dxStepper({
        // ...
        onSelectionChanging: function (e) {
            const { component, addedItems, removedItems } = e;
            const { items = [] } = component.option();

            const removedIndex = items.findIndex((item) => item === removedItems[0]);
            const addedIndex = items.findIndex((item) => item === addedItems[0]);

            const isMoveForward = addedIndex > removedIndex;

            if (!isMoveForward) {
                e.cancel = DevExpress.ui.dialog
                    .confirm(`<div>Are you sure you want to go back?</div>`. "")
                    .then((isChangeConfirmed) => {
                        return !isChangeConfirmed;
                    });
            }
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper (onSelectionChanging)="handleSelectionChanging($event)" >
        <dxi-stepper-item
            *ngFor="let step of steps"
            [label]="step.label"
            [icon]="step.icon"
            [optional]="step.optional"
        ></dxi-stepper-item>
    </dx-stepper>

    <!-- tab: app.component.ts -->
    import { DxStepperModule } from 'devextreme-angular';
    import { DxStepperTypes } from "devextreme-angular/ui/stepper";
    import { confirm } from 'devextreme/ui/dialog';

    // ...
    export class AppComponent {
        handleSelectionChanging(e: DxStepperTypes.SelectionChangingEvent) {
            const { component, addedItems, removedItems } = e;
            const { items = [] } = component.option();

            const removedIndex = items.findIndex((item) => item === removedItems[0]);
            const addedIndex = items.findIndex((item) => item === addedItems[0]);

            const isMoveForward = addedIndex > removedIndex;
            if (!isMoveForward) {
                e.cancel = confirm(`<div>Are you sure you want to go back?</div>`, '')
                    .then((isConfirmed) => {
                        return !isConfirmed;
                    });
            }
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <script setup>
    import { DxStepper, DxItem, DxStepperTypes } from "devextreme-vue/stepper"
    import { confirm } from 'devextreme/ui/dialog';

    function handleSelectionChanging(e: DxStepperTypes.SelectionChangingEvent) {
        const { component, addedItems, removedItems } = e;
        const { items = [] } = component.option();

        const removedIndex = items.findIndex((item) => item === removedItems[0]);
        const addedIndex = items.findIndex((item) => item === addedItems[0]);

        const isMoveForward = addedIndex > removedIndex;
        if (!isMoveForward) {
            e.cancel = confirm(`<div>Are you sure you want to go back?</div>`, '')
                .then((isConfirmed) => {
                    return !isConfirmed;
                });
        }
    }
    </script>

    <template>
        <DxStepper @selection-changing="handleSelectionChanging">
            <DxItem v-for="step in steps"/>
        </DxStepper>
    </template>

##### React

    <!-- tab: App.tsx -->
    import { Stepper, Item, type StepperTypes } from 'devextreme-react/stepper';
    import { confirm } from 'devextreme/ui/dialog';

    function App() {
        function handleSelectionChanging(e: StepperTypes.SelectionChangingEvent) {
            const { component, addedItems, removedItems } = e;
            const { items = [] } = component.option();

            const removedIndex = items.findIndex((item) => item === removedItems[0]);
            const addedIndex = items.findIndex((item) => item === addedItems[0]);

            const isMoveForward = addedIndex > removedIndex;
            if (!isMoveForward) {
                e.cancel = confirm(`<div>Are you sure you want to go back?</div>`, "")
                    .then((isConfirmed) => {
                        return !isConfirmed;
                    });
            }
        }

        return (
            <>
                <Stepper onSelectionChanging={handleSelectionChanging}>
                    {steps.map((step, index) => (
                        <Item
                            key={index}
                            label={step.label}
                            icon={step.icon}
                            optional={step.optional}
                        />
                    ))}
                </Stepper>
            </>
        )
    }

---

[note] Configure Stepper with unique [items](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/items/) objects to ensure the [findIndex](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) method always returns correct indexes.