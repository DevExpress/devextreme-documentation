---
id: RemoteFileSystemProvider.Options.requestHeaders
type: any
default: {}
---
---
##### shortDescription
Specifies the request headers.

---

[note] The **requestHeaders** option is not in effect for the file download requests. 

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            fileSystemProvider: new DevExpress.fileManagement.RemoteFileSystemProvider({
                requestHeaders: {
                    YourHeaderName: "YourHeaderValue"
                },
                // ...
                }  
            })
        });
    });

---
