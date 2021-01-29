---
id: dxFileManager.Options.selectedItemKeys
type: Array<String>
default: []
---
---
##### shortDescription
Contains an array of initially or currently selected files and directories' keys.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            selectedItemKeys: ["item1_key", "item2_key", "item3_key"]
        });
    });

---