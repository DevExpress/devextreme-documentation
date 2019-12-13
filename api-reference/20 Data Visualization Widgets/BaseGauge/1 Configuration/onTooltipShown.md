---
id: BaseGauge.Options.onTooltipShown
type: function(e)
default: null
EventForAction: BaseGauge.tooltipShown
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a tooltip appears.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): Object
Information on the (sub)value indicator being pressed or hovered over with the mouse pointer. Contains the **type** (*"value-indicator"* or *"subvalue-indicator"*) and **index** (**undefined** for value indicators) fields.

---
