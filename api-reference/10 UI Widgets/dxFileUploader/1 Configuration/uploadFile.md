---
id: dxFileUploader.Options.uploadFile
type: function(file, progressCallback)
---
---
##### shortDescription
A function that uploads a file.

##### param(file): File
The file that is uploaded.

##### param(progressCallback): function()
A function that you should call to notify the widget about the file upload progress.

##### return: Promise<any> | any
A Promise that is resolved after the file is uploaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            multiple: true,
            uploadFile: function(file, progressCallback) {
                // your code
                progressCallback(100);
                // ...
                progressCallback(200);
                // ...
            }
        });         
    });

---
