---
id: dxFileManager.Options.onSelectedFileOpened
type: function(e)
default: null
EventForAction: dxFileManager.selectedFileOpened
---
---
##### shortDescription
A function that is executed when the selected file is opened.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.fileItem): Object
File parameters.

##### field(e.model): Object
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

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fileManager_onSelectedFileOpened(e) {
            // Your code goes here
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxFileManagerModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        providers: [],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-file-manager ...
            :selected-file-opened="fileManager_onSelectedFileOpened"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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

---
