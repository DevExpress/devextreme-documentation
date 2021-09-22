---
id: dxFileManager.Options.onItemMoved
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or folder is moved.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.itemName): String
The name of the moved file or folder.

##### field(e.itemPath): String
The path to the moved file or folder.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.parentDirectory): FileSystemItem
The parent directory.

##### field(e.sourceItem): FileSystemItem
The moved file or folder.

---
---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemMoved: function(e) {
                if (e.parentDirectory.name === 'Images'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onItemMoved)="onItemMoved($event)">
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
        onItemMoved(e){
            if (e.parentDirectory.name === 'Images'){
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
            :on-item-moved="onItemMoved" >
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileManager
            // ... 
        } from 'devextreme-vue/file-manager';
        
        export default {
            components: { 
                DxFileManager
                // ... 
            },
            methods: {
                onItemMoved(e) {
                    if (e.parentDirectory.name === 'Images'){
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
    import FileManager from 'devextreme-react/file-manager';

    const App = () => {
        const onItemMoved = (e) => {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        };

        return (
            <FileManager onItemMoved={onItemMoved}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemMoved("onItemMoved");
        // ...
    )

    <script>
        function onItemMoved(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemMoved("onItemMoved");
        // ...
    )

    <script>
        function onItemMoved(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [itemMoved](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemMoved.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemMoved')