---
id: dxFileUploader.Options.onBeforeSend
type: function(e)
default: null
---
---
##### shortDescription
A function that allows you to customize the request before it is sent to the server.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.file): File
An uploaded file.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

##### field(e.uploadInfo): UploadInfo
An object that provides information about the file upload session.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileUploaderContainer").dxFileUploader({
            // ...
            onBeforeSend: function(e) {
                e.request.withCredentials = true;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-uploader 
        (onBeforeSend)="onBeforeSend($event)">
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
            e.request.withCredentials = true;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileUploaderModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            DxFileUploaderModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileUploader 
            :on-before-send="onBeforeSend" >            
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
                onBeforeSend(e) {
                    e.request.withCredentials = true;
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
        const onBeforeSend = (e) => {
            e.request.withCredentials = true;
        };

        return (
            <FileUploader onBeforeSend={onBeforeSend}>
                <!-- ... -->               
            </FileUploader>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnBeforeSend("onBeforeSend");
        // ...
    )

    <script>
        function onBeforeSend(e) {
            e.request.withCredentials = true;
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileUploader()
        .OnBeforeSend("onBeforeSend");
        // ...
    )

    <script>
        function onBeforeSend(e) {
            e.request.withCredentials = true;
        }
    </script>

---