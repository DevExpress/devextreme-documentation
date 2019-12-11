Depending on the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') you choose, the **FileUploader** widget uploads files using an [HTML form](https://www.w3schools.com/html/html_forms.asp) or using the [FormData](https://developer.mozilla.org/en/docs/Web/API/FormData) interface and a series of [Ajax](https://www.w3schools.com/ajax/default.asp) requests. The **uploadMode** option accepts one of the following values.

- *"instantly"* (default)   
Ajax upload. Files are uploaded instantly after they are selected.

- *"useButtons"*  
Ajax upload. Files are uploaded after a user clicks the **Upload** button.

- *"useForm"*  
HTML form upload. Files are uploaded when the HTML form is submitted.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

[note]Because Internet Explorer 9 does not support the [FormData](https://developer.mozilla.org/en/docs/Web/API/FormData) interface, you can only upload files using the HTML form in this browser.

The following examples show how to configure the **FileUploader** for uploading files using Ajax requests and using an HTML form. Note that in both cases, the [name](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name') option is specified, so that the uploaded files can be accessed on the server.

- **Ajax upload**

        <!--HTML--><div id="fileUploaderContainer"></div>

    <!---->

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following line to allow a user to upload multiple files
                // multiple: true,
                uploadMode: "useButtons", // or "instantly"
                uploadUrl: "/upload.php"
            });
        });
<!---->

- **HTML form upload**

    <!---->

        <!--HTML--><form action="/upload.php" method="post" enctype="multipart/form-data">
            <div id="fileUploaderContainer"></div>
            <input type="submit">
        </form>

    <!---->

        <!--JavaScript-->$(function() {
            $("#fileUploaderContainer").dxFileUploader({
                name: "file",
                // Uncomment the following lines to allow a user to upload multiple files
                // multiple: true,
                // name: "files[]",
                uploadMode: "useForm"
            });
        });

[note] If you allow a user to upload multiple files using an HTML form, the value of the **name** option must end with square brackets as shown in the commented-out code line in the example above.

#####See Also#####
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/')
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [FileUploader API Reference](/api-reference/10%20UI%20Widgets/dxFileUploader '/Documentation/ApiReference/UI_Widgets/dxFileUploader/')

[tags]file uploader, fileUploader, client side, upload mode, ajax, html form, formData