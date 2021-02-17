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

The FileManager UI component allows you to add default and create custom toolbar items.


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            toolbar: {
                items: [
                    {
                        name: "showNavPane",
                        visible: true
                    },
                    "separator", "create",
                    {
                        widget: "dxMenu",
                        location: "before",
                        options: {
                            items: [
                                {
                                    text: "Create new file",
                                    items: [
                                        {
                                            text: "Plain text document",
                                            extension: ".txt",
                                            onClick: onItemClick
                                        },]
                                }
                            ]
                        }
                    }]
            }
        });
    });

---
