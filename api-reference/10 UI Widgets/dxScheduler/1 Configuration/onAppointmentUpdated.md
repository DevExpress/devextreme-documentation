---
EventForAction: ..\4 Events\appointmentUpdated.md
default: null
type: function
---
---
##### shortDescription
A handler for the **appointmentUpdated** event.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.appointmentData): Object
The appointment object updated in the data source.

##### field(e.error): JavaScript Error object
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.

---
Assign a function to perform a custom action after an appointment has been updated in the widget's data source.