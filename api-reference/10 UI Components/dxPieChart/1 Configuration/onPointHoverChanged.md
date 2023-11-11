---
id: dxPieChart.Options.onPointHoverChanged
type: function(e)
---
---
##### shortDescription
A function that is executed after the pointer enters or leaves a series point.

##### param(e): viz/pie_chart:PointHoverChangedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
The UI component's container.

##### field(e.target): basePointObject
The series point whose hover state has been changed; described in the [Point](/api-reference/10%20UI%20Components/dxPieChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
To identify whether the pointer has entered or left the series point, call the point's [isHovered()](/api-reference/10%20UI%20Components/BaseChart/7%20Chart%20Elements/Point/3%20Methods/isHovered().md '{basewidgetpath}/Chart_Elements/Point/Methods/#isHovered') method.