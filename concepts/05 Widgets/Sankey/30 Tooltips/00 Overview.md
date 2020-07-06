A tooltip is a small pop-up rectangle that displays information about a sankey node or link when it is hovered over or pressed.

![Sankey Tooltip](/images/Sankey/visual_elements/tooltip.png)

Options that configure tooltips are collected in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/') object. If you want to customize a specific tooltip, assign a function to the [customizeNodeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/tooltip/customizeNodeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/#customizeNodeTooltip') or [customizeLinkTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/tooltip/customizeLinkTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/tooltip/#customizeLinkTooltip') option, depending on whether the tooltip belongs to a sankey node or link. This function should return a configuration object for the tooltip you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            tooltip: {
                color: "yellow",
                // Tooltips of all nodes with outgoing weight less than 1 turn red
                // Other tooltips remain yellow
                customizeNodeTooltip: function(nodeInfo) {
                    return nodeInfo.weightOut < 1 ? { color: "red" } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ... >
        <dxo-tooltip
            color="yellow"
            [customizeNodeTooltip]="sankey_customizeNodeTooltip">
        </dxo-tooltip>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Tooltips of all nodes with outgoing weight less than 1 turn red
        // Other tooltips remain yellow
        sankey_customizeNodeTooltip (nodeInfo) {
            return nodeInfo.weightOut < 1 ? { color: "red" } : { }
        }
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
            <DxTooltip
                color="yellow"
                :customize-node-tooltip="customizeNodeTooltip"
            />
        </DxSankey>
    </template>

    <script>
    import DxSankey, { DxTooltip } from 'devextreme-vue/sankey';

    export default {
        components: {
            DxSankey,
            DxTooltip
        },
        methods: {
            // Tooltips of all nodes with outgoing weight less than 1 turn red
            // Other tooltips remain yellow
            customizeNodeTooltip(nodeInfo) {
                return nodeInfo.weightOut < 1 ? { color: "red" } : { }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Sankey, { Tooltip } from 'devextreme-react/sankey';

    class App extends React.Component {
        render() {
            return (
                <Sankey ... >
                    <Tooltip
                        color="yellow"
                        customizeNodeTooltip={this.customizeNodeTooltip}
                    />
                </Sankey>
            )
        }
        
        // Tooltips of all nodes with outgoing weight less than 1 turn red
        // Other tooltips remain yellow
        customizeNodeTooltip(nodeInfo) {
            return nodeInfo.weightOut < 1 ? { color: "red" } : { }
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/SankeyChart/"
}

#####See Also#####
- [Show and Hide a Tooltip](/concepts/05%20Widgets/Sankey/30%20Tooltips/10%20Show%20and%20Hide%20a%20Tooltip.md '/Documentation/Guide/Widgets/Sankey/Tooltips/Show_and_Hide_a_Tooltip/')
