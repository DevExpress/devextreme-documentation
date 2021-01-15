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
    var uploadControl = $("#file-uploader").dxFileUploader("instance");

    uploadControl.upload(uploader.option('value[1]'));

---

[note]
The **upload** method is not supported in **useForm** [upload mode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode'). In **instantly** upload mode, the **upload** method is useful if you use the [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value') property to select a file(s) you want to upload.