---
id: dxFileManager.Options.onCurrentDirectoryChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the current directory is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.directory): FileSystemItem
The current directory.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
The model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onCurrentDirectoryChanged: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onCurrentDirectoryChanged)="onDirectoryChanged($event)">
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
        onDirectoryChanged(e){
            // your code
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
            :on-current-directory-changed="onDirectoryChanged" >            
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
                onDirectoryChanged(e) {
                    // your code
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
        const onDirectoryChanged = (e) => {
            // your code
        };

        return (
            <FileManager onCurrentDirectoryChanged={onDirectoryChanged}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnCurrentDirectoryChanged("onDirectoryChanged");
        // ...
    )

    <script>
        function onDirectoryChanged(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnCurrentDirectoryChanged("onDirectoryChanged");
        // ...
    )

    <script>
        function onDirectoryChanged(e) {
            // your code
        }
    </script>

---
