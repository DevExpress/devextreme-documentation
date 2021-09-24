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

The FileManager UI component allows you to add default and custom context menu items.

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

To add a predefined item to the context menu, add its [name](/api-reference/_hidden/dxFileManagerContextMenuItem/name.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/items/#name') and optional settings ('visible', 'beginGroup', 'text', 'icon', 'disabled') to the [items](/api-reference/_hidden/dxFileManagerContextMenu/items '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/items/') array.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    // Specify a predefined item's name only
                    "rename",
                    // Specify a predefined item's name and optional settings
                    {
                        name: "download",
                        text: "Download a File"
                    },
                    {
                        name: "refresh",
                        beginGroup: true
                    }
                ]
            }          
        });
    });  

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ... >
        <dxo-context-menu>
            <dxi-item name="rename"></dxi-item>
            <dxi-item name="download" text="Download a File"></dxi-item>
            <dxi-item name="refresh" beginGroup="true"></dxi-item>        
        </dxo-context-menu>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        // ...      
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager ... >
            <DxContextMenu>
                <DxItem name="rename"/>
                <DxItem name="download" text="Download a File" />
                <DxItem name="refresh" :begin-group="true" />
            </DxContextMenu>            
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileManager, 
            DxContextMenu,
            DxItem 
            // ... 
        } from 'devextreme-vue/file-manager';
        
        export default {
            components: { 
                DxFileManager, 
                DxContextMenu, 
                DxItem
                // ... 
            },
            data() {
                return {
                    //...
                };
            } 
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager, { ContextMenu, Item } from 'devextreme-react/file-manager';

    const App = () => {
        return (
            <FileManager...>
                <ContextMenu>
                    <Item name="rename" />
                    <Item name="download" text="Download a File" />
                    <Item name="refresh" beginGroup="true" />
                </ContextMenu>                
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ContextMenu(cm => {
            cm.Items(i => {
                i.Add().Name(FileManagerContextMenuItem.Rename);
                i.Add()
                    .Name(FileManagerContextMenuItem.Download)
                    .Text("Download a File");
                i.Add()
                    .Name(FileManagerContextMenuItem.Refresh)
                    .BeginGroup(true);
            });
        })
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ContextMenu(cm => {
            cm.Items(i => {
                i.Add().Name(FileManagerContextMenuItem.Rename);
                i.Add()
                    .Name(FileManagerContextMenuItem.Download)
                    .Text("Download a File");
                i.Add()
                    .Name(FileManagerContextMenuItem.Refresh)
                    .BeginGroup(true);
            });
        })
        // ...
    )

---

![DevExtreme FileManager - Predefined Context Menu Items](/images/FileManager/context-menu-default-item.png)

**Custom Items**

To add a custom context menu item, specify its [text](/api-reference/_hidden/dxMenuBaseItem/text.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/items/#text') and optional settings (for example, a file extension for a newly created file). Use the [contextMenuItemClick](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/contextMenuItemClick.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#contextMenuItemClick') event to handle clicks on custom context menu items.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    {
                        text: "Create .txt Document",
                        extension: ".txt"
                    },
                    {
                        text: "Create .rtf Document",
                        extension: ".rtf"
                    },
                    {
                        text: "Create .xls Document",
                        extension: ".xls"
                    }
                ]
            }
            onContextMenuItemClick: onItemClick
            // ...
        });
    });
    function onItemClick(args) {
        if(args.itemData.extension) {
            // your code
        }
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onContextMenuItemClick)="onItemClick($event)">
        <dxo-context-menu>
            <dxi-item text="Create .txt Document" [options]="{ extension: '.txt' }"></dxi-item>
            <dxi-item text="Create .rtf Document" [options]="{ extension: '.rtf' }"></dxi-item>
            <dxi-item text="Create .xls Document" [options]="{ extension: '.xls' }"></dxi-item>
        </dxo-context-menu>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        onItemClick(e){
            if(e.itemData.options.extension) {
                // your code
            }            
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager 
            :on-context-menu-item-click="onItemClick" >
            <DxContextMenu>
                <DxItem text="Create .txt Document" :options="{ extension: '.txt' }" />
                <DxItem text="Create .rtf Document" :options="{ extension: '.rtf' }" />
                <DxItem text="Create .xls Document" :options="{ extension: '.xls' }" />
            </DxContextMenu>            
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileManager, 
            DxContextMenu, 
            DxItem
            // ... 
        } from 'devextreme-vue/file-manager';
        
        export default {
            components: { 
                DxFileManager, 
                DxContextMenu, 
                DxItem
                // ... 
            },
            methods: {
                onItemClick(e) {
                    if(e.itemData.options.extension) {
                        // your code
                    }                     
                }
            },         
            data() {
                return {
                    //...
                };
            } 
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager, { ContextMenu, Item } from 'devextreme-react/file-manager';

    const App = () => {
        const onItemClick = (e) => {
            if(e.itemData.extension) {
                // your code
            }
        };

        return (
            <FileManager onContextMenuItemClick={onItemClick}>
                <ContextMenu>
                    <Item text="Create .txt Document" extension=".txt" />
                    <Item text="Create .rtf Document" extension=".rtf" />
                    <Item text="Create .xls Document" extension=".xls" />
                </ContextMenu>                
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ContextMenu(cm => {
            cm.Items(i => {
                i.Add()
                    .Text("Create .txt Document")
                    .Option("extension", ".txt");
                i.Add()
                    .Text("Create .rtf Document")
                    .Option("extension", ".rtf");
                i.Add()
                    .Text("Create .xls Document")
                    .Option("extension", ".xls");
            });
        })
        .OnContextMenuItemClick("onItemClick");
    )

    <script>
        function onItemClick(e) {
            if(e.itemData.extension) {
                // your code
            }
        }
    </script>

---

![DevExtreme FileManager - Custom Context Menu Items](/images/FileManager/context-menu-custom-item.png)
