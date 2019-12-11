---
EventForAction: ..\4 Events\rowCollapsing.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowCollapsing** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): Boolean
Indicates whether to cancel collapsing the row.

---
Assign a function to perform a custom action before a master or group row is collapsed in the grid. For instance, you can prevent collapsing by setting the **cancel** field of the object passed as the handler's parameter to *true*.