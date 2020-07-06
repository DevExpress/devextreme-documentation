All node labels are colored according to the **label**.**font**.[color](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/font/color.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/font/#color') option. However, you can color labels like their parent nodes if you set the **label**.[useNodeColors](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/label/useNodeColors.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/label/#useNodeColors') option to **true**. Refer to [this article](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/05%20Colorize%20Nodes%20and%20Links.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/') for information on node colorization.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            label: {
                useNodeColors: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxi-series>
            <dxo-label
                [useNodeColors]="true">
            </dxo-label>
        </dxi-series>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSankey ... >
            <DxLabel :use-node-colors="true" />
        </DxSankey>
    </template>

    <script>
    import DxSankey, { DxLabel } from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey,
            DxLabel
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, { Label } from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Label useNodeColors={true} />
                </Sankey>
            )
        }
    }

    export default App;

---

#####See Also#####
- [Colorize Nodes and Links](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/05%20Colorize%20Nodes%20and%20Links.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Colorize_Nodes_and_Links/')
- [Customize Labels](/concepts/05%20Widgets/Sankey/15%20Node%20Labels/05%20Customize%20Labels.md '/Documentation/Guide/Widgets/Sankey/Node_Labels/Customize_Labels/')
- [Sankey API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/')
