---
EventForAction: ..\4 Events\appointmentAdding.md
default: null
type: function
---
---
##### shortDescription
A handler for the **AppointmentAdding** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): Object
The appointment object to be added to the data source.

##### field(e.cancel): Boolean|Promise
A flag allowing you to prevent the appointment from being added. This field accepts a Boolean value or Promise. If you pass Promise to this field, appointment adding is continued or canceled once Promise has been resolved.

---
Assign a function to perform a custom action before an appointment is added to the widget's data source.