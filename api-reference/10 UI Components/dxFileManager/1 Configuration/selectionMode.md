---
id: dxFileManager.Options.selectionMode
acceptValues: 'multiple' | 'single'
type: String
default: 'multiple'
---
---
##### shortDescription
Specifies whether a user can select a single or multiple files and folders in the [item view](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/itemView '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/') simultaneously.

---

[note] The check boxes that select/unselect individual items are displayed only in multiple selection mode.


---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            selectionMode: "single"
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [selectionMode]="single">
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
            :selection-mode="single" >   
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
                <FileManager selectionMode={single} >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .SelectionMode(FileManagerSelectionMode.Single)
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .SelectionMode(FileManagerSelectionMode.Single)
        // ...
    )

---
