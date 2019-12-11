---
EventForAction: ..\4 Events\pointHoverChanged.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **pointHoverChanged** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): basePointObject
The series point whose hover state has been changed; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose hover state has been changed. To identify whether this point was hovered over or hovered out, call its [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/Methods/#isHovered') method. To discover point fields and methods, refer to the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') class description.

To learn more about how to handle hover operations, refer to the [Hover Handling](/concepts/05%20Widgets/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/3%20Hover%20Handling '/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Hover_Handling') topic.