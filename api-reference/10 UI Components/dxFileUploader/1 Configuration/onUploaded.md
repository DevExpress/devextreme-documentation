---
id: dxFileUploader.Options.onUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file is successfully uploaded.

##### param(e): UploadedEvent
Information about the event.

---

Note that the `onUploaded` function is not in effect if you use FileUploader in `useForm` [upload mode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') or call the [form.submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit) method.

#####See Also#####
- [uploadedMessage](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadedMessage.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadedMessage')