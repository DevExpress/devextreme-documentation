---
id: dxChart.Options.onSeriesSelectionChanged
type: function(e)
default: null
EventForAction: dxChart.seriesSelectionChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a series is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): chartSeriesObject
The series whose selection state has been changed.

---
To identify whether the selection has been applied or canceled, call the series' [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected') method.