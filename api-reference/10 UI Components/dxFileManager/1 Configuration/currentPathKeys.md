---
id: dxFileManager.Options.currentPathKeys
type: Array<String>
default: []
---
---
##### shortDescription
Specifies an array of path keys to the current location.

---

Each path part has each own key. For example, path "directory1/directory2" has two parts: 'directory1' with the 'f1' key and directory2 with the 'f2' key. To open this location, assign the ["f1","f2"] array of strings to the **currentPathKeys** property value. 

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            currentPathKeys: ["EB458000-0341-6943", "92F5-4722-A7D6-98EB"]
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [currentPathKeys]="['EB458000-0341-6943', '92F5-4722-A7D6-98EB']">
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager
            :current-path-keys="keys" >   
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager
            },
            data() {
                return {
                    keys: ['EB458000-0341-6943', '92F5-4722-A7D6-98EB']
                };
            }            
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager from 'devextreme-react/file-manager';
    
    const keys = ['EB458000-0341-6943', '92F5-4722-A7D6-98EB']

    class App extends React.Component {
        render() {
            return (
                <FileManager currentPathKeys={keys} >
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .CurrentPathKeys(new[] { "EB458000-0341-6943", "92F5-4722-A7D6-98EB" })
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .CurrentPathKeys(new[] { "EB458000-0341-6943", "92F5-4722-A7D6-98EB" })
        // ...
    )

---
