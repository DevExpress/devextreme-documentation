---
id: dxGantt.Options.onResourceManagerDialogShowing
type: function(e)
default: null
---
---
##### shortDescription
<!-- Description goes here -->

##### param(e): Object
<!-- Description goes here -->

##### field(e.cancel): Boolean
<!-- Description goes here -->

##### field(e.component): dxGantt
<!-- Description goes here -->

##### field(e.element): DxElement
<!-- Description goes here -->

##### field(e.key): any
<!-- Description goes here -->

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            ...
            @resource-manager-dialog-showing="onResourceManagerDialogShowing"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxGantt from 'devextreme-vue/gantt';
  
    export default {
        components: {
            DxGantt
        },
        methods: {
            onResourceManagerDialogShowing(e) {
                // your code
                e.cancel = true;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import Gantt from 'devextreme-react/gantt';

    const App = () => {
        const onResourceManagerDialogShowing = (e) => {
            // your code
            e.cancel = true;
        };

        return (
            <Gantt onResourceManagerDialogShowing={onResourceManagerDialogShowing} />
        );
    }

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ID("gantt")
        .onResourceManagerDialogShowing("gantt_resourceManagerDialogShowing_handler")
        // ...
    )
    <script>
        function gantt_resourceManagerDialogShowing_handler(e) {
            // your code
            e.cancel = true;
        }
    </script>

---
<!-- Description goes here -->