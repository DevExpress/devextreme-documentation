You can use the **Funnel** widget to create a pyramid chart. Change the [algorithm](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/algorithm.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#algorithm') option to *"dynamicHeight"* and the [inverted](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/inverted.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#inverted') option to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            algorithm: "dynamicHeight",
            inverted: true
        });
    });

##### Angular

    <!--HTML--><dx-funnel ...
        algorithm="dynamicHeight"
        [inverted]="true">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxFunnel
            algorithm="dynamicHeight"
            :inverted="true"
        />
    </template>

    <script>
    import DxFunnel from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel
                    algorithm="dynamicHeight"
                    inverted={true}
                />
            );
        }
    }

    export default App;

---


#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PyramidChart/"
}

#####See Also#####
- [Funnel Items Overview](/concepts/05%20Widgets/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/Widgets/Funnel/Funnel_Items/Overview/')
