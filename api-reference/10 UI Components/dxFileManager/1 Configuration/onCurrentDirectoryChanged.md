---
id: dxFileManager.Options.onCurrentDirectoryChanged
type: function(e)
default: null
EventForAction: dxFileManager.currentDirectoryChanged
---
---
##### shortDescription
A function that is executed when the current directory is changed.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.directory): FileSystemItem
The current directory.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
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
    #include angular-app-module-ts

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
