---
id: dxChart.Options.onSeriesHoverChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a series.

##### param(e): Object
Information about the event.

##### field(e.component): dxChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series whose hover state has been changed.

---
To identify whether the pointer has entered or left the series, call the series' [isHovered()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isHovered().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isHovered') method.