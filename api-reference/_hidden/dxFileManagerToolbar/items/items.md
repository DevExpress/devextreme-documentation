---
id: dxFileManagerToolbar.items
acceptValues: 'showNavPane' | 'create' | 'upload' | 'refresh' | 'viewSwitcher' | 'download' | 'move' | 'copy' | 'rename' | 'delete' | 'clear' | 'separator'
type: Array<dxFileManagerToolbarItem, String>
default: [ 'showNavPane', 'create', 'upload', 'refresh', { name: 'separator', location: 'after' }, 'viewSwitcher' ]
inheritsType: dxFileManagerToolbarItem
---
---
##### shortDescription
Configures toolbar items' settings.

---

The **FileManager** widget allows you to add default and create custom toolbar items.


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
