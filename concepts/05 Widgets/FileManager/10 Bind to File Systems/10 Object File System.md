The **FileManager** UI component provides the Object file system provider to manage files and folders in an in-memory array of JSON objects.

![FileManager - Hierarchical Data Structure](/images/FileManager/array-file-system-provider.png)

Create an Object file system provider and assign the array of hierarchical JSON objects to the provider's [data](/api-reference/10%20UI%20Components/dxFileManager/5%20File%20System%20Providers/Object/1%20Configuration/data.md '/Documentation/ApiReference/UI_Components/dxFileManager/File_System_Providers/Object/Configuration/#data') option to bind the **FileManager** UI component to a hierarchical data structure.

The provider automatically binds data objects to the UI component if the data objects have default fields in their structure. For example:

    var fileSystem = [
    {
        name: "MyFile.jpg",
        size: 1024,
        dateModified: "2019/05/08",
        thumbnail: "/thumbnails/images/jpeg.ico",
        isDirectory: true,
        items: [
            // ...
            // Nested data objects with the same structure
            // ...
        ]
    },
    // ...
    ];

In the example below, the **FileManager** UI component displays hierarchical data stored in an in-memory array that contains fields with conventional names.

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
    import 'devextreme/dist/css/dx.common.css';
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

    import 'devextreme/dist/css/dx.common.css';
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

If the data source's field names differ from the standard field names mentioned above, use the **[fieldName]Expr** options when you specify the file system item's name, size, and so on.

---

##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#file-manager").dxFileManager({ 
            fileSystemProvider: new DevExpress.fileManagement.ObjectFileSystemProvider({            
                data: fileSystem,
                isDirectoryExpr: "isFolder",
                sizeExpr: "itemSize"                
            })
        });
    });

    <!-- tab: data.js -->
    var fileSystem = [{
        name: "Documents",
        isFolder: true,
        items: [{
            name: "Projects",
            isFolder: true,
            items: [{
                name: "About.rtf",
                isFolder: false,
                itemSize: 1024
            }, {
                name: "Passwords.rtf",
                isFolder: false,
                itemSize: 2048
            }]
        }, {
            name: "About.xml",
            isFolder: false,
            itemSize: 1024
        }]
    }];

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="objectFileProvider">
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
        fileItems: object[];
        objectFileProvider: ObjectFileSystemProvider;

        constructor() {
            this.fileItems = [{
                name: "Documents",
                isFolder: true,
                items: [{
                    name: "Projects",
                    isFolder: true,
                    items: [{
                        name: "About.rtf",
                        isFolder: false,
                        itemSize: 1024
                    },{
                        name: "Passwords.rtf",
                        isFolder: false,
                        itemSize: 2048
                    }]
                }]
            }];
            this.objectFileProvider = new ObjectFileSystemProvider({
                data: this.fileItems,
                isDirectoryExpr: "isFolder",
                sizeExpr: "itemSize"
            });
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
        //...
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :file-system-provider="objectFileProvider">
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';     

    import { DxFileManager } from 'devextreme-vue/file-manager';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import { fileItems } from './data.js';

    const objectFileProvider = new ObjectFileSystemProvider({
        data: fileItems,
        isDirectoryExpr: "isFolder",
        sizeExpr: "itemSize"
    });

    export default {
        components: {
            DxFileManager,
            ObjectFileSystemProvider
        },

        data() {
            return {
                objectFileProvider
            };
        }
    };
    </script>

    <!-- tab: data.js -->
    export const fileItems = [{
        'name': 'Documents',
        'isFolder': true,
        'items': [{
            'name': 'Projects',
            'isFolder': true,
            'items': [{
                'name': 'About.rtf',
                'isFolder': false,
                'itemSize': 1024
            }, {
                'name': 'Passwords.rtf',
                'isFolder': false,
                'itemSize': 2048
            }]
        }, {
            'name': 'About.xml',
            'isFolder': false,
            'itemSize': 1024
        }]
    }];

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import { fileItems } from './data.js';

    const objectFileProvider = new ObjectFileSystemProvider({
        isDirectoryExpr: "isFolder",
        sizeExpr: "itemSize",
        data: fileItems
    });

    class App extends React.Component {
        render() {
            return (
                <FileManager fileSystemProvider={objectFileProvider}>
                </FileManager>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    export const fileItems = [{
        'name': 'Documents',
        'isFolder': true,
        'items': [{
            'name': 'Projects',
            'isFolder': true,
            'items': [{
                'name': 'About.rtf',
                'isFolder': false,
                'itemSize': 1024
            }, {
                'name': 'Passwords.rtf',
                'isFolder': false,
                'itemSize': 2048
            }]
        }, {
            'name': 'About.xml',
            'isFolder': false,
            'itemSize': 1024
        }]
    }];

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(new JS("objectFileProvider"))
    )
    <script>
        var fileItems = [{
            name: "Documents",
            isFolder: true,
            items: [{
                name: "Projects",
                isFolder: true,
                items: [{
                    name: "About.rtf",
                    isFolder: false,
                    itemSize: 1024
                }, {
                    name: "Passwords.rtf",
                    isFolder: false,
                    itemSize: 2048
                }]
            }]
        }];
        var objectFileProvider = {
            isDirectoryExpr: "isFolder",
            sizeExpr: "itemSize",
            data: fileItems
        };     
    </script>
    
---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}
