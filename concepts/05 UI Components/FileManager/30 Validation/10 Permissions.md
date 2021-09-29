Use the [permissions](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/permissions '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/permissions/') property to specify whether to allow or deny a user to manage files and folders in the FileManager UI component: copy, create, download, move, remove, rename, or upload. 

The UI component also has the [allowedFileExtensions](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/allowedFileExtensions.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/#allowedFileExtensions') property that allows you to specify file extensions allowed for display and upload in the FileManager UI component. The UI component fails to upload and displays the error message if a user tries to upload files with restricted extensions.

![DevExtreme File Manager - Allowed File Extension](/images/FileManager/allowed-file-extension-error-message.png)

---

##### jQuery

    <!-- tab: index.js -->
    $(function () {
        $("#file-manager").dxFileManager({            
            permissions: {
                create: true,
                copy: true,
                download: true,
                move: true,
                remove: true,
                rename: true,
                upload: true
            },
            allowedFileExtensions: [".txt", ".doc", ".png"]
            // ...
        });
    });    

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager" 
        [allowedFileExtensions]="allowedFileExtensions" >
        <dxo-permissions 
            [create]="true"
            [copy]="true"
            [download]="true"
            [move]="true"
            [remove]="true"
            [rename]="true"
            [upload]="true">
        </dxo-permissions>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        allowedFileExtensions: string[];
        
        constructor() {
            this.allowedFileExtensions = [".txt", ".doc", ".png"];
        }
        //...
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
        <DxFileManager :allowed-file-extensions="allowedFileExtensions">   
            <DxPermissions
                :create="true"
                :copy="true"
                :download="true"
                :move="true"
                :remove="true"
                :rename="true"
                :upload="true" />
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxPermissions
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxPermissions
            },
            data() {
                return {
                    allowedFileExtensions: ['.txt', '.doc', '.png']
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { 
        Permissions 
    } from 'devextreme-react/file-manager';
    const allowedFileExtensions = ['.txt', '.doc', '.png'];
    
    class App extends React.Component {
        render() {
            return (
                <FileManager allowedFileExtensions={allowedFileExtensions}>
                    <Permissions
                        create={true}
                        copy={true}
                        download={true}
                        move={true}
                        remove={true}
                        rename={true}
                        download={true} />
                </FileManager>
            );
        }
    }
    export default App;

---
