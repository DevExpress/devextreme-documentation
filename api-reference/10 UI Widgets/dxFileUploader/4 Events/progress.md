---
type: eventType
---
---
##### shortDescription
Fires when a segment of a file has been uploaded.

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

##### field(e.segmentSize): Number
The size of an uploaded file segment.

##### field(e.bytesLoaded): Number
The total count of uploaded bytes.

##### field(e.bytesTotal): Number
The total count of bytes in the XMLHttpRequest.

##### field(e.jQueryEvent): ProgressEvent
An XMLHttpRequest progress event that caused the action execution.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

---
Instead, you can use the [onProgress](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onProgress.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onProgress') option to handle the event.

#####See Also#####
#include common-link-handleevents