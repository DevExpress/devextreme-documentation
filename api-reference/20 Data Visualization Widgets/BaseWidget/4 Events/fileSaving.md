---
type: eventType
---
---
##### shortDescription
Raised before a file with exported widget is saved to the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.fileName): String
The name of the file to be saved.

##### field(e.format): String
The format of the file to be saved.         
Possible Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

##### field(e.data): Blob
Exported data as a BLOB.

##### field(e.cancel): Boolean
Allows you to prevent file saving.

---
Main article: [onFileSaving](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onFileSaving.md '{basewidgetpath}/Configuration/#onFileSaving')

#####See Also#####
#include common-link-handleevents