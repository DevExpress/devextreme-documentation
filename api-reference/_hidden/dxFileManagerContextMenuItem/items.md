---
id: dxFileManagerContextMenuItem.items
type: Array<dxFileManagerContextMenuItem>
---
---
##### shortDescription
Configures settings of a context menu item's subitems.

---

The FileManager UI component allows you to add default and create custom context menu subitems.

[note] You can specify the **items** option for custom context menu items only.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            contextMenu: {
                items: [
                    "create", // default item
                    {
                        text: "Create new file", // custom item with subitems
                        items: [
                            {
                                text: "Text Document",
                                extension: ".txt",
                            },
                            // ...
                        ]
                    },
                    // ...
                ]
            }
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager >
        <dxo-context-menu>
            <dxi-item name="create"></dxi-item>
            <dxi-item text="Create new file">
                <dxi-item text="Text Document" [options]="{ extension: '.txt' }"></dxi-item>
            </dxi-item>
        </dxo-context-menu>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        //...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            DxFileManagerModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager >
            <DxContextMenu>
                <DxItem name="create" />
                <DxItem text="Create new file">
                    <DxItem text="Text Document" :options="{ extension: '.txt' }" />
                </DxItem>
            </DxContextMenu>            
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileManager, 
            DxContextMenu, 
            // ... 
        } from 'devextreme-vue/file-manager';
        
        export default {
            components: { 
                DxFileManager, 
                DxContextMenu, 
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
    import FileManager, { ContextMenu } from 'devextreme-react/file-manager';

    const App = () => {
        return (
            <FileManager onContextMenuItemClick={onItemClick}>
                <ContextMenu>
                    <Item name="create"/>
                    <Item text="Create new file">
                        <Item text="Text Document" extension=".txt" />
                    </Item>
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
                i.Add().Name(FileManagerContextMenuItem.Create);                
                i.Add()
                    .Text("Create new file")
                    .Items(item => {
                        item.Add()
                            .Text("Text Document")
                            .Option("extension", ".txt");                            
                    });
            });
        });
    )

---
