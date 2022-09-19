---
id: dxFileUploader.Options.allowedFileExtensions
type: Array<String>
default: []
---
---
##### shortDescription
Restricts file extensions that can be uploaded to the server.

---
#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/Validation/"
}

Note that the `allowedFileExtensions` property disables the uploading of the prohibited file types, but does not restrict these file types in the Open File dialog. To filter file types in the Open File dialog, use the [accept](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/accept.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#accept') option. 
