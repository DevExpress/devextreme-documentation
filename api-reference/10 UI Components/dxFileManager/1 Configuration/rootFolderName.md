---
id: dxFileManager.Options.rootFolderName
type: String
default: 'Files'
---
---
##### shortDescription
Specifies the root folder name.

---


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            rootFolderName: "~/Files"
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [rootFolderName]="~/Files">
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';
    
    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        //...
    })
    export class AppModule { }    

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :root-folder-name="~/Files" >   
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager
            },
            data() {
                return {
                    // ...
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager rootFolderName="~/Files" >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .RootFolderName("~/Files")
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .RootFolderName("~/Files")
        // ...
    )

---
