---
id: FileSystemItem.path
type: String
---
---
##### shortDescription
The file system item's path.

---
The **path** field stores a path to a file/directory as a string of path items separated by a slash. The [pathKeys](/Documentation/ApiReference/UI_Components/dxFileManager/Interfaces/FileSystemItem/Fields/#pathKeys) field stores an array of path item keys. This difference between the fields is more distinct if you specify [keyExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/keyExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/Configuration/#keyExpr') for your File System Provider. For example, the path and pathkeys fields may have the following values if **keyExpr** targets a numeric field:

    path: "Documents/Todo.txt"
    pathkeys: [10, 20]