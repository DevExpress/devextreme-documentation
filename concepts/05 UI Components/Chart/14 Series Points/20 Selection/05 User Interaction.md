[note] [Range Bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/70%20Range%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Range_Series/') and [Bubble](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/50%20Bubble%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Bubble_Series/'), all [bar](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/20%20Bar%20Series '/Documentation/Guide/UI_Components/Chart/Series_Types/Bar_Series/') and [financial](/concepts/05%20UI%20Components/Chart/11%20Series%20Types/60%20Financial%20Series.md '/Documentation/Guide/UI_Components/Chart/Series_Types/Financial_Series/') series do not contain anything besides points. Therefore, configuring points in these series is, in fact, configuring the series itself. For this reason, follow the instructions given in the [Series Selection - User Interaction](/concepts/05%20UI%20Components/Chart/10%20Series/20%20Selection/05%20User%20Interaction.md '/Documentation/Guide/UI_Components/Chart/Series/Selection/#User_Interaction') topic when configuring selection for points that belong to the aforementioned series.

When a user selects a series point, it changes its style to the one specified by the following objects.

- **series**.**point**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/selectionStyle/')        
The selection style for all points of an individual series.

- **commonSeriesSettings**.**point**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/point/selectionStyle/')         
The selection style for all series points in the **Chart**.

Individual series settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                point: {
                    selectionStyle: {
                        // high priority
                    }
                }
            },
            commonSeriesSettings: {
                point: {
                    selectionStyle: {
                        // low priority
                    }
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-point>
                <dxo-selection-style>
                    <!-- high priority -->
                </dxo-selection-style>
            </dxo-point>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-point>
                <dxo-selection-style>
                    <!-- low priority -->
                </dxo-selection-style>
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
                    <DxSelectionStyle>
                        <!-- high priority -->
                    </DxSelectionStyle>
                </DxPoint>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxPoint ... >
                    <DxSelectionStyle>
                        <!-- low priority -->
                    </DxSelectionStyle>
                </DxPoint>
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxCommonSeriesSettings,
        DxSeries,
        DxPoint,
        DxSelectionStyle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxCommonSeriesSettings,
            DxSeries,
            DxPoint,
            DxSelectionStyle
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
        SelectionStyle
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series>
                        <Point ... >
                            <SelectionStyle>
                                {/* high priority */}
                            </SelectionStyle>
                        </Point>
                    </Series>
                    <CommonSeriesSettings ... >
                        <Point ... >
                            <SelectionStyle>
                                {/* low priority */}
                            </SelectionStyle>
                        </Point>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---


To choose which elements should be highlighted when a user selects a point, specify the [selectionMode](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/point/selectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/point/#selectionMode') property. Just like **selectionStyle**, this property can be specified for all points belonging to an individual series or for all series points in the **Chart**.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            commonSeriesSettings: {
                point: {
                    selectionMode: 'allArgumentPoints' // or 'onlyPoint' | 'allSeriesPoints' | 'none'
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxo-common-series-settings ... >
            <dxo-point
                selectionMode="allArgumentPoints"> <!-- or 'onlyPoint' | 'allSeriesPoints' | 'none' -->
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
                    selection-mode="allArgumentPoints"/> <!-- or 'onlyPoint' | 'allSeriesPoints' | 'none' -->
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
                            selectionMode="allArgumentPoints" /> {/* or 'onlyPoint' | 'allSeriesPoints' | 'none' */}
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}

By default, only a single point can be in the selected state at a time. If you need to allow multiple points to be in this state, assign *"multiple"* to the [pointSelectionMode](/api-reference/10%20UI%20Components/BaseChart/1%20Configuration/pointSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#pointSelectionMode') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            pointSelectionMode: 'multiple' // or 'single'
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart 
        pointSelectionMode="multiple"> <!-- or 'single' -->
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
        <DxChart ...
            point-selection-mode="multiple"> <!-- or 'single' -->
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
                <Chart ...
                    pointSelectionMode="multiple"> {/* or 'single' */}
                </Chart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultiplePointSelection/"
}

#####See Also#####
- [Series Selection - User Interaction](/concepts/05%20UI%20Components/Chart/10%20Series/20%20Selection/05%20User%20Interaction.md '/Documentation/Guide/UI_Components/Chart/Series/Selection/#User_Interaction')
