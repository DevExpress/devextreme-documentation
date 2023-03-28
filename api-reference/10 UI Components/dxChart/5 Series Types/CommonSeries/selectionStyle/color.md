---
id: dxChartSeriesTypes.CommonSeries.selectionStyle.color
type: String | ChartsColor
default: undefined
---
---
##### shortDescription
Specifies the color of the series in the selected state.

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
    <dx-chart ... >
        <dxi-series ... >
            <dxo-selection-style
                [color]="customPattern"
            ></dxo-selection-style>
        </dxi-series>
    </dx-chart>

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
        <DxChart ... >
            <DxSeries ... >
                <DxSelectionStyle :color="customPattern" />
            </DxSeries>
        </DxChart>
    </template>

    <script>
    import DxChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart'; 
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
                customPattern: {
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
                <DxSelectionStyle :color="customPattern" />
            </DxSeries>
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Series, SelectionStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <Series ... >
                    <SelectionStyle color={customPattern} />
                </Series>
            </Chart>        
        ); 
    } 

---