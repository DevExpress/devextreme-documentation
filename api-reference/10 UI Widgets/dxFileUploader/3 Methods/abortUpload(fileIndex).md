---
id: dxFileUploader.abortUpload(fileIndex)
---
---
##### shortDescription
Cancels the file upload.

##### param(fileIndex): Number
The index of a file whose upload is being cancelled. 

---

---

##### jQuery

    <!-- tab: JavaScript -->
    var uploadControl = $("#uploaderContainer").dxFileUploader("instance");

    uploadControl.abortUpload(1)

---

[note]
The **abortUpload** method works differently in **useForms**, **useButtons** and **instantly** [upload modes](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode):

- **useForms**: The method is not supported in this mode.

- **useButtons**: Cancels the file upload and makes the file ready for uploading.  

- **instantly**: Cancels the file upload.