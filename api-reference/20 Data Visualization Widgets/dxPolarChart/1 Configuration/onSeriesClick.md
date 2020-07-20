---
id: dxPolarChart.Options.onSeriesClick
type: function(e) | String
default: null
EventForAction: dxPolarChart.seriesClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [series](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series') is clicked or tapped.

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

##### field(e.target): polarChartSeriesObject
The clicked series; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') section.

---
[note] This function is also executed when a [series point](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/020%20Series%20Points/10%20Series%20Points.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Series_Points') or [legend item](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Legend') is clicked or tapped. You can cancel the execution in the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onPointClick') and [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/#onLegendClick') functions.