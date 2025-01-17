---
id: dxPieChartSeriesTypes.CommonPieChartSeries.hoverStyle.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Sets the color for the series when it is hovered over.

---
#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart ... >
        <dxi-series ... >
            <dxo-hover-style
                [color]="fill"
            ></dxo-hover-style>
        </dxi-series>
    </dx-pie-chart>

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
        <DxPieChart ... >
            <DxSeries ... >
                <DxHoverStyle :color="fill" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart'; 
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
        <DxPieChart ... >
            <DxSeries ... >
                <DxHoverStyle :color="fill" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, { Series, HoverStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PieChart ... >
                <Series ... >
                    <HoverStyle color={fill} />
                </Series>
            </PieChart>        
        ); 
    } 

---