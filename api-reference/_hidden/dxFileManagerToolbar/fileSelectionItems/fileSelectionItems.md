---
id: dxFileManagerToolbar.fileSelectionItems
acceptValues: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'viewSwitcher' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clear' | 'separator'
type: Array<dxFileManagerToolbarItem, String>
default: [ 'download', 'separator', 'move', 'copy', 'rename', 'separator', 'delete', 'refresh', 'clear' ]
inheritsType: dxFileManagerToolbarItem
---
---
##### shortDescription
Configures settings of the toolbar items that are visible when users select files.

---

![DevExtreme File Manager - Toolbar - File Selection Items](/images/FileManager/file-selection-items.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                fileSelectionItems: [
                    "move", "copy", "rename",
                    {
                        widget: "dxButton",
                        options: {
                            text: "Share",
                            icon: "arrowright"
                        },
                        location: "before",
                        onClick: shareItem
                    },
                    // ...
                    "separator", "delete", "refresh", "clear"
                ]                
            }
        });
    });

---
