---
type: event
---
---
##### shortDescription
Fires when a segment of a file has been uploaded.

##### param(e): object
Provides function parameters.

##### field(e.component): object
Provides access to the widget instance.

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

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.request): object
Specifies an XMLHttpRequest for the file.

---
Instead, you can use the [onProgress](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onProgress.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onProgress') option to handle the event.

#####See Also#####
- [Handle Events - jQuery](/concepts/10%20UI%20Widgets/0%20Basics/10%20Widget%20Basics%20-%20jQuery/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_jQuery/#Handle_Events')
- [Handle Events - AngularJS](/concepts/10%20UI%20Widgets/0%20Basics/20%20Widget%20Basics%20-%20AngularJS/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_AngularJS/#Handle_Events')
- [Handle Events - Knockout](/concepts/10%20UI%20Widgets/0%20Basics/25%20Widget%20Basics%20-%20Knockout/15%20Handle%20Events.md '/Documentation/Guide/UI_Widgets/Basics/Widget_Basics_-_Knockout/#Handle_Events')