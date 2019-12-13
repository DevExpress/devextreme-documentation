---
id: dxDataGrid.contextMenuPreparing
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.column): dxDataGridColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [items](/api-reference/10%20UI%20Widgets/dxContextMenu/1%20Configuration/items '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/items/') option description.

##### field(e.model): Object
Model data. Available only if you use Knockout.

##### field(e.row): dxDataGridRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/').

##### field(e.rowIndex): Number
The index of the row on which the context menu is invoked. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.target): String
The name of the element on which the context menu is invoked: *"headerPanel"*, *"header"*, *"content"*, or *"footer"*. This field is read-only.

##### field(e.targetElement): dxElement
#include common-ref-elementparam with { element: "grid element" }

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContextMenuPreparing')

#####See Also#####
#include common-link-handleevents