In multi-series charts, point labels often overlap. To decide how to resolve overlapping, employ the [resolveLabelOverlapping](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/resolveLabelOverlapping.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#resolveLabelOverlapping') property. It allows you to hide certain labels, or arrange all labels in stacks, or keep the labels as they are (i.e. overlapping).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            resolveLabelOverlapping: 'stack' // or 'hide' | 'none'
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart
        resolveLabelOverlapping="stack"> <!-- or 'hide' | 'none' -->
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
        <DxChart
            :resolve-label-overlapping="stack"> <!-- or 'hide' | 'none' -->
        </DxChart>
    </template>

    <script>
    import DxChart from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart
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
                <Chart resolveLabelOverlapping="stack"> {/* or 'hide' | 'none' */}
                </Chart>
            );
        }
    }

    export default App;

---

Another way to deal with overlapping labels is to hide all labels of a specific series once their count exceeds a certain limit. Mostly, this feature is useful if the series accepts new points at runtime. To specify the limit on point labels, assign a number to the [maxLabelCount](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/maxLabelCount.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#maxLabelCount') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                maxLabelCount: 10
            }, {
                // ...
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series [maxLabelCount]="10" ... ></dxi-series>
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
            <DxSeries
                :max-label-count="10"
                ...
            />
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series
                        maxLabelCount={10}
                        ...
                    />
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Customize Point Labels](/concepts/05%20UI%20Components/Chart/15%20Point%20Labels/05%20Customize%20Point%20Labels.md '/Documentation/Guide/UI_Components/Chart/Point_Labels/Customize_Point_Labels/')
- [Series Points](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/')
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/CustomizePointsAndLabels)
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')

[tags]chart, point labels, label overlapping, resolveLabelOverlapping, maxLabelCount
