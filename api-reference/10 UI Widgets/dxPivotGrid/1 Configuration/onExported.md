---
EventForAction: ..\4 Events\exported.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [exported](/api-reference/10%20UI%20Widgets/dxPivotGrid/4%20Events/exported.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Events/#exported') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance"></a> instance.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

---
Assign a function to perform a custom action after the exporting of grid data is completed.