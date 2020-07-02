A tooltip is a small pop-up rectangle that displays information about a funnel item if it is pressed or the mouse pointer hovers over it. The information is the item's argument and value by default, but it is possible to display anything in a tooltip.

![Funnel Tooltip](/images/Funnel/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/tooltip/') object. For example, to enable tooltips, assign **true** to this object's **enabled** option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            tooltip: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-tooltip
            [enabled]="true">
        </dxo-tooltip>
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
            <DxTooltip :enabled="true" />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxTooltip
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxTooltip
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Tooltip } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Tooltip enabled={true} />
                </Funnel>
            );
        }
    }

    export default App;

---

Options declared in the **tooltip** object apply to all tooltips in the **Funnel**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/tooltip/#customizeTooltip') option. This function must return an object with options for the tooltip you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            // ...
            tooltip: {
                enabled: true,
                color: 'yellow',
                // Tooltips of all items with the value more than 100 turn red
                // Other tooltips remain yellow
                customizeTooltip: function (itemInfo) {
                    return itemInfo.value > 100 ? { color: 'red' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-funnel ... >
        <dxo-tooltip
            [enabled]="true"
            color="yellow"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Tooltips of all items with the value more than 100 turn red
        // Other tooltips remain yellow
        customizeTooltip (itemInfo) {
            return itemInfo.value > 100 ? { color: 'red' } : { }
        };
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
            <DxTooltip
                :enabled="true"
                color="yellow"
                :customize-tooltip="customizeTooltip"
            />
        </DxFunnel>
    </template>

    <script>
    import DxFunnel, {
        DxTooltip
    } from 'devextreme-vue/funnel';

    export default {
        components: {
            DxFunnel,
            DxTooltip
        },
        methods: {
            customizeTooltip (itemInfo) {
                return itemInfo.value > 100 ? { color: 'red' } : { }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Funnel, { Tooltip } from 'devextreme-react/funnel';

    class App extends React.Component {
        render() {
            return (
                <Funnel ... >
                    <Tooltip
                        enabled={true}
                        color="yellow"
                        customizeTooltip={this.customizeTooltip}
                    />
                </Funnel>
            );
        }
        customizeTooltip (itemInfo) {
            return itemInfo.value > 100 ? { color: 'red' } : { }
        }
    }

    export default App;

---

#####See Also#####
- [Show and Hide a Tooltip](/concepts/05%20Widgets/Funnel/30%20Tooltips/10%20Show%20and%20Hide%20a%20Tooltip.md '/Documentation/Guide/Widgets/Funnel/Tooltips/Show_and_Hide_a_Tooltip/')
- [Funnel Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/FunnelChart)
