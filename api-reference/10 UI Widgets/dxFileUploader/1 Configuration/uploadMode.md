---
default: 'instantly'
acceptValues: 'instantly' | 'useButtons' | 'useForm'
type: String
---
---
##### custom_default_for_Internet_Explorer_9_and_10
'useForm'

##### shortDescription
Specifies how the widget uploads files.

---
The option accepts the following values.

- **instantly**  
 Starts uploading instantly as files are selected.

- **useButtons**  
 Starts uploading when a user clicks the "Upload" button.

- **useForm**  
 Uploads the specified files when the **submit** button of the current [form](https://www.w3schools.com/htmL/html_forms.asp) is clicked. In this case, the **FileUploader** widget should be enclosed in the **form** element.

When configuring the widget using [ASP.NET MVC Wrappers](/concepts/35%20ASP.NET%20MVC%20Wrappers/20%20Fundamentals '/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/'), specify this option using the `FileUploadMode` enum. This enum accepts the following values: `Instantly`, `UseButtons` and `UseForm`.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/File_Uploader/FileUploading/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 5px" target="_blank">View Demo</a>