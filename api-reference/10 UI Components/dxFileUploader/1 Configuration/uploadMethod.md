---
id: dxFileUploader.Options.uploadMethod
acceptValues: 'POST' | 'PUT'
type: String
default: 'POST'
---
---
##### shortDescription
Specifies the method for the upload request.

---
The property makes sense only if the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadMode') property is set to "useButtons" or "instantly".

#include common-ref-enum with {
    enum: "`UploadHttpMethod`",
    values: "`POST` and `PUT`"
}