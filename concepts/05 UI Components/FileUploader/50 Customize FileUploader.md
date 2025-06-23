This tutorial demonstrates how to customize FileUploader appearance.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.html, /Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.js, /Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.css"></div>

Specify the [dropZone](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone) property to integrate a custom drop zone. Use the `width` and `height` CSS styles to modify drop zone dimensions. This tutorial also implements the `background-color` and `border-radius` styles:

---

##### jQuery

    <!-- tab: index.html -->
    <div class="file-uploader-block"></div>
    <div id="file-uploader"></div>

    <!-- tab: index.js -->
    $(() => {
        $('#file-uploader').dxFileUploader({
            dropZone: '.file-uploader-block',
        })
    })

    <!-- tab: styles.css -->
    .file-uploader-block {
        width: 350px;
        height: 200px;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

##### Angular

    <!-- tab: app.component.html -->
    <div class="file-uploader-block"></div>
    <dx-file-uploader dropZone=".file-uploader-block"></dx-file-uploader>

    <!-- tab: app.component.css -->
    .file-uploader-block {
        width: 350px;
        height: 200px;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div class="file-uploader-block"></div>
        <DxFileUploader drop-zone=".file-uploader-block" />
    </template>

    <!-- tab: styles.css -->
    .file-uploader-block {
        width: 350px;
        height: 200px;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

##### React

    <!-- tab: App.tsx -->
    export default function App() {
        return (
            <div class="file-uploader-block"></div>
            <FileUploader dropZone=".file-uploader-block" />
        )
    }

    <!-- tab: styles.css -->
    .file-uploader-block {
        width: 350px;
        height: 200px;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

---

This tutorial places the FileUploader inside a custom drop zone container:

---

##### jQuery

    <!-- tab: index.html -->
    <div class="file-uploader-block">
        <div id="file-uploader"></div>
    </div>

    <!-- tab: index.js -->
    $(() => {
        $('#file-uploader').dxFileUploader({
            dropZone: '.file-uploader-block',
        })
    })

##### Angular

    <!-- tab: app.component.html -->
    <div class="file-uploader-block">
        <dx-file-uploader dropZone=".file-uploader-block"></dx-file-uploader>
    </div>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <div class="file-uploader-block">
            <DxFileUploader drop-zone=".file-uploader-block" />
        </div>
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App() {
        return (
            <div class="file-uploader-block">
                <FileUploader dropZone=".file-uploader-block" />
            </div>
        )
    }

---

To center FileUploader elements inside the drop zone, assign the following CSS styles to the `.dx-fileuploader-input-wrapper` selector:

    <!-- tab: styles.css -->
    .dx-fileuploader-input-wrapper {
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

When users upload files, the component lists selected files in its container. To move this list, specify absolute positioning. Assign the following CSS styles to the `.dx-fileuploader-files-container` selector:

    <!-- tab: styles.css -->
    .dx-fileuploader-files-container {
        position: absolute;
        top: 70%;
        left: 50%;
        transform: translate(-50%, 0);
        width: 35%;
        height: 30%;
        overflow-y: auto;
    }

Note the following styles: 

- `top: 70%`: Positions the uploaded file list container below the FileUploader.
- `overflow-y: auto`: Adds a scroll bar to the uploaded file list container when necessary.

The component's default behaviour is to upload selected files immediately. To allow users to select and upload files separately, set the [uploadMode](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode) property to *"useButtons"*. This creates multiple upload buttons in the FileUploader container:

- Individual upload buttons for each item in the uploaded file list.
- A common "Upload" button that uploads all files at once.

This tutorial hides the common "Upload" button using the following CSS style:

    <!-- tab: styles.css -->
    .dx-fileuploader-content > .dx-fileuploader-upload-button {
        visibility: hidden;
    }