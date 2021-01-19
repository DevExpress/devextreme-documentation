---
id: dxFileManager.getCurrentDirectory()
---
---
##### shortDescription
Gets the current directory object.

##### return: Object
An object that contains information about the **FileManager** item.

---

This method returns the following **FileManager** item's parameters: 

- **pathInfo**: Array<Object> - Information about the item's path.
- **parentPath**: string - The item's parent path.
- **key**: string - The item's key.
- **relativeName**: string - The item's relative name.
- **isDirectory**: boolean - The item's type (file or directory).
- **isRoot**: boolean - The directory type (standard or root).
- **size**: number - The item size.
- **dateModified**: Date - The item's modified date.
- **thumbnail**: string - The item's thumbnail URL.
- **tooltipText**: string - The item's tooltip text.
