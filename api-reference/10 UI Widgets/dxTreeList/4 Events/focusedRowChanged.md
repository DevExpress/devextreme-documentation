---
type: eventType
---
---
##### shortDescription
Raised after the focused row changes. Applies only when [focusedRowEnabled](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/focusedRowEnabled.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#focusedRowEnabled') is **true**.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.rowElement): dxElement
The focused row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.rowIndex): Number
The row's index.

##### field(e.row): dxTreeListRowObject
The row's properties.

---
Main article: [onFocusedRowChanged](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onFocusedRowChanged.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onFocusedRowChanged')

#####See Also#####
#include common-link-handleevents