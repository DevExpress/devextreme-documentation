---
id: dxPieChart.Options.onLegendClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20UI%20Components/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/PieChart/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxPieChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.points): Array<piePointObject>
The [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxPieChart/Chart_Elements/Point/') object(s).

##### field(e.target): String | Number
The argument of the point(s) corresponding to the clicked legend item.

---
#####See Also#####
#include common-link-handleevents