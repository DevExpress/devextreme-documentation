- **Data Binding**    
To bind FileManager to data, specify the [fileSystemProvider](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#fileSystemProvider) property. The component supports the following file system provider types:    
    - [Object](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/)    
    An in-memory array of JSON objects.
    - [Remote](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Remote/)    
    A server-side file system.
    - [Custom](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/)    
    Custom file system implementation.

- **Data Representation**    
FileManager supports two file representation modes: a **details view** and a **thumbnail view**. The **thumbnail view** displays only thumbnails, while the **details view** offers additional [details](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/details/). To choose between the two, specify the **itemView**.[mode](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/#mode) property. Users can switch between the two options using the FileManager [toolbar](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/).

- **Permissions**     
Configure the [permissions](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/) object to specify available FileManager actions:
    - **copy**    
    Duplicate files.
    - **create**    
    Create new directories.
    - **delete**    
    Delete files and directories.
    - **download**    
    Download files.
    - **move**    
    Move files and directories within the component file system.
    - **rename**    
    Rename files and directories.
    - **upload**    
    Upload files to the component file system.

- **File Uploading and Downloading**    
To enable file uploading and downloading functionalities, assign `true` to the [upload](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#upload) and [download](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#download) properties. Configure upload options such as [maxFileSize](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/#maxFileSize) in the [upload](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/upload/) object.

- **Adaptability and Customization**    
DevExtreme FileManager supports screens of all sizes. You can customize FileManager visual elements to fit your needs with properties such as [width](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#width), [height](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#height), and [customizeThumbnail](/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#customizeThumbnail).

- **Data Selection**    
FileManager supports single and multiple selection modes. Users can select items with mouse clicks, or focus and select items with keyboard actions. The following image demonstrates available FileManager item states:    
<img src="/images/FileManager/filemanager-item-states.png" alt="FileManager item states"/>
    1. **Selected Item**
    2. **Selected and Focused**
    3. **Hover State**
    4. **Default State**
    5. **Focused Item**