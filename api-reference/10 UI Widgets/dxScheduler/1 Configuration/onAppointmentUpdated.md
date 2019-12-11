---
EventForAction: ..\4 Events\appointmentUpdated.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **appointmentUpdated** event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): Object
The appointment object updated in the data source.

##### field(e.error): JavaScript Error object
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object that defines the occurred error.

---
Assign a function to perform a custom action after an appointment has been updated in the widget's data source.