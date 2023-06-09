---
id: dxFileManager.Options.onItemMoved
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or directory is moved.

##### param(e): ItemMovedEvent
Information about the event.

---

Select a file/folder and use the **Move To** [context menu](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/contextMenu '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/contextMenu/') or [toolbar](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/toolbar '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/toolbar/') item to invoke the "Move to" dialog. In the dialog, select the destination directory and click **Move**.  

![DevExtreme File Manager - Move File or directory](/images/FileManager/move-to-dialog.png)

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemMoved: function(e) {
                if (e.parentDirectory.name === 'Images'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onItemMoved)="onItemMoved($event)">
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
        onItemMoved(e){
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
            :on-item-moved="onItemMoved" >
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
                onItemMoved(e) {
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
        const onItemMoved = (e) => {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        };

        return (
            <FileManager onItemMoved={onItemMoved}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemMoved("onItemMoved");
        // ...
    )

    <script>
        function onItemMoved(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemMoved("onItemMoved");
        // ...
    )

    <script>
        function onItemMoved(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [itemMoved](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemMoved.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemMoved')
- [permissions.move](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions/move.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/#move')