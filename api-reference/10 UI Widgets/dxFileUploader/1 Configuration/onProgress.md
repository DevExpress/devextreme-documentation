---
EventForAction: ..\4 Events\progress.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [uploaded](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploaded.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploaded') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.file): File
An uploaded file.

##### field(e.segmentSize): Number
The size of the uploaded file segment.

##### field(e.bytesLoaded): Number
The total count of the uploaded bytes.

##### field(e.bytesTotal): Number
The total count of bytes in the XMLHttpRequest.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

---
Assign a function to perform a custom action when a segment of a file has been uploaded.