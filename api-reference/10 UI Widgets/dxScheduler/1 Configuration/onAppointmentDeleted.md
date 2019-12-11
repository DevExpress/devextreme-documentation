---
EventForAction: ..\4 Events\appointmentDeleted.md
default: null
type: function
---
---
##### shortDescription
A handler for the **appointmentDeleted** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxScheduler/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): Object
The appointment object deleted from the data source.

##### field(e.error): JavaScript Error object
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.

---
Assign a function to perform a custom action after an appointment has been deleted from the widget's data source.