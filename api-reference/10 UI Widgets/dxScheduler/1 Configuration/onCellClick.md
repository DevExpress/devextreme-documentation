---
EventForAction: ..\4 Events\cellClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A handler for the [cellClick](/api-reference/10%20UI%20Widgets/dxScheduler/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Events/#cellClick') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.cellData): Object
The clicked cell's data.

##### field(e.cellElement): dxElement
The clicked cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.cancel): Boolean
Allows you to cancel execution of the default cell click handler.

---
Assign a function to perform a custom action after a view cell has been clicked.