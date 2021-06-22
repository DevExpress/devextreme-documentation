---
id: dxFileManager.Options.permissions
type: Object
---
---
##### shortDescription
Specifies actions that a user is allowed to perform on files and folders.

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/BindingToHierarchicalStructure/"
}

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            permissions: {
                create: true,
                copy: true,
                move: true,
                remove: true,
                rename: true
            },
            // ...
        });
    });

##### Angular

    <!--HTML--> 
    <dx-file-manager id="fileManager">
        <dxo-permissions 
            create="true"
            copy="true"
            move="true"
            delete="true"
            rename="true"
            upload="true"
            download="true">
        </dxo-permissions>    
        <!-- ... -->
    </dx-file-manager>

    <!--TypeScript-->
    import { DxFileManagerModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFileManagerModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>   
            <DxPermissions
                :create="true"
                :copy="true"
                :move="true"
                :delete="true"
                :rename="true"
                :upload="true"
                :download="true"
            />
        </DxFileManager>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxFileManager, DxPermissions } from 'devextreme-vue/file-manager';
    
    export default {
        components: {
            DxFileManager,
            DxPermissions
        },
        data() {
            return {
                // ...
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager, { Permissions } from 'devextreme-react/file-manager';

    const App = () => {
        return (
            <FileManager>
                <Permissions
                    create={true}
                    copy={true}
                    move={true}
                    delete={true}
                    rename={true}
                    upload={true}
                    download={true}>
                </Permissions>                
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .Permissions(permissions => permissions
            .Create(true)
            .Copy(true)
            .Move(true)
            .Delete(true)
            .Rename(true)
            .Upload(true)
            .Download(true)
        )
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .Permissions(permissions => permissions
            .Create(true)
            .Copy(true)
            .Move(true)
            .Delete(true)
            .Rename(true)
            .Upload(true)
            .Download(true)
        )
        // ...
    )

---
