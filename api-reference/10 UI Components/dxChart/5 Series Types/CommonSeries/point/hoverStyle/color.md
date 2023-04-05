---
id: dxChartSeriesTypes.CommonSeries.point.hoverStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Specifies the color of series points in hovered state.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                point: {
                    hoverStyle: {
                        color: {
                            fillId: customPatternId
                        }
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-series ... >
            <dxo-point ... >
                <dxo-hover-style 
                    [color]="fill"
                ></dxo-hover-style>
            </dxo-point>
        </dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        
        fill = {
            fillId: this.customPatternId
        };
    } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxChart ... >
            <DxSeries ... >
                <DxPoint ... >
                    <DxHoverStyle :color="fill" />
                </DxPoint>
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, { DxSeries, DxPoint, DxHoverStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxSeries,
            DxPoint,
            DxHoverStyle
        },
        data() {
            return {
                // ...
                fill: {
                    fillId: this.customPatternId
                }
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxChart ... >
            <DxSeries ... >
                <DxPoint ... >
                    <DxHoverStyle :color="fill" />
                </DxPoint>
            </DxSeries>
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxSeries, DxPoint, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Series, Point, HoverStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <Series ... >
                    <Point ... >
                        <HoverStyle color={fill} />
                    </Point>
                </Series>
            </Chart>        
        ); 
    } 

---
