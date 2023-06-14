---
id: dxFileManager.Options.onErrorOccurred
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when an error occurs.

##### param(e): ErrorOccurredEvent
Information about the event that caused the function's execution.

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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        onOccurred(e){
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