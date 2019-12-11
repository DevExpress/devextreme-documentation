---
EventForAction: ..\4 Events\tooltipHidden.md
type: function(e)
---
---
##### notUsedInTheme

##### shortDescription
A handler for the **tooltipHidden** event.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The widget instance.

##### field(e.element): Object
The widget's container.

##### field(e.target): Object
The area or marker for which a tooltip was displayed.

---
The tooltip becomes invisible when a user hovers the mouse cursor over another marker/area or moves it outside the widget.

When a tooltip is made hidden, you can perform specific actions by handling the **tooltipHidden** event. To do this, implement a handling function and assign it to this option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the area or marker whose tooltip becomes hidden.