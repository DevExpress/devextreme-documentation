---
id: dxFileUploader.uploadError
type: eventType
---
---
##### shortDescription
Raised when an error occurs during the file upload.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.error): any
The error that occurred.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
An uploaded file.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
Main article: [onUploadError](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onUploadError.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onUploadError')

#####See Also#####
#include common-link-handleevents