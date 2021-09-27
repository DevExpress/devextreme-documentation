---
id: dxFileManager.Options.upload
type: Object
---
---
##### shortDescription
Configures upload settings.

---

---

##### jQuery

    $(function () {
        $("#file-manager").dxFileManager({
            upload: {
                chunkSize: 500000,
                maxFileSize: 1000000
            },
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager">
        <dxo-upload [chunkSize]="500000" [maxFileSize]="1000000" ></dxo-upload>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>   
            <DxUpload 
                :chunk-size="500000"
                :max-file-size="1000000"
                />
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxUpload
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxUpload
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
    
    import 'devextreme/dist/css/dx.light.css';

    import FileManager, { Upload } from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager>
                    <Upload 
                        chunkSize={500000} 
                        maxFileSize={1000000}
                    />
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .Upload(up => up
            .ChunkSize(500000)
            .MaxFileSize(1000000)
        )
        // ...
    )

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .Upload(up => up
            .ChunkSize(500000)
            .MaxFileSize(1000000)
        )
        // ...
    )

---
