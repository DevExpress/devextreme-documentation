A series is a collection of related data points. 

![DevExtreme HTML5 JavaScript Charts Series](/images/ChartJS/visual_elements/series.png)

The most important characteristic of a series is its type. The **Chart** provides over 20 series types, and all of them are described in the [Series Types](/concepts/05%20Widgets/Chart/11%20Series%20Types '/Documentation/Guide/UI_Components/Chart/Series_Types/') article. You can specify the type of a series using its [type](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                type: 'bar'
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series type="bar" ... ></dxi-series>
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
            <DxSeries type="bar"/>
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
                    <Series type="bar"/>
                </Chart>
            );
        }
    }

    export default App;

---

A single **Chart** can contain several series at once. In this case, the [series](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') property accepts an array of series objects. To enable a user to identify a series among others on the [chart legend](/concepts/05%20Widgets/Chart/35%20Legend/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Legend/Overview/'), specify its [name](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/ChartSeries/name.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#name').

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                type: 'bar',
                name: 'Men'
            }, {
                // ...
                type: 'area',
                name: 'Women'
            }]
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series type="bar" name="Men" ... ></dxi-series>
        <dxi-series type="area" name="Women" ... ></dxi-series>
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
                ...
                type="bar"
                name="Men" />
            <DxSeries
                ...
                type="area"
                name="Women" />
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
                        ...
                        type="bar"
                        name="Men" />
                    <Series
                        ...
                        type="area"
                        name="Women" />
                </Chart>
            );
        }
    }

    export default App;

---

Objects in the **series** array specify individual settings for series. You can also specify common settings for all chart series using the [commonSeriesSettings](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object. Individual series settings override common settings.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: {
                // high priority
            },
            commonSeriesSettings: {
                // low priority
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-series ... >
            <!-- high priority -->
        </dxi-series>
        <dxo-common-series-settings ... >
            <!-- low priority -->
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
                <!-- high priority -->
            </DxSeries>
            <DxCommonSeriesSettings ... >
                <!-- low priority -->
            </DxCommonSeriesSettings>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxCommonSeriesSettings
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxCommonSeriesSettings
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        CommonSeriesSettings
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series ... >
                        <!-- high priority -->
                    </Series>
                    <CommonSeriesSettings ... >
                        <!-- low priority -->
                    </CommonSeriesSettings>
                </Chart>
            );
        }
    }

    export default App;

---

#####See Also#####
- [Bind Series to Data](/concepts/05%20Widgets/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
- [Series Points](/concepts/05%20Widgets/Chart/14%20Series%20Points/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series_Points/Overview/')
- [Data Aggregation](/concepts/05%20Widgets/Chart/88%20Data%20Aggregation '/Documentation/Guide/UI_Components/Chart/Data_Aggregation/')
- [Access a Series Using the API](/concepts/05%20Widgets/Chart/10%20Series/40%20Access%20a%20Series%20Using%20the%20API.md '/Documentation/Guide/UI_Components/Chart/Series/Access_a_Series_Using_the_API/')

[tags]chart, overview, series type, series name, common series settings, inidividual series settings
