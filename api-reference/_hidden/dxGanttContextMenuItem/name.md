---
id: dxGanttContextMenuItem.name
acceptValues: 'undo' | 'redo' | 'expandAll' | 'collapseAll' | 'addTask' | 'deleteTask' | 'zoomIn' | 'zoomOut' | 'deleteDependency' | 'taskDetails'
type: String
---
---
##### shortDescription
Specifies the context menu item name.

---

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
    import 'devextreme/dist/css/dx.common.css';
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
