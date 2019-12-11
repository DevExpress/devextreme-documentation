---
EventForAction: ..\4 Events\pointHoverChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **pointHoverChanged** event.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): Point
The series point whose hover state has been changed.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose hover state has been changed. To identify whether this point was hovered over or hovered out, call its [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isHovered') method. To discover point fields and methods, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/10%20dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') class description.

To learn more about how to handle hover operations, refer to the [Hover Handling](/concepts/20%20Data%20Visualization/10%20Charts/80%20End-User%20Interaction/3%20Hover%20Handling '/Documentation/Guide/Data_Visualization/Charts/End-User_Interaction/#Hover_Handling') topic.