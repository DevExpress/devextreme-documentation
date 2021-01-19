---
id: dxButton.Options.useSubmitBehavior
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the button submits an HTML form.

---
If this option is set to **true**, users can click the button to validate the [validation group](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup') and submit the HTML form. If the group contains [async rules](/api-reference/10%20UI%20Widgets/dxValidator/8%20Validation%20Rules/AsyncRule '/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/AsyncRule/'), the form is not submitted until they are checked.

If the [onClick](/api-reference/10%20UI%20Widgets/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick') event handler is specified, it is executed before validation and form submission.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}
