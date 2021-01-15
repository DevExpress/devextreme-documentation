---
id: dxChart.Options.onArgumentAxisClick
type: function(e) | String
default: null
EventForAction: dxChart.argumentAxisClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [label](/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/) on the [argument axis](/Documentation/Guide/UI_Components/Chart/Axes/Overview/) is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.argument): Date | Number | String
The clicked label's value.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
