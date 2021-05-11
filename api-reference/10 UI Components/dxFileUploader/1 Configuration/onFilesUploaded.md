---
id: dxFileUploader.Options.onFilesUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when all files are successfully uploaded.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if Knockout is used.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            onFilesUploaded: function(e) {
                // Your code goes here
            }
        });
    });

---