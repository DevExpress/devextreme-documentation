---
id: dxFileManager.Options.onContextMenuItemClick
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a context menu item is clicked.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.fileSystemItem): FileSystemItem
The file system item for which you invoke the context menu.

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): DxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.viewArea): Enums.FileManagerViewArea
Specifies whether the context menu is invoked in the navigation panel or in the items area.

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onContextMenuItemClick: function(e) {
                // Your code goes here
            }
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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onItemClick(e){
            if(e.itemData.options.extension) {
                // your code
            }            
        }
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

##### ASP.NET Core Controls

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