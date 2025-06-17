To configure validation, assign [validation groups](/Documentation/ApiReference/UI_Components/dxValidationGroup/) and specify [validation rules](/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/) in each MultiView form:

---

##### jQuery

    <!-- tab: index.js -->
    const validationGroups = ['dates', 'guests', 'roomAndMealPlan'];

    function getDatesForm() {
        return () => $('<div>').append(
            // ...
            $('<div>').dxForm({
                // ...
                validationGroup: validationGroups[0],
                items: [{
                    // ...
                    isRequired: true,
                }],
            }),
        );
    }

##### Angular

    <!-- tab: dates-form.component.html -->
    <!-- ... -->
    <dx-form ... 
        [validationGroup]="validationGroup"
    >
        <dxi-form-item ...
            [isRequired]="true"
        ></dxi-form-item>
    </dx-form>

    <!-- tab: dates-form.component.ts -->
    // ...
    export class DatesFormComponent {
        @Input() validationGroup: string;
    }

    <!-- tab: app.component.html -->
    <!-- ... -->
    <div class="content">
        <dx-multi-view ... >
            <dxi-multi-view-item>
                <div *dxTemplate>
                    <dates-form ...
                        [validationGroup]="validationGroups[0]"
                    ></dates-form>
                </div>
            </dxi-multi-view-item>
            <!-- ... -->
        </dx-multi-view>
        <!-- ... -->
    </div>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        validationGroups = ['dates', 'guests', 'roomAndMealPlan'];
    }

##### Vue

    <!-- tab: DatesTemplate.vue -->
    <template>
        <!-- ... -->
        <DxForm ...
            :validation-group="validationGroup"
        >
            <DxSimpleItem ...
                :is-required="true"
            />
        </DxForm>
    </template>

    <script setup lang="ts">
    import DxForm, { DxSimpleItem } from 'devextreme-vue/form';

    // ...
    const props = withDefaults(defineProps<{
        // ...
        validationGroup?: string;
    }>(), {
        // ...
        validationGroup: () => undefined,
    });
    </script>

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
        <div class="content">
            <DxMultiView ... >
                <DxMultiViewItem>
                    <template #default>
                        <DatesTemplate ...
                            :validation-group="validationGroups[0]"
                        />
                    </template>
                </DxMultiViewItem>
                <!-- ... -->
            </DxMultiView>
            <!-- ... -->
        </div>
    </template>

    <script setup lang="ts">
    const validationGroups = ['dates', 'guests', 'roomAndMealPlan'];

    // ...
    </script>

##### React

    <!-- tab: DatesForm.tsx -->
    import { Form, SimpleItem } from 'devextreme-react/form';

    // ...
    const DatesForm: FC<FormProps> = memo(({ formData, validationGroup }) => (
        <>
            <p><!-- ... --></p>
            <Form ...
                validationGroup={validationGroup}
            >
                <SimpleItem ...
                    isRequired
                />
            </Form>
        </>
    ));

    <!-- tab: App.tsx -->
    // ...
    const validationGroups = ['dates', 'guests', 'roomAndMealPlan'];

    export default function App () {
        const renderDatesForm = useCallback(() => {
            return <DatesForm validationGroup={validationGroups[0]} ... />;
        }, [formData]);
        // ...
    }

---

This tutorial validates steps only when users move forward. If a step fails validation, the step change is cancelled:

---

##### jQuery

    <!-- tab: index.js -->
    const stepper = $('#stepper').dxStepper({
        // ...
        onSelectionChanging(args) {
            const { component, addedItems, removedItems } = args;
            const { items = [] } = component.option();

            const addedIndex = items.findIndex((item) => item === addedItems[0]);
            const removedIndex = items.findIndex((item) => item === removedItems[0]);
            const isMoveForward = addedIndex > removedIndex;

            if (isMoveForward && validateStep(removedIndex) === false) {
                args.cancel = true;
            }
        },
    }).dxStepper('instance');

    const nextButton = $('#nextButton').dxButton({
        // ...
        onClick: () => {
            // ...
            if (selectedIndex < steps.length - 1) {
                if (validateStep(selectedIndex)) {
                    setSelectedIndex(selectedIndex + 1);
                }
            }
            // ...
        }
    })

    function validateStep(index) {
        const isValid = getValidationResult(index);

        stepper.option(`items[${index}].isValid`, isValid);

        return isValid;
    }

    function getValidationResult(index) {
        if (index >= validationGroups.length) {
            return true;
        }

        return DevExpress.validationEngine.validateGroup(validationGroups[index]).isValid;
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-stepper ...
        (onSelectionChanging)="onSelectionChanging($event)"
    >
        <!-- ... -->
    </dx-stepper>

    <!-- tab: app.component.ts -->
    import validationEngine from 'devextreme/ui/validation_engine';

    // ...
    export class AppComponent {
        onSelectionChanging(e: SelectionChangingEvent) {
            if (this.isConfirmed) {
                e.cancel = true;

                return;
            }

            const { component, addedItems, removedItems } = e;
            const { items = [] } = component.option();

            const addedIndex = items.findIndex((item: Item) => item === addedItems[0]);
            const removedIndex = items.findIndex((item: Item) => item === removedItems[0]);
            const isMoveForward = removedIndex > -1 && addedIndex > removedIndex;

            if (isMoveForward) {
                const isValid = this.getValidationResult(removedIndex);

                this.setStepValidationResult(removedIndex, isValid);

                if (isValid === false) {
                    e.cancel = true;
                }
            }
        }

        moveNext() {
            const isValid = this.getValidationResult(this.selectedIndex);

            this.setStepValidationResult(this.selectedIndex, isValid);

            if (isValid) {
                this.selectedIndex += 1;
            }
        }

        getValidationResult(index: number){
            if (index >= this.validationGroups.length) {
                return true;
            }

            return validationEngine.validateGroup(this.validationGroups[index]).isValid;
        }

        setStepValidationResult(index: number, isValid: boolean | undefined){
            this.steps[index].isValid = isValid;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxStepper ...
            @selection-changing="onSelectionChanging"
        >
            <!-- ... -->
        </DxStepper>
        <!-- ... -->
    </template>

    <script setup lang="ts">
    import validationEngine from 'devextreme/ui/validation_engine';

    // ...
    function onSelectionChanging(e: SelectionChangingEvent) {
        if (isConfirmed.value) {
            e.cancel = true;

            return;
        }

        const { component, addedItems, removedItems } = e;
        const { items = [] } = component.option();

        const addedIndex = items.findIndex((item: IItemProps) => item === addedItems[0]);
        const removedIndex = items.findIndex((item: IItemProps) => item === removedItems[0]);
        const isMoveForward = addedIndex > removedIndex;

        if (isMoveForward) {
            const isValid = getValidationResult(removedIndex);

            setStepValidationResult(removedIndex, isValid);

            if (isValid === false) {
                e.cancel = true;
            }
        }
    }

    const moveNext = () => {
        const isValid = getValidationResult(selectedIndex.value);

        setStepValidationResult(selectedIndex.value, isValid);

        if (isValid) {
            selectedIndex.value += 1;
        }
    };

    const getValidationResult = (index: number) => {
        if (index >= validationGroups.length) {
            return true;
        }

        return validationEngine.validateGroup(validationGroups[index]).isValid;
    };

    const setStepValidationResult = (index: number, isValid: boolean | undefined) => {
        steps.value[index].isValid = isValid;
    };
    </script>

##### React

    <!-- tab: App.tsx -->
    import validationEngine from 'devextreme/ui/validation_engine';

    // ...
    export default function App () {
        const onSelectionChanging = useCallback((args: SelectionChangingEvent) => {
            if (isConfirmed) {
                args.cancel = true;

                return;
            }

            const { component, addedItems, removedItems } = args;
            const { items = [] } = component.option();

            const addedIndex = items.findIndex((item: IItemProps) => item === addedItems[0]);
            const removedIndex = items.findIndex((item: IItemProps) => item === removedItems[0]);
            const isMoveForward = addedIndex > removedIndex;

            if (isMoveForward) {
                const isValid = getValidationResult(removedIndex);

                setStepValidationResult(removedIndex, isValid);

                if (isValid === false) {
                    args.cancel = true;
                }
            }
        }, [setStepValidationResult, isConfirmed]);

        const moveNext = useCallback(() => {
            const isValid = getValidationResult(selectedIndex);

            setStepValidationResult(selectedIndex, isValid);

            if (isValid){
                setSelectedIndex(selectedIndex + 1);
            }
        }, [selectedIndex]);

        const getValidationResult = useCallback((index: number) => {
            if (index >= validationGroups.length) {
                return true;
            }

            return validationEngine.validateGroup(validationGroups[index]).isValid;
        }, []);

        const setStepValidationResult = useCallback((index: number, isValid: boolean | undefined) => {
            setSteps((prev) => prev.map((step, i) => {
                if (i === index) {
                    return {
                        ...step,
                        isValid,
                    }
                }

                return step;
            }));
        }, []);

        return (
            <>
                <Stepper ...
                    onSelectionChanging={onSelectionChanging}
                >
                    <!-- ... -->
                </Stepper>
            </>
        )
    }

---

Review the full code of this tutorial in the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/",
    name: "Stepper - Form Integration"
}