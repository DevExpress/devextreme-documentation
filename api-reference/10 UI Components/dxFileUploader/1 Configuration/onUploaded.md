---
id: dxFileUploader.Options.onUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file is successfully uploaded.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.message): String
The message displayed by the UI component when uploading is finished.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---

Note that the `onUploaded` function is not in effect if you use FileUploader in `useForm` [upload mode](/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode) or call the [form.submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit) method.

#####See Also#####
- [uploadedMessage](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadedMessage.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadedMessage')