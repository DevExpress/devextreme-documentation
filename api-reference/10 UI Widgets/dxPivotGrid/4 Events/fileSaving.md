---
type: eventType
---
---
##### shortDescription
Raised before a file with exported data is saved to the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.fileName): String
The name of the file to be saved.

##### field(e.format): String
The format of the file to be saved. Equals *"EXCEL"* for an Excel file.

##### field(e.data): Blob
Exported data as a BLOB.

##### field(e.cancel): Boolean
Allows you to cancel file saving.

---
Main article: [onFileSaving](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onFileSaving')

#####See Also#####
#include common-link-handleevents