---
id: dxFileManager.Options.currentPathKeys
type: Array<String>
default: []
---
---
##### shortDescription
Specifies an array of path keys to the current location.

---

Each path part has each own key. For example, path "folder1/folder2" has two parts: 'folder1' with the 'f1' key and folder2 with the 'f2' key. To open this location, assign the ["f1","f2"] array of strings to the **currentPathKeys** option value. 

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            currentPathKeys: ["EB458000-0341-6943", "92F5-4722-A7D6-98EB"]
            // ...
        });
    });

---
