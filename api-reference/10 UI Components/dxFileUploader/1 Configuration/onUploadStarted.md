---
id: dxFileUploader.Options.onUploadStarted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the file upload is started.

##### param(e): ui/file_uploader:UploadStartedEvent
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---

Note that the `onUploadStarted` function is not in effect if you use FileUploader in `useForm` [upload mode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') or call the [form.submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit) method.