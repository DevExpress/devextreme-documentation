---
EventForAction: ..\4 Events\uploadStarted.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [uploadStarted](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Methods/#uploadStarted) event.

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

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.request): object
Specifies an XMLHttpRequest for the file.

---
Assign a function to perform a custom action when file uploading is started.