---
id: dxFileUploader.Options.onUploadAborted
type: function(e)
default: null
EventForAction: dxFileUploader.uploadAborted
---
---
##### shortDescription
A function that is executed when the file upload is aborted.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
