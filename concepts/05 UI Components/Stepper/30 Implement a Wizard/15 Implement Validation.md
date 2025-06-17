To configure validation, assign [validation groups]() and specify [validation rules]() in each MultiView form:

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

---

Implement validation in the `onClick` function of the "Next" button:

---

##### jQuery

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

---

Review the full code of this tutorial in the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/",
    name: "Stepper - Form Integration"
}