---
EventForAction: ..\4 Events\appointmentFormCreated.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [appointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/appointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#appointmentFormCreated') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The object associated with the appointment for which a form is created.

##### field(e.form): Object
An instance of the <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxForm">Form</a> widget used to edit the appointment details.

---
Assign a function to perform a custom action after an edit form has been created for an appointment.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/CustomTemplates/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=aWiCUyPKL_k&index=8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>