---
id: dxPolarChartSeriesTypes.CommonPolarChartSeries.selectionStyle.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Sets a color for a series when it is selected.

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
                selectionStyle: {
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
            <dxo-selection-style
                [color]="fill"
            ></dxo-selection-style>
        </dxi-series>
    </dx-polar-chart>

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
        <DxPolarChart ... >
            <DxSeries ... >
                <DxSelectionStyle :color="fill" />
            </DxSeries>
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxSeries,
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
        <DxPolarChart ... >
            <DxSeries ... >
                <DxSelectionStyle :color="fill" />
            </DxSeries>
        </DxPolarChart>
    </template>

    <script setup>
    import DxPolarChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, { Series, SelectionStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PolarChart ... >
                <Series ... >
                    <SelectionStyle color={fill} />
                </Series>
            </PolarChart>        
        ); 
    } 

---