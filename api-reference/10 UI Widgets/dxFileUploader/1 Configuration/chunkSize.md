---
id: dxFileUploader.Options.chunkSize
type: Number
default: 0
---
---
##### shortDescription
Specifies the chunk size in bytes. Applies only if [uploadMode](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/uploadMode.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode') is *"instantly*" or *"useButtons"*. Requires a server that can process file chunks.

---
Set this option to a positive value to enable chunk upload. The widget should be configured as described in the [Chunk Upload](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/05%20Client-Side%20Settings/07%20Chunk%20Upload.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Client-Side_Settings/#Chunk_Upload') article. When chunk upload is enabled, the **FileUploader** sends several <a href="https://www.w3.org/TR/html401/interact/forms.html#h-17.13.4" target="_blank">multipart/form-data</a> requests with information about the file and chunk. The *"chunkMetadata"* parameter contains chunk details as a JSON object of the following structure:

    {
        "FileGuid": string,   
        "FileName": string,   
        "FileType": string,   
        "FileSize": long,
        "Index": long,        // The chunk's index
        "TotalCount": long,   // The file's total chunk count
    }

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileUploader/ChunkUploading/"
}

#####See Also#####
- **Server-Side Implementation**: [ASP.NET](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/10%20Server-Side%20Implementation%20in%20ASP.NET/2%20Chunk%20Upload.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_ASP.NET/#Chunk_Upload') | [PHP](/concepts/05%20Widgets/FileUploader/20%20Upload%20Files/20%20Server-Side%20Implementation%20in%20PHP/2%20Chunk%20Upload.md '/Documentation/Guide/Widgets/FileUploader/Upload_Files/Server-Side_Implementation_in_PHP/#Chunk_Upload')