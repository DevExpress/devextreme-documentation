---
id: dxFileManager.Options.selectedItemKeys
type: Array<String>
default: []
---
---
##### shortDescription
Contains an array of initially or currently selected files and directories' keys.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            selectedItemKeys: ["item1_key", "item2_key", "item3_key"]
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [selectedItemKeys]="['item1_key', 'item2_key', 'item3_key']">
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
            :selected-item-keys="keys" >   
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
                    keys: ['item1_key', 'item2_key', 'item3_key']
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    
    const keys = ['item1_key', 'item2_key', 'item3_key']

    class App extends React.Component {
        render() {
            return (
                <FileManager selectedItemKeys={keys} >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .SelectedItemKeys(new[] { "item1_key", "item2_key", "item3_key" })
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .SelectedItemKeys(new[] { "item1_key", "item2_key", "item3_key" })
        // ...
    )

---