---
id: FileSystemError
module: file_management/error
export: default
---
---
##### shortDescription
An object that contains information about the error.

---

---

##### jQuery

    <!-- tab: index.js -->
    const objectProvider = new DevExpress.fileManagement.ObjectFileSystemProvider({ data: fileSystem });
    const keepExtensionsProvider = new DevExpress.fileManagement.CustomFileSystemProvider({
        getItems: function(item) {
            return objectProvider.getItems(item);
        },
        renameItem: function(item, newName) {
            return new Promise((resolve, reject) => {
                if(item.getFileExtension() !== getExtension(newName)) {
                    // 1 - reject
                    reject(new DevExpress.fileManagement.FileSystemError(5, item, "You cannot change the file extension."));
                    // 2 - throw
                    // throw new DevExpress.fileManagement.FileSystemError(5, item, "You cannot change the file extension.");
                } else {
                    resolve(objectProvider.renameItem(item, newName));
                }
            });
        }
    });
    const getExtension = function(path) {
        const index = path.lastIndexOf(".");
        return index !== -1 ? path.substr(index) : "";
    }

    $("#file-manager").dxFileManager({ 
        fileSystemProvider: keepExtensionsProvider,
        permissions: { rename: true }
    });
    
    <!-- tab: fileSystem.js -->
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
                {
                    name: "Managers.rtf",
                    isDirectory: false,
                    size: 2048
                },
                {
                    name: "ToDo.txt",
                    isDirectory: false,
                    size: 3072
                }
            ],
        },
        {
            name: "Images",
            isDirectory: true,
            items: [
                {
                    name: "logo.png",
                    isDirectory: false,
                    size: 20480
                },
                {
                    name: "banner.gif",
                    isDirectory: false,
                    size: 10240
                }
            ]
        },
        {
            name: "System",
            isDirectory: true,
            items: [
                {
                    name: "Employees.txt",
                    isDirectory: false,
                    size: 3072
                },
                {
                    name: "PasswordList.txt",
                    isDirectory: false,
                    size: 5120
                }
            ]
        },
        {
            name: "Description.rtf",
            isDirectory: false,
            size: 1024
        },
        {
            name: "Description.txt",
            isDirectory: false,
            size: 2048
        }
    ];

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
        [fileSystemProvider]="keepExtensionsProvider">
        <dxo-permissions rename="true">
        </dxo-permissions>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import ObjectFileSystemProvider from 'devextreme/file_management/object_provider';
    import CustomFileSystemProvider from 'devextreme/file_management/custom_provider';
    import FileSystemError from 'devextreme/file_management/error';
    import { Service, FileItem } from "./app.service";

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css'],
        providers: [Service]
    })

    export class AppComponent {
        fileItems: FileItem[];
        objectProvider: ObjectFileSystemProvider;
        keepExtensionsProvider: CustomFileSystemProvider;

        constructor(service: Service) {
            this.fileItems = service.getFileItems();
            this.objectProvider = new ObjectFileSystemProvider({
                data: this.fileItems
            });
            this.keepExtensionsProvider = new CustomFileSystemProvider({
                getItems: (parentDir) => this.getItems(parentDir),
                renameItem: (item, newName) => this.renameItem(item, newName)
            });
        }      
        getItems(item) {
            return this.objectProvider.getItems(item);
        }
        renameItem(item, newName) {
            return new Promise<any>((resolve, reject) => {
            if(item.getFileExtension() !== this.getExtension(newName)) {
                // 1 - reject
                reject(new FileSystemError(5, item, "You cannot change the file extension."));
                // 2 - throw
                // throw new FileSystemError(5, item, "You cannot change the file extension.");
            } else {
                resolve(this.objectProvider.renameItem(item, newName));
            }
            });
        }
        getExtension(path) {
            const index = path.lastIndexOf(".");
            return index !== -1 ? path.substr(index) : "";
        }
    }  

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from "devextreme-angular";

    @NgModule({
        imports: [
            // ...
            DxFileManagerModule
        ],
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }
    
    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class FileItem {
        name: string;
        isDirectory: boolean;
        size?: number;
        items?: FileItem[];
    }

    let fileItems: FileItem[] = [{
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
        }, {
            'name': 'Managers.rtf',
            'isDirectory': false,
            'size': 2048
        }, {
            'name': 'ToDo.txt',
            'isDirectory': false,
            'size': 3072
        }],
    }, {
        'name': 'Images',
        'isDirectory': true,
        'items': [{
            'name': 'logo.png',
            'isDirectory': false,
            'size': 20480
        }, {
            'name': 'banner.gif',
            'isDirectory': false,
            'size': 10240
        }]
    }, {
        'name': 'System',
        'isDirectory': true,
        'items': [{
            'name': 'Employees.txt',
            'isDirectory': false,
            'size': 3072
        }, {
            'name': 'PasswordList.txt',
            'isDirectory': false,
            'size': 5120
        }]
    }, {
        'name': 'Description.rtf',
        'isDirectory': false,
        'size': 1024
    }, {
        'name': 'Description.txt',
        'isDirectory': false,
        'size': 2048
    }];

    @Injectable()
    export class Service {
        getFileItems(): FileItem[] {
            return fileItems;
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager :file-system-provider="keepExtensionsProvider">
            <DxPermissions :rename="true" />
        </DxFileManager>
    </template>

    <script>
        import ObjectFileSystemProvider from "devextreme/file_management/object_provider";
        import CustomFileSystemProvider from "devextreme/file_management/custom_provider";
        import FileSystemError from "devextreme/file_management/error";
        import { DxFileManager, DxPermissions } from "devextreme-vue/file-manager";
        import { fileItems } from "./data.js";
        export default {
            components: {
                DxFileManager,
                DxPermissions,
            },
            data() {
                return {
                    objectProvider: new ObjectFileSystemProvider({ data: fileItems }),
                    keepExtensionsProvider: new CustomFileSystemProvider({
                        getItems: (parentDir) => this.getItems(parentDir),
                        renameItem: (item, newName) => this.renameItem(item, newName),
                    }),
                    };
                },
                methods: {
                    getItems(parentDir) {
                        return this.objectProvider.getItems(parentDir);
                    },
                    renameItem(item, newName) {
                        return new Promise((resolve, reject) => {
                            if(item.getFileExtension() !== this.getExtension(newName)) {
                                // 1 - reject
                                reject(new FileSystemError(5, item, "You cannot change the file extension."));
                                // 2 - throw
                                // throw new FileSystemError(5, item, "You cannot change the file extension.");
                            } else {
                                resolve(this.objectProvider.renameItem(item, newName));
                            }
                        });
                    },
                },
            },
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
      }, {
        'name': 'Managers.rtf',
        'isDirectory': false,
        'size': 2048
      }, {
        'name': 'ToDo.txt',
        'isDirectory': false,
        'size': 3072
      }],
    }, {
      'name': 'Images',
      'isDirectory': true,
      'items': [{
        'name': 'logo.png',
        'isDirectory': false,
        'size': 20480
      }, {
        'name': 'banner.gif',
        'isDirectory': false,
        'size': 10240
      }]
    }, {
      'name': 'System',
      'isDirectory': true,
      'items': [{
        'name': 'Employees.txt',
        'isDirectory': false,
        'size': 3072
      }, {
        'name': 'PasswordList.txt',
        'isDirectory': false,
        'size': 5120
      }]
    }, {
      'name': 'Description.rtf',
      'isDirectory': false,
      'size': 1024
    }, {
      'name': 'Description.txt',
      'isDirectory': false,
      'size': 2048
    }];

##### React

    <!-- tab: App.js -->
    import React from "react";
    import ObjectFileSystemProvider from "devextreme/file_management/object_provider";
    import CustomFileSystemProvider from "devextreme/file_management/custom_provider";
    import FileSystemError from "devextreme/file_management/error";
    import FileManager, { Permissions } from "devextreme-react/file-manager";
    import { fileItems } from "./data.js";

    import 'devextreme/dist/css/dx.light.css';

    const objectProvider = new ObjectFileSystemProvider({
        data: fileItems
    });

    const keepExtensionsProvider = new CustomFileSystemProvider({
        getItems: (parentDir) => getItems(parentDir),
        renameItem: (item, newName) => renameItem(item, newName),
    });

    function getItems(parentDir) {
        return objectProvider.getItems(parentDir);
    };

    function renameItem(item, newName) {
        return new Promise((resolve, reject) => {
        if(item.getFileExtension() !== getExtension(newName)) {
            // 1 - reject
            reject(new FileSystemError(5, item, "You cannot change the file extension."));
            // 2 - throw
            // throw new FileSystemError(5, item, "You cannot change the file extension.");
        } else {
            resolve(objectProvider.renameItem(item, newName));
        }
        });
    };

    function getExtension(path) {
        const index = path.lastIndexOf(".");
        return index !== -1 ? path.substr(index) : "";
    };

    const App = () => {
        return (
            <FileManager 
                fileSystemProvider={keepExtensionsProvider}>
                <Permissions rename={true}></Permissions>
            </FileManager>
        );
    };

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
      }, {
        'name': 'Managers.rtf',
        'isDirectory': false,
        'size': 2048
      }, {
        'name': 'ToDo.txt',
        'isDirectory': false,
        'size': 3072
      }],
    }, {
      'name': 'Images',
      'isDirectory': true,
      'items': [{
        'name': 'logo.png',
        'isDirectory': false,
        'size': 20480
      }, {
        'name': 'banner.gif',
        'isDirectory': false,
        'size': 10240
      }]
    }, {
      'name': 'System',
      'isDirectory': true,
      'items': [{
        'name': 'Employees.txt',
        'isDirectory': false,
        'size': 3072
      }, {
        'name': 'PasswordList.txt',
        'isDirectory': false,
        'size': 5120
      }]
    }, {
      'name': 'Description.rtf',
      'isDirectory': false,
      'size': 1024
    }, {
      'name': 'Description.txt',
      'isDirectory': false,
      'size': 2048
    }];

