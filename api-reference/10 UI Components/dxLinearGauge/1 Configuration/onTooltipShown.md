---
id: dxLinearGauge.Options.onTooltipShown
type: function(e)
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): viz/linear_gauge:TooltipShownEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): any
Information on the (sub)value indicator being pressed or hovered over with the mouse pointer. Contains the **type** (*"value-indicator"* or *"subvalue-indicator"*) and **index** (**undefined** for value indicators) fields.

---
<!-- Description goes here -->