---
type: eventType
---
---
##### shortDescription
Raised before a file with exported data is saved on the user's local storage.

##### param(e): object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.fileName): string
The name of the file to be saved.

##### field(e.format): string
The format of the file to be saved.         
Possible Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

##### field(e.data): BLOB
Exported data as a BLOB.

##### field(e.cancel): boolean
Allows you to prevent file saving.

---
#####See Also#####
#include common-link-handleevents