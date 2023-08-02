---
id: UploadInfo.customData
type: any
---
---
##### shortDescription
Custom information that you can pass during file upload. For instance, you can specify a custom file ID when the first part of a file is being uploaded.

---
---
##### jQuery

    if(uploadInfo.chunkIndex === 0) {
        uploadInfo.customData.myId = "myIdValue";
    }

##### Angular

    if(uploadInfo.chunkIndex === 0) {
        uploadInfo.customData.myId = "myIdValue";
    }

##### Vue

      if(uploadInfo.chunkIndex === 0) {
        uploadInfo.customData.myId = "myIdValue";
    }

##### React

    if(uploadInfo.chunkIndex === 0) {
        uploadInfo.customData.myId = "myIdValue";
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/"
}
---
