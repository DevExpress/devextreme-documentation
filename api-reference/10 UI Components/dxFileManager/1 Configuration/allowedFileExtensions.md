---
id: dxFileManager.Options.allowedFileExtensions
type: Array<String>
default: []
---
---
##### shortDescription
Specifies the allowed upload file extensions.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToFileSystem/"
}

The FileManager UI component cannot upload a file and displays an error message when the file's extension is not allowed.

![DevExtreme File Manager - Allowed File Extension](/images/FileManager/allowed-file-extension-error-message.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            allowedFileExtensions: [".js", ".json", ".css"]
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [allowedFileExtensions]="['.js', '.json', '.css']">
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
            :allowed-file-extensions="allowedFileExtensions" >   
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
                    allowedFileExtensions: ['.js', '.json', '.css']
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    
    const allowedFileExtensions = ['.txt', '.doc', '.png'];

    class App extends React.Component {
        render() {
            return (
                <FileManager allowedFileExtensions={allowedFileExtensions} >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .AllowedFileExtensions(new[] { ".js", ".json", ".css" })
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .AllowedFileExtensions(new[] { ".js", ".json", ".css" })
        // ...
    )

---
