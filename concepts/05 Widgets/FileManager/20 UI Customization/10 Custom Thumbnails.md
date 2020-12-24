#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/FileManager/CustomThumbnails/"
}

The **FileManager** UI component allows you to provide custom thumbnails for a file system's items in Thumbnails [mode](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/itemView/mode.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/itemView/#mode').

![DevExtreme FileManager - Custom Thumbnails](/images/FileManager/custom-thumbnails.png)

Handle the [customizeThumbnail](/api-reference/10%20UI%20Widgets/dxFileManager/1%20Configuration/customizeThumbnail.md '/Documentation/ApiReference/UI_Widgets/dxFileManager/Configuration/#customizeThumbnail') function to specify which icons the UI component should display for files and folders. This function returns different icons based on a file system item's type (file or folder), extension, or other parameters.

You can specify an icon in the following formats: 

- The icon's URL.
- The icon's name if the icon is from the DevExtreme icon library.
- The icon's CSS class if the icon is from an external icon library (see External Icon Libraries).
- The icon in the Base64 format.

---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            // ...
            itemView: {
                mode: "thumbnails"
            },
            customizeThumbnail: function (fileManagerItem) {
                if (fileManagerItem.isDirectory)
                    return "images/thumbnails/folder.svg";
                var fileExtension = fileManagerItem.getExtension();
                switch (fileExtension) {
                    case ".txt":
                        return "images/thumbnails/doc-txt.svg";
                    case ".rtf":
                        return "images/thumbnails/doc-rtf.svg";
                    case ".xml":
                        return "images/thumbnails/doc-xml.svg";
                }
            }
        });
    }); 

##### Angular

    <!-- tab: app.component.ts -->
    import { DxFileManagerModule } from 'devextreme-angular';    
    // ...
    export class AppComponent {
        // ...
        customizeIcon(fileManagerItem) {
            if (fileManagerItem.isDirectory)
                return "images/thumbnails/folder.svg";
            const fileExtension = fileManagerItem.getExtension();
            switch (fileExtension) {
                case ".txt":
                    return "images/thumbnails/doc-txt.svg";
                case ".rtf":
                    return "images/thumbnails/doc-rtf.svg";
                case ".xml":
                    return "images/thumbnails/doc-xml.svg";
            }
        }
    }
    <!-- tab: app.component.html -->
    <dx-file-manager id="fileManager"
        [fileSystemProvider]="fileItems"
        [customizeThumbnail]="customizeIcon" >
        <dxo-item-view
            mode="thumbnails">
        </dxo-item-view>
        <!-- ... -->    
    </dx-file-manager>

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxFileManager            
            :customize-thumbnail="customizeIcon">
            <DxItemView mode="thumbnails"/>
            <!-- ... -->
        </DxFileManager>
    </template>
    <script>
    import { DxFileManager, DxItemView } from 'devextreme-vue/file-manager';
    export default {  
        methods: {
            customizeIcon(fileManagerItem) {
                if (fileManagerItem.isDirectory)
                    return 'images/thumbnails/folder.svg';
                const fileExtension = fileManagerItem.getExtension();
                switch (fileExtension) {
                    case '.txt':
                        return 'images/thumbnails/doc-txt.svg';
                    case '.rtf':
                        return 'images/thumbnails/doc-rtf.svg';
                    case '.xml':
                        return 'images/thumbnails/doc-xml.svg';
                }
            }
        }
    };
    </script>


##### React

    <!-- tab: App.js -->
    import React from 'react';
    import FileManager, { ItemView } from 'devextreme-react/file-manager';
    class App extends React.Component {
        render() {
            return (
            <FileManager
                customizeThumbnail={this.customizeIcon}>
                <ItemView
                    mode="thumbnails"
                />
                {/* ... */}
            </FileManager>
            );
        }
        customizeIcon(fileManagerItem) {
            if (fileManagerItem.isDirectory)
                return 'images/thumbnails/folder.svg';
            const fileExtension = fileManagerItem.getExtension();
            switch (fileExtension) {
                case '.txt':
                    return 'images/thumbnails/doc-txt.svg';
                case '.rtf':
                    return 'images/thumbnails/doc-rtf.svg';
                case '.xml':
                    return 'images/thumbnails/doc-xml.svg';
            }
        }
    }

---
