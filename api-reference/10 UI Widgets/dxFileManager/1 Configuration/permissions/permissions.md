---
id: dxFileManager.Options.permissions
type: Object
---
---
##### shortDescription
Specifies actions that a user is allowed to perform on files and folders.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            permissions: {
                create: true,
                copy: true,
                move: true,
                remove: true,
                rename: true
            },
            // ...
        });
    });

---
