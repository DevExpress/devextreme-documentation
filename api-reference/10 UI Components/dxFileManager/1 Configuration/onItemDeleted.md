---
id: dxFileManager.Options.onItemDeleted
type: function(e)
default: null
---
---
##### shortDescription
A function that is executed when a file or folder is deleted.

##### param(e): Object
Information about the event.

##### field(e.component): dxFileManager
The UI component's instance.

##### field(e.element): DxElement
#include common-ref-elementparam with { element: "component" }

##### field(e.item): FileSystemItem
The deleted file or folder.

##### field(e.model): any
Model data. Available only if you use Knockout.

---
---

##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#fileManagerContainer").dxFileManager({
            // ...
            onItemDeleted: function(e) {
                // your code
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager 
        (onItemDeleted)="onItemDeleted($event)">
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
        onItemDeleted(e){
            // your code
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';
    import { DxFileManagerModule } from 'devextreme-angular';

    @NgModule({
        imports: [
            DxFileManagerModule
        ],        
        declarations: [AppComponent],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :on-item-deleted="onItemDeleted" >
        </DxFileManager>
    </template>

    <script>
        import 'devextreme/dist/css/dx.light.css';

        import { 
            DxFileManager
            // ... 
        } from 'devextreme-vue/file-manager';
        
        export default {
            components: { 
                DxFileManager
                // ... 
            },
            methods: {
                onItemDeleted(e) {
                    // your code
                }
            },         
            data() {
                return {
                    //...
                };
            } 
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager from 'devextreme-react/file-manager';

    const App = () => {
        const onItemDeleted = (e) => {
            // your code
        };

        return (
            <FileManager onItemDeleted={onItemDeleted}>
                <!-- ... -->               
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemDeleted("onItemDeleted");
        // ...
    )

    <script>
        function onItemDeleted(e) {
            // your code
        }
    </script>

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .OnItemDeleted("onItemDeleted");
        // ...
    )

    <script>
        function onItemDeleted(e) {
            // your code
        }
    </script>

---

#####See Also#####
- [itemDeleted](/api-reference/10%20UI%20Components/dxFileManager/4%20Events/itemDeleted.md '/Documentation/ApiReference/UI_Components/dxFileManager/Events/#itemDeleted')