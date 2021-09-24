---
id: ObjectFileSystemProvider
module: file_management/object_provider
export: default
inherits: FileSystemProviderBase
---
---
##### shortDescription
The **Object** file system provider works with a file system represented by an in-memory array of JSON objects.

---
Assign the array to the [data](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Object/1%20Configuration/data.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#data') property. Data object fields should have conventional names listed in the **data** description. Otherwise, specify **[fieldName]Expr** properties: [nameExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/nameExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#nameExpr'), [sizeExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/sizeExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#sizeExpr'), [dateModifiedExpr](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/FileSystemProviderBase/1%20Configuration/dateModifiedExpr.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#dateModifiedExpr'), and so on.

The following code shows how to bind the FileManager to the **Object** file system provider:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({            
            fileSystemProvider: fileSystem,
            // ...
        });
    });

    <!-- tab: data.js -->
    var fileSystem = [
    {
        name: "Documents",
        isDirectory: true,
        items: [{
            name: "Projects",
            isDirectory: true,
            items: [{
                name: "About.rtf",
                isDirectory: false,
                size: 1024
            }, {
                name: "Passwords.rtf",
                isDirectory: false,
                size: 2048
            }]
        }, {
            name: "About.xml",
            isDirectory: false,
            size: 1024
        }]
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="fileItems">
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider'; 

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        fileItems = [{
            name: "Documents",
            isDirectory: true,
            items: [{
                name: "Projects",
                isDirectory: true,
                items: [{
                    name: "About.rtf",
                    isDirectory: false,
                    size: 1024
                }, {
                    name: "Passwords.rtf",
                    isDirectory: false,
                    size: 2048
                }]
            },{
                name: "About.xml",
                isDirectory: false,
                size: 1024
            }]
        }];    
    }

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :file-system-provider="fileItems">
        </DxFileManager>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';     
    
    import { 
        DxFileManager
    } from 'devextreme-vue/file-manager';
    import { fileItems } from "./data.js";
    
    export default {
        components: {
            DxFileManager
        },
    
        data() {
            return {
                fileItems
            };
        }
    };
    </script>

    <!-- tab: data.js -->
    export const fileItems = [{
        'name': 'Documents',
        'isDirectory': true,
        'items': [{
            'name': 'Projects',
            'isDirectory': true,
            'items': [{
                'name': 'About.rtf',
                'isDirectory': false,
                'size': 1024
            }, {
                'name': 'Passwords.rtf',
                'isDirectory': false,
                'size': 2048
            }]
        }, {
            'name': 'About.xml',
            'isDirectory': false,
            'size': 1024
        }]
    }];

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';
    import FileManager from 'devextreme-react/file-manager';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager fileSystemProvider={fileItems}>
                </FileManager>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    export const fileItems = [{
        'name': 'Documents',
        'isDirectory': true,
        'items': [{
            'name': 'Projects',
            'isDirectory': true,
            'items': [{
                'name': 'About.rtf',
                'isDirectory': false,
                'size': 1024
            }, {
                'name': 'Passwords.rtf',
                'isDirectory': false,
                'size': 2048
            }]
        }, {
            'name': 'About.xml',
            'isDirectory': false,
            'size': 1024
        }]
    }];

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(new JS("fileSystem"))
    )

    <script src="~/data/fileSystem.js"></script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(new JS("fileSystem"))
    )

    <script src="~/data/fileSystem.js"></script>

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}