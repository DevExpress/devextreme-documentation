---
id: dxFileUploader.Options.accept
type: String
default: ''
---
---
##### shortDescription
Specifies file types users can select in the Open File dialog. The default value accepts all file types.

---
FileUploader passes the value of this property to the **accept** attribute of the underlying **input** element. Utilize MIME types or file extensions separated by commas. Examples include:

- `image/*` - only image files
- `image/png, image/jpg` or `.png, .jpg` - only PNG and JPG images
- `image/png` or `.png` - only PNG images

Refer to the documentation of the [accept](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/accept) attribute for further information on available values.

[note]

- If you pass a value that the component's underlying **input** element cannot parse, the Open File dialog will accept all file types.
- The [allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#allowedFileExtensions') property prevents prohibited file types from uploading, but does not restrict them in the Open File dialog. To filter file types in the Open File dialog, you must define the `accept` option. 

[/note]

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/"
}