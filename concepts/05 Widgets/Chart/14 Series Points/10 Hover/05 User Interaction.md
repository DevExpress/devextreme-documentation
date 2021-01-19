[note] [Range Bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/') and [Bubble](/concepts/05%20Widgets/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Bubble_Series/'), all [bar](/concepts/05%20Widgets/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/Widgets/Chart/Series_Types/Bar_Series/') and [financial](/concepts/05%20Widgets/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/Widgets/Chart/Series_Types/Financial_Series/') series do not contain anything besides points. Therefore, configuring points in these series is, in fact, configuring the series itself. For this reason, follow the instructions given in the [Series Hover - User Interaction](/concepts/05%20Widgets/Chart/10%20Series/10%20Hover/05%20User%20Interaction.md '/Documentation/Guide/Widgets/Chart/Series/Hover/#User_Interaction') topic when you configure hovering for points that belong to the aforementioned series.

When a user pauses on a series point, it changes its style to the one specified by the following objects.

- **series**.**point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/hoverStyle/')        
The hover style for all points of an individual series.

- **commonSeriesSettings**.**point**.[hoverStyle](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/point/hoverStyle/')       
The hover style for all series points in the **Chart**. Individual series settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                point: {
                    hoverStyle: {
                        // high priority
                    }
                }
            },
            commonSeriesSettings: {
                point: {
                    hoverStyle: {
                        // low priority
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <dxo-point>
                <dxo-hover-style>
                    <!-- high priority -->
                </dxo-hover-style>
            </dxo-point>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-point>
                <dxo-hover-style>
                    <!-- low priority -->
                </dxo-hover-style>
            </dxo-point>
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
            <DxSeries>
                <DxPoint ... >
                    <DxHoverStyle>
                        <!-- high priority -->
                    </DxHoverStyle>
                </DxPoint>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxPoint ... >
                    <DxHoverStyle>
                        <!-- low priority -->
                    </DxHoverStyle>
                </DxPoint>
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxSeries,
        DxPoint,
        DxHoverStyle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonSeriesSettings,
            DxSeries,
            DxPoint,
            DxHoverStyle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        CommonSeriesSettings,
        Series,
        Point,
        HoverStyle
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series>
                        <Point ... >
                            <HoverStyle>
                                {/* high priority */}
                            </HoverStyle>
                        </Point>
                    </Series>
                    <CommonSeriesSettings ... >
                        <Point ... >
                            <HoverStyle>
                                {/* low priority */}
                            </HoverStyle>
                        </Point>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---

To choose which series elements should be highlighted when a user pauses on a series point, specify the [hoverMode](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/point/hoverMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#hoverMode') option. Just like **hoverStyle** above, this option can be specified for all points belonging to an individual series or for all series points in the **Chart**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                point: {
                    hoverMode: 'allArgumentPoints' // or 'onlyPoint' | 'allSeriesPoints' | 'none'
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-point
                hoverMode="allArgumentPoints"> <!-- or 'onlyPoint' | 'allSeriesPoints' | 'none' -->
            </dxo-point>
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
            <DxCommonSeriesSettings ... >
                <DxPoint
                    hover-mode="allArgumentPoints"/> <!-- or 'onlyPoint' | 'allSeriesPoints' | 'none' -->
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxPoint
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonSeriesSettings,
            DxPoint
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        CommonSeriesSettings,
        Point
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <CommonSeriesSettings ... >
                        <Point
                            hoverMode="allArgumentPoints" /> {/* or 'onlyPoint' | 'allSeriesPoints' | 'none' */}
                    </CommonSeriesSettings>
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
- [Series Hover](/concepts/05%20Widgets/Chart/10%20Series/10%20Hover '/Documentation/Guide/Widgets/Chart/Series/Hover/')
- [Chart API Reference](/api-reference/20%20Data%20Visualization%20Widgets/dxChart '/Documentation/ApiReference/UI_Components/dxChart/')
