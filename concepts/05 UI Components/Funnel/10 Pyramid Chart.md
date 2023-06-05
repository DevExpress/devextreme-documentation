You can use the Funnel UI component to create a pyramid chart. Change the [algorithm](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/algorithm.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#algorithm') property to *"dynamicHeight"* and the [inverted](/api-reference/10%20UI%20Components/dxFunnel/1%20Configuration/inverted.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/#inverted') property to **true**.

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


#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PyramidChart/"
}

#####See Also#####
- [Funnel Items Overview](/concepts/05%20UI%20Components/Funnel/14%20Funnel%20Items/00%20Overview.md '/Documentation/Guide/UI_Components/Funnel/Funnel_Items/Overview/')
