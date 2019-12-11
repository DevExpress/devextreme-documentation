---
type: eventType
---
---
##### shortDescription
Raised when a user attempts to open the browser's context menu for a cell.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.cellData): Object
The data of the cell on which the context menu is invoked.

##### field(e.cellElement): dxElement
The cell's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler's execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

---
Main article: [onCellContextMenu](/api-reference/10%20UI%20Widgets/dxScheduler/1%20Configuration/onCellContextMenu.md '/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#onCellContextMenu')

#####See Also#####
#include common-link-handleevents