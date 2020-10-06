---
id: dxFileUploader.Options.onUploadError
type: function(e)
default: null
EventForAction: dxFileUploader.uploadError
---
---
##### shortDescription
A function that is executed when an error occurs during the file upload.

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
The uploaded file.

##### field(e.message): String
The message displayed by the widget on uploading failure.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
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

#####See Also#####
- [uploadFailedMessage](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadFailedMessage)