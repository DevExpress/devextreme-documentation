Each series point allows you to show or hide its tooltip programmatically. For this, call the **showTooltip()** or **hideTooltip()** method of the [Point](/api-reference/10%20UI%20Components/dxChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/UI_Components/dxChart/Chart_Elements/Point/') object. You can access this object [with the API methods](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/25%20Access%20a%20Series%20Point%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Access_a_Series_Point_Using_the_API/') or in the handlers of the point events, such as [pointClick](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointClick'), [pointHoverChanged](/api-reference/10%20UI%20Components/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/UI_Components/dxChart/Events/#pointHoverChanged'), etc. The latter is demonstrated in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            // Shows the tooltip only when a user clicks a series point
            onPointClick: function (e) {
                var point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves away from the series point
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart
        (onPointClick)="onPointClick($event)"
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Shows the tooltip only when a user clicks a series point
        onPointClick (e) {
            let point = e.target;
            point.showTooltip();
        }
        // Hides the tooltip once the user moves away from the series point
        onPointHoverChanged (e) {
            let point = e.target;
            if (!point.isHovered()) {
                point.hideTooltip();
            }
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
            @point-click="onPointClick" 
            @point-hover-changed="onPointHoverChanged">
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            onPointClick (e) {
                const point = e.target;
                point.showTooltip();
            },
            onPointHoverChanged (e) {
                const point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ...
                    onPointClick={onPointClick} 
                    onPointHoverChanged={onPointHoverChanged}>
                </Chart>
            );
        }
    }

    function onPointHoverChanged (e) {
        const point = e.target;
        if (!point.isHovered()) {
            point.hideTooltip();
        }
    }

    function onPointClick (e) {
        const point = e.target;
        point.showTooltip();
    }

    export default App;

---

You can also hide the tooltip regardless of the point to which it belongs. To do this, call the **hideTooltip()** method of the Chart instance.

---
##### jQuery

    <!--JavaScript-->$("#chartContainer").dxChart("hideTooltip");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        hideTooltip () {
            this.chart.instance.hideTooltip();
        };
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
        <DxChart ref="chart">
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
        },
        methods: {
            hideTooltip () {
                this.$refs.chart.instance.hideTooltip();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart from 'devextreme-react/chart';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartRef = React.createRef();
            this.hideTooltip = this.hideTooltip.bind(this);
        }
        render() {
            return (
                <Chart ref={this.chartRef}></Chart>
            );
        }
        get chart() {
            return this.chartRef.current.instance();
        }
        hideTooltip () {
            this.chart.hideTooltip();
        }
    }

    export default App;

---

#####See Also#####
- [Handle Tooltip Events](/concepts/05%20UI%20Components/Chart/30%20Tooltips/20%20Handle%20Tooltip%20Events.md '/Documentation/Guide/UI_Components/Chart/Tooltips/Handle_Tooltip_Events/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, tooltips, show tooltip, showTooltip, hide tooltip, hideTooltip
