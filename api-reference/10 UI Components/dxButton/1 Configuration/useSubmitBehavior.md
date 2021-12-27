---
id: dxButton.Options.useSubmitBehavior
type: Boolean
default: false
---
---
##### shortDescription
Specifies whether the button submits an HTML form.

---
If this property is set to **true**, users can click the button to validate the [validation group](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/validationGroup.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#validationGroup') and submit the HTML form. If the group contains [async rules](/api-reference/10%20UI%20Components/dxValidator/8%20Validation%20Rules/AsyncRule '/Documentation/ApiReference/UI_Components/dxValidator/Validation_Rules/AsyncRule/'), the form is not submitted until they are checked.

If the [onClick](/api-reference/10%20UI%20Components/dxButton/1%20Configuration/onClick.md '/Documentation/ApiReference/UI_Components/dxButton/Configuration/#onClick') event handler is specified, it is executed before validation and form submission.

You cannot call the [preventDefault()](/Documentation/ApiReference/Common/Object_Structures/EventObject/Methods/#preventDefault) method inside the **onClick** function. Handle a form's [submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit_event) event to prevent the form submission.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Validation/Overview/"
}
