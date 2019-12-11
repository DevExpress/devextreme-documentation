---
type: event
---
---
##### notUsedInTheme

##### shortDescription
Fires when a tooltip of an area or marker appears.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget instance.

##### field(e.element): object
The widget's container.

##### field(e.target): object
The area or marker for which a tooltip is displayed.

---
The tooltip appears when a user hovers the mouse cursor over a marker or area. 

When a tooltip appears, you can perform specific actions by handling this event. To do this, implement a handling function and assign it to the [onTooltipShown](/api-reference/20%20Data%20Visualization%20Widgets/70%20dxVectorMap/1%20Configuration/onTooltipShown.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxVectorMap/Configuration/#onTooltipShown') option. When implementing this function, use the object passed to it as its parameter. Among the fields of this object, you can find the area or marker whose tooltip appears.

#####See Also#####
- [Handle Events - jQuery](/concepts/20%20Data%20Visualization/05%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/20%20Data%20Visualization/05%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/20%20Data%20Visualization/05%20Basics/30%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/Data_Visualization/Basics/Widget_Basics_-_Knockout/#Handle_Events')