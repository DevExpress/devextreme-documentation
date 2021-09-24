---
id: dxFileUploader.Options.onUploadError
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an error occurs during the file upload.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.error): any
The error that occurred.

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
The uploaded file.

##### field(e.message): String
The message displayed by the UI component on uploading failure.

##### field(e.model): any
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
Specifies an XMLHttpRequest for the file.

---
The following code shows how you can handle a network error.

---

##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#fileUploader").dxFileUploader({
            // ...
            onUploadError: function(e){
                var xhttp = e.request;
                if (xhttp.readyState == 4 && xhttp.status == 0) {
                    console.log("Connection refused.");
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader 
        (onUploadError)="onUploadError($event)">
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
        onUploadError(e){
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            } 
        }
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader 
            :on-upload-error="onUploadError" >            
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
                onUploadError(e) {
                    var xhttp = e.request;
                    if (xhttp.readyState == 4 && xhttp.status == 0) {
                        console.log("Connection refused.");
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
    import FileUploader from 'devextreme-react/file-uploader';

    const App = () => {
        const onUploadError = (e) => {
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            } 
        };

        return (
            <FileUploader onUploadError={onUploadError}>
                <!-- ... -->               
            </FileUploader>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnUploadError("onUploadError");
        // ...
    )

    <script>
        function onUploadError(e) {
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            } 
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnUploadError("onUploadError");
        // ...
    )

    <script>
        function onUploadError(e) {
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            } 
        }
    </script>

---


#####See Also#####
- [uploadFailedMessage](/api-reference/10%20UI%20Components/dxFileUploader/1%20Configuration/uploadFailedMessage.md '/Documentation/ApiReference/UI_Components/dxFileUploader/Configuration/#uploadFailedMessage')