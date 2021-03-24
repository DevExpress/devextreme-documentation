Create a [file system provider](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/') that allows you to access and modify file systems.

[note]
In this section, the Object file system is used to quickly bind the FileManager UI component to data. Refer to the [Bind to File Systems](/concepts/05%20UI%20Components/FileManager/10%20Bind%20to%20File%20Systems '/Documentation/Guide/UI_Components/FileManager/Bind_to_File_Systems/') section for more information on supported file systems.

To bind the FileManager UI component to a hierarchical data structure, create an [Object](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Object '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/') file system provider and assign the array of hierarchical JSON objects to the provider's [data](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Object/1%20Configuration/data.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#data') property. The Object file system provider automatically binds data objects to the UI component if the data objects have the default 'name', 'size', 'dateModified', etc., fields in their structure. For example:

    var fileSystem = [
    {
        name: "MyFolder.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        items: [
            // ...
            // Nested data objects with the same structure
            // ...
        ]
        // ...
    }];

In the example below, the FileManager UI component displays hierarchical data stored in an in-memory array that contains fields with conventional names:

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
    var fileSystem = [{
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
            }, {
                name: "About.xml",
                isDirectory: false,
                size: 1024
            }]
        }];    
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
        //...
    })
    export class AppModule { }

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
    import { fileItems } from './data.js';
    
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
    <script src="~/Scripts/data/fileSystem.js"></script>

    <!-- fileSystem.js -->
    var fileSystem = [
        {
            name: "Documents",
            isDirectory: true,
            items: [
                {
                name: "Projects",
                isDirectory: true,
                items: [
                    {
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

---

#####See Also#####
[Bind to an Object File System](/concepts/05%20UI%20Components/FileManager/10%20Bind%20to%20File%20Systems/10%20Object%20File%20System.md '/Documentation/Guide/UI_Components/FileManager/Bind_to_File_Systems/#Object_File_System')
