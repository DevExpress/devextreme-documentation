---
id: dxFileManager.Options.onFocusedItemChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when the focused item is changed.

##### param(e): FocusedItemChangedEvent
Information about the event that caused the function's execution.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onFocusedItemChanged: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onFocusedItemChanged)="onFocusedItemChangedEv($event)">
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
        onFocusedItemChangedEv(e){
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
            :on-focused-item-changed="onFocusedItemChangedEv" >            
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
                onFocusedItemChangedEv(e) {
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
        const onFocusedItemChangedEv = (e) => {
            // your code
        };

        return (
            <FileManager onFocusedItemChanged={onFocusedItemChangedEv}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnFocusedItemChanged("onFocusedItemChangedEv");
        // ...
    )

    <script>
        function onFocusedItemChangedEv(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnFocusedItemChanged("onFocusedItemChangedEv");
        // ...
    )

    <script>
        function onFocusedItemChangedEv(e) {
            // your code
        }
    </script>

---