This tutorial demonstrates how to customize FileUploader appearance. The following live example demonstrates the result:

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.html, /Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.js, /Content/Applications/25_1/UIWidgets/FileUploader/Customization/index.css"></div>

To integrate a custom FileUploader drop zone, specify the [dropZone](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/dropZone.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone') property. Create the component inside the drop zone container to place FileUploader in its drop zone:

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

Implement the following CSS styles to customize the FileUploader and its drop zone:

    <!-- tab: styles.css -->
    .file-uploader-block {
        width: 360px;
        height: 360px;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

    #file-uploader {
        height: 100%;
    }

    .dx-fileuploader-content {
        display: grid;
        height: 100%;
        position: relative;
    }

    .dx-fileuploader-input-wrapper {
        place-self: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

Note the following styles:

- `flex-direction: column`: Rearranges the "Select a file" button and "or Drop a File Here" label vertically.
- `place-self: center`: Centers the button and label in the `.dx-fileuploader-content` grid container.

When users upload files, the component lists selected files in its container. To move this list below the FileUploader drop zone, specify absolute positioning and implement the following styles:

    <!-- tab: styles.css -->
    .dx-fileuploader-wrapper {
        overflow: visible;
    }

    .dx-fileuploader-show-file-list .dx-fileuploader-files-container {
        padding-top: 0;
    }

    .dx-fileuploader-files-container {
        position: absolute;
        top: calc(100% + 16px);
        left: 8px;
        right: 8px;
        width: auto;
        max-height: 180px;
        overflow-y: auto;
        box-sizing: border-box;
    }

Note the following styles: 

- `top: calc(100% + 16px)`: Positions the uploaded file list container below the FileUploader.
- `overflow-y: auto`: Adds a scroll bar to the uploaded file list when necessary.

[note] To ensure absolute positioning applies to `.dx-fileuploader-files-container`, specify relative positioning for the `.dx-fileuploader-content` selector.

The component's default behaviour is to upload selected files immediately. To allow users to select and upload files separately, set the [uploadMode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') property to *"useButtons"*. This creates multiple upload buttons in the FileUploader container:

- Individual upload buttons for each item in the uploaded file list.
- A common "Upload" button that uploads all files at once.

This tutorial hides the common "Upload" button using the following CSS style:

    <!-- tab: styles.css -->
    .dx-fileuploader-content > .dx-fileuploader-upload-button {
        display: none;
    }