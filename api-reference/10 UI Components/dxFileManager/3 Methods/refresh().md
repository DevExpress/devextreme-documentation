---
id: dxFileManager.refresh()
---
---
##### shortDescription
Reloads data and repaints the UI component.

##### return: Promise<any>
A Promise that is resolved after data is loaded.
#include ref-promisedistinction

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

The following example illustrates how to use this method:

---

##### jQuery

    <!-- tab: index.js -->
    var fileManager = $("#fileManagerContainer").dxFileManager("instance");
    //...
    fileManager.refresh();

##### Angular

    <!-- tab: app.component.ts -->
    import { Component, ViewChild } from '@angular/core';
    import { DxFileManagerModule } from "devextreme-angular";
    
    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })    
    
    export class AppComponent {
        @ViewChild(DxFileManagerComponent, { static: false }) fileManager: DxFileManagerComponent;
        // Prior to Angular 8
        // @ViewChild(DxFileManagerComponent) fileManager: DxFileManagerComponent;

        yourCustomMethod() {
            this.fileManager.instance.refresh(); 
            // ...
        }
    }

    <!-- tab: app.component.html -->
    <dx-file-manager 
        id="fileManager">
        <!-- ... -->
    </dx-file-manager>

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
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }  

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :ref="fileManagerRef">
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager
        } from 'devextreme-vue/file-manager';

        const fileManagerRef = 'fileManager';

        export default {
            components: {
                DxFileManager
            },
            data() {
                return {
                    fileManagerRef
                }
            },
            computed: {
                fileManager: function() {
                    return this.$refs[fileManagerRef].instance;
                }
            },
            methods: {
                yourCustomMethod(){
                    this.fileManager.refresh();
                    // ...
                }
            }          
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.fileManagerRef = React.createRef();

            this.yourCustomMethod = () => {
                this.fileManager.refresh();
                // ...
            }
        }

        get fileManager() {
            return this.fileManagerRef.current.instance();
        }

        render() {
            return (
                <FileManager 
                    ref={this.fileManagerRef} >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("fileManager")
        // ...
    )
    <script type="text/javascript">
        function getFileManagerInstance() {
            return $("#fileManager").dxFileManager("instance");
        }
        function yourCustomMethod() {
            var fileManagerInstance = getFileManagerInstance();
            fileManagerInstance.refresh();
            // ...
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .ID("fileManager")
        // ...
    )
    <script type="text/javascript">
        function getFileManagerInstance() {
            return $("#fileManager").dxFileManager("instance");
        }
        function yourCustomMethod() {
            var fileManagerInstance = getFileManagerInstance();
            fileManagerInstance.refresh();
            // ...
        }
    </script>

---
