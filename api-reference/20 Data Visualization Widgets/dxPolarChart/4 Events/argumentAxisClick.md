---
type: eventType
---
---
##### notUsedInTheme

##### shortDescription
Fires when a user clicks a [label](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/070%20Axis%20Labels.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axis_Labels') on the [argument axis](/concepts/05%20Widgets/PolarChart/10%20Visual%20Elements/050%20Axes/10%20Argument%20Axis.md '/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Argument_Axis').

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

##### field(e.argument): Date|Number|string
The clicked label's value.

---
#####See Also#####
#include common-link-handleevents