---
id: dxFileManagerToolbar.items
acceptValues: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'switchView' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clearSelection' | 'separator'
type: Array<dxFileManagerToolbarItem, String>
default: [ 'showNavPane', 'create', 'upload', 'switchView', { name: 'separator', location: 'after' }, 'refresh' ]
inheritsType: dxFileManagerToolbarItem
---
---
##### shortDescription
Configures toolbar items' settings.

---

The **FileManager** widget allows you to add default and custom toolbar items.

**Predefined Items**

Predefined toolbar items include:

- **'showNavPane'** - Shows or hides the navigation panel.  
- **'create'** - Creates a new directory.
- **'upload'** - Uploads a file.
- **'refresh'** - Refreshes the file manager content and shows the progress panel.
- **'download'** - Downloads a file.
- **'move'** - Moves files and directories.
- **'copy'** - Copies files and directories.
- **'rename'** - Renames files and directories.
- **'delete'** - Deletes files and directories.
- **'switchView'** - Switches between the 'Details' and 'Thumbnails' file system representation modes.
- **'clearSelection'** - Clears selection from files and directories in the Item View area.

To add a predefined item to the toolbar, specify its [name](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#name) and optional settings ('visible', 'location', 'locateInMenu', 'text', 'icon', 'disabled') and add the item to one of the following collections:

- [items](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/) - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/fileSelectionItems/) - Displays toolbar items when one or more file system items are selected.

[note] Note that optional settings for predefined toolbar items should be specified at the same level as the item's **name** option.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    // Specify a predefined item's name and optional settings
                    {
                        name: "create",
                        text: "Create a directory",
                        icon: "newfolder"
                    },
                    // Specify a predefined item's name only                    
                    "switchView", "separator"
                    //...
                ]
                fileSelectionItems: [
                    "copy", "rename"
                    //...
                ]
            }
        });
    });

---

**Custom Items**

To add a custom toolbar item, specify its [text](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#text) and optional settings (for example, a file extension for the toolbar item that creates a new file) and add the item to one of the following collections:

- [items](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/) - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/fileSelectionItems/) - Displays toolbar items when one or more file system items are selected.

The [widget](/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#widget) option allows you to specify a widget for a custom toolbar item ([dxButton](/Documentation/ApiReference/UI_Widgets/dxButton/) is used by default). Use the [toolbarItemClick](/Documentation/ApiReference/UI_Widgets/dxFileManager/Events/#toolbarItemClick) event to handle clicks on custom toolbar items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    // Specify a custom item as a dxMenu widget
                    {
                        widget: "dxMenu",
                        location: "before",
                        options: {
                            items: [
                                {
                                    text: "Create new file",
                                    icon: "plus",
                                    items: [
                                        {
                                            text: "Text Document",
                                            extension: ".txt"
                                        },
                                        {
                                            text: "RTF Document",
                                            extension: ".rtf"
                                        },
                                        {
                                            text: "Spreadsheet",
                                            extension: ".xls"
                                        }]
                                }
                            ],
                        }
                }]
                fileSelectionItems: [
                    // Specify a custom item as a default dxButton widget
                    {
                        options:{
                            text: "Move to Temp",
                            icon: "movetofolder",
                            temp: true  
                        }
                    }
                    //...
                ]
            }
            onToolbarItemClick: onItemClick
        });
    });
    function onItemClick(args) {
        if(args.itemData.extension) {
            // your code
        }
        else if(args.itemData.temp){
            // your code
        }
    }

---
