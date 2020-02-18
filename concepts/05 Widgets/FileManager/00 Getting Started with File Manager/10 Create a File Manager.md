The following code creates the **FileManager** widget and adds it to your page.

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({
            fileSystemProvider: fileSystem,
            currentPath: "Documents",
            height: 450,
            permissions: {
                create: true,
                copy: true,
                move: true,
                delete: true,
                rename: true
            }
        });
    });
    <!-- tab: index.html -->
    <div id="file-manager"></div>
    <!-- tab: data.js -->
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
        // ...
    ];      

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="fileItems">
        <dxo-permissions 
            [create]="true"
            [copy]="true"
            [move]="true"
            [delete]="true"
            [rename]="true" >
        </dxo-permissions>
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
            <DxPermissions
                :create="true"
                :create="true"
                :copy="true"
                :move="true"
                :delete="true"
                :rename="true" />
        </DxFileManager>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';     

    import { 
        DxFileManager, 
        DxPermissions 
    } from 'devextreme-vue/file-manager';
    import { fileItems } from "./data.js";

    export default {
        components: {
            DxFileManager,
            DxPermissions
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
                }
            ]
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

    import FileManager, { Permissions } from 'devextreme-react/file-manager';
    import { fileItems } from './data.js';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager fileSystemProvider={fileItems}>
                    <Permissions
                        create={true}
                        copy={true}
                        download={true}
                        move={true}
                        delete={true}
                        rename={true}
                        download={true} />
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
                }
            ]
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
        .Permissions(permissions => permissions
            .Create(true)
            .Copy(true)
            .Move(true)
            .Delete(true)
            .Rename(true)
            .Upload(true)
            .Download(true))
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
                    //...
                    }
                ]
                },
                //...
            ],
        },
        // ...
    ];

---
