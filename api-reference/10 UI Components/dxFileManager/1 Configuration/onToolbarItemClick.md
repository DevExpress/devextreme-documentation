---
id: dxFileManager.Options.onToolbarItemClick
type: function(e)
default: null
EventForAction: dxFileManager.toolbarItemClick
---
---
##### shortDescription
A function that is executed when a toolbar item is clicked.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The UI component's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "UI component" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.itemData): Object
The clicked item's data.

##### field(e.itemElement): dxElement
#include common-ref-elementparam with { element: "item" }

##### field(e.itemIndex): Number
The clicked item's index.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---

---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onToolbarItemClick: function(e) {
                // Your code goes here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ...
        (onToolbarItemClick)="fileManager_onToolbarItemClick($event)">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        fileManager_onToolbarItemClick(e) {
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
            :on-toolbar-item-click="fileManager_onToolbarItemClick"
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
            fileManager_onToolbarItemClick(e) {
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
        fileManager_onToolbarItemClick(e) {
            // Your code goes here
        }

        render() {
            return (
                <FileManager ...
                    onToolbarItemClick={this.fileManager_onToolbarItemClick}
                />
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .onToolbarItemClick("fileManager_onToolbarItemClick");
        // ...
    )

    <script>
        function fileManager_onToolbarItemClick(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .onToolbarItemClick("fileManager_onToolbarItemClick");
        // ...
    )

    <script>
        function fileManager_onToolbarItemClick(e) {
            // your code
        }
    </script>

---