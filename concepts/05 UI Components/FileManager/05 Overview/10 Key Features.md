- **File System Support**    
The DevExtreme FileManager supports [in-memory](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/) (JSON), [remote](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/), and [custom](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/) file system provider types.

- **Cloud Service Integration**    
You can implement the custom file system provider type to connect FileManager to a cloud service provider (for instance, [Amazon S3](/Documentation/Guide/Common/Integration_Guides/Manage_Amazon_S3_Storage_with_DevExtreme_Components/#FileManager) or [Azure Blob](/Documentation/Guide/Common/Integration_Guides/Manage_Azure_Blob_Storage_with_DevExtreme_Components/#FileManager)).

- **Detail and Thumbnail Views**    
FileManager supports two file representation modes: "Thumbnails" and "Details". "Thumbnails" displays only thumbnails, while "Details" includes [additional information](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/details/). Users can switch between the two options in the FileManager [toolbar](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/).

- **Configurarble Permissions**     
DevExtreme FileManager allows you to configure [permissions](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/) to manage user access to files. You can enable/disable operations such as file upload/download, creation, and deletion.

- **File Uploading**    
You can configure upload options such as [maximum file size](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/#maxFileSize) and [chunk uploading](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/#chunkSize). Users can upload files through drag and drop operations or in the component toolbar.

- **Adaptability**    
DevExtreme FileManager fits screens of all sizes and ships with right-to-left ([RTL](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#rtlEnabled)) representation support.

- **Customization**    
FileManager allows you to customize visual elements such as [file thumbnails](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#customizeThumbnail) and toolbar [items](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/items/).

- **Data Selection**    
FileManager supports single and multiple [selection modes](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#selectionMode). The following image demonstrates available FileManager item states:    
<img src="/images/FileManager/filemanager-item-states.png" alt="FileManager item states"/>
    1. **Selected Item**
    2. **Selected and Focused**
    3. **Hover State**
    4. **Default State**
    5. **Focused Item**