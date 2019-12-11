---
default: 'POST'
acceptValues: 'POST' | 'PUT'
type: String
---
---
##### shortDescription
Specifies the method for the upload request.

---
The option makes sense only if the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') option is set to "useButtons" or "instantly".

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `UploadHttpMethod` enum. This enum accepts the following values: `POST` and `PUT`.