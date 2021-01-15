When a user pauses on a series, the series changes its style to the one specified by the following objects.

- **series**.[hoverStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/hoverStyle/')        
The hover style for an individual series.

- **commonSeriesSettings**.[hoverStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/hoverStyle/')         
The hover style for all series in the **Chart**.

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
        <dxi-series ... >
            <dxo-hover-style>
                <!-- high priority -->
            </dxo-hover-style>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-hover-style>
                <!-- low priority -->
            </dxo-hover-style>
        </dxo-common-series-settings>
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

    class App extends React.Component {
        render() {
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
    }

    export default App;

---

To choose which series elements should be highlighted when a user pauses on a series, specify the **hoverMode** option. Just like **hoverStyle**, this option can be specified for all series in the **Chart** or for an individual series. Depending on the series type, the **hoverMode** option accepts different values. For information about them, visit the [Series Types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/') section of the API reference, choose the employed series type, and refer to its **hoverMode** option description.

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
        <dxi-series
            type="bar"
            hoverMode="allSeriesPoints"> <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->
        </dxi-series>
        <dxi-series
            type="line"
            hoverMode="includePoints"> <!-- or "nearestPoint" | "excludePoints" | "none" -->
        </dxi-series>
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

    class App extends React.Component {
        render() {
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
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/"
}

#####See Also#####
- [Point Hover](/concepts/05%20UI%20Components/zz%20Common/10%20Data%20Visualization%20Widgets/90%20Charts%20-%20End-User%20Interaction/3%20Hover%20Handling/2%20Point%20Hover.md '/Documentation/Guide/UI_Components/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Hover_Handling/#Point_Hover')
- [Chart API Reference](/api-reference/10%20UI%20Components/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
