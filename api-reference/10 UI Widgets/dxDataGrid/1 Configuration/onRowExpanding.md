---
EventForAction: ..\4 Events\rowExpanding.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowExpanding** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): boolean
Indicates whether to cancel expanding the row.

---
Assign a function to perform a custom action before a master or group row is expanded in the grid. For instance, you can prevent expanding by setting the **cancel** field of the object passed as the handler's parameter to *true*.