##### ASP.NET MVC Controls

    <!-- tab: Razor C# -->
    @(Html.DevExtreme().FileManager()
        .FileSystemProvider(provider => provider
            .Custom()
            .GetItems("getItems")
            .RenameItem("renameItem"))
        .Permissions(permissions => permissions.Rename(true))
    )
    <script src="~/fileSystem.js"></script>
    <script>
        const objectProvider = new DevExpress.fileManagement.ObjectFileSystemProvider({ data: fileSystem });

        function getItems(item) {
            return objectProvider.getItems(item);

        }
        function renameItem(item, newName) {
            return new Promise((resolve, reject) => {
                if(item.getFileExtension() !== getExtension(newName)) {
                    // 1 - reject
                    reject(new DevExpress.fileManagement.FileSystemError(5, item, "You cannot change the file extension."));
                    // 2 - throw
                    // throw new DevExpress.fileManagement.FileSystemError(5, item, "You cannot change the file extension.");
                } else {
                    resolve(objectProvider.renameItem(item, newName));
                }
            });
        }
        function getExtension(path) {
            const index = path.lastIndexOf(".");
            return index !== -1 ? path.substr(index) : "";
        }
    </script>

    <!-- tab: fileSystem.js -->
    var fileSystem = [
        {
            name: "Documents",
            isDirectory: true,
            category: "Work",
            items: [
                {
                    name: "Projects",
                    isDirectory: true,
                    category: "Work",
                    items: [
                        {
                            name: "About.rtf",
                            isDirectory: false,
                            size: 1024
                        },
                        {
                            name: "Passwords.rtf",
                            isDirectory: false,
                            category: "Important",
                            size: 2048
                        }
                    ]
                },
                {
                    name: "About.xml",
                    isDirectory: false,
                    size: 1024
                },
                {
                    name: "Managers.rtf",
                    isDirectory: false,
                    size: 2048
                },
                {
                    name: "ToDo.txt",
                    isDirectory: false,
                    size: 3072
                }
            ],
        },
        {
            name: "Images",
            isDirectory: true,
            category: "Home",
            items: [
                {
                    name: "logo.png",
                    isDirectory: false,
                    size: 20480
                },
                {
                    name: "banner.gif",
                    isDirectory: false,
                    size: 10240
                }
            ]
        },
        {
            name: "System",
            isDirectory: true,
            category: "Important",
            items: [
                {
                    name: "Employees.txt",
                    isDirectory: false,
                    category: "Important",
                    size: 3072
                },
                {
                    name: "PasswordList.txt",
                    isDirectory: false,
                    category: "Important",
                    size: 5120
                }
            ]
        },
        {
            name: "Description.rtf",
            isDirectory: false,
            size: 1024
        },
        {
            name: "Description.txt",
            isDirectory: false,
            size: 2048
        }
    ];

---

