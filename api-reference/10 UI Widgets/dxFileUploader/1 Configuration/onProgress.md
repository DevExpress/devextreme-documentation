---
EventForAction: ..\4 Events\progress.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [uploaded](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploaded.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploaded') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget's instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
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
Assign a function to perform a custom action when a segment of a file has been uploaded.