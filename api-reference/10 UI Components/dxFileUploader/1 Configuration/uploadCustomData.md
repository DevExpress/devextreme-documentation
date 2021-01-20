---
id: dxFileUploader.Options.uploadCustomData
type: any
default: {}
---
---
##### shortDescription
Specifies custom data for the upload request.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            uploadCustomData: {
                __RequestVerificationToken: document.getElementsByName("__RequestVerificationToken")[0].value
            }
        });
    });

---