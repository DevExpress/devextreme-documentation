---
EventForAction: ..\4 Events\dataErrorOccurred.md
default: null
type: function
---
---
##### shortDescription
A handler for the [dataErrorOccured](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/dataErrorOccurred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#dataErrorOccurred') event.

##### param(e): object
Information on the occurred error.

##### field(e.component): object
The widget <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.

##### field(e.element): jQuery
The widget's container.

##### field(e.model): object
Data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.error): JavaScript Error object
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.

---
To handle errors that might occur in the data source, implement a handling function and assign it to the **onDataErrorOccurred** option. To obtain a human-readable representation of the occurred error, use the **message** field of the **error** object passed to the handling function as the parameter's field.