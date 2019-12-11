---
EventForAction: ..\4 Events\seriesSelectionChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the [seriesSelectionChanged](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/4%20Events/seriesSelectionChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesSelectionChanged') event.

##### param(e): object
Information about the event.

##### field(e.component): object
The <a href="/Documentation/16_1/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#instance">widget instance</a>.

##### field(e.element): object
The widget's container.

##### field(e.target): Series
The series whose selection state has been changed.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series whose selection state has been changed. To identify whether this series was selected or deselected, call its [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Series/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/Methods/#isSelected') method. To discover series fields and methods, refer to the [Series](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/7%20Chart%20Elements/Series '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/') class description.

To learn more about how to handle selection, refer to the [Selection Handling](/concepts/20%20Data%20Visualization/10%20Charts/80%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Selection_Handling') topic.