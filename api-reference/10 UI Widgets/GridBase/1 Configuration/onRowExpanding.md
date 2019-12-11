---
EventForAction: ..\4 Events\rowExpanding.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowExpanding** event. Executed before a row is expanded.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.key): any
The key of the group or master row.

##### field(e.cancel): Boolean
Allows you to cancel row expansion.

---
To cancel row expansion, assign **true** to the **cancel** field of the handler parameter.