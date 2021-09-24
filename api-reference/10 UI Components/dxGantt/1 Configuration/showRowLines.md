---
id: dxGantt.Options.showRowLines
type: Boolean
default: true
---
---
##### shortDescription
Specifies whether to show/hide horizontal faint lines that separate tasks.

---
---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#gantt").dxGantt({
            showRowLines: false,
            // ...
        });
    }); 

##### Angular

    <!-- tab: app.component.html -->
    <dx-gantt
        [showRowLines]="false">
        <!-- ... -->
    </dx-gantt>

    <!-- tab: app.module.ts -->
    #include angular-app-module-ts

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxGantt
            :show-row-lines="false" >
            <!-- ... -->
        </DxGantt>
    </template>
    <script>
        import 'devextreme/dist/css/dx.light.css';
        import 'devexpress-gantt/dist/dx-gantt.css'; 

        import { 
            DxGantt
            // ... 
        } from 'devextreme-vue/gantt';
        
        export default {
            components: { 
                DxGantt
                // ... 
            }
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';
    import 'devexpress-gantt/dist/dx-gantt.css'; 

    import Gantt, { 
        // ... 
    } from 'devextreme-react/gantt';

    const App = () => {
        return (
            <Gantt
                showRowLines={false} >
                {/* ... */}
            </Gantt>
        );
    };

    export default App;

##### ASP.NET Core Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Gantt()
        .ShowRowLines(false)
        // ...
    )

##### ASP.NET MVC Controls

    <!-- Razor C# -->
    @(Html.DevExtreme().Gantt()
        .ShowRowLines(false)
        // ...
    )


---
