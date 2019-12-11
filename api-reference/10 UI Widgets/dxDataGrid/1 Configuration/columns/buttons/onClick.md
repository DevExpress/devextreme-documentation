---
type: function(e) | String
---
---
##### shortDescription
A function that is executed when the button is clicked or tapped.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxDataGrid
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.event): event
The event that caused the function's execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/category/events/event-object) when you use jQuery.

##### field(e.row): dxDataGridRowObject
The properties of the button's row.

##### field(e.column): dxDataGridColumn
The properties of the button's column.

---
