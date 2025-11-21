---
id: dxChat.Options.fileUploaderOptions
type: dxFileUploader_Options
default: null
---
---
##### shortDescription
Configures file upload options.

---
Define [uploadFile](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadFile) in this object to enable file upload.

You can specify most [FileUploader properties](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/) in this object, except for the properties listed below. Chat overrides these properties.

- [dialogTrigger](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dialogTrigger)
- [rtlEnabled](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#rtlEnabled)
- [showFileList](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#showFileList)
- [uploadButtonText](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadButtonText)
- [uploadMode](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode)
- [value](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value)
- [visible](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#visible)

[note]

The following default settings differ from FileUploader:

- The **fileUploaderOptions**.[multiple](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#multiple) property value is `true` (`false` in FileUploader).

- The **fileUploaderOptions**.[allowedFileExtensions](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions) property value is `[".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".rtf", ".csv", ".md"]` (`[]` in FileUploader).

The following example reverts these options:

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat-container').dxChat({
        // ...
        fileUploaderOptions: {
            multiple: false,
            allowedFileExtensions: [],
        }
    })

##### Angular

    <!-- tab: app.component.html -->
    <dx-chat ... >
        <dxo-chat-file-uploader-options
            [multiple]="false"
            [allowedFileExtensions]="[]"
        >
        </dxo-chat-file-uploader-options>
    </dx-chat>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ... >
            <DxFileUploaderOptions
                :multiple="false"
                :allowed-file-extensions="[]"
            />
        </DxChat>
    </template>

    <script setup lang="ts">
    import { DxChat, DxFileUploaderOptions } from 'devextreme-vue/chat';
    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chat, FileUploaderOptions } from 'devextreme-react/chat';

    function App() {
        return (
            <>
                <Chat ... >
                    <FileUploaderOptions
                        multiple={false}
                        allowedFileExtensions={[]}
                    />
                </Chat>
            </>
        );
    }

---

[/note]