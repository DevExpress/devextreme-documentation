---
EventForAction: ..\4 Events\uploadError.md
default: null
type: function
---
---
##### shortDescription
A handler for the [uploadError](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploadError.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploadError') event.

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

##### field(e.jQueryEvent): jQueryEvent
Specifies the jQuery event that caused action execution.

##### field(e.request): object
Specifies an XMLHttpRequest for the file.

---
Assign a function to perform a custom action when an error has occurred during uploading.

The following code shows how you can handle a network error.

    <!--JavaScript-->
    $(function(){
        $("#fileUploader").dxFileUploader({
            // ...
            onUploadError: function(e){
                var xhttp = e.request;
                if (xhttp.readyState == 4 && xhttp.status == 0) {
                    console.log("Connection refused.");
                }
            }
        });
    });