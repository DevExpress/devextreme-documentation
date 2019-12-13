---
id: BaseChart.Options.onPointHoverChanged
type: function(e)
EventForAction: BaseChart.pointHoverChanged
notUsedInTheme: 
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a series point.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget's instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): basePointObject
The series point whose hover state has been changed; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
To identify whether the pointer has entered or left the series point, call the point's [isHovered()](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '{basewidgetpath}/Chart_Elements/Point/Methods/#isHovered') method.