---
type: event
---
---
##### shortDescription
Fires after an appointment is rendered.

##### param(e): object
Provides function parameters.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): object
The data that is bound to the initial appointment.

##### field(e.targetedAppointmentData): object
The data that is bound to the appointment to be rendered.

##### field(e.appointmentElement): jQuery
An HTML element of the appointment.

---
Instead, you can use the [onAppointmentRendered](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentRendered.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentRendered') option to handle the event.

In case of recurring appointments or appointments with multiple resources, you may want to obtain information about the appointment to be rendered, not the initial appointment. For this purpose, use the **targetedAppointmentData** field of the function parameter. Otherwise, use the **appointmentData** field.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')