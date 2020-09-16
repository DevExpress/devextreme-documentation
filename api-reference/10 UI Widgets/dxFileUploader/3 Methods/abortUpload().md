---
id: dxFileUploader.abortUpload()
---
---
##### shortDescription
Cancels the file upload.

---

---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#uploaderContainer").dxFileUploader("instance");

    uploadControl.abortUpload()

---

[note]
The **abortUpload** method works differently in **useForms**, **useButtons** and **instantly** [upload modes](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode):

- **useForms**: The method is not supported in this mode.

- **useButtons**: Cancels the file upload and makes the file ready for uploading.  

- **instantly**: Cancels the file upload.