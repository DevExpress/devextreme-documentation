A tooltip is a small pop-up rectangle displaying information about a series point that the user pauses on. The information is the point value by default, but it is possible to display anything in a tooltip.

![DevExtreme HTML5 JavaScript PieChart Tooltip](/images/PieChart/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/1%20Configuration/tooltip '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/') object. For example, to enable the tooltips, assign **true** to the **enabled** option of this object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            tooltip: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-tooltip
            [enabled]="true">
        </dxo-tooltip>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ... >
            <DxTooltip :enabled="true"/>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxTooltip
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxTooltip
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Tooltip
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ... >
                    <Tooltip enabled={true} />
                </PieChart>
            );
        }
    }

---

Options declared in the **tooltip** object apply to all tooltips in the **PieChart**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/1%20Configuration/tooltip/customizeTooltip.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/tooltip/#customizeTooltip') option. This function must return an object with options for the tooltip that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            tooltip: {
                enabled: true,
                color: 'yellow',
                // Tooltips of all points with the value more than 100 turn red
                // Other tooltips remain yellow
                customizeTooltip: function (pointInfo) {
                    return pointInfo.value > 100 ? { color: 'red' } : { };
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ... >
        <dxo-tooltip
            [enabled]="true"
            color="yellow"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Tooltips of all points with the value more than 100 turn red
        // Other tooltips remain yellow
        customizeTooltip (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { };
        };
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxPieChart ...
            :customize-label="customizeLabel">
            <DxSeries>
                <DxTooltip
                    :enabled="true"
                    :customize-tooltip="customizeTooltip"
                    color="yellow"
                />
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, {
        DxTooltip
    } from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart,
            DxTooltip
        },
        methods: {
            // Tooltips of all points with the value more than 100 turn red
            // Other tooltips remain yellow
            customizeTooltip(pointInfo) {
                return pointInfo.value > 100 ? { color: 'red' } : { };
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, {
        Tooltip
    } from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    <DxTooltip
                        enabled={true}
                        customizeTooltip={customizeTooltip}
                        color="yellow"
                    />
                </PieChart>
            );
        }
    }

    // Tooltips of all points with the value more than 100 turn red
    // Other tooltips remain yellow
    function customizeTooltip(pointInfo) {
        return pointInfo.value > 100 ? { color: 'red' } : { };
    }

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/"
}

#####See Also#####
- [Show and Hide a Tooltip](/concepts/05%20Widgets/PieChart/30%20Tooltips/10%20Show%20and%20Hide%20a%20Tooltip.md '/Documentation/Guide/Widgets/PieChart/Tooltips/Show_and_Hide_a_Tooltip/')
- [Handle Tooltip Events](/concepts/05%20Widgets/PieChart/30%20Tooltips/20%20Handle%20Tooltip%20Events.md '/Documentation/Guide/Widgets/PieChart/Tooltips/Handle_Tooltip_Events/')