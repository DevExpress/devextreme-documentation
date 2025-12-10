---
id: dxChat.Options.fileUploaderOptions
type: dxFileUploader_Options
default: null
---
---
##### shortDescription
Configures file upload options.

---
Define [uploadFile](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadFile.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadFile') in this object to enable file upload.

You can specify most [FileUploader properties](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/') in this object, except for the properties listed below. Chat overrides these properties.

- [dialogTrigger](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/dialogTrigger.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dialogTrigger')
- [rtlEnabled](/api-reference/10%20UI%20Components/DOMComponent/1%20Configuration/rtlEnabled.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#rtlEnabled')
- [showFileList](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/showFileList.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#showFileList')
- [uploadButtonText](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadButtonText.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadButtonText')
- [uploadMode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode')
- [value](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value')
- [visible](/api-reference/10%20UI%20Components/Widget/1%20Configuration/visible.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#visible')

[note]

The following default settings differ from FileUploader:

- The **fileUploaderOptions**.[multiple](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/multiple.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#multiple') property value is `true` (`false` in FileUploader).

- The **fileUploaderOptions**.[allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions') property value is `[".jpg", ".jpeg", ".png", ".gif", ".webp", ".bmp", ".pdf", ".docx", ".xlsx", ".pptx", ".txt", ".rtf", ".csv", ".md"]` (`[]` in FileUploader).

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

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Chat/FileAttachments/"
}