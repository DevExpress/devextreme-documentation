This tutorial demonstrates one of the approaches of creating wizard-like applications with Stepper. The created application integrates the [Form](/Documentation/Guide/UI_Components/Form/Overview/) and [MultiView](/Documentation/Guide/UI_Components/MultiView/Overview/) components.

This wizard includes three key parts:

- The Stepper component.
- Step content where the MultiView component shows content for each step. Every view with input fields contains a Form.
- A navigation panel with an active step caption ("Step 1 of 5") and buttons for moving between steps ("Next" and "Back").

Image, TBA 

To view the complete code of this example, refer to the following demo:

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Stepper/FormIntegration/",
    name: "Stepper - Form Integration"
}