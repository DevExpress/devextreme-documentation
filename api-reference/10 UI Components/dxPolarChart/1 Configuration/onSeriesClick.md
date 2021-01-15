---
id: dxPolarChart.Options.onSeriesClick
type: function(e) | String
default: null
EventForAction: dxPolarChart.seriesClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [series](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Series') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The clicked series; described in the [Series](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/') section.

---
[note] This function is also executed when a [series point](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/010%20Series.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Series'_Points) or [legend item](/concepts/05%20UI%20Components/PolarChart/10%20Visual%20Elements/120%20Legend.md '/Documentation/Guide/UI_Components/PolarChart/Visual_Elements/#Legend') is clicked or tapped. You can cancel the execution in the [onPointClick](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onPointClick') and [onLegendClick](/api-reference/10%20UI%20Components/dxPolarChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxPolarChart/Configuration/#onLegendClick') functions.