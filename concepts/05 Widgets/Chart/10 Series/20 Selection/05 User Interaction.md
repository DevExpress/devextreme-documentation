When a user selects a series, the series changes its style to the one specified by the following objects.

- **series**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/selectionStyle/')        
The selection style for an individual series.

- **commonSeriesSettings**.[selectionStyle](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/selectionStyle '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/selectionStyle/')         
The selection style for all series in the **Chart**.

Individual settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                selectionStyle: {
                    // high priority
                }
            },
            commonSeriesSettings: {
                selectionStyle: {
                    // low priority
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-selection-style>
                <!-- high priority -->
            </dxo-selection-style>
        </dxi-series>
        <dxo-common-series-settings ... >
            <dxo-selection-style>
                <!-- low priority -->
            </dxo-selection-style>
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
                <DxSelectionStyle>
                    <!-- high priority -->
                </DxSelectionStyle>
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <DxSelectionStyle>
                    <!-- low priority -->
                </DxSelectionStyle>
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings,
        DxSelectionStyle
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings,
            DxSelectionStyle
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings,
        SelectionStyle
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series ... >
                        <SelectionStyle>
                            <!-- high priority -->
                        </SelectionStyle>
                    </Series>
                    <CommonSeriesSettings ... >
                        <SelectionStyle>
                            <!-- low priority -->
                        </SelectionStyle>
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---

To choose which series elements should be highlighted when a user selects a series, specify the **selectionMode** option. Just like **selectionStyle**, this option can be specified for all series in the **Chart** or for an individual series. Depending on the series type, the **selectionMode** option accepts different values. For information about them, visit the [Series Types](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/') section of the API reference, choose the employed series type, and refer to its **selectionMode** option description.

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

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            type="bar"
            selectionMode="allSeriesPoints"> <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->
        </dxi-series>
        <dxi-series
            type="line"
            selectionMode="includePoints"> <!-- or "nearestPoint" | "excludePoints" | "none" -->
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
                selection-mode="allSeriesPoints" <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->                
            />
            <DxSeries
                type="line"
                selection-mode="includePoints" <!-- or "nearestPoint" | "excludePoints" | "none" -->
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
                        selectionMode="allSeriesPoints" <!-- or "onlyPoint" | "allArgumentPoints" | "none" -->
                    />
                    <Series
                        type="line"
                        selectionMode="includePoints" <!-- or "nearestPoint" | "excludePoints" | "none" -->
                    />
                </Chart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Selection/"
}

By default, only a single series can be in the selected state at a time. If you need to allow multiple series to be in this state, assign *"multiple"* to the [seriesSelectionMode](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/seriesSelectionMode.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/#seriesSelectionMode') option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            seriesSelectionMode: 'multiple' // or 'single'
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart 
        seriesSelectionMode="multiple"> <!-- or 'single' -->
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
            ...
            series-selection-mode="multiple"> <!-- or 'single' -->
         >
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
                <Chart 
                    ...
                    seriesSelectionMode="multiple"> <!-- or 'single' -->
                >
                </Chart>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/MultipleSeriesSelection/"
}

#####See Also#####
- [Point Selection - User Interaction](/concepts/05%20Widgets/Chart/14%20Series%20Points/20%20Selection/05%20User%20Interaction.md '/Documentation/Guide/Widgets/Chart/Series_Points/Selection/#User_Interaction')
