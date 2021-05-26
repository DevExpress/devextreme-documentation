---
id: dxChart.Options.onSeriesClick
type: function(e) | String
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/') is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): dxChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The clicked series.

---
[note] This function is also executed when a [series point](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/') or [legend item](/concepts/05%20UI%20Components/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Legend/Overview/') is clicked or tapped. You can cancel the execution in the [onPointClick](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onPointClick') and [onLegendClick](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onLegendClick') functions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleSeriesSelection/"
}