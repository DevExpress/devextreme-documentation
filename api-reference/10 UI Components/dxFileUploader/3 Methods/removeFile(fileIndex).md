---
id: dxFileUploader.removeFile(fileIndex)
---
---
##### shortDescription
Removes a file with the specified index.

##### param(fileIndex): Number
The file's index.

---
---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#uploaderContainer").dxFileUploader("instance");

    uploadControl.removeFile(1)

---

[note] 
The **removeFile** method is not supported in **useForm** [upload mode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode').