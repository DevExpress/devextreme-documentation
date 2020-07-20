---
id: dxChart.Options.onSeriesClick
type: function(e) | String
default: null
EventForAction: dxChart.seriesClick
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a [series](/concepts/05%20Widgets/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series/Overview/') is clicked or tapped.

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

##### field(e.target): chartSeriesObject
The clicked series.

---
[note] This function is also executed when a [series point](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Series_Points/Overview/') or [legend item](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/Widgets/Chart/Legend/Overview/') is clicked or tapped. You can cancel the execution in the [onPointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/onPointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onPointClick') and [onLegendClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onLegendClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onLegendClick') functions.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleSeriesSelection/"
}