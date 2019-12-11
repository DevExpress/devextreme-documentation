The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the **FileUploader** area on the page.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-file_uploader-file_selection" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds the **FileUploader** to your page. To restrict the file types that can be uploaded to the server, the [accept](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/accept.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#accept') option is used. Since this option is, basically, the *"accept"* attribute of the underlying `<input>` element, it accepts the same values described [here](https://www.w3schools.com/TAGs/att_input_accept.asp).

    <!--HTML--><div id="fileUploaderContainer"></div>

<!---->

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            accept: "image/*"
        });
    });

By default, a user is allowed to upload only one file at a time. To allow uploading several files at once, set the [multiple](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#multiple') option to *true*.

    <!--JavaScript-->$(function() {
        $("#fileUploaderContainer").dxFileUploader({
            multiple: true
        });
    });

If you need to access the selected files at runtime, get the value of the [value](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#value') option using the following command. It returns an array, whose members are each an instance implementing the [File interface](https://developer.mozilla.org/en-US/docs/Web/API/File).

    <!--JavaScript-->var files = $("#fileUploaderContainer").dxFileUploader("option", "value");

The **FileUploader** can operate in two different modes, each demanding different client- and server-side configuration. For details, see the [Client-Side Settings](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/') article.

#####See Also#####
- [Widget Basics - jQuery](/concepts/00%20Getting%20Started/10%20Widget%20Basics%20-%20jQuery '/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/')
- [Widget Basics - AngularJS](/concepts/00%20Getting%20Started/20%20Widget%20Basics%20-%20AngularJS '/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/')
- [Widget Basics - Knockout](/concepts/00%20Getting%20Started/25%20Widget%20Basics%20-%20Knockout '/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/')
- [FileUploader - Upload Files | Client-Side Settings](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/')
- [FileUploader - Upload Files | Server-Side Implementation in ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/')
- [FileUploader - Upload Files | Server-Side Implementation in PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')
- [FileUploader API Reference](/api-reference/10%20UI%20Widgets/dxFileUploader '/Documentation/ApiReference/UI_Widgets/dxFileUploader/')

[tags]file uploader, fileUploader, overview, accepted file types, multiple files, access files in code