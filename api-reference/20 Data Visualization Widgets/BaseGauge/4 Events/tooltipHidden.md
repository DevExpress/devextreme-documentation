---
id: BaseGauge.tooltipHidden
type: eventType
notUsedInTheme: 
---
---
##### shortDescription
Raised when a tooltip becomes hidden.

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
Main article: [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/BaseGauge/1%20Configuration/onTooltipHidden.md '{basewidgetpath}/Configuration/#onTooltipHidden')

#####See Also#####
#include common-link-handleevents