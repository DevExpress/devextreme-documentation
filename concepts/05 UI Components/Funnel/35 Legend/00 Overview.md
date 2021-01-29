The legend is a component that helps a user identify funnel items. The legend contains several items, one per funnel item, each consisting of a colored marker and text showing the funnel item's argument.

![Funnel Legend](/images/Funnel/visual_elements/legend.png)

Propertiesthat configure the legend's appearance, location, and content are collected in the [legend](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/legend '/Documentation/ApiReference/UI_Components/dxFunnel/Configuration/legend/') object. To make the legend visible, set the **legend**.**visible** property to **true**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            legend: {
                visible: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-legend [visible]="true"></dxo-legend>
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
            <DxLegend :visible="true" />
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
                    <Legend visible={true} />
                </Funnel>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Relocate the Legend](/concepts/05%20Widgets/Funnel/35%20Legend/10%20Relocate%20the%20Legend.md '/Documentation/Guide/UI_Components/Funnel/Legend/Relocate_the_Legend/')
- [Rearrange Legend Items](/concepts/05%20Widgets/Funnel/35%20Legend/20%20Rearrange%20Legend%20Items.md '/Documentation/Guide/UI_Components/Funnel/Legend/Rearrange_Legend_Items/')
- [User Interaction with the Legend](/concepts/05%20Widgets/Funnel/35%20Legend/30%20User%20Interaction.md '/Documentation/Guide/UI_Components/Funnel/Legend/User_Interaction/')