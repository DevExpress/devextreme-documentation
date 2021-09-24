---
id: dxFileUploader.Options.onFilesUploaded
type: function(e)
default: null
EventForAction: dxFileUploader.filesUploaded
---
---
##### shortDescription
A function that is executed when all files are successfully uploaded.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): Object
Model data. Available only if Knockout is used.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            onFilesUploaded: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader 
        (onFilesUploaded)="onFilesUploaded($event)">
        <!-- ... -->
    </dx-file-uploader>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onBeforeSend(e){
            // ...
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader 
            :on-files-uploaded="onFilesUploaded" >            
        </DxFileUploader>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileUploader
            // ... 
        } from 'devextreme-vue/file-uploader';
        
        export default {
            components: { 
                DxFileUploader
                // ... 
            },
            methods: {
                onFilesUploaded(e) {
                    // ...
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
    import FileUploader from 'devextreme-react/file-uploader';

    const App = () => {
        const onFilesUploaded = (e) => {
            // ...
        };

        return (
            <FileUploader onFilesUploaded={onFilesUploaded}>
                <!-- ... -->               
            </FileUploader>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnFilesUploaded("onFilesUploaded");
        // ...
    )

    <script>
        function onFilesUploaded(e) {
            // ...
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnFilesUploaded("onFilesUploaded");
        // ...
    )

    <script>
        function onFilesUploaded(e) {
            // ...
        }
    </script>

---