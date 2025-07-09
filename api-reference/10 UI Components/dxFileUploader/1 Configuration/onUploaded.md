---
id: dxFileUploader.Options.onUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file is successfully uploaded.

##### param(e): ui/file_uploader:UploadedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.message): String
The message displayed by the UI component when uploading is finished.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/CustomDropzone/"
}

Note that the `onUploaded` function is not in effect if you use FileUploader in `useForm` [upload mode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') or call the [form.submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit) method.

#####See Also#####
- [uploadedMessage](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadedMessage.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadedMessage')