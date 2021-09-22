---
id: dxFileManager.Options.onDirectoryCreated
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a directory is created.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.name): String
The name of the created directory.

##### field(e.parentDirectory): FileSystemItem
The parent directory.

---
---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onDirectoryCreated: function(e) {
                if (e.parentDirectory.name === 'Images'){
                    // your code
                } 
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onDirectoryCreated)="onDirectoryCreated($event)">
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
        onDirectoryCreated(e){
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
            :on-directory-created="onDirectoryCreated" >            
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
                onDirectoryCreated(e) {
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
        const onDirectoryCreated = (e) => {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        };

        return (
            <FileManager onDirectoryCreated={onDirectoryCreated}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnDirectoryCreated("onDirectoryCreated");
        // ...
    )

    <script>
        function onDirectoryCreated(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnDirectoryCreated("onDirectoryCreated");
        // ...
    )

    <script>
        function onDirectoryCreated(e) {
            if (e.parentDirectory.name === 'Images'){
                // your code
            } 
        }
    </script>

---

#####See Also#####
- [directoryCreated](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/directoryCreated.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#directoryCreated')