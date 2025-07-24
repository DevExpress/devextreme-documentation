You can customize FileUploader visual elements as your needs dictate. To customize the file drag and drop zone, specify the [dropZone](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dropZone) property. To configure display text, specify properties such as [labelText](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#labelText), [readyToUploadMessage](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#readyToUploadMessage), and [uploadButtonText](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadButtonText).

This example implements a custom drop zone and configures the **labelText** property:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            labelText: 'Drop Images Here to Upload...',
            dropZone: '.file-uploader-block',
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        labelText="Drop Images Below to Upload..."
        dropZone=".file-uploader-block"
    ></dx-file-uploader>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            label-text="Drop Images Below to Upload..."
            drop-zone=".file-uploader-block"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App(): JSX.Element {
        return (
            <FileUploader
                labelText="Drop Images Below to Upload..."
                dropZone=".file-uploader-block"
            />
        );
    }

---

To customize FileUploader visual elements further, use custom CSS. This example implements styles to position the **labelText** string below the "Select a file" button. Additionally, this example centers the component horizontally inside the FileUploader drop zone. Scrollbars appear when the file list overflows the drop zone container (`overflow-y: auto;`).

    <!-- tab: styles.css -->
    .demo-container {
        margin: 50px;
        height: 50vh;
    }

    .file-uploader-block {
        width: 100%;
        height: 100%;
        background-color: #f5f5f5;
        border-radius: 16px;
    }

    #file-uploader {
        height: 100%;
    }

    .dx-fileuploader-input-wrapper {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .dx-fileuploader-input-container {
        text-align: center;
    }

    #file-uploader .dx-fileuploader-wrapper {
        overflow-y: auto;
    }

For more information about customizing DevExtreme FileUploader, refer to the following topic: [Customize FileUploader](/Documentation/Guide/UI_Components/FileUploader/Customize_FileUploader/)