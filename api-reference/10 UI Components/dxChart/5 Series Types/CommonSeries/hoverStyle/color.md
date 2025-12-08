---
id: dxChartSeriesTypes.CommonSeries.hoverStyle.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Specifies the color of the series in the hovered state.

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
                hoverStyle: {
                    color: {
                        fillId: customPatternId
                    }
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-chart-series ... >
            <dxo-chart-hover-style
                [color]="fill"
            ></dxo-chart-hover-style>
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
                <DxHoverStyle :color="fill" />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxSeries,
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
                <DxHoverStyle :color="fill" />
            </DxSeries>
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Series, HoverStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <Series ... >
                    <HoverStyle color={fill} />
                </Series>
            </Chart>        
        ); 
    } 

---