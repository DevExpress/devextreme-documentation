
---

##### jQuery

To synchronize the **selectedIndex** properties of Stepper and MultiView, create a new function, `setSelectedIndex`. Call it in the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanged) function of Stepper and the [onClick]() functions of both navigation buttons:

    <!-- tab: index.js -->
    const stepper = $('#stepper').dxStepper({
        // ...
        onSelectionChanged(e) {
            const selectedIndex = e.component.option('selectedIndex');

            setSelectedIndex(selectedIndex);
        },
    }).dxStepper('instance');

    const prevButton = $('#prevButton').dxButton({
        // ...
        onClick: () => {
            const selectedIndex = stepper.option('selectedIndex');

            setSelectedIndex(selectedIndex - 1);
        },
        visible: false,
    }).dxButton('instance');

    const nextButton = $('#nextButton').dxButton({
        // ...
        onClick: () => {
            const selectedIndex = stepper.option('selectedIndex');

            if (selectedIndex < steps.length - 1) {
                setSelectedIndex(selectedIndex + 1);
            }
        },
    }).dxButton('instance');

    function setSelectedIndex(index) {
        stepper.option('selectedIndex', index);
        stepContent.option('selectedIndex', index);
        setCurrentStepCaption(index);
        updateStepNavigationButtons(index);
        
        if (index === steps.length - 1) {
            stepContent.option('items[4].template', getConfirmationTemplate());
        }
    }

`setSelectedIndex` also updates the navigation panel with `updateStepNavigationButtons` and `setCurrentStepCaption`.

`setCurrentStepCaption` updates the active step indicator as users progress through the Stepper:

    <!-- tab: index.js -->
    let confirmed = false;

    function setCurrentStepCaption(index) {
        if (confirmed) {
            $('.current-step').empty();
        } else if (!$('.current-step').text()) {
            $('.current-step').append(`Step <span class="selected-index">${index + 1}</span> of <span class="step-count">${steps.length}</span>`);
        } else {
            $('.selected-index').text(index + 1);
        }
    }

`updateStepNavigationButtons` displays the "Back" button on the second step. On the last step, the "Next" button changes to "Confirm". When clicked, the "Confirm" button does the following:

- Submits the form.
- Hides the "Back" button.
- Hides the active step indicator.
- Replaces "Confirm" with "Reset".
- Disables Stepper interactions.

To learn how to disable Stepper interactions, refer to the [Configure a Readonly Stepper](/Documentation/Guide/UI_Components/Stepper/Configure_a_Read-Only_Stepper/) help topic.

    <!-- tab: index.js -->
    const nextButton = $('#nextButton').dxButton({
        onClick: () => {
            if (selectedIndex < steps.length - 1) {
                setSelectedIndex(selectedIndex + 1);
            } else if (confirmed) {
                reset();
            } else {
                confirm();
            }
        }
    })

    function reset() {
        confirmed = false;
        setSelectedIndex(0);
        // ...
    }

    function confirm() {
        confirmed = true;
        setSelectedIndex(steps.length - 1);
        // ...
    }

    function updateStepNavigationButtons(index) {
        const isLastStep = index === steps.length - 1;
        const lastStepNextButtonText = confirmed ? 'Reset' : 'Confirm';
        const nextButtonText = isLastStep ? lastStepNextButtonText : 'Next';

        prevButton.option('visible', !!index && !confirmed);
        nextButton.option('text', nextButtonText);
    }

    function setStepperReadonly(readonly) {
        stepper.option('focusStateEnabled', !readonly);
        
        if (readonly) {
            stepper.option('elementAttr', { class: 'readonly' });
        } else {
            stepper.resetOption('elementAttr');
        }
    }

    <!-- tab: styles.css -->
    .readonly {
        pointer-events: none;
    }

##### Angular

To synchronize the **selectedIndex** properties of Stepper and MultiView, assign them to a common variable with two-way data binding syntax:

    <!-- tab: app.component.html -->
    <dx-stepper ...
        [(selectedIndex)]="selectedIndex"
    >
        <!-- ... -->
    </dx-stepper>
    <div class="content">
        <dx-multi-view ...
            [(selectedIndex)]="selectedIndex"
        >
            <!-- ... -->
        </dx-multi-view>
        <!-- ... -->
    </div>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        selectedIndex: number;

        constructor(private readonly appService: AppService) {
            // ...
            this.selectedIndex = 0;
        }
    }

This example utilizes the `selectedIndex` variable in multiple places to implement navigation panel functionality:

- The `onPrevButtonClick` and `onNextButtonClick` handlers move to the previous/next step by modifying `selectedIndex`.
- The `getNextButtonText` function changes the text of the "Next" button to "Confirm" on the last step.

When clicked, the "Confirm" button sets the `isConfirmed` Boolean to `true` and does the following:

- Submits the form.
- Hides the "Back" button.
- Hides the active step indicator.
- Replaces "Confirm" with "Reset".
- Disables Stepper interactions.

To learn how to disable Stepper interactions, refer to the [Configure a Readonly Stepper](/Documentation/Guide/UI_Components/Stepper/Configure_a_Read-Only_Stepper/) help topic.

    <!-- tab: app.component.html -->
    <!-- ... -->
    <div class="nav-panel">
        <div class="current-step">
            <span *ngIf="!isConfirmed">
                Step <span class="selected-index">{{ selectedIndex + 1 }}</span> of <span class="step-count">{{ steps.length }}</span>
            </span>
        </div>
        <div class="nav-buttons">
            <dx-button ...
                id="prevButton"
                [visible]="selectedIndex !== 0 && !isConfirmed"
                (onClick)="onPrevButtonClick($event)"
            ></dx-button>
            <dx-button ...
                id="nextButton"
                [text]="getNextButtonText()"
                (onClick)="onNextButtonClick($event)"
            >
            </dx-button>
        </div>
    </div>

    <!-- tab: app.component.ts -->
    // ...
    export class AppComponent {
        // ...
        isConfirmed: boolean;

        constructor(private readonly appService: AppService) {
            // ...
            this.isConfirmed = false;
        }

        getNextButtonText() {
            if (this.selectedIndex < this.steps.length - 1) {
                return 'Next';
            }

            return this.isConfirmed ? 'Reset' : 'Confirm';
        }

        onPrevButtonClick() {
            this.selectedIndex -= 1;
        }

        moveNext() {
            this.selectedIndex += 1;
        }

        reset(){
            this.isConfirmed = false;
            this.selectedIndex = 0;
            // ...
        }

        confirm(){
            this.isConfirmed = true;
        }

        onNextButtonClick() {
            if (this.selectedIndex < this.steps.length - 1) {
                this.moveNext();
            } else if (this.isConfirmed) {
                this.reset();
            } else {
                this.confirm();
            }
        }
    }

##### Vue

To synchronize the **selectedIndex** properties of Stepper and MultiView, assign them to a common variable using the `v-model` directive:

    <!-- tab: App.vue -->
    <template>
        <DxStepper ...
            v-model:selected-index="selectedIndex"
        >
            <DxStepperItem ... />
        </DxStepper>
        <div class="content">
            <DxMultiView ...
                v-model:selected-index="selectedIndex"
            >
                <!-- ... -->
            </DxMultiView>
            <!-- ... -->
        </div>
    </template>

    <script setup lang="ts">
    const selectedIndex = ref(0);

    // ...
    </script>

This example utilizes the `selectedIndex` variable in multiple places to implement navigation panel functionality:

- The `onPrevButtonClick` and `onNextButtonClick` handlers move to the previous/next step by modifying `selectedIndex`.
- The `nextButtonText` function changes the text of the "Next" button to "Confirm" on the last step.

When clicked, the "Confirm" button sets the `isConfirmed` Boolean to `true` and does the following:

- Submits the form.
- Hides the "Back" button.
- Hides the active step indicator.
- Replaces "Confirm" with "Reset".
- Disables Stepper interactions.

To learn how to disable Stepper interactions, refer to the [Configure a Readonly Stepper](/Documentation/Guide/UI_Components/Stepper/Configure_a_Read-Only_Stepper/) help topic.

    <!-- tab: App.vue -->
    <template>
        <!-- ... -->
        <div class="nav-panel">
            <div class="current-step">
                <span v-if="!isConfirmed">
                    Step <span class="selected-index">{{ selectedIndex + 1 }}</span> of <span class="step-count">{{ steps.length }}</span>
                </span>
            </div>
            <div class="nav-buttons">
                <DxButton ...
                    id="prevButton"
                    :visible="selectedIndex !== 0 && !isConfirmed"
                    @click="onPrevButtonClick"
                />
                <DxButton ...
                    id="nextButton"
                    :text="nextButtonText"
                    @click="onNextButtonClick"
                />
            </div>
        </div>
    </template>

    <script setup lang="ts">
    // ...
    const isConfirmed = ref(false);

    const nextButtonText = computed(() => {
        if (selectedIndex.value < steps.value.length - 1) {
            return 'Next';
        }

        return isConfirmed.value ? 'Reset' : 'Confirm';
    });

    function onPrevButtonClick() {
        selectedIndex.value -= 1;
    }

    const moveNext = () => {
        selectedIndex.value += 1;
    };

    const reset = () => {
        isConfirmed.value = false;
        selectedIndex.value = 0;
        // ...
    };

    const confirm = () => {
        isConfirmed.value = true;
    };

    function onNextButtonClick() {
        if (selectedIndex.value < steps.value.length - 1) {
            moveNext();
        } else if (isConfirmed.value) {
            reset();
        } else {
            confirm();
        }
    }
    </script>

##### React

To synchronize the **selectedIndex** properties of Stepper and MultiView, define a state variable (`selectedIndex`) using the `useState` hook in the `App` function. In the [onSelectionChanged](/Documentation/ApiReference/UI_Components/dxStepper/Configuration/#onSelectionChanged) event handler of Stepper, set the `selectedIndex` state variable to [SelectionChangedEvent](/Documentation/ApiReference/UI_Components/dxStepper/Types/SelectionChangedEvent/).**component**.**option('selectedIndex')**. Assign the [selectedIndex](/Documentation/ApiReference/UI_Components/dxMultiView/Configuration/#selectedIndex) property of MultiView to the `selectedIndex` state variable.  

    <!-- tab: App.tsx -->
    // ...
    export default function App () {
        const [selectedIndex, setSelectedIndex] = useState(0);

        const onSelectionChanged = useCallback(({ component }: SelectionChangedEvent) => {
            setSelectedIndex(component.option('selectedIndex') ?? 0);
        }, []);

        // ...
        return (
            <>
                <Stepper ...
                    selectedIndex={selectedIndex}
                    onSelectionChanged={onSelectionChanged}
                >
                    <!-- ... -->
                </Stepper>
                <div className="content">
                    <MultiView ...
                        selectedIndex={selectedIndex}
                    >
                        <!-- ... -->
                    </MultiView>
                    <!-- ... -->
                </div>
            </>
        )
    }

This example utilizes the `selectedIndex` variable in multiple places to implement navigation panel functionality:

- The `onPrevButtonClick` and `onNextButtonClick` handlers move to the previous/next step by modifying `selectedIndex`.
- The `nextButtonText` function changes the text of the "Next" button to "Confirm" on the last step.

When clicked, the "Confirm" button sets the `isConfirmed` Boolean to `true` and does the following:

- Submits the form.
- Hides the "Back" button.
- Hides the active step indicator.
- Replaces "Confirm" with "Reset".
- Disables Stepper interactions.

To learn how to disable Stepper interactions, refer to the [Configure a Readonly Stepper](/Documentation/Guide/UI_Components/Stepper/Configure_a_Read-Only_Stepper/) help topic.

    <!-- tab: App.tsx -->
    // ...
    export default function App () {
        const [isConfirmed, setIsConfirmed] = useState(false);

        const nextButtonText = useMemo(() => {
            if (selectedIndex < steps.length - 1) {
                return 'Next';
            }

            if (isConfirmed) {
                return 'Reset';
            }

            return 'Confirm';
        }, [selectedIndex, isConfirmed]);

        const onPrevButtonClick = useCallback(() => {
            setSelectedIndex((prev) => prev - 1);
        }, []);

        const moveNext = useCallback(() => {
            setSelectedIndex(selectedIndex + 1);
        }, [selectedIndex]);

        const onConfirm = useCallback(() => {
            setIsConfirmed(true);
            // ...
        }, []);

        const onReset = useCallback(() => {
            setIsConfirmed(false);
            setSelectedIndex(0);
            // ...
        }, []);

        const onNextButtonClick = useCallback(() => {
            if (selectedIndex < initialSteps.length -1) {
                moveNext();
            } else if (isConfirmed) {
                onReset();
            } else {
                onConfirm();
            }
        }, [selectedIndex, isConfirmed, onConfirm, onReset]);

        // ...
        return (
            <>
                <!-- ... -->
                <div className="nav-panel">
                    <div className="current-step">
                        {!isConfirmed && (
                        <>
                            Step <span className="selected-index">{selectedIndex + 1}</span> of <span className="step-count">{steps.length}</span>
                        </>
                        )}
                    </div>

                    <div className="nav-buttons">
                        <Button ...
                            id="prevButton"
                            onClick={onPrevButtonClick}
                            visible={selectedIndex !== 0 && !isConfirmed}
                        />
                        <Button ...
                            id="nextButton"
                            text={nextButtonText}
                            onClick={onNextButtonClick}
                        />
                    </div>
                </div>
            </>
        )
    }

---
