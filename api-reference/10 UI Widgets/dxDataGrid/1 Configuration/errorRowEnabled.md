---
default: true
type: boolean
---
---
##### shortDescription
Indicates whether to show the error row for the grid.

---
The error row displays the data errors that occur on the server during the grid's life cycle.

Set this option to *false* to avoid showing errors to end users. Instead, the error will be displayed in the browser's console. In addition, you can subscribe to the [dataErrorOccured](/api-reference/10%20UI%20Widgets/dxDataGrid/4%20Events/dataErrorOccurred.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Events/#dataErrorOccurred') event to provide custom actions when data errors occur on the server.