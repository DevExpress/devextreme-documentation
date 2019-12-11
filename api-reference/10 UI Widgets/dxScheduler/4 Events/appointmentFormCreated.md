---
type: event
---
---
##### shortDescription
Fires after an edit form has been created for an appointment.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The object associated with the appointment for which a form is created.

##### field(e.form): Object
An instance of the <a href="Documentation/ApiReference/UI_Widgets/dxForm">dxForm</a> widget used to edit the appointment details.

---
Instead, you can use the [onAppointmentFormCreated](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentFormCreated.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentFormCreated') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')