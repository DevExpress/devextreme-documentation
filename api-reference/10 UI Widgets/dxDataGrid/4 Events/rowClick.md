---
type: eventType
---
---
##### shortDescription
Fires when a user clicks a grid row.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.data): object
The row's data.

##### field(e.key): any
The row's key.

##### field(e.values): Array<Object>
Values displayed in the row cells.

##### field(e.columns): Array<Object>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.rowIndex): number
The row's visible index. For details on indexes, see the [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') topic.

##### field(e.rowType): string
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGRid/Row/#rowType').
Can be one of the following: *'data'* for data rows, *'group'* for group rows, *'detail'* for [detail sections](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/masterDetail '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail'), or *"detailAdaptive"* for [adaptive detail rows](/concepts/05%20Widgets/DataGrid/15%20Columns/50%20Adaptability.md '/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/').

##### field(e.isSelected): boolean
Indicates whether the row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/').

##### field(e.isExpanded): boolean
Indicates whether or not the group row is expanded. Available if **rowType** is *'group'*.

##### field(e.groupIndex): number
The row's [group index](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *'group'*.

##### field(e.rowElement): dxElement
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.handled): boolean
Indicates whether internal widget handlers have already handled the event.

---
Instead, you can use the [onRowClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onRowClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowClick') option to handle the event.

When implementing a handling function for this event, use the object passed to this function as its parameter. Among the fields of this object, you can find data relating to the clicked row.

[note]If there are any internal grid handlers for the row click, the **rowClick** event fires only after these handlers are executed. In this case, the **handled** field of the handler parameter is set to **true**.

In addition, you can perform certain actions when a user clicks a cell. For this purpose, handle the [cellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/cellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#cellClick') event. Note that the **cellClick** fires before the **rowClick**.

[note] When the clicked row is in the editing state, or switches to the editing state, the **rowClick** event will not fire. Instead, you can use the **cellClick**.

#####See Also#####
#include common-link-handleevents