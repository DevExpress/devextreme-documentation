---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a sparkline's tooltip becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

---
The sparkline's tooltip becomes invisible when a user moves the mouse cursor outside of the widget.

When a tooltip is made hidden, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the **onTooltipHidden** option. When implementing a handling function, use the object passed to it as its parameter. This object will provide you with the widget instance and its container.

#####See Also#####
- [Handle Events - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/')
- [Handle Events - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/')
- [Handle Events - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/')