Labels are arranged in a column by default. Change the **label**.[position](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/position.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/label/#position') option to display labels beside or inside funnel items.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            label: {
                position: "columns" // or "inside" | "outside"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel ... >
        <dxo-label
            position="columns"> <!-- or "inside" | "outside" -->
        </dxo-label>
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
        <DxFunnel ... >
            <DxLabel position="columns" />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxLabel
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Label } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Label position="columns" />
                </Funnel>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)