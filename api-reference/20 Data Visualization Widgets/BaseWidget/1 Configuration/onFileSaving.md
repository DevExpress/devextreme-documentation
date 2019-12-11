---
EventForAction: ..\4 Events\fileSaving.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the **fileSaving** event. Executed before a file with exported data is saved on the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
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
#####See Also#####
- [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting')
- [onExported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported')