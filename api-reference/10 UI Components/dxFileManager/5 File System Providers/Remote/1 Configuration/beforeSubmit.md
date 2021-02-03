---
id: RemoteFileSystemProvider.Options.beforeSubmit
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes a form submit request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.formData): Object
Custom data (key/value pairs) that is sent to the server with the request.

---

[note] Use the **beforeSubmit** function to customize the **file download** requests only. To customize other requests, use the [beforeAjaxSend](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeAjaxSend) function.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://mydomain.com/api/files",
                // ...
                beforeSubmit: function({ formData }) {
                    formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
                }  
            })
        });
    });

---
