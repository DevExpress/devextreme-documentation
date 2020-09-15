---
id: dxFileManager.Options.toolbar
type: dxFileManagerToolbar
inheritsType: dxFileManagerToolbar
---
---
##### shortDescription
Configures toolbar settings.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

![DevExtreme File Manager - Toolbar](/images/FileManager/toolbar.png)

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

To add a predefined item to the toolbar, specify its [name](/api-reference/_hidden/dxFileManagerToolbarItem/name.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#name') and optional settings ('visible', 'location', 'locateInMenu', 'text', 'icon', 'disabled') and add the item to one of the following collections:

- [items](/api-reference/_hidden/dxFileManagerToolbar/items '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/') - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/api-reference/_hidden/dxFileManagerToolbar/fileSelectionItems '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/fileSelectionItems/') - Displays toolbar items when one or more file system items are selected.

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

To add a custom toolbar item, specify its [text](/api-reference/_hidden/CollectionWidgetItem/text.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#text') and optional settings (for example, a file extension for the toolbar item that creates a new file) and add the item to one of the following collections:

- [items](/api-reference/_hidden/dxFileManagerToolbar/items '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/') - Displays toolbar items when no file system item is selected.

- [fileSelectionItems](/api-reference/_hidden/dxFileManagerToolbar/fileSelectionItems '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/fileSelectionItems/') - Displays toolbar items when one or more file system items are selected.

The [widget](/api-reference/_hidden/dxToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/toolbar/items/#widget') option allows you to specify a widget for a custom toolbar item ([dxButton](/api-reference/10%20UI%20Widgets/dxButton '/Documentation/ApiReference/UI_Widgets/dxButton/') is the default widget). Use the [toolbarItemClick](/api-reference/10%20UI%20Widgets/dxFileManager/4%20Events/toolbarItemClick.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Events/#toolbarItemClick') event to handle clicks on custom toolbar items.

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
