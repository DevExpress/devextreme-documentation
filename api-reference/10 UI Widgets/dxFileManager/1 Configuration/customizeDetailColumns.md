---
id: dxFileManager.Options.customizeDetailColumns
type: function(columns)
---
---
##### shortDescription
Customizes columns in [details view](https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure). Applies only if **itemView**.[mode](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/itemView/mode.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/itemView/#mode') is *"details"*.

##### param(columns): Array<dxDataGridColumn>
The columns before customization.

##### return: Array<dxDataGridColumn>
The columns after customization.

---
---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            customizeDetailColumns: function(columns) {
                // ...
                // Customize the "columns" array objects here
                // ...
                return columns;
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager ...
        [customizeDetailColumns]="fileManager_customizeDetailColumns">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // Uncomment the following lines if the function should be executed in the component's context
        // constructor() {
        //     this.fileManager_customizeDetailColumns = this.fileManager_customizeDetailColumns.bind(this);
        // }

        fileManager_customizeDetailColumns(columns) {
            // ...
            // Customize the "columns" array objects here
            // ...
            return columns;
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
            :customize-detail-columns="fileManager_customizeDetailColumns"
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
            fileManager_customizeDetailColumns(columns) {
                // ...
                // Customize the "columns" array objects here
                // ...
                return columns;
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
        // Uncomment the following lines if the function should be executed in the component's context
        // constructor(props) {
        //     super(props);
        //     this.fileManager_customizeDetailColumns = this.fileManager_customizeDetailColumns.bind(this);
        // }

        fileManager_customizeDetailColumns(columns) {
            // ...
            // Customize the "columns" array objects here
            // ...
            return columns;
        }

        render() {
            return (
                <FileManager ...
                    customizeDetailColumns={this.fileManager_customizeDetailColumns}
                />
            );
        }
    }
    export default App;

---
