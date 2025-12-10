---
id: dxChartSeriesTypes.CommonSeries.point.selectionStyle.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Specifies the color of series points in the selected state.

##### propertyOf
dxChartSeriesTypes.LineSeries,dxChartSeriesTypes.StackedLineSeries,dxChartSeriesTypes.FullStackedLineSeries,dxChartSeriesTypes.StackedSplineSeries,dxChartSeriesTypes.FullStackedSplineSeries,dxChartSeriesTypes.SplineSeries,dxChartSeriesTypes.StepLineSeries,dxChartSeriesTypes.AreaSeries,dxChartSeriesTypes.StackedAreaSeries,dxChartSeriesTypes.FullStackedAreaSeries,dxChartSeriesTypes.StackedSplineAreaSeries,dxChartSeriesTypes.FullStackedSplineAreaSeries,dxChartSeriesTypes.SplineAreaSeries,dxChartSeriesTypes.StepAreaSeries,dxChartSeriesTypes.RangeAreaSeries,dxChartSeriesTypes.ScatterSeries

---
#include common-colorlist

#include dataviz-chartscolor

#include dataviz-chart-series-for-custom-styles

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                point: {
                    selectionStyle: {
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
        <dxi-chart-series ... >
            <dxo-chart-point ... >
                <dxo-chart-selection-style 
                    [color]="fill"
                ></dxo-chart-selection-style>
            </dxo-chart-point>
        </dxi-chart-series>
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
                    <DxSelectionStyle :color="fill" />
                </DxPoint>
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, { DxSeries, DxPoint, DxSelectionStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxSeries,
            DxPoint,
            DxSelectionStyle
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
                    <DxSelectionStyle :color="fill" />
                </DxPoint>
            </DxSeries>
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxSeries, DxPoint, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Series, Point, SelectionStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <Series ... >
                    <Point ... >
                        <SelectionStyle color={fill} />
                    </Point>
                </Series>
            </Chart>        
        ); 
    } 

---
