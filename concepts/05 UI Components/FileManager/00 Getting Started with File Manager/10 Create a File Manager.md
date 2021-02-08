The following code creates the **FileManager** UI component and adds it to your page.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({
            //...
        });
    });
    <!-- tab: index.html -->
    <div id="file-manager"></div>

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
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
        <DxFileManager>
            <!-- ... -->
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';     

        import { DxFileManager } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager
            },
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
                <FileManager>
                    {/* ... */}
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        // ...
    )

---
