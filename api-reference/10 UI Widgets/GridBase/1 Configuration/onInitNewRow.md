---
EventForAction: ..\4 Events\initNewRow.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **initNewRow** event. Executed before a new row is added to the widget.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The data of the inserted row; initially empty.

---
Using this handler, you can populate a newly added row with data by default. Add fields to the **data** object so that they correspond to fields of a [data source](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/dataSource.md '{basewidgetpath}/Configuration/#dataSource') object. Note that the **data** object may omit some fields present in the data source object. Add only those fields that must initialize specific cells of a new row.