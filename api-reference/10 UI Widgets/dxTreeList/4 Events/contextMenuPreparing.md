---
id: dxTreeList.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.column): dxTreeListColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/items/') option description.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxTreeListRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxTreeList/6%20Row '/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/').

##### field(e.rowIndex): Number
The index of the row on which the context menu is invoked. Refer to [Column and Row Indexes](/concepts/05%20Widgets/TreeList/10%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/TreeList/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.target): String
The name of the element on which the context menu is invoked: *"header"*, *"content"*, or *"footer"*. This field is read-only.

##### field(e.targetElement): dxElement
#include common-ref-elementparam with { element: "element" }

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxTreeList/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onCellClick')

#####See Also#####
#include common-link-handleevents