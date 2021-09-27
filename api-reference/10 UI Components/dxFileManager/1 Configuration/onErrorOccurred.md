---
id: dxFileManager.Options.onErrorOccurred
type: function(e)
default: null
EventForAction: dxFileManager.errorOccurred
---
---
##### shortDescription
A function that is executed when an error occurs.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.errorCode): Number
The error code. The following error codes are supported:

- NoAccess = 0

- FileExists = 1

- FileNotFound = 2

- DirectoryExists = 3

- DirectoryNotFound = 4

- WrongFileExtension = 5

- MaxFileSizeExceeded = 6

- Other = 32767

##### field(e.errorText): String
The error message.

##### field(e.fileSystemItem): FileSystemItem
The processed file or directory.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onErrorOccurred: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onErrorOccurred)="onError($event)">
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        onOccurred(e){
            // your code
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager 
            :on-error-occurred="onError" >            
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
                onError(e) {
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
        const onError = (e) => {
            // your code
        };

        return (
            <FileManager onErrorOccurred={onError}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnErrorOccurred("onError");
        // ...
    )

    <script>
        function onError(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnErrorOccurred("onError");
        // ...
    )

    <script>
        function onError(e) {
            // your code
        }
    </script>

---