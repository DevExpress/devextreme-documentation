The **Chart** provides the [onZoomEnd](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/onZoomEnd.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#onZoomEnd') event handler that can be used to stop zooming or panning when a specific condition is met.

For example, you can disallow users to zoom in further if the visual range's length is less than 1:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#chartContainer").dxChart({
            // ...
            onZoomEnd: function(e) {
                e.cancel = (e.range.endValue - e.range.startValue) < 1;
            },
            zoomAndPan: {
                argumentAxis: "both",
                valueAxis: "both"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ...
        (onZoomEnd)="chart_zoomEnd($event)">
        <dxo-zoom-and-pan
            argumentAxis="both"
            valueAxis="both">
        </dxo-zoom-and-pan>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        chart_zoomEnd(e) {
            e.cancel = (e.range.endValue - e.range.startValue) < 1;
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
        <DxChart ...
            @zoom-end="chart_zoomEnd">
            <DxZoomAndPan
                argument-axis="both"
                value-axis="both"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxZoomAndPan
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxZoomAndPan
        },
        methods: {
            chart_zoomEnd(e) {
                e.cancel = (e.range.endValue - e.range.startValue) < 1;
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        ZoomAndPan
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    onZoomEnd={chart_zoomEnd}>
                    <ZoomAndPan
                        argumentAxis="both"
                        valueAxis="both"
                    />
                </Chart>
            );
        }
    }

    functon chart_zoomEnd(e) {
        e.cancel = (e.range.endValue - e.range.startValue) < 1;
    }

    export default App;

---