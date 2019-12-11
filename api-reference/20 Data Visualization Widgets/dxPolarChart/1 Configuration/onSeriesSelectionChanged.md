---
EventForAction: ..\4 Events\seriesSelectionChanged.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A function that is executed when a series is selected or the selection is canceled.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): polarChartSeriesObject
The series whose selection state has been changed; described in the [Series](/api-reference/20%20Data%20Visualization%20Widgets/dxPolarChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/') section.

---
To identify whether the selection has been applied or canceled, call the series' [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/Methods/#isSelected') method.