---
id: dxFileManager.Options.onItemRenamed
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or directory is renamed.

##### param(e): ItemRenamedEvent
Information about the event.

---

Select a file/directory and click the **Rename** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the dialog. In the dialog, enter a new name and click **Save**.

![DevExtreme File Manager - Move File or Directory](/images/FileManager/rename-dialog.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemRenamed: function(e) {
                if (e.itemName === 'test.png'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onItemRenamed)="onItemRenamed($event)">
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
        onItemRenamed(e){
            if (e.itemName === 'test.png'){
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
            :on-item-renamed="onItemRenamed" >
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
                onItemRenamed(e) {
                    if (e.itemName === 'test.png'){
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
        const onItemRenamed = (e) => {
            if (e.itemName === 'test.png'){
                // your code
            } 
        };

        return (
            <FileManager onItemRenamed={onItemRenamed}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemRenamed("onItemRenamed");
        // ...
    )

    <script>
        function onItemRenamed(e) {
            if (e.itemName === 'test.png'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemRenamed("onItemRenamed");
        // ...
    )

    <script>
        function onItemRenamed(e) {
            if (e.itemName === 'test.png'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [itemRenamed](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemRenamed.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemRenamed')
- [permissions.rename](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/rename.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#rename')