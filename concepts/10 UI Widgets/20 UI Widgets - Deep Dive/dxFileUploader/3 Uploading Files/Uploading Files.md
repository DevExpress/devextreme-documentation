For uploading files using the [FileUploader](/api-reference/10%20UI%20Widgets/dxFileUploader '/Documentation/ApiReference/UI_Widgets/dxFileUploader/') widget, you should implement a service that saves uploaded files on a server. The service URL is passed to the **action** attribute of a web form or to the [uploadUrl](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadUrl.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadUrl') option of the widget depending on the upload mode you use. You should also specify the [name](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name') option of the widget to access the uploaded files within a web server.

Asynchronous mode:

    <!--JavaScript-->
    var fileUploaderOptions = {
        uploadMode: 'useButtons',
        name: 'myFile',
        uploadUrl: '/upload.php',
    }

In synchronous mode, the widget should be enclosed in the **form** element.

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <div id="fileUploader"></div>
        <input type="submit">
    </form>

<!---->

    <!--JavaScript-->
    $("#fileUploader").dxFileUploader({
        name: 'myFile'
    });

#####AngularJS Approach#####

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <div dx-file-uploader={
            name: 'myFile'
        }"></div>
        <input type="submit">
    </form>

#####Knockout Approach#####

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <div data-bind="dxFileUploader: {
            name: 'myFile'
        }"></div>
        <input type="submit">
    </form>

The **FileUploader** widget can upload files synchronously (using a [web form](https://www.w3schools.com/html/html_forms.asp)) or asynchronously (using [FormData](https://www.w3.org/TR/XMLHttpRequest/#interface-formdata) and [AJAX](https://www.w3schools.com/ajax/default.asp)), depending on the selected upload mode. The upload mode is specified using the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') option, which accepts the following values.

- "instantly"  
Asynchronous upload. Starts uploading instantly as files are selected.

- "useButtons"  
Asynchronous upload. Starts uploading when a user clicks the "Upload" button.

- "useForm"  
Synchronous upload. Uploads the specified files when the **Submit** button of the current [form](https://www.w3schools.com/htmL/html_forms.asp) is clicked.

[note]Internet Explorer 8 and 9 support only synchronous uploading because they do not support [FormData](https://www.w3.org/TR/XMLHttpRequest/#interface-formdata).

The following example illustrates the **FileUploader** widget configured for the asynchronous upload. By default, the **uploadMode** option is set to '*instantly*'.

    <!--JavaScript-->
    var fileUploaderOptions = {
        selectButtonText: 'Select file',
        labelText: 'Drop file here',
        multiple: true,
        name: 'myFile',
        uploadMode: 'useButtons',
        uploadUrl: '/upload.php'
    }

The example below demonstrates **FileUploader** in synchronous mode.

    <!--HTML-->
        <form action="/upload.php" method="post" enctype="multipart/form-data">
            <div id="fileUploader"></div>
            <input type="submit">
        </form>

<!---->

    <!--JavaScript-->
    $("#fileUploader").dxFileUploader({
        selectButtonText: 'Select file',
        labelText: 'Drop file here',
        multiple: true,
        name: 'myFile[]',
        uploadMode: 'useForm',
    });

#####AngularJS Approach#####

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <div dx-file-uploader={
            selectButtonText: 'Select file',
            labelText: 'Drop file here',
            multiple: true,
            name: 'myFile[]',
            uploadMode: 'useForm',
        }"></div>
        <input type="submit">
    </form>

#####Knockout Approach#####

    <!--HTML-->
    <form action="/upload.php" method="post" enctype="multipart/form-data">
        <div data-bind="dxFileUploader: {
            selectButtonText: 'Select file',
            labelText: 'Drop file here',
            multiple: true,
            name: 'myFile[]',
            uploadMode: 'useForm',
        }"></div>
        <input type="submit">
    </form>

[note]In synchronous mode, if you enable multiple file selection, you should specify the [name](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/name.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#name') option, using "[]" (as demonstrated in the example above). This is essential for working not only with the last file, but with the whole set of uploaded files. If multiple file selection is disabled, square brackets are not required. In asynchronous mode, each file is uploaded using a separate AJAX request; that is why square brackets are also unnecessary in this case.

Since asynchronous mode uses AJAX requests, the current web page is not reloaded after upload is complete. In this case, the server informs the widget about upload results using the appropriate response code (for example, 400 or 500). 

**PHP**

    //Check to see if the array of uploaded files exists.
    if (!isset($_FILES['myFile'])) {
        http_response_code(400);
    }

[note]The PHP function [http_response_code](https://php.net/manual/en/function.https-response-code.php) can be applied for PHP5 >= 5.4.0. In earlier versions, use the [header](https://php.net/manual/en/function.header.php) function.

**C#**

    //Check to see if the request holds a file and then make sure that the file is not empty.
    if (myFile == null || myFile.ContentLength <= 0) 
    {
        Response.StatusCode = 400;
        Response.StatusDescription = "File is not specified";
    }

The synchronous upload implies that your application navigates to the URL specified in the **action** attribute. In this case, you can reload the initial page, or redirect to another page.
