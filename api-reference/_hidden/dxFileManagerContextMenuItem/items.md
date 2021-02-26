---
id: dxFileManagerContextMenuItem.items
type: Array<dxFileManagerContextMenuItem>
---
---
##### shortDescription
Configures settings of a context menu item's subitems.

---

The FileManager UI component allows you to add default and create custom context menu subitems.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    "create", // default item
                    {
                        text: "Create new file", // custom item with subitems
                        items: [
                            {
                                text: "Plain text document",
                                extension: ".txt",
                                onClick: onItemClick
                            },
                            // ...
                        ]
                    },
                    // ...
                    "move", "copy", "delete", "refresh" // default items
                ]
            }
            // ...
        });
    });

---
