---
id: dxFileUploader.Options.uploadChunk
type: function(file, uploadInfo)
---
---
##### shortDescription
A function that uploads a file in chunks.

##### param(file): File
The file that is uploaded.

##### param(uploadInfo): Object
Information about the file upload session.

##### field(uploadInfo.bytesUploaded): Number
The count of bytes that is already uploaded to the server.

##### field(uploadInfo.chunkBlob): Blob
The binary content of the chunk that is uploaded.

##### field(uploadInfo.chunkCount): Number
The number of all chunks.

##### field(uploadInfo.chunkIndex): Number
The index of the chunk that is uploaded.

##### field(uploadInfo.customData): Object
Any custom information that is saved during the upload.

##### return: Promise<any> | any
A Promise that is resolved after the chunk is uploaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            multiple: true,
            chunkSize: 200000,
            uploadChunk: function(file, uploadInfo) {
                // your code
            }
        });      
    });

---
