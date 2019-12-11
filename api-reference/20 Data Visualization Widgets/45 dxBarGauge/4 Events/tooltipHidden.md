---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when a bar's tooltip becomes hidden.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
The object containing the hovered bar's index.

---
The bar's tooltip becomes invisible when a user hovers the mouse cursor over another bar or moves it outside the widget.

When a tooltip is made hidden, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipHidden](/api-reference/20%20Data%20Visualization%20Widgets/45%20dxBarGauge/1%20Configuration/onTooltipHidden.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#onTooltipHidden') option. When implementing this function, use the object passed to it as its parameter. This object will provide you with the widget instance, its container and the object describing the hovered bar. You can use its **index** field to get the index of the hovered bar.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')