---
id: dxFileUploader.Options.onFilesUploaded
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the file upload process is complete.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileUploader
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
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
        onFilesUploaded(e){
            // ...
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
