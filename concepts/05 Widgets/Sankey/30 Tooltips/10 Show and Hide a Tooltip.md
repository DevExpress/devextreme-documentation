Tooltips can be invoked programmatically by calling a [Node](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/6%20Node '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Node/') or [Link](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/7%20Link '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Link/') object's **showTooltip()** method. You can access these objects [with API methods](/concepts/05%20Widgets/Sankey/05%20Nodes%20and%20Links/25%20Access%20a%20Node%20or%20Link%20Using%20the%20API.md '/Documentation/Guide/Widgets/Sankey/Nodes_and_Links/Access_a_Node_or_Link_Using_the_API/') or in event handlers, such as [onNodeClick](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onNodeClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeClick') and [onLinkClick](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onLinkClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onLinkClick'), [onNodeHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onNodeHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onNodeHoverChanged') and [onLinkHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/dxSankey/1%20Configuration/onLinkHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#onLinkHoverChanged'). The event handlers are demonstrated in the following code. To hide the tooltip, call the widget instance's **hideTooltip()** method.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#sankeyContainer").dxSankey({
            // ...
            tooltip: { enabled: false },
            // Shows the tooltip only when a sankey link is clicked
            onLinkClick: function(e) {
                e.target.showTooltip();
            },
            // Hides the tooltip when the sankey link is no longer hovered over or pressed
            onLinkHoverChanged: function(e) {
                if (!e.target.isHovered()) {
                    e.component.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-sankey ...
        (onLinkClick)="sankey_onLinkClick($event)"
        (onLinkHoverChanged)="sankey_onLinkHoverChanged($event)">
        <dxo-tooltip
            [enabled]="false">
        </dxo-tooltip>
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Shows the tooltip only when a sankey link is clicked
        sankey_onLinkClick (e) {
            e.target.showTooltip();
        },
        // Hides the tooltip when the sankey link is no longer hovered over or pressed
        sankey_onLinkHoverChanged (e) {
            if (!e.target.isHovered()) {
                e.component.hideTooltip();
            }
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
                :enabled="false"
                @link-click="onLinkClick"
                @link-hover-changed="onLinkHoverChanged"
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
            // Shows the tooltip only when a sankey link is clicked
            onLinkClick(e) {
                e.target.showTooltip();
            },
            // Hides the tooltip when the sankey link is no longer hovered over or pressed
            onLinkHoverChanged(e) {
                if (!e.target.isHovered()) {
                    e.component.hideTooltip();
                }
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
                        enabled={false}
                        onLinkClick={this.onLinkClick}
                        onLinkHoverChanged={this.onLinkHoverChanged}
                    />
                </Sankey>
            )
        }
        // Shows the tooltip only when a sankey link is clicked
        onLinkClick(e) {
            e.target.showTooltip();
        },
        // Hides the tooltip when the sankey link is no longer hovered over or pressed
        onLinkHoverChanged(e) {
            if (!e.target.isHovered()) {
                e.component.hideTooltip();
            }
        }
    }

    export default App;

---