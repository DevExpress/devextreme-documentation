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
Custom data (key-value pairs) that are sent to the server with the request.

##### return: any
<!-- Description goes here -->

---

[note] Use the **beforeSubmit** function to customize the **file download** requests only. To customize other Ajax requests (for example, file upload requests), use the [beforeAjaxSend](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Remote/1%20Configuration/beforeAjaxSend.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeAjaxSend') function.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                // ...
                beforeSubmit: function({ formData }) {
                    formData.value = document.getElementsByName("__RequestVerificationToken")[0].value;
                }  
            })
        });
    });

---
