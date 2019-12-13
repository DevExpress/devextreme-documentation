---
id: dxRangeSelector.Options.scale.aggregateByCategory
type: Boolean
default: false
---
---
##### shortDescription
Aggregates series points that fall into the same category.

---

[Aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/series/aggregation/') by categories can be applied only when the scale displays [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxRangeSelector/1%20Configuration/scale/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/scale/#categories'), and each category contains two or more series points. 

When **aggregateByCategory** is **true**, data is aggregated using the specified [aggregation method](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/series/aggregation/#method').

The following code shows an example of a data source that can be aggregated by categories and the **RangeSelector** configuration for this use-case:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#rangeSelectorContainer").dxRangeSelector({
            dataSource: [
                { arg: "A", val: 1 },
                { arg: "A", val: 1 },
                { arg: "A", val: 1 },

                { arg: "B", val: 1 },
                { arg: "B", val: 1 }
            ],
            chart: {
                series: {
                    type: "bar",
                    aggregation: {
                        enabled: true,
                        method: "sum"
                    }
                }
            },
            scale: {
                aggregateByCategory: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-range-selector dataSource="chartData">
        <dxo-chart>
            <dxi-series type="bar">
                <dxo-aggregation
                    [enabled]="true"
                    method="sum">
                </dxo-aggregation>
            </dxi-series>
        </dxo-chart>
        <dxo-scale [aggregateByCategory]="true"></dxo-scale>
    </dx-range-selector>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { DataPoint, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        chartData: DataPoint[];
        constructor(service: Service) {
            this.chartData = service.getDataPoints();
        }
    }

    <!-- tab: app.service.ts -->
    import { Injectable } from '@angular/core';

    export class DataPoint {
        arg: String,
        val: Number
    }

    let dataPoints: DataPoint[] = [
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },

        { arg: "B", val: 1 },
        { arg: "B", val: 1 },
        { arg: "B", val: 1 }
    ];

    @Injectable()
    export class Service {
        getDataPoints(): DataPoint[] {
            return dataPoints;
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxRangeSelectorModule } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxRangeSelectorModule
        ],
        providers: [
            Service
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <dx-range-selector :data-source="chartData">
            <dx-chart>
                <dx-series type="bar">
                    <dx-aggregation
                        :enabled="true"
                        method="sum" 
                    />
                </dx-series>
            <dx-chart>
            <dx-scale :aggregate-by-category="true" />
        </dx-range-selector>
    </template>

    <script>
    import DxRangeSelector, {
        DxChart,
        DxSeries,
        DxAggregation,
        DxScale
    } from 'devextreme-vue/range-selector';

    import service from './data.js';

    export default {
        components: {
            DxRangeSelector,
            DxChart,
            DxSeries,
            DxAggregation,
            DxScale
        },
        data() {
            const chartData = service.getDataPoints;
            return {
                chartData
            }
        }
    }
    </script>

    <!-- tab: data.js -->
    const dataPoints = [
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },

        { arg: "B", val: 1 },
        { arg: "B", val: 1 },
        { arg: "B", val: 1 }
    ];
    export default {
        getDataPoints() {
            return dataPoints;
        }
    };

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import RangeSelector, {
        Chart,
        Series,
        Aggregation,
        Scale
    } from 'devextreme-react/range-selector';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartData = service.getDataPoints;
        }

        render() {
            return (
                <RangeSelector dataSource={this.chartData}>
                    <Chart>
                        <Series type="bar">
                            <Aggregation
                                enabled={true}
                                method="sum"
                            />
                        </Series>
                    </Chart>
                    <Scale aggregateByCategory={true} />
                </RangeSelector>
            );
        }
    }
    export default App;

    <!-- tab: data.js -->
    const dataPoints = [
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },
        { arg: "A", val: 1 },

        { arg: "B", val: 1 },
        { arg: "B", val: 1 },
        { arg: "B", val: 1 }
    ];
    export default {
        getDataPoints() {
            return dataPoints;
        }
    };

---

This code produces the following result:

![DevExtreme RangeSelector: Aggregate by Category](/images/ChartJS/range-selector-aggregateByCategory.png)

If **aggregateByCategory** is **false**, the aggregation methods are not applied. The first series point in each category is displayed instead.