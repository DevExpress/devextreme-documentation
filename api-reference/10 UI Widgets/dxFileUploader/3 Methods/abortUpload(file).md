---
id: dxFileUploader.abortUpload(file)
---
---
##### shortDescription
Cancels the file upload.

##### param(file): File
The file for which the upload is cancelled.

---

---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#uploaderContainer").dxFileUploader("instance");

    uploadControl.abortUpload(uploader.option('value[1]'))

---

[note]
The **abortUpload** method works differently in the following [upload modes](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode'):

- **useForms**: The method is not supported in this mode.

- **useButtons**: Cancels the file upload and makes the file available for upload.  

- **instantly**: Cancels the file upload.
