---
id: dxChat.Options.fileUploaderOptions
type: dxFileUploader_Options
default: null
---
---
##### shortDescription
Configures file upload options.

---
At least one option must be set in this object for file upload to function (and to display the "Attach" button).

You can specify most of the [FileUploader properties](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/) in this object except those listed below. These properties are overridden by Chat.

- [dialogTrigger](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#dialogTrigger)
- [rtlEnabled](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#rtlEnabled)
- [showFileList](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#showFileList)
- [uploadButtonText](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadButtonText)
- [uploadMode](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode)
- [value](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#value)
- [visible](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#visible)

[note] The **fileUploaderOptions**.[multiple](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#multiple) property default value is `true` (unlike in FileUploader). 

---

##### jQuery

    <!-- tab: index.js -->
    $('#chat-container').dxChat({
        fileUploaderOptions: {
            multiple: false,
            // ...
        }
    })

##### Angular

    <!-- tab: app.component.ts -->
    import { DxChatModule} from 'devextreme-angular';

    // TBA

    <!-- tab: app.component.html -->
     <dx-chat ...
        [fileUploaderOptions]="fileUploaderOptions"
    ></dx-chat>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxChat ...
            :file-uploader-options="fileUploaderOptions"
        >
        </DxChat>
    </template>

    <script setup lang="ts">
    import { DxChat } from 'devextreme-vue/chat';

    // TBA

    </script>

##### React

    <!-- tab: App.tsx -->
    import { Chat, type ChatTypes } from 'devextreme-react/chat';

    // TBA

    function App() {
        return (
            <>
                <Chat ...
                    fileUploaderOptions={fileUploaderOptions}
                />
            </>
        );
    }

---
