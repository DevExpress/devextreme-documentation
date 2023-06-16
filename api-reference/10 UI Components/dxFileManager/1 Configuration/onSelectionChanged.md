---
id: dxFileManager.Options.onSelectionChanged
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file system item is selected or selection is canceled.

##### param(e): ui/file_manager:SelectionChangedEvent
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.currentDeselectedItemKeys): Array<String>
The keys of the file system items whose selection has been cleared.

##### field(e.currentSelectedItemKeys): Array<String>
The keys of the file system items that have been selected.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.model): any
Model data. Available only if you use Knockout.

##### field(e.selectedItemKeys): Array<String>
The keys of all selected file system items.

##### field(e.selectedItems): Array<FileSystemItem>
The currently selected file system items.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onSelectionChanged: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ...
        (onSelectionChanged)="fileManager_onSelectionChanged($event)">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fileManager_onSelectionChanged(e) {
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
        <DxFileManager ...
            :on-selection-changed="fileManager_onSelectionChanged"
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
            fileManager_onSelectionChanged(e) {
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
        fileManager_onSelectionChanged(e) {
            // Your code goes here
        }

        render() {
            return (
                <FileManager ...
                    onSelectionChanged={this.fileManager_onSelectionChanged}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnSelectionChanged("fileManager_onSelectionChanged");
        // ...
    )

    <script>
        function fileManager_onSelectionChanged(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnSelectionChanged("fileManager_onSelectionChanged");
        // ...
    )

    <script>
        function fileManager_onSelectionChanged(e) {
            // your code
        }
    </script>

---