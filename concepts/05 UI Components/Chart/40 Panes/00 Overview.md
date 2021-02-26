A pane is a chart area containing series. If there are many series in the Chart, they can be distributed between multiple panes.

![DevExtreme HTML5 JavaScript Charts Panes](/images/ChartJS/visual_elements/pane.png)

Panes are configured by the [panes](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/panes '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/') property. For a single-pane chart, this property accepts an object that configures the [background color](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonPaneSettings/backgroundColor.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/#backgroundColor') and the [border](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonPaneSettings/border '/Documentation/ApiReference/UI_Components/dxChart/Configuration/panes/border/') of the pane.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            panes: {
                backgroundColor: 'yellow',
                border: {
                    visible: true,
                    width: 2
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-panes backgroundColor="yellow">
            <dxo-border
                [visible]="true"
                [width]="2">
            </dxo-border>
        </dxi-panes>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
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
            <DxPane background-color="yellow">
                <DxBorder 
                    :visible="true" 
                    :width="2" 
                />
            </DxPane>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxPane,
        DxBorder
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxPane,
            DxBorder
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Pane,
        Border
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Pane backgroundColor="yellow">
                        <Border 
                            visible={true} 
                            width={2} 
                        />
                    </Pane>
                </Chart>
            );
        }
    }

    export default App;

---

For a multi-pane chart, the **panes** property accepts an array. For further details, refer to the [Multi-Pane Chart](/concepts/05%20Widgets/Chart/40%20Panes/10%20Multi-Pane%20Chart.md '/Documentation/Guide/UI_Components/Chart/Panes/Multi-Pane_Chart/') topic.

#####See Also#####
- [Multiple Panes Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePanes)
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, panes, overview, single-pane chart
