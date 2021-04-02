---
id: dxFileManager.Options.notifications.showPanel
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to show the progress panel.

---

The File Manager's **Refresh** button (![DevExtreme File Manager - Show Progress Panel](~/images/FileManager/open-progress-panel.png)) displays the red exclamation mark when the progress panel contains notifications and progress information. Click this button to show the progress panel. 

![DevExtreme File Manager - Show/Hide Progress Panel](/images/FileManager/notifications-progress-panel.png)

---

##### jQuery 

    <!--JavaScript-->
    $(function () {
        $("#file-manager").dxFileManager({
            notifications: {
                showPanel: false
            }
            //...            
        });
    });  

##### Angular

    <!--HTML--> 
    <dx-file-manager id="fileManager">
        <dxo-notifications 
            [showPanel]="false">
        </dxo-upload>
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
            <DxNotifications 
                :show-panel="false"
            />
        </DxFileManager>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxFileManager, DxNotifications } from 'devextreme-vue/file-manager';
    
    export default {
        components: {
            DxGantt,
            DxNotifications
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
    import FileManager, { Notifications } from 'devextreme-react/file-manager';

    const App = () => {
        return (
            <FileManager>
                <Notifications 
                    showPanel={false} 
                />
            </FileManager>
        );
    };

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().FileManager()
        .Notifications(nt => nt
            .ShowPanel(false)
        )
        // ...
    )

---
