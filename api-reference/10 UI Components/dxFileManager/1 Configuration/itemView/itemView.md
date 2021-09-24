---
id: dxFileManager.Options.itemView
type: Object
default: null
---
---
##### shortDescription
Configures the file and folder view.

---

[note] Set the [itemView.mode](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/itemView/mode.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/#mode') property to **details** to configure [columns](/api-reference/10%20UI%20Components/dxFileManager/1%20Configuration/itemView/details/columns.md '/Documentation/ApiReference/UI_Components/dxFileManager/Configuration/itemView/details/columns/') in the UI component.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/UICustomization/"
}

![DevExtreme File Manager - Item View](/images/FileManager/item-view.png)

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            itemView: {
                mode: "thumbnails",
                showFolders: false,
                showParentFolder: false
            }
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-file-manager>
        <dxo-item-view 
            mode="thumbnails"
            showFolders="false"
            showParentFolder="false" >
        </dxo-item-view>
        <!-- ... -->
    </dx-file-manager>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager>   
            <DxItemView
                mode="thumbnails"
                :show-folders="false"
                :show-parent-folder="false"
            >
            </DxItemView>
        </DxFileManager>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';    
        
        import {
            DxFileManager,
            DxItemView
        } from 'devextreme-vue/file-manager';

        export default {
            components: {
                DxFileManager,
                DxItemView
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

    import FileManager, { ItemView } from 'devextreme-react/file-manager';
    
    class App extends React.Component {
        render() {
            return (
                <FileManager>
                    <ItemView 
                        mode="thumbnails"
                        showFolder={false}
                        showParentFolder={false}
                    />
                </FileManager>
            );
        }
    }
    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ItemView(v => v
            .Mode()
            .ShowFolder(false)
            .ShowParentFolder(false)
        )
    )

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ItemView(v => v
            .Mode()
            .ShowFolder(false)
            .ShowParentFolder(false)
        )
    )

---
