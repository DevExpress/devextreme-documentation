---
type: event
---
---
##### shortDescription
Fires before an appointment is updated in the data source.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.oldData): Object
The appointment object to be updated in the data source.

##### field(e.newData): Object
The appointment object containing new values for the specified appointment.

##### field(e.cancel): Boolean|Promise
A flag allowing you to prevent the appointment from being updated in the data source.

---
Instead, you can use the [onAppointmentUpdating](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onAppointmentUpdating.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onAppointmentUpdating') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')