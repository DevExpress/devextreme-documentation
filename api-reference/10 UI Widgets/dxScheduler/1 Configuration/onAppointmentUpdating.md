---
EventForAction: ..\4 Events\appointmentUpdating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **AppointmentUpdating** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.oldData): Object
The appointment object to be updated in the data source.

##### field(e.newData): Object
The appointment object containing new values for the specified appointment.

##### field(e.cancel): Boolean|Promise
A flag that allows you to prevent an appointment from being updated. This field accepts a Boolean value or Promise. If you pass Promise to this field, the appointment updating is continued or canceled once Promise has been resolved.

---
Assign a function to perform a custom action before an appointment is updated in the widget's data source.