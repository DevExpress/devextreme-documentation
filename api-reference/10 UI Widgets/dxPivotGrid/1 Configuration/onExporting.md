---
EventForAction: ..\4 Events\exporting.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exporting](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/exporting.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#exporting') event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.fileName): String
The name of the file to which grid data is about to be exported.

##### field(e.cancel): Boolean
Indicates whether or not to cancel exporting.

---
Assign a function to perform a custom action before exporting grid data.