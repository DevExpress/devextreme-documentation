---
id: dxFileUploader.Options.onUploadStarted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the file upload is started.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

##### return: any
<!-- Description goes here -->

---
