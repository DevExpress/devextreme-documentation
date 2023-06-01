---
id: dxFileManager.Options.currentPath
type: String
default: ''
---
---
##### shortDescription
Specifies the path that is used when the FileManager is initialized.

---
#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            currentPath: "Documents/Images"
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [currentPath]="Documents/Images">
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
            :current-path="Documents/Images" >   
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
                <FileManager currentPath="Documents/Images" >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .CurrentPath("Documents/Images")
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .CurrentPath("Documents/Images")
        // ...
    )

---
