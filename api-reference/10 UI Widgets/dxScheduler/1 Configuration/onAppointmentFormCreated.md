---
EventForAction: ..\4 Events\appointmentFormCreated.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [appointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentFormCreated') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.appointmentData): Object
The data of the appointment for which a form is created.

##### field(e.form): dxForm
The form's [configuration](/api-reference/10%20UI%20Widgets/dxForm/1%20Configuration '/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/').

---
Assign a function to perform a custom action after an edit form has been created for an appointment.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=aWiCUyPKL_k&index=8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>