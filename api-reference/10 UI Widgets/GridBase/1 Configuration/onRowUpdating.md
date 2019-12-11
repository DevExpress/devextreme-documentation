---
EventForAction: ..\4 Events\rowUpdating.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowUpdating** event. Executed before a row is updated in the data source.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.oldData): Object
The old data of the row.

##### field(e.newData): Object
The updated data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.cancel): Boolean|Promise<void>
Allows you to cancel row updating.

---
You can cancel row updating by setting the handler parameter's **cancel** field to **true**. This field also accepts a Promise ([jQuery](https://api.jquery.com/Types/#Promise) or [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)), which enables you to perform an asynchronous action before a row is updated.

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if several rows are to be updated, this handler will be executed for each row individually.