---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.point.hoverStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Sets a color for a point when it is hovered over.

##### propertyOf
dxPolarChartSeriesTypes.linepolarseries,dxPolarChartSeriesTypes.areapolarseries,dxPolarChartSeriesTypes.scatterpolarseries

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
    <dx-polar-chart ... >
        <dxi-series ... >
            <dxo-point ... >
                <dxo-hover-style 
                    [color]="customPattern"
                ></dxo-hover-style>
            </dxo-point>
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
                <DxPoint ... >
                    <DxHoverStyle :color="customPattern" />
                </DxPoint>
            </DxSeries>
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, { DxSeries, DxPoint, DxHoverStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxPolarChart,
            DxSeries,
            DxPoint,
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
                <DxPoint ... >
                    <DxHoverStyle :color="customPattern" />
                </DxPoint>
            </DxSeries>
        </DxPolarChart>
    </template>

    <script setup>
    import DxPolarChart, { DxSeries, DxPoint, DxHoverStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, { Series, Point, HoverStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PolarChart ... >
                <Series ... >
                    <Point ... >
                        <HoverStyle color={customPattern} />
                    </Point>
                </Series>
            </PolarChart>        
        ); 
    } 

---
