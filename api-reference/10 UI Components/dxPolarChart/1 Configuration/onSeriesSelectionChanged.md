---
id: dxPolarChart.Options.onSeriesSelectionChanged
type: function(e)
default: null
EventForAction: dxPolarChart.seriesSelectionChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed when a series is selected or selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The series whose selection state has been changed; described in the [Series](/api-reference/10%20UI%20Components/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/') section.

---
To identify whether the selection has been applied or canceled, call the series' [isSelected()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/UI_Components/dxPolarChart/Chart_Elements/Series/Methods/#isSelected') method.