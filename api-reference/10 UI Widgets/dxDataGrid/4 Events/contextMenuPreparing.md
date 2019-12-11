---
type: eventType
---
---
##### shortDescription
Raised before the context menu is rendered.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.items): Array<Object>
Items to be displayed in the context menu. Their structure is described in the [Default Item Template](/api-reference/10%20UI%20Widgets/dxContextMenu/5%20Default%20Item%20Template '/Documentation/ApiReference/UI_Widgets/dxContextMenu/Default_Item_Template/') section.

##### field(e.target): String
The name of the grid element on which the context menu is invoked: "headerPanel", "header", "content" or "footer".

##### field(e.targetElement): dxElement
This element's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.columnIndex): Number
The index of the column on which the context menu is invoked. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.column): dxDataGridColumn
This column's [configuration](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.rowIndex): Number
The index of the row on which the context menu is invoked. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.row): dxDataGridRowObject
The row [properties](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/').

---
Main article: [onContextMenuPreparing](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onContextMenuPreparing.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onContextMenuPreparing')

#####See Also#####
#include common-link-handleevents