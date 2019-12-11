---
type: eventType
---
---
##### shortDescription
Fires before the grid saves an Excel file with exported data on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved. Equals *'EXCEL'* for an Excel file.

##### field(e.data): BLOB
Exported data as a BLOB.

##### field(e.cancel): boolean
Allows you to cancel file saving.

---
Instead, you can use the [onFileSaving](/api-reference/10%20UI%20Widgets/dxPivotGrid/1%20Configuration/onFileSaving.md '/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#onFileSaving') option to handle the event.

#####See Also#####
#include common-link-handleevents