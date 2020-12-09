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
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): any
Model data. Available only if Knockout is used.

##### return: any
<!-- Description goes here -->

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