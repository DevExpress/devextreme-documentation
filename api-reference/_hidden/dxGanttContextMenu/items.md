---
id: dxGanttContextMenu.items
acceptValues: 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut' | 'deleteDependency' | 'taskDetails'
type: Array<dxGanttContextMenuItem, String>
inheritsType: dxGanttContextMenuItem
---
---
##### shortDescription
Configures context menu item settings.

---

The context menu contains a set of default commands: **'addTask'**, **'taskDetails'**, and **'deleteTask'**. Use the [contextMenu](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/contextMenu) property to recreate the context menu items.

![DevExtreme Gantt - Default Context Menu](/images/Gantt/context-menu-default-items.png)

To add a predefined item to the context menu, add its [name](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/contextMenu/items/#name) and optional settings (for example, 'visible', 'text', and 'icon') to the [items](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/contextMenu/items/) collection.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    // Specify a predefined item's name only
                    "expandAll",
                    "redo",
                    // Specify a predefined item's name and optional settings
                    {
                        name: "zoomIn",
                        text: "Zooming"
                    }
                    //...
                ]
            }            
        });
    });  

---

![DevExtreme Gantt - Predefined Context Menu Items](/images/Gantt/context-menu-predefined-items.png)

**Custom Items**

To add a custom context menu item, specify its [text](/Documentation/ApiReference/UI_Widgets/dxGantt/Configuration/contextMenu/items/#text) and optional settings (for example, name or category). Use the [customCommand](/Documentation/ApiReference/UI_Widgets/dxGantt/Events/#customCommand) event to handle clicks on custom context menu items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    {
                        text: "Category",
                        items:[
                            {
                                text: "Item 1",
                                name: "item1"
                            },
                            {
                                text: "Item 2",
                                name: "item2"
                            },
                            {
                                text: "Item 3",
                                name: "item3"
                            }                        
                        ]                        
                    }
                    // ...
                ]
            }
            onCustomCommand: onCustomCommandClick
            // ...
        });
    });
    function onCustomCommandClick(args) {
        if(e.name == 'item1') {
            // your code
        }
    }

---

![DevExtreme Gantt - Custom Context Menu Items](~/images/Gantt/context-menu-custom-items.png)
