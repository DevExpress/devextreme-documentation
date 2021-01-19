---
id: dxFileUploader.upload()
---
---
##### shortDescription
Uploads all the selected files.

---

---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#file-uploader").dxFileUploader("instance");

    uploadControl.upload();

---

[note]
The **upload** method is not supported in **useForm** [upload mode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode'). In **instantly** upload mode, the **upload** method is useful if you use the [value](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property to select a file(s) you want to upload.

