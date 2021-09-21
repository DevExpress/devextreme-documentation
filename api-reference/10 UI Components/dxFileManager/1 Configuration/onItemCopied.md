---
id: dxFileManager.Options.onItemCopied
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or folder is copied.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.itemName): String
The name of the file or folder.

##### field(e.itemPath): String
The path to the copied file or folder.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.parentDirectory): FileSystemItem
The name of the parent directory.

##### field(e.sourceItem): FileSystemItem
The copied file or folder.

---
---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemCopied: function(e) {
                if (e.parentDirectory === 'Images'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onItemCopied)="onItemCopied($event)">
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
        onItemCopied(e){
            if (e.parentDirectory === 'Images'){
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
            :on-item-copied="onItemCopied" >
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
                onItemCopied(e) {
                    if (e.parentDirectory === 'Images'){
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
        const onItemCopied = (e) => {
            if (e.parentDirectory === 'Images'){
                // your code
            } 
        };

        return (
            <FileManager onItemCopied={onItemCopied}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemCopied("onItemCopied");
        // ...
    )

    <script>
        function onItemCopied(e) {
            if (e.parentDirectory === 'Images'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemCopied("onItemCopied");
        // ...
    )

    <script>
        function onItemCopied(e) {
            if (e.parentDirectory === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [itemCopied](/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemCopied)