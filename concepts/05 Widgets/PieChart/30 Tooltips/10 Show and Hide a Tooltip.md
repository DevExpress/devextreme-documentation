Each series point allows you to show or hide its tooltip programmatically by calling the **showTooltip()** or **hideTooltip()** method of the [Point](/api-reference/20%20Data%20Visualization%20Widgets/dxPieChart/7%20Chart%20Elements/Point '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/') object. You can access this object [with the API methods](/concepts/05%20Widgets/PieChart/10%20Series/45%20Access%20a%20Point%20Using%20the%20API.md '/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/') or in the handlers of the point events, such as [pointClick](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointClick.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointClick'), [pointHoverChanged](/api-reference/20%20Data%20Visualization%20Widgets/BaseChart/4%20Events/pointHoverChanged.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Events/#pointHoverChanged'), etc. The latter is demonstrated in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            // ...
            // Shows the tooltip only when a user clicks a series point
            onPointClick: function (e) {
                var point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the series point
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-pie-chart ...
        (onPointClick)="onPointClick($event)"
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // Shows the tooltip only when a user clicks a series point
        onPointClick (e) {
            const point = e.target;
            point.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the series point
        onPointHoverChanged (e) {
            const point = e.target;
            if (!point.isHovered()) {
                point.hideTooltip();
            }
        }
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
            @point-click="onPointClick"
            @point-hover-changed="onPointHoverChanged">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            // Shows the tooltip only when a user clicks a series point
            onPointClick(e) {
                const point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the series point
            onPointHoverChanged(e) {
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
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        render() {
            return (
                <PieChart ...
                    onPointClick={onPointClick}
                    onPointHoverChanged={onPointHoverChanged}>
                </PieChart>
            );
        }
    }

    // Shows the tooltip only when a user clicks a series point
    function onPointClick(e) {
        const point = e.target;
        point.showTooltip();
    }
    // Hides the tooltip once the user moves the pointer away from the series point
    function onPointHoverChanged(e) {
        const point = e.target;
        if (!point.isHovered()) {
            point.hideTooltip();
        }
    }

---

You can also hide the tooltip regardless of the point to which it belongs by calling the **hideTooltip()** method of the **PieChart** instance.

---
##### jQuery

    <!--JavaScript-->$("#pieChartContainer").dxPieChart("hideTooltip");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxPieChartModule, DxPieChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent, { static: false }) pieChart: DxPieChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        hideTooltip () {
            this.pieChart.instance.hideTooltip();
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
            ref="pieChart">
        </DxPieChart>
    </template>

    <script>
    import DxPieChart from 'devextreme-vue/pie-chart';

    export default {
        components: {
            DxPieChart
        },
        methods: {
            hideTooltip () {
                this.$refs.pieChart.instance.hideTooltip();
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart from 'devextreme-react/pie-chart';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.pieChartRef = React.createRef();

            this.hideTooltip = () => {
                this.pieChart.hideTooltip();
            };
        }

        render() {
            return (
                <PieChart ...
                    ref={this.pieChartRef}>
                </PieChart>
            );
        }

        get pieChart() {
            return this.pieChartRef.current.instance;
        }
    }

---

#####See Also#####
- [Handle Tooltip Events](/concepts/05%20Widgets/PieChart/30%20Tooltips/20%20Handle%20Tooltip%20Events.md '/Documentation/Guide/Widgets/PieChart/Tooltips/Handle_Tooltip_Events/')