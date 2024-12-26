**Candlestick** and **Stock** are financial series types used to describe and analyse trading patterns over short periods of time. Each point in a **Candlestick** series is composed of a real body and two wicks. The real body illustrates the opening and closing trades; it is filled if the closing price is lower than the opening price, and empty otherwise. The wicks visualize the highest and lowest traded prices during the day. A **Stock** series is similar to **Candlestick** except that the opening and closing trades are illustrated by markers instead of the real body.


<div class="simulator-desktop-container" data-view="/Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/financial.html, /Content/Applications/25_1/DataVisualization/Guides/ChartSeriesTypes/financial.js"></div>

Assign *"candlestick"* or *"stock"* to the **series[]**.[type](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/ChartSeries/type.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#type') property to specify the corresponding series type. You can configure:

- Each series individually using the [series](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/series '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/') array;
- All series in the Chart using the [commonSeriesSettings](/api-reference/10%20UI%20Components/dxChart/1%20Configuration/commonSeriesSettings '/Documentation/ApiReference/UI_Components/dxChart/Configuration/commonSeriesSettings/') object;
- All **Candlestick** or **Stock** series using the **commonSeriesSettings**.**candlestick** or **commonSeriesSettings**.**stock** object respectively.

Note that the financial series require four value fields: [openValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/openValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#openValueField'), [closeValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/closeValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#closeValueField'), [highValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/highValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#highValueField'), and [lowValueField](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/lowValueField.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/#lowValueField').

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                type: "candlestick",
                openValueField: "o",
                closeValueField: "c",
                highValueField: "h",
                lowValueField: "l"
            }, {
                // ...
            }],
            commonSeriesSettings: {
                candlestick: { ... },
                stock: { ... }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series
            type="candlestick"
            openValueField="o"
            closeValueField="c"
            highValueField="h"
            lowValueField="l">
        </dxi-series>
        <dxi-series ... ></dxi-series>
        ...
        <dxo-common-series-settings>
            <dxo-candlestick ... ></dxo-candlestick>
            <dxo-stock ... ></dxo-stock>
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
            <DxSeries
                type="candlestick"
                open-value-field="o"
                close-value-field="c"
                high-value-field="h"
                low-value-field="l"
            />
            <DxSeries ... />
            ...
            <DxCommonSeriesSettings
                :candlestick="candleStickSettings"
                :stock="stockSettings"
            />
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
        },
        data() {
            return {
                candleStickSettings: { ... },
                stockSettings: { ... }
            };
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

    const candleStickSettings = { ... };
    const stockSettings = { ... };

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series
                        type="candlestick"
                        openValueField="o"
                        closeValueField="c"
                        highValueField="h"
                        lowValueField="l"
                    />
                    <Series ... />
                    ...
                    <CommonSeriesSettings
                        candlestick={candleStickSettings}
                        stock={stockSettings}
                    />
                </Chart>
            );
        }
    }

    export default App;

---

Financial series gauge price reduction by comparing the values of two neighboring points. Use the **reduction**.[level](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/reduction/level.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/reduction/#level') property to specify whether it should be the open, close, high, or low values. The **reduction**.[color](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CommonSeries/reduction/color.md '/Documentation/ApiReference/UI_Components/dxChart/Configuration/series/reduction/#color') colors points whose value decreases.

---
##### jQuery

    <!--JavaScript-->$(function () {
        $("#chartContainer").dxChart({
            series: [{
                // ...
                reduction: {
                    level: "high",
                    color: "blue"
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-reduction level="high" color="blue"></dxo-reduction>
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
            <DxSeries ... >
                <DxReduction
                    level="high"
                    color="blue"
                />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxReduction
    } from 'devextreme-vue/chart';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxReduction
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, {
        Series,
        Reduction
    } from 'devextreme-react/chart';

    class App extends React.Component {
        render() {
            return (
                <Chart ... >
                    <Series ... >
                        <Reduction
                            level="high"
                            color="blue"
                        />
                    </Series>
                </Chart>
            );
        }
    }

    export default App;

---

See the [CandleStickSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/CandleStickSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/CandleStickSeries/') and [StockSeries](/api-reference/10%20UI%20Components/dxChart/5%20Series%20Types/StockSeries '/Documentation/ApiReference/UI_Components/dxChart/Series_Types/StockSeries/') API Reference sections for a full list of properties available to a financial series.

#include common-demobutton-named with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/Stock/",
    name: "Financial Series"
}

#####See Also#####
- [Series](/concepts/05%20UI%20Components/Chart/10%20Series/00%20Overview.md '/Documentation/Guide/UI_Components/Chart/Series/Overview/')
- [Bind Series to Data](/concepts/05%20UI%20Components/Chart/03%20Data%20Binding/23%20Bind%20Series%20to%20Data '/Documentation/Guide/UI_Components/Chart/Data_Binding/Bind_Series_to_Data/')
