---
EventForAction: ..\4 Events\pointSelectionChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **pointSelectionChanged** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): basePointObject
The series point whose selection state has been changed; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose selection state has been changed. To identify whether this point was selected or deselected, call its [isSelected()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isSelected().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isSelected') method. To discover point fields and methods that you can use, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') class description.

To learn more about how to handle selection, refer to the [Selection Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/4%20Selection%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Selection_Handling') topic.