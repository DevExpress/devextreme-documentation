---
type: eventType
---
---
##### shortDescription
Raised before a context menu is rendered.

##### param(e): object
Information about the event.

##### field(e.component): object
The widget's [instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
The model data. Available only if you use Knockout.

##### field(e.items): array
Items to be displayed in the context menu. The structure of items is described in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') section.

##### field(e.target): string
The name of the element on which the context menu is invoked: 'header', 'content' or 'footer'. This field is read only.

##### field(e.targetElement): jQuery
The container of this element.

##### field(e.columnIndex): number
The index of the column on which the context menu is invoked.

##### field(e.column): object
[Configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/') of this column.

##### field(e.rowIndex): number
The visible index of the row on which the context menu is invoked.

##### field(e.row): dxTreeListRowObject
The row properties.

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick')

#####See Also#####
#include common-link-handleevents