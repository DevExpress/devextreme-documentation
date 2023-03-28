---
id: dxPieChartSeriesTypes.CommonPieChartSeries.hoverStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Sets a color for the series when it is hovered over.

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
                [color]="customPattern"
            ></dxo-hover-style>
        </dxi-series>
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        
        customPattern = {
            fillId: this.customPatternId
        };
    } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxPieChart ... >
            <DxSeries ... >
                <DxHoverStyle :color="customPattern" />
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
                customPattern: {
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
                <DxHoverStyle :color="customPattern" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, { Series, HoverStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PieChart ... >
                <Series ... >
                    <HoverStyle color={customPattern} />
                </Series>
            </PieChart>        
        ); 
    } 

---