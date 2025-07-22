To configure FileUploader permissions, specify the following properties:

- [accept](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#accept)    
Specifies file types and extensions the component accepts. Assign MIME types to this property. Alternatively, define [allowedFileExtensions](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions) to specify accepted file extensions.
- [minFileSize](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#minFileSize)/[maxFileSize](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#maxFileSize)    
These properties specify the minimum/maximum file size the component accepts. To allow users to upload large files with less strain on your server resources, you can enable [chunk uploading](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/ChunkUpload/).

This example configures FileUploader to accept image files up to 32 MB in size:

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-uploader").dxFileUploader({
            accept: 'image/*',
            maxFileSize: 32000000,
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader
        accept="image/*"
        [maxFileSize]="32000000"
    ></dx-file-uploader>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader
            accept="image/*"
            :max-file-size="32000000"
        />
    </template>

##### React

    <!-- tab: App.tsx -->
    export default function App(): JSX.Element {
        return (
            <FileUploader
                accept="image/*"
                maxFileSize={32000000}
            />
        );
    }

---

[note] Implement additional validation on the back-end to ensure users do not upload restricted file types.