---
EventForAction: ..\4 Events\appointmentAdding.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **AppointmentAdding** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): Object
The appointment object to be added to the data source.

##### field(e.cancel): Boolean|Promise
A flag allowing you to prevent the appointment from being added. This field accepts a Boolean value or Promise. If you pass Promise to this field, appointment adding is continued or canceled once Promise has been resolved.

---
Assign a function to perform a custom action before an appointment is added to the widget's data source.