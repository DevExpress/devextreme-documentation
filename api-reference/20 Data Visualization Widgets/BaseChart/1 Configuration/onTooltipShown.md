---
EventForAction: ..\4 Events\tooltipShown.md
default: null
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipShown** event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The series point whose tooltip is shown; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
The point's tooltip appears when a user hovers the mouse cursor over the point. In addition, you can show a tooltip in code, using the **showTooltip()** method of the chart or point.

When a tooltip appears, you can perform specific actions by handling the **tooltipShown** event. To do this, implement a handling function and assign it to the **onTooltipShown** option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose tooltip appears.