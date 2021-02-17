---
id: dxGanttToolbar.items
acceptValues: 'separator' | 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut'
type: Array<dxGanttToolbarItem, String>
inheritsType: dxGanttToolbarItem
---
---
##### shortDescription
Configures toolbar items' settings.

---

The Gantt UI component allows you to add default and create custom toolbar items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#gantt").dxGantt({
            //...
            toolbar: {
                items: [
                    'undo',
                    'redo',
                    'separator',
                    {
                        widget: "dxButton",
                        options: {
                            text: "About",
                            icon: "info",
                            stylingMode: "text",
                            onClick: function () {
                                popupInstance.show();
                            }
                        }
                    }
                ]
            }
        });
    });

---
