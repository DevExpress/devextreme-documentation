---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a point's tooltip becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): Point
The series point whose tooltip becomes hidden.

---
The point's tooltip becomes invisible when a user hovers the mouse cursor over another series point. In addition, you can hide a tooltip in code, using the **hideTooltip()** method of the chart or point.

When a tooltip is made hidden, you can perform specific actions by handling the **tooltipHidden** event. When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the series point whose tooltip becomes hidden.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')