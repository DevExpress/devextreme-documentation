---
id: dxFileUploader.Options.accept
type: String
default: ''
---
---
##### shortDescription
Specifies a file type or several types accepted by the UI component.

---
The value of this property is passed to the **accept** attribute of the underlying **input** element. Thus, the property accepts a MIME type or several types separated by a comma. Refer to the **input** element documentation for information on available values.

Note that the [allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions') property disables the uploading of the prohibited file types, but does not restrict these file types in the Open File dialog. To filter file types in the Open File dialog, use the `accept` option. 

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/"
}

