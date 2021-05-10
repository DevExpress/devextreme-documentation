---
id: dxChart.Options.onArgumentAxisClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [label](/concepts/05%20UI%20Components/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/') on the [argument axis](/concepts/05%20UI%20Components/Chart/20%20Axes/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Axes/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.argument): Date | Number | String
The clicked label's value.

##### field(e.component): dxChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

---
