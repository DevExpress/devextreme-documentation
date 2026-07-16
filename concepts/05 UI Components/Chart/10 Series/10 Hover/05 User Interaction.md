When a user pauses on a series, the series changes its style to the one specified by the following objects.

- **series**.[hoverStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/hoverStyle/')        
The hover style for an individual series.

- **commonSeriesSettings**.[hoverStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/hoverStyle/')         
The hover style for all series in the Chart.

Individual series settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                hoverStyle: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                hoverStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-chart-series ... >
            <dxo-chart-hover-style>
                <!-- high priority -->
            </dxo-chart-hover-style>
        </dxi-chart-series>
        <dxo-chart-common-series-settings ... >
            <dxo-chart-hover-style>
                <!-- low priority -->
            </dxo-chart-hover-style>
        </dxo-chart-common-series-settings>
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
            <DxSeries ... >
                <DxHoverStyle>
                    <!-- high priority -->
                </DxHoverStyle>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxHoverStyle>
                    <!-- low priority -->
                </DxHoverStyle>
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings,
        DxHoverStyle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings,
            DxHoverStyle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings,
        HoverStyle
    } from 'devextreme-react/chart';

    export default function App() {
        return (
            <Chart ... >
                <Series ... >
                    <HoverStyle>
                        <!-- high priority -->
                    </HoverStyle>
                </Series>
                <CommonSeriesSettings ... >
                    <HoverStyle>
                        <!-- low priority -->
                    </HoverStyle>
                </CommonSeriesSettings>
            </Chart>
        );
    }

---

To choose which series elements should be highlighted when a user pauses on a series, specify the **hoverMode** property. Just like **hoverStyle**, this property can be specified for all series in the Chart or for an individual series. Depending on the series type, the **hoverMode** property accepts different values. For information about them, visit the [Series Types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/') section of the API reference, choose the employed series type, and refer to its **hoverMode** property description.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                type: "bar",
                hoverMode: "allSeriesPoints" // or "onlyPoint" | "allArgumentPoints" | "none"
            }, {
                type: "line",
                hoverMode: "includePoints" // or "nearestPoint" | "excludePoints" | "none"
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-chart-series
            type="bar"
            hoverMode="allSeriesPoints"> <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->
        </dxi-chart-series>
        <dxi-chart-series
            type="line"
            hoverMode="includePoints"> <!-- or "nearestPoint" | "excludePoints" | "none" -->
        </dxi-chart-series>
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
                type="bar"
                hover-mode="allSeriesPoints" <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->                
            />
            <DxSeries
                type="line"
                hover-mode="includePoints" <!-- or "nearestPoint" | "excludePoints" | "none" -->
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

    export default function App() {
        return (
            <Chart ... >
                <Series
                    type="bar"
                    hoverMode="allSeriesPoints" <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->
                />
                <Series
                    type="line"
                    hoverMode="includePoints" <!-- or "nearestPoint" | "excludePoints" | "none" -->
                />
            </Chart>
        );
    }

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

#####See Also#####
- [Point Hover](/concepts/05%20UI%20Components/Chart/14%20Series%20Points/10%20Hover '/Documentation/Guide/UI_Components/Chart/Series_Points/Hover/')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
