---
id: FileSystemItem.path
type: String
---
---
##### shortDescription
The file system item's path.

---
The **path** field stores a path to a file/directory as a string of path items separated with a slash. The [pathKeys](/Documentation/ApiReference/Common/Object_Structures/FileSystemItem/Fields/#pathKeys) field stores an array of keys of path items. This difference between the fields is more distinct if you specify [keyExpr](/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/Configuration/#keyExpr) for your File System Provider. For example, the path and pathkeys fields may have the following values if **keyExpr** targets a numeric field:

    path: "Documents/Todo.txt"
    pathkeys: [10, 20]