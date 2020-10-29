---
id: dxFileUploader.upload(file)
---
---
##### shortDescription
Uploads the specified file.

##### param(file): File
The file that is being uploaded.

---

---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#uploaderContainer").dxFileUploader("instance");

    uploadControl.upload(uploader.option('value[1]'))

---

[note]
File upload is not supported in **useForms** upload mode ([uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode')). In **instantly** upload mode, you can use the **upload** method to upload files specified in the  [value](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#value') option. 