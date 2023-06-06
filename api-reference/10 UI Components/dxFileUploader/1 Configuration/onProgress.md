---
id: dxFileUploader.Options.onProgress
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file segment is uploaded.

##### param(e): ProgressEvent
Information about the event.

---

Note that the `onProgress` function is not in effect if you use FileUploader in `useForm` [upload mode](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') or call the [form.submit](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/submit) method.