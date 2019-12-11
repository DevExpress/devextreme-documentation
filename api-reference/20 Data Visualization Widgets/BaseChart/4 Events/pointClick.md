---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a series point.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.target): basePointObject
The clicked series point; described in the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '{basewidgetpath}/Chart_Elements/Point/') section.

---
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series point. To learn about point's members that you can use, refer to the description of the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Point/') object.

[note] A click on a series point causes the [seriesClick](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/4%20Events/seriesClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesClick') event to fire after the **pointClick** event. To prevent this behavior, assign **true** to the **jQueryEvent.cancel** field of the object passed to the **pointClick** event handler as the argument.

#####See Also#####
#include common-link-handleevents