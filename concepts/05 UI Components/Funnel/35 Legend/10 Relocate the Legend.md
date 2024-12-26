The legend can be aligned in the horizontal or vertical direction using the [horizontalAlignment](/api-reference/10%20UI%20Components/BaseLegend/horizontalAlignment.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/legend/#horizontalAlignment') or [verticalAlignment](/api-reference/10%20UI%20Components/BaseLegend/verticalAlignment.md '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/legend/#verticalAlignment') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            legend: {
                horizontalAlignment: "center", // or "left" | "right"
                verticalAlignment: "top" // or "bottom"
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel>
        <dxo-legend
            horizontalAlignment="center" <!-- or "left" | "right" -->
            verticalAlignment="top"> <!-- or "bottom" -->
        </dxo-legend>
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
            <DxLegend
                horizontal-alignment="center" <!-- or "left" | "right" -->
                vertical-alignment="top" <!-- or "bottom" -->
            />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, { DxLegend } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxLegend
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Legend } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Legend
                        horizontalAlignment="center" {/* or "left" | "right" */}
                        verticalAlignment="top" {/* or "bottom" */}
                    />
                </Funnel>
            );
        }
    }

    export default App;

---

Below, you can try out these properties in action.

<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/FunnelLegend/relocateTheLegend.html, /Content/Applications/25_1/DataVisualization/Guides/FunnelLegend/relocateTheLegend.js, /Content/Applications/25_1/DataVisualization/Guides/FunnelLegend/relocateTheLegend.css"></div>

#####See Also#####
- [Rearrange Legend Items](/concepts/05%20UI%20Components/Funnel/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/UI_Components/Funnel/Legend/Rearrange_Legend_Items/')
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)
