---
id: BaseWidget.Options.onFileSaving
type: function(e)
default: null
EventForAction: BaseWidget.fileSaving
---
---
##### shortDescription
A function that is executed before a file with exported widget is saved to the user's local storage.

##### param(e): Object
Information about the event.

##### field(e.cancel): Boolean
Allows you to prevent file saving.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.data): Blob
Exported data as a BLOB.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileName): String
The name of the file to be saved.

##### field(e.format): String
The format of the file to be saved.         
Possible Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'

---
#####See Also#####
- [onExporting](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExporting.md '{basewidgetpath}/Configuration#onExporting')
- [onExported](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/onExported.md '{basewidgetpath}/Configuration#onExported')