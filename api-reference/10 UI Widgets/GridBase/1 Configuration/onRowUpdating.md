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

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.oldData): Object
The old data of the row.

##### field(e.newData): Object
The updated data of the row.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.cancel): Boolean|Promise
Allows you to cancel row updating.

---
To cancel row updating, assign **true** to the **cancel** field of the handler parameter. To perform an asynchronous action before updating the row, assign a [jQuery.Promise](https://api.jquery.com/Types/#Promise) to the **cancel** field. The row will be updated once the Deferred object of this Promise is resolved.

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if several rows are to be updated, this handler will be executed for each row individually.