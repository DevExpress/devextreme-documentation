---
id: dxChart.Options.onArgumentAxisClick
type: function(e) | String
default: null
EventForAction: dxChart.argumentAxisClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [label](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/') on the [argument axis](/concepts/05%20Widgets/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Axes/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.argument): Date | Number | String
The clicked label's value.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

---
