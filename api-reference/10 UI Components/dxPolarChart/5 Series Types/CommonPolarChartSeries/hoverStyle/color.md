---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.hoverStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Sets a color for a series when it is hovered over.

---
#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#polarChartContainer").dxPolarChart({
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
    <dx-polar-chart ... >
        <dxi-series ... >
            <dxo-hover-style
                [color]="customPattern"
            ></dxo-hover-style>
        </dxi-series>
    </dx-polar-chart>

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
        <DxPolarChart ... >
            <DxSeries ... >
                <DxHoverStyle :color="customPattern" />
            </DxSeries>
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart'; 
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
        <DxPolarChart ... >
            <DxSeries ... >
                <DxHoverStyle :color="customPattern" />
            </DxSeries>
        </DxPolarChart>
    </template>

    <script setup>
    import DxPolarChart, { DxSeries, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, { Series, HoverStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PolarChart ... >
                <Series ... >
                    <HoverStyle color={customPattern} />
                </Series>
            </PolarChart>        
        ); 
    } 

---