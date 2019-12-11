---
EventForAction: ..\4 Events\rowExpanded.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowExpanded** event.

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

---
Assign a function to perform a custom action after a master or group row is expanded in the grid.