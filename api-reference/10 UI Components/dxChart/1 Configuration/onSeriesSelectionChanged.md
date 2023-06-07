---
id: dxChart.Options.onSeriesSelectionChanged
type: function(e)
default: null
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a series is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): dxChart
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series whose selection state has been changed.

---
To identify whether the selection has been applied or canceled, call the series' [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Series/Methods/#isSelected') method.