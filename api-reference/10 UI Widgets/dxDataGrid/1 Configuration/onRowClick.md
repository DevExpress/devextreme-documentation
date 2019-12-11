---
EventForAction: ..\4 Events\rowClick.md
default: null
type: function(e) | String
---
---
##### shortDescription
A function that is executed when a row is clicked or tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the function's execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the function's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.data): Object
The row's data.

##### field(e.key): any
The row's key.

##### field(e.values): Array<Object>
Values displayed in the row cells.

##### field(e.columns): Array<Object>
All column [configurations](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/').

##### field(e.rowIndex): Number
The row's index. Refer to [Column and Row Indexes](/concepts/05%20Widgets/DataGrid/15%20Columns/12%20Column%20and%20Row%20Indexes.md '/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/') for more information.

##### field(e.rowType): String
The row's [type](/api-reference/10%20UI%20Widgets/dxDataGrid/6%20Row/rowType.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#rowType').

##### field(e.isSelected): Boolean
Indicates whether the row is [selected](/concepts/05%20Widgets/DataGrid/50%20Selection '/Documentation/Guide/Widgets/DataGrid/Selection/').

##### field(e.isExpanded): Boolean
Indicates whether or not the group row is expanded. Available if **rowType** is *"group"*.

##### field(e.groupIndex): Number
The row's [group index](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/columns/groupIndex.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex'). Available if **rowType** is *"group"*.

##### field(e.rowElement): dxElement
The row's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.handled): Boolean
Indicates whether internal widget functions have already handled the event.

---
Prior to this function, the widget executes the [onCellClick](/api-reference/10%20UI%20Widgets/dxDataGrid/1%20Configuration/onCellClick.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onCellClick') function and sometimes internal functions. You can use the **handled** field to check whether internal functions were executed.

[note] When the clicked row is in the editing state or switches to this state, the **onRowClick** function is not executed. Instead, specify the **onCellClick** function.