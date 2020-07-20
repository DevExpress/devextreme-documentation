---
id: dxPieChart.Options.onLegendClick
type: function(e) | String
default: null
EventForAction: dxPieChart.legendClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [legend item](/concepts/05%20Widgets/PieChart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/PieChart/Legend/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.points): Array<piePointObject>
The [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object(s).

##### field(e.target): String | Number
The argument of the point(s) corresponding to the clicked legend item.

---
#####See Also#####
#include common-link-handleevents