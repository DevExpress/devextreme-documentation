---
EventForAction: ..\4 Events\uploadError.md
default: null
type: function(e)
---
---
##### shortDescription
A handler for the [uploadError](/api-reference/10%20UI%20Widgets/dxFileUploader/4%20Events/uploadError.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploadError') event.

##### param(e): Object
Information about the event.

##### field(e.component): DOMComponent
The widget's instance.

##### field(e.element): dxElement
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](https://api.jquery.com/Types/#jQuery) when you use jQuery.

##### field(e.model): Object
The model data. Available only if Knockout is used.

##### field(e.file): File
The uploaded file.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.event): event
The event that caused the handler execution. It is a [dxEvent](/api-reference/50%20Common/Object%20Structures/dxEvent '/Documentation/ApiReference/Common/Object_Structures/dxEvent/') or a [jQuery.Event](https://api.jquery.com/Types/#Event) when you use jQuery.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
Assign a function to perform a custom action when an error has occurred during uploading.

The following code shows how you can handle a network error.

---
#####jQuery

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

#####Angular

    <!--TypeScript-->
    export class AppComponent {
        handleNetworkError (e) {
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            }      
        }
    }

    <!--HTML-->
    <dx-file-uploader ...
        (onUploadError)="handleNetworkError($event)">
    </dx-fileUploader>

---