
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

The `updateStepNavigationButtons` function displays the "Back" button on the second step and changes the "Next" button to "Confirm" on the last step. The "Confirm" button submits the form and disables interaction with the Stepper. For more details, refer to the [Configure a Readonly Stepper](/Documentation/Guide/UI_Components/Stepper/Configure_a_Read-Only_Stepper/) help topic.

Both navigation buttons are also replaced with a "Reset" button when "Confirm" is clicked:

    <!-- tab: index.js -->
    let confirmed = false;

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

    function confirm() {
        confirmed = true;

        setStepperReadonly(true);
        setSelectedIndex(steps.length - 1);
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

To synchronize the **selectedIndex** properties of Stepper and MultiView, assign it to a a common variable with two-way data binding syntax:

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

---



---

##### jQuery

    

---

`setCurrentStepCaption` updates the active step indicator as users progress through the Stepper:

---

##### jQuery

    <!-- tab: index.js -->
    function setCurrentStepCaption(index) {
        if (confirmed) {
            $('.current-step').empty();
        } else if (!$('.current-step').text()) {
            $('.current-step').append(`Step <span class="selected-index">${index + 1}</span> of <span class="step-count">${steps.length}</span>`);
        } else {
            $('.selected-index').text(index + 1);
        }
    }

---
