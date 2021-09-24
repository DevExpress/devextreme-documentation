---
id: dxFileManager.Options.fileSystemProvider
type: any
default: null
---
---
##### shortDescription
Specifies the file system provider.

---
File system providers are components that provide APIs used to access and modify virtual file systems.

The following example illustrates how to configure an [Object](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Object '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/') file system provider:

---

##### jQuery

    <!--tab: index.js-->
    $(function () {
        $("#file-manager").dxFileManager({
            fileSystemProvider: fileSystem,
            // ...
        });
    });

    <!--tab: data.js-->
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
                        },
                        {
                            name: "Passwords.rtf",
                            isDirectory: false,
                            size: 2048
                        }
                    ]
                },
                {
                    name: "About.xml",
                    isDirectory: false,
                    size: 1024
                },
                //...
            ],
        },
        //...
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="fileSystem">
    </dx-file-manager>  

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';    

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {
        fileSystem = [{
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
            :file-system-provider="fileSystem">
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';     

    import { 
        DxFileManager
    } from 'devextreme-vue/file-manager';
    import { fileSystem } from "./data.js";

    export default {
        components: {
            DxFileManager
        },

        data() {
            return {
                fileSystem
            };
        }
    };
    </script>

    <!-- tab: data.js -->
    export const fileSystem = [{
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
    import { fileSystem } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager fileSystemProvider={fileSystem}>
                </FileManager>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    export const fileSystem = [{
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
    <script src="~/Scripts/data/data.js"></script>

    <!-- data.js -->
    var fileSystem = [{
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

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(new JS("fileSystem"))
    )
    <script src="~/Scripts/data/data.js"></script>

    <!-- data.js -->
    var fileSystem = [{
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

Refer to [File System Providers](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/') for information on supported file system providers.
