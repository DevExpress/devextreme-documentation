---
id: dxFileManager.Options.onFileUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file is successfully uploaded.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.fileData): File
The uploaded file.

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.parentDirectory): FileSystemItem
The parent directory.

---

Use the **Upload Files** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the "Open" dialog and select a file to upload. 

![DevExtreme File Manager - Upload Files](/images/FileManager/upload-files-toolbar-item.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onFileUploaded: function(e) {
                if (e.parentDirectory.name === 'Images'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onFileUploaded)="onFileUploaded($event)">
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
        onFileUploaded(e){
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
            :on-file-uploaded="onFileUploaded" >            
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
                onFileUploaded(e) {
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
        const onFileUploaded = (e) => {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        };

        return (
            <FileManager onFileUploaded={onFileUploaded}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnFileUploaded("onFileUploaded");
        // ...
    )

    <script>
        function onFileUploaded(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnFileUploaded("onFileUploaded");
        // ...
    )

    <script>
        function onFileUploaded(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [fileUploaded](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/fileUploaded.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#fileUploaded')
- [permissions.upload](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/upload.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#upload')