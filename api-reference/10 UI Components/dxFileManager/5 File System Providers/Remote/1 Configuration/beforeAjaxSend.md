---
id: RemoteFileSystemProvider.Options.beforeAjaxSend
type: function(options)
---
---
##### shortDescription
Specifies a function that customizes an Ajax request before it is sent to the server.

##### param(options): Object
The request parameters.

##### field(options.formData): Object
Custom data (key/value pairs) that is sent to the server with the request.

##### field(options.headers): Object
The request headers.

##### field(options.xhrFields): Object
Native <a href="https://api.jquery.com/jQuery.ajax/#jqXHR" target="_blank">XMLHttpRequest object properties</a>.

---

[note] Use the [beforeSubmit](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/Configuration/#beforeSubmit) function to customize the **file download** requests.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                endpointUrl: "https://mydomain.com/api/files",
                // ...
                beforeAjaxSend: function({ headers, formData, xhrFields }) {
                    headers.RequestVerificationToken = document.getElementsByName("__RequestVerificationToken")[0].value;
                    formData.dataValue = "some data";
                    xhrFields.withCredentials = true;
                }  
            })
        });
    });

---
