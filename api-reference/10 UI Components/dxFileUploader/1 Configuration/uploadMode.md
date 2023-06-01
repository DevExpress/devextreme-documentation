---
id: dxFileUploader.Options.uploadMode
type: Enums.FileUploadMode
default: 'instantly'
---
---
##### shortDescription
Specifies how the UI component uploads files.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/"
}

Depending on the **uploadMode**, the FileUploader UI component uses an <a href="http://www.w3schools.com/html/html_forms.asp" target="_blank">HTML form</a> or a <a href="https://developer.mozilla.org/en/docs/Web/API/FormData" target="_blank">FormData</a> interface with a series of Ajax requests to upload files. The **uploadMode** property accepts one of the following values:

- *"instantly"* (default)       
Ajax upload. Files are uploaded after they are selected.

- *"useButtons"*        
Ajax upload. Files are uploaded after a user clicks the **Upload** button.

- *"useForm"*        
HTML form upload. Files are uploaded when the HTML form is submitted.

#####See Also#####
- [Upload Mode](/concepts/05%20UI%20Components/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings/05%20Upload%20Mode.md '/Documentation/Guide/UI_Components/FileUploader/Upload_Files/Client-Side_Settings/#Upload_Mode')