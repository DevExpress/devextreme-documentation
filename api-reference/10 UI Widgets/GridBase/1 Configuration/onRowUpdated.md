---
EventForAction: ..\4 Events\rowUpdated.md
default: null
type: function(e)
---
---
##### shortDescription
A function that is executed after a row has been updated in the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The updated data of the row; contains only those fields that have been updated.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.error): Error
The standard [Error](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) object defining an error that may occur during updating.

---
[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if several rows have been updated, this function will be executed for each row individually.