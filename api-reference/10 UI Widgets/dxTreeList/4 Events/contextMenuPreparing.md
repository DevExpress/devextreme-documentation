---
type: eventType
---
---
##### shortDescription
Raised before a context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') section.

##### field(e.target): string
The name of the element on which the context menu is invoked: 'header', 'content' or 'footer'. This field is read-only.

##### field(e.targetElement): dxElement
This element's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.columnIndex): number
The index of the column on which the context menu is invoked.

##### field(e.column): dxTreeListColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.rowIndex): number
The visible index of the row on which the context menu is invoked.

##### field(e.row): dxTreeListRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/').

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick')

#####See Also#####
#include common-link-handleevents