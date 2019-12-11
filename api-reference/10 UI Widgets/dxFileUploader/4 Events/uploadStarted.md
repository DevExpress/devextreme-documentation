---
type: eventType
---
---
##### shortDescription
Fires when file uploading is started.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.file): object
An uploaded file.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.request): object
Specifies an XMLHttpRequest for the file.

---
Instead, you can use the [onUploadStarted](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onUploadStarted.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onUploadStarted') option to handle the event.

#####See Also#####
#include common-link-handleevents