---
id: dxChart.Options.argumentAxis.aggregateByCategory
type: Boolean
default: false
---
---
##### shortDescription
Aggregates series points that fall into the same category.

---
[Aggregation](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/') by categories can be applied only when the axis displays [categories](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/1%20Configuration/argumentAxis/categories.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories'), and each category contains two or more series points. 

When **aggregateByCategory** is **true**, data is aggregated using the specified [aggregation method](/api-reference/20%20Data%20Visualization%20Widgets/dxChart/5%20Series%20Types/CommonSeries/aggregation/method.md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/aggregation/#method').

The following code shows an example of a data source that can be aggregated by categories and the **Chart** configuration for this use-case:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#chartContainer").dxChart({
            dataSource: [
                { arg: "A", val: 1 },
                { arg: "A", val: 1 },
                { arg: "A", val: 1 },

                { arg: "B", val: 1 },
                { arg: "B", val: 1 }
            ],
            series: {
                type: "bar",
                aggregation: {
                    enabled: true,
                    method: "sum"
                }
            },
            argumentAxis: {
                aggregateByCategory: true
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart dataSource="chartData">
        <dxi-series type="bar">
            <dxo-aggregation
                [enabled]="true"
                method="sum">
            </dxo-aggregation>
        </dxi-series>
        <dxo-argument-axis [aggregateByCategory]="true"></dxo-argument-axis>
    </dx-chart>

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

    import { DxChartModule } from 'devextreme-angular';
    import { Service } from './app.service';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxChartModule
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
        <dx-chart :data-source="chartData">
            <dx-series type="bar">
                <dx-aggregation
                    :enabled="true"
                    method="sum" 
                />
            </dx-series>
            <dx-argument-axis :aggregate-by-category="true" />
        </dx-chart>
    </template>

    <script>
    import DxChart, {
        DxSeries,
        DxAggregation,
        DxArgumentAxis
    } from 'devextreme-vue/chart';

    import service from './data.js';

    export default {
        components: {
            DxChart,
            DxSeries,
            DxAggregation,
            DxArgumentAxis
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

    import Chart, {
        Series,
        Aggregation,
        ArgumentAxis
    } from 'devextreme-react/chart';

    import service from './data.js';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.chartData = service.getDataPoints;
        }

        render() {
            return (
                <Chart dataSource={this.chartData}>
                    <Series type="bar">
                        <Aggregation
                            enabled={true}
                            method="sum"
                        />
                    </Series>
                    <ArgumentAxis aggregateByCategory={true} />
                </Chart>
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

![DevExtreme Chart: Aggregate by Category](/images/ChartJS/chart-aggregateByCategory.png)

If **aggregateByCategory** is **false**, the aggregation methods are not applied. The first series point in each category is displayed instead.