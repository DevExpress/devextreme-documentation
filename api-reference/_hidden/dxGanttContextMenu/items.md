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

The context menu contains a set of default commands: **'addTask'**, **'taskDetails'**, and **'deleteTask'**. Use the [contextMenu](/api-reference/10%20UI%20Components/dxGantt/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu') property to recreate the context menu items.

![DevExtreme Gantt - Default Context Menu](/images/Gantt/context-menu-default-items.png)

To add a predefined item to the context menu, add its [name](/api-reference/_hidden/dxGanttContextMenuItem/name.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu/items/#name') and optional settings (for example, 'visible', 'text', and 'icon') to the [items](/api-reference/_hidden/dxGanttContextMenu/items.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu/items/') collection.

---

##### jQuery 

    <!--JavaScript-->
    $(function () {
        $("#gantt").dxGantt({
            contextMenu: {
                items: [
                    "addTask",
                    "deleteTask",
                    {
                        text: "Zoom",
                        items: [
                            "zoomIn",
                            "zoomOut"
                        ]
                    }
                ]
            }
            //...            
        });
    });  

##### Angular

    <!--HTML--> 
    <dx-gantt ... >
        <dxo-context-menu>
            <dxi-item name="addTask"></dxi-item>
            <dxi-item name="deleteTask"></dxi-item>
            <dxi-item text="Zoom">
                <dxi-item name="zoomIn"></dxi-item>
                <dxi-item name="zoomOut"></dxi-item>
            </dxi-item>        
        </dxo-context-menu>
        ...
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxContextMenu>
                <DxItem name="addTask"/>
                <DxItem name="deleteTask"/>
                <DxItem text="Zoom">
                    <DxItem name="zoomIn"/>
                    <DxItem name="zoomOut"/>
                </DxItem>
            </DxContextMenu>            
        </DxGantt>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxGantt, DxContextMenu } from 'devextreme-vue/gantt';
    
    export default {
        components: {
            DxGantt,
            DxContextMenu
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt, { ContextMenu } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt...>
                <ContextMenu>
                    <Item name="addTask" />
                    <Item name="deleteTask" />
                    <Item text="Zoom">
                        <Item name="zoomIn" />
                        <Item name="zoomOut" />
                    </Item>
                </ContextMenu>                
            </Gantt>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ContextMenu(cm => {
            cm.Items(i => {
                i.Add().Name(GanttContextMenuItem.AddTask);
                i.Add().Name(GanttContextMenuItem.DeleteTask);
                i.Add().Text("Zoom").Items(ii => {
                    ii.Add.Name(GanttContextMenuItem.ZoomIn);
                    ii.Add.Name(GanttContextMenuItem.ZoomOut);
                });
            });
        })
        // ...
    )

---

![DevExtreme Gantt - Predefined Context Menu Items](/images/Gantt/context-menu-predefined-items.png)

**Custom Items**

To add a custom context menu item, specify its [text](/api-reference/_hidden/dxMenuBaseItem/text.md '/Documentation/ApiReference/UI_Components/dxGantt/Configuration/contextMenu/items/#text') and optional settings (for example, name or category). Use the [customCommand](/api-reference/10%20UI%20Components/dxGantt/4%20Events/customCommand.md '/Documentation/ApiReference/UI_Components/dxGantt/Events/#customCommand') event to handle clicks on custom context menu items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#gantt").dxGantt({
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
    function onCustomCommandClick(e) {
        if(e.name == 'item1') {
            // your code
        }
    }

##### Angular

    <!--HTML--> 
    <dx-gantt (onCustomCommand)="onCustomCommand($event)" >
        <dxo-context-menu>
            <dxi-item text="Category">
                <dxi-item name="item1" text="Item 1"></dxi-item>
                <dxi-item name="item2" text="Item 2"></dxi-item>
                <dxi-item name="item3" text="Item 3"></dxi-item>
            </dxi-item>        
        </dxo-context-menu>
        ...
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onCustomCommand(e) {
            if(e.name == 'item1') {
                // your code
            }
        }        
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt 
            @custom-command="onCustomCommand" >
            <DxContextMenu>
                <DxItem text="Category">
                    <DxItem name="item1" text="Item 1" />
                    <DxItem name="item2" text="Item 2" />
                    <DxItem name="item3" text="Item 3" />
                </DxItem>
            </DxContextMenu>            
        </DxGantt>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxGantt, DxContextMenu } from 'devextreme-vue/gantt';
    
    export default {
        components: {
            DxGantt,
            DxContextMenu
        },
        methods: {
            onCustomCommand(e) {
                if(e.name == 'item1') {
                    // your code
                }
            }
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Gantt, { ContextMenu } from 'devextreme-react/gantt';

    const App = () => {
        const onCustomCommand = (e) => {
            if(e.name == 'item1') {
                // your code
            }
        };

        return (
            <Gantt 
                onCustomCommand={onCustomCommand} >
                <ContextMenu>
                    <Item text="Category">
                        <Item name="item1" text="Item 1" />
                        <Item name="item2" text="Item 2" />
                        <Item name="item3" text="Item 3" />
                    </Item>
                </ContextMenu>                
            </Gantt>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ContextMenu(cm => {
            cm.Items(i => {
                i.Add().Text("Category").Items(ii => {
                    ii.Add.Name("item1").Text("Item 1");
                    ii.Add.Name("item2").Text("Item 2");
                    ii.Add.Name("item3").Text("Item 3");
                });
            });
        })
        .OnCustomCommand("gantt_customCommand_handler")
        // ...
    )

    <script>
        function gantt_customCommand_handler(e) {
            if(e.name == "item1") {
                // your code
            }
        }
    </script>

---

Result:

![DevExtreme Gantt - Custom Context Menu Items](/images/Gantt/context-menu-custom-items.png)
