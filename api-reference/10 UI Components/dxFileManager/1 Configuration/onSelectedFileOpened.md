---
id: dxFileManager.Options.onSelectedFileOpened
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the selected file is opened.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.file): FileSystemItem
The opened file.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onSelectedFileOpened: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ...
        (onSelectedFileOpened)="fileManager_onSelectedFileOpened($event)">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        fileManager_onSelectedFileOpened(e) {
            // Your code goes here
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager ...
            :on-selected-file-opened="fileManager_onSelectedFileOpened"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxFileManager from 'devextreme-vue/file-manager';

    export default {
        components: {
            DxFileManager
        },
        methods: {
            fileManager_onSelectedFileOpened(e) {
                // Your code goes here
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';

    class App extends React.Component {
        fileManager_onSelectedFileOpened(e) {
            // Your code goes here
        }

        render() {
            return (
                <FileManager ...
                    onSelectedFileOpened={this.fileManager_onSelectedFileOpened}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnSelectedFileOpened("fileManager_onSelectedFileOpened");
        // ...
    )

    <script>
        function fileManager_onSelectedFileOpened(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnSelectedFileOpened("fileManager_onSelectedFileOpened");
        // ...
    )

    <script>
        function fileManager_onSelectedFileOpened(e) {
            // your code
        }
    </script>

---
