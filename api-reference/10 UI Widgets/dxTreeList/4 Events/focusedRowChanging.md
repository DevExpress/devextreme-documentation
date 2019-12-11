---
type: eventType
---
---
##### shortDescription
Raised before the focused row changes. Applies only when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled') is **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
The container of the row to be focused. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.prevRowIndex): Number
The index of the previously focused row.

##### field(e.newRowIndex): Number
The index of the row to be focused.

##### field(e.event): event
The event that caused the function execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.rows): Array<dxTreeListRowObject>
The visible rows' properties.

##### field(e.cancel): Boolean
Allows you to cancel focusing a new row.

---
Main article: [onFocusedRowChanging](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanging.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanging')

#####See Also#####
#include common-link-handleevents