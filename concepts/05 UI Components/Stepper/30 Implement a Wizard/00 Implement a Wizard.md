This tutorial uses a Stepper widget to create a wizard-like application. The created application integrates the [Form](/Documentation/Guide/UI_Components/Form/Overview/) and [MultiView](/Documentation/Guide/UI_Components/MultiView/Overview/) components.

This wizard includes three key parts:

1. The Stepper component.
2. Step content where the MultiView component shows content for each step. Every view with input fields contains a Form.
3. A navigation panel with an active step caption ("Step 1 of 5") and buttons for moving between steps ("Next" and "Back").

<img src="/images/Stepper/stepper-wizard.png" alt="Stepper wizard elements" style="width: 100%; margin:0px auto; display:block;" />

To view the complete code of this example, refer to the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/",
    name: "Stepper - Form Integration"
}