Use the **FileManager** UI component's [Custom](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/Custom '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/') file system provider to implement custom APIs to access and manage file systems. This provider allows you to handle each file operation manually. Use the custom provider when it's necessary to connect the UI component to an API service with a custom request or response format.

![FileManager - Custom Provider](/images/FileManager/custom-provider.png)

Assign the [Custom](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/Custom '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/') file system provider to the [fileSystemProvider](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/fileSystemProvider.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#fileSystemProvider') property to implement a custom file system provider and bind the **FileManager** UI component to it. The [getItems](/api-reference/10%20UI%20Widgets/dxFileManager/5%20File%20System%20Providers/Custom/1%20Configuration/getItems.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Custom/Configuration/#getItems') function allows you to get file system items. Use the **[fieldName]Expr** properties specify the attribute names that store file system item keys, names, sizes, modification dates, and etc. You can also use the 'copyItem', 'deleteItem', and other functions to handle file operations. 

---

##### jQuery

    <!--JavaScript-->
    $("#file-manager").dxFileManager({
        // Assigns the Custom file system provider to the UI component
        fileSystemProvider: new DevExpress.fileManagement.CustomFileSystemProvider({
            // Function to get file system items
            getItems: getItems,
            // Functions to handle file operations
            createDirectory: createDirectory,
            deleteItem: deleteItem
            // ...
        }),        
    });
    function getItems (pathInfo) {
        // your code
    }
    function createDirectory(parentDirectory, name) {
        // your code
    }
    function deleteItem(item) {
        // your code
    }

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager" 
        [fileSystemProvider]="customFileProvider">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';

    @Component({
        selector: 'app-root',
        templateUrl: 'app/app.component.html',
        styleUrls: ['app/app.component.css']
    })

    export class AppComponent {
        customFileProvider: CustomFileSystemProvider;

        constructor() {
            // Creates a custom file system provider 
            this.customFileProvider = new CustomFileSystemProvider({
                // Function to get file system items
                getItems,
                // Functions to handle file operations
                createDirectory,
                deleteItem                
            });
        }
    }
    function getItems(pathInfo) {
        // ...
    }
    function createDirectory(parentDirectory, name) {
        // ...
    } 
    function deleteItem(item) {
        // ...
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule} from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';
    
    @NgModule({
        imports: [
            BrowserModule,
            DxFileManagerModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager :file-provider="customFileProvider"></DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';     
        
        import { DxFileManager } from 'devextreme-vue/file-manager';
        import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';        

        // Creates a custom file system provider 
        const customFileProvider = new CustomFileSystemProvider({
            // Function to get file system items
            getItems,
            // Functions to handle file operations
            createDirectory,
            deleteItem            
        });
    
        export default {
            components: {
                DxFileManager,
                CustomFileSystemProvider
            },

            data() {
                return { customFileProvider };
            }
        };
        function getItems(pathInfo) {
            // ...
        }
        function createDirectory(parentDirectory, name) {
            // ...
        }
        function deleteItem(item) {
            // ...
        }                
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';

    // Creates a custom file system provider 
    const customFileProvider = new CustomFileSystemProvider({
        // Function to get file system items
        getItems,
        // Functions to handle file operations
        createDirectory,
        deleteItem
    });

    class App extends React.Component {
        render() {
            return(
                <FileManager 
                    fileSystemProvider={customFileProvider} >
                </FileManager>
            );
        }
    }   
    function getItems(pathInfo) {
        // ...
    }
    function createDirectory(parentDirectory, name) {
        // ...
    }
    function deleteItem(item) {
        // ...
    }         
    export default App; 

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        <!-- Assigns a custom file system provider to the UI component -->
        .FileSystemProvider(provider => provider.Custom()
            <!-- Function to get file system items -->
            .GetItems("getItems")
            <!-- Functions to handle file operations -->
            .CreateDirectory("createDirectory")
            .DeleteItem("deleteItem")
        )
    )
    <script>
      function getItems(pathInfo) {
        // ...
      }
      function createDirectory(parentDirectory, name) {
        // your code                
      }
      function deleteItem(item) {
        // your code
      }
    </script>    

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/AzureClientBinding/"
}
