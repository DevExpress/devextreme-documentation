---
id: GridBase.Options.onRowRemoved
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed after a row has been removed from the data source.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.data): Object
The data of the row.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.error): Error
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error" target="_blank">Error</a> object defining an error that may occur during removal.

##### field(e.key): any
The key of the row. If a field providing keys is not specified in the data source, the whole data object is considered the key.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
[note] In batch [editing mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode'), if several rows have been removed, this function will be executed for each row individually.