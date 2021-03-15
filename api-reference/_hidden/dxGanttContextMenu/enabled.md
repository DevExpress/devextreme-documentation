---
id: dxGanttContextMenu.enabled
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether the context menu is enabled in the UI component.

---
---

##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#gantt").dxGantt({
            contextMenu: {
                enabled: false
            }            
        });
    });  

##### Angular

    <!--HTML--> 
    <dx-gantt ... >
        <dxo-context-menu [enabled]="false">
        </dxo-context-menu>
        ...
    </dx-gantt>

    <!--TypeScript-->
    import { DxGanttModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxGanttModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt ... >
            <DxContextMenu :enabled="false" />
        </DxGantt>
    </template>
    
    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';
    
    import { DxGantt, DxContextMenu } from 'devextreme-vue/gantt';
    
    export default {
        components: {
            DxGantt,
            DxContextMenu
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
    import Gantt, { ContextMenu } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt...>
                <ContextMenu enabled={false} />
            </Gantt>
        );
    }

    export default App;

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ContextMenu(cm => cm.Enabled(false))
        // ...
    )

---