---
EventForAction: ..\4 Events\uploaded.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [uploaded](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploaded.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploaded') event.

##### param(e): Object
Provides function parameters.

##### field(e.component): Object
Provides access to the widget instance.

##### field(e.element): jQuery
An HTML element of the widget.

##### field(e.model): Object
Provides access to the data that is available for binding against the element. Available only in the Knockout approach.

##### field(e.file): object
An uploaded file.

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.request): object
Specifies an XMLHttpRequest for the file.

---
Assign a function to perform a custom action when a file has been uploaded.