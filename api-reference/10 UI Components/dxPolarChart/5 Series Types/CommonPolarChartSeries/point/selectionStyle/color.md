---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.point.selectionStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Sets a color for a point when it is selected.

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
    <dx-polar-chart ... >
        <dxi-series ... >
            <dxo-point ... >
                <dxo-selection-style 
                    [color]="customPattern"
                ></dxo-selection-style>
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
                    <DxSelectionStyle :color="customPattern" />
                </DxPoint>
            </DxSeries>
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, { DxSeries, DxPoint, DxSelectionStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxPolarChart,
            DxSeries,
            DxPoint,
            DxSelectionStyle
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
                    <DxSelectionStyle :color="customPattern" />
                </DxPoint>
            </DxSeries>
        </DxPolarChart>
    </template>

    <script setup>
    import DxPolarChart, { DxSeries, DxPoint, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, { Series, Point, SelectionStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PolarChart ... >
                <Series ... >
                    <Point ... >
                        <SelectionStyle color={customPattern} />
                    </Point>
                </Series>
            </PolarChart>        
        ); 
    } 

---
