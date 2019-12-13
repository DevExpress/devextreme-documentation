---
id: dxFileUploader.uploadAborted
type: eventType
---
---
##### shortDescription
Raised when the file upload is aborted.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

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
Main article: [onUploadAborted](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onUploadAborted.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onUploadAborted')

#####See Also#####
#include common-link-handleevents