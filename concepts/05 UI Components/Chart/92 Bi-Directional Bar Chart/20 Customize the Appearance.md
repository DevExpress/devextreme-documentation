UI elements like [tooltips](/concepts/05%20Widgets/Chart/30%20Tooltips/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Tooltips/Overview/') and [axis labels](/concepts/05%20Widgets/Chart/20%20Axes/15%20Axis%20Labels.md '/Documentation/Guide/UI_Components/Chart/Axes/Axis_Labels/') display incorrect data when you convert the chart's values from positive to negative. You can fix this by customizing these elements' text:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            tooltip: {
                enabled: true,
                customizeTooltip: function (pointInfo) {
                    return {
                        text: Math.abs(pointInfo.originalValue)
                    };
                }
            },
            valueAxis: {
                label: {
                    customizeText: function (axisValue) {
                        return Math.abs(axisValue.value) + '%';
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-tooltip
            [enabled]="true"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
        <dxi-value-axis>
            <dxo-label [customizeText]="customizeLabel"></dxo-label>
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
        customizeTooltip (pointInfo) {
            return {
                text: Math.abs(pointInfo.originalValue)
            };
        }
        customizeLabel (axisValue) {
            return Math.abs(axisValue.value) + '%';
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxChart ... >
            <DxTooltip
                :enabled="true"
                :customize-tooltip="customizeTooltip"
            />
            <DxValueAxis>
                <DxLabel :customize-text="customizeLabel"/>
            </DxValueAxis>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxTooltip,
        DxValueAxis,
        DxLabel
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxTooltip,
            DxValueAxis,
            DxLabel
        },
        methods: {
            customizeTooltip(pointInfo) {
                return {
                    text: Math.abs(pointInfo.originalValue)
                };
            },
            customizeLabel(axisValue) {
                return `${Math.abs(axisValue.value)}%`;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Tooltip,
        ValueAxis,
        Label
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Tooltip
                        enabled={true}
                        customizeTooltip={customizeTooltip}
                    />
                    <ValueAxis>
                        <Label customizeText={customizeLabel} />
                    </ValueAxis>
                </Chart>
            );
        }
    }

    function customizeTooltip(pointInfo) {
        return {
            text: Math.abs(pointInfo.originalValue)
        };
    }

    function customizeLabel(axisValue) {
        return `${Math.abs(axisValue.value)}%`;
    }

---

You can also adjust the bar's width. See [Specify the Bar Width](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series/05%20Specify%20the%20Bar%20Width '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/#Specify_the_Bar_Width') for details.

This article outlined the steps to implement a bi-directional bar chart and provided code examples for each step. Refer to the **Bi-Directional Bar Chart** demo for the full code.

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/BiDirectionalBarChart/"
}
