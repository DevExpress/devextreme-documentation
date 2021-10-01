---
id: dxFileManager.Options.onItemCopied
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or directory is copied.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.itemName): String
The name of the copied file or directory.

##### field(e.itemPath): String
The path to the copied file or directory.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.parentDirectory): FileSystemItem
The parent directory.

##### field(e.sourceItem): FileSystemItem
The copied file or directory.

---

Select a file/folder and use the **Copy To** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the "Copy To" dialog. In the dialog, select the destination directory and click **Copy**.  

![DevExtreme File Manager - Copy File or directory](/images/FileManager/copy-to-context-menu-item.png)

![DevExtreme File Manager - Copy File or directory](/images/FileManager/copy-to-dialog.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemCopied: function(e) {
                if (e.parentDirectory.name === 'Images'){
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
        const onItemCopied = (e) => {
            if (e.parentDirectory.name === 'Images'){
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
            if (e.parentDirectory.name === 'Images'){
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
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [itemCopied](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemCopied.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemCopied')
- [permissions.copy](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/copy.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#copy')