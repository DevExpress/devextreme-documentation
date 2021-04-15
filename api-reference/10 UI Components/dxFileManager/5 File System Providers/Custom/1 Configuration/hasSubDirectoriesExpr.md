---
id: CustomFileSystemProvider.Options.hasSubDirectoriesExpr
type: String | function()
---
---
##### shortDescription
A function or the name of a data source field that provides information on whether a file or folder contains sub directories.

---

---

##### jQuery

    <!--JavaScript-->
	$(function () {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({ 
                hasSubDirectoriesExpr: "hasDirectories"
                //...
            }) 
        });     
    });

---
