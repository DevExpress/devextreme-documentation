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

To add a predefined item to the context menu, add its **name** to the **items** array:

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: ["rename", "delete", "refresh"]
            }
            // ...
        });
    });

---

![DevExtreme FileManager - Predefined Context Menu Items](~/images/FileManager/context-menu-default-item.png)

**Custom Items**

To add a custom context menu item, you can specify its **text** and other optional options (for example, a file extension for a newly created file). 

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
                    },
                    {
                        text: "Category",
                        icon: "tags",
                        items: [
                            {
                                text: "Work",
                                category: "Work"
                            },
                            {
                                text: "Important",
                                category: "Important"
                            },
                            {
                                text: "Home",
                                category: "Home"
                            },
                            {
                                text: "None",
                                category: ""
                            }
                        ],
                        beginGroup: true
                    },
                    // ...
                ]
            }
            // ...
        });
    });

---

![DevExtreme FileManager - Custom Context Menu Items](~/images/FileManager/context-menu-custom-item.png)