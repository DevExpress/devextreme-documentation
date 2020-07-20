---
id: dxFileUploader.Options.onProgress
type: function(e)
default: null
EventForAction: dxFileUploader.progress
---
---
##### shortDescription
A function that is executed when a file segment is uploaded.

##### param(e): Object
Information about the event.

##### field(e.bytesLoaded): Number
The total count of the uploaded bytes.

##### field(e.bytesTotal): Number
The total count of bytes in the XMLHttpRequest.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
An uploaded file.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

##### field(e.segmentSize): Number
The size of the uploaded file segment.

---
