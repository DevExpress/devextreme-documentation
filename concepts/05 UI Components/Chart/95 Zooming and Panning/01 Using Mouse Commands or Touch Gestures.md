Users can zoom the chart by rotating the mouse wheel and pan it using the drag gesture. On touch-enabled devices, users can zoom the chart using the spread and pinch gestures and pan the chart using the drag gesture, too.

![DevExtreme HTML5 JavaScript Charts Zooming Panning](/images/ChartJS/devextreme-chart-NewZoomScroll.gif)

Zooming and panning are configured in the [zoomAndPan](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/') object. You can enable them separately for the argument and value axes by specifying the [argumentAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/argumentAxis.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#argumentAxis') and [valueAxis](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/valueAxis.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#valueAxis') properties:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomAndPan: {
                argumentAxis: "both",  // or "zoom" | "pan" | "none"
                valueAxis: "both"      // or "zoom" | "pan" | "none"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-zoom-and-pan
            argumentAxis="both"
            valueAxis="both"> <!-- or "zoom" | "pan" | "none" -->
        </dxo-zoom-and-pan>
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
            <DxZoomAndPan
                argument-axis="both"
                value-axis="both"
            /> <!-- or "zoom" | "pan" | "none" -->
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
                <Chart ... >
                    <ZoomAndPan
                        argumentAxis="both"
                        valueAxis="both"
                    /> {/* or "zoom" | "pan" | "none" */}
                </Chart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ZoomingAndScrolling/"
}

Users can zoom the chart using the drag gesture (area selection) if you enable the [dragToZoom](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/dragToZoom.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#dragToZoom') property. To pan in this case, users should perform the drag gesture while pressing [panKey](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/panKey.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#panKey'). Zooming and panning should be enabled.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomAndPan: {
                dragToZoom: true,
                panKey: "ctrl",
                argumentAxis: "both",
                valueAxis: "both"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-zoom-and-pan
            [dragToZoom]="true"
            panKey="ctrl"
            argumentAxis="both"
            valueAxis="both">
        </dxo-zoom-and-pan>
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
            <DxZoomAndPan
                :drag-to-zoom="true"
                pan-key="ctrl"
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
                <Chart ... >
                    <ZoomAndPan
                        dragToZoom={true}
                        panKey="ctrl"
                        argumentAxis="both"
                        valueAxis="both"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

If you need to disable the mouse wheel or touch support, set the [allowMouseWheel](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/allowMouseWheel.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#allowMouseWheel') or [allowTouchGestures](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/zoomAndPan/allowTouchGestures.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/zoomAndPan/#allowTouchGestures') property to **false**. In the following example, zooming and panning are enabled only on devices that use the mouse.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            zoomAndPan: {
                argumentAxis: "both",
                valueAxis: "both",
                allowTouchGestures: false
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-zoom-and-pan
            argumentAxis="both"
            valueAxis="both"
            [allowTouchGestures]="false">
        </dxo-zoom-and-pan>
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
            <DxZoomAndPan
                :allow-touch-gestures="false"
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
                <Chart ... >
                    <ZoomAndPan
                        allowTouchGestures={false}
                        argumentAxis="both"
                        valueAxis="both"
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Users cannot zoom or scroll the chart out of the whole range. Refer to the [Visual and Whole Ranges](/concepts/05%20Widgets/Chart/20%20Axes/03%20Visual%20and%20Whole%20Ranges.md '/Documentation/Guide/UI_Components/Chart/Axes/Visual_and_Whole_Ranges/') article for more information.

#####See Also#####
- [Set the Initial Zoom](/concepts/05%20Widgets/Chart/95%20Zooming%20and%20Panning/15%20Set%20the%20Initial%20Zoom.md '/Documentation/Guide/UI_Components/Chart/Zooming_and_Panning/#Set_the_Initial_Zoom')
