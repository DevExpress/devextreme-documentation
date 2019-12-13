---
id: dxFileUploader.Options.name
type: String
default: 'files[]'
---
---
##### shortDescription
Specifies the value passed to the **name** attribute of the underlying **input** element. Required to access uploaded files on the server.

---
[note] This option's value should end with square brackets if the [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') is *"useForm"*. Refer to the [Upload Mode](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings/05%20Upload%20Mode.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/#Upload_Mode') topic for an example.

#####See Also#####
- **Server-Side Implementation** in [ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/') | [PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/')