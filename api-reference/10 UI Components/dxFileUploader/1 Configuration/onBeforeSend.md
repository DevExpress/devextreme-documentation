---
id: dxFileUploader.Options.onBeforeSend
type: function(e)
default: null
---
---
##### shortDescription
A function that allows you to customize the request before it is sent to the server.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.file): File
An uploaded file.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

##### field(e.uploadInfo): UploadInfo
An object that provides information about the file upload session.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            onBeforeSend: function(e) {
                e.request.withCredentials = true;
            }
        });
    });

---