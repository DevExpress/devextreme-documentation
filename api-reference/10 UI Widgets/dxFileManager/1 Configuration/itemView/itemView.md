---
id: dxFileManager.Options.itemView
type: Object
default: null
---
---
##### shortDescription
Configures the file and folder view.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/"
}

![DevExtreme File Manager - Item View](/images/FileManager/item-view.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            itemView: {
                mode: "details",
                showFolders: false,
                showParentFolder: false
            }
            // ...
        });
    });

---
