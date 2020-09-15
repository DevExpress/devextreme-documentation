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

The **FileManager** widget allows you to add default and custom context menu items.

**Predefined Items**

Predefined context menu items include:

- **'create'** - Creates a new directory.
- **'upload'** - Uploads a file.
- **'refresh'** - Refreshes the file manager content.
- **'download'** - Downloads a file.
- **'move'** - Moves files and directories.
- **'copy'** - Copies files and directories.
- **'rename'** - Renames files and directories.
- **'delete'** - Deletes files and directories.

To add a predefined item to the context menu, add its [name](/api-reference/_hidden/dxFileManagerContextMenuItem/name.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/contextMenu/items/#name') and optional settings ('visible', 'beginGroup', 'text', 'icon', 'disabled') to the [items](/api-reference/_hidden/dxFileManagerContextMenu/items '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/contextMenu/items/') array.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    // Specify a predefined item's name only
                    "rename", 
                    // Specify a predefined item's name and optional settings
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

![DevExtreme FileManager - Predefined Context Menu Items](~/images/FileManager/context-menu-default-item.png)

**Custom Items**

To add a custom context menu item, specify its [text](/api-reference/_hidden/dxMenuBaseItem/text.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/contextMenu/items/#text') and optional settings (for example, a file extension for a newly created file). Use the [contextMenuItemClick](/api-reference/10%20UI%20Widgets/dxFileManager/4%20Events/contextMenuItemClick.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Events/#contextMenuItemClick') event to handle clicks on custom context menu items.

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
                                text: "Text document",
                                extension: ".txt"
                            },
                            {
                                text: "RTF Document",
                                extension: ".rtf"
                            },
                            {
                                text: "Spreadsheet",
                                extension: ".xls"
                            }
                        ]
                    }
                    // ...
                ]
            }
            onContextMenuItemClick: onItemClick
            // ...
        });
    });
    function onItemClick(args) {
        if(args.itemData.extension) {
            // your code
        }
    }

---

![DevExtreme FileManager - Custom Context Menu Items](~/images/FileManager/context-menu-custom-item.png)
