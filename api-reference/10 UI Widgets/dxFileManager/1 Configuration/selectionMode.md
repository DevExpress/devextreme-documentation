---
id: dxFileManager.Options.selectionMode
acceptValues: 'multiple' | 'single'
type: String
default: 'multiple'
---
---
##### shortDescription
Specifies whether a user can select a single or multiple files and folders in the [item view](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/itemView '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/itemView/') simultaneously.

---

[note] The check boxes that select/unselect individual items are displayed only in multiple selection mode.


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            selectionMode: "single"
            // ...
        });
    });    

---
