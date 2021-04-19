---
id: dxFileUploader.Options.abortUpload
type: function(file, uploadInfo?)
---
---
##### shortDescription
A function that cancels the file upload.

##### param(file): File
The file that is uploaded.

##### param(uploadInfo?): UploadInfo
Information about the file upload session.

##### return: Promise<any> | any
A Promise that is resolved after the upload is aborted. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            multiple: true,
            chunkSize: 200000,
            abortUpload: function(file, uploadInfo) {
                // your code
            }
        });      
    });

---
