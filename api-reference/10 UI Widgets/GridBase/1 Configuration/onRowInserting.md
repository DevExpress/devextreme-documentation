---
EventForAction: ..\4 Events\rowInserting.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **rowInserting** event. Executed before a new row is inserted into the data source.

##### param(e): Object
Information about the event.

##### field(e.component): Object
The [widget's instance](/api-reference/10%20UI%20Widgets/Component/3%20Methods/instance().md '{basewidgetpath}/Methods/#instance').

##### field(e.element): jQuery
The widget's container.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.data): Object
The data of the to-be-inserted row.

##### field(e.cancel): Boolean|Promise
Allows you to cancel row insertion.

---
To cancel row insertion, assign **true** to the **cancel** field of the handler parameter. To perform an asynchronous action before inserting a row, assign a [jQuery.Promise](https://api.jquery.com/Types/#Promise) to the **cancel** field. The row will be inserted once the Deferred object of this Promise is resolved.

[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if several rows are to be inserted, this handler will be executed for each row individually.