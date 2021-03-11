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

The FileManager UI component allows you to add default and custom context menu items.


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    "create", // default item
                    {
                        name: "create",
                        text: "Create Directory",
                        beginGroup: true
                    }
                    //...
                ]
            }            
        });
    });  

---

![DevExtreme FileManager - Predefined Context Menu Items](/images/FileManager/context-menu-default-item.png)

**Custom Items**

To add a custom context menu item, specify its [text](/api-reference/_hidden/dxMenuBaseItem/text.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/items/#text') and optional settings (for example, a file extension for a newly created file). Use the [contextMenuItemClick](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/contextMenuItemClick.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#contextMenuItemClick') event to handle clicks on custom context menu items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    {
                        text: "Create new file", 
                        icon: "plus",
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

![DevExtreme FileManager - Custom Context Menu Items](/images/FileManager/context-menu-custom-item.png)
