---
id: dxFileManagerContextMenu.items
acceptValues: 'create' | 'upload' | 'refresh' | 'download' | 'move' | 'copy' | 'rename' | 'delete'
type: Array<dxFileManagerContextMenuItem, String>
default: [ 'create', 'upload', 'rename', 'move', 'copy', 'delete', 'refresh', 'download' ]
inheritsType: dxFileManagerContextMenuItem
---
---
##### shortDescription
Configures context menu items' settings.

---

The **FileManager** widget allows you to add default and create custom context menu items.


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    "create", // default item
                    {
                        text: "Create new file", // custom item with sub items
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
