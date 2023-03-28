---
id: dxPieChartSeriesTypes.CommonPieChartSeries.selectionStyle.color
type: String | ChartsColor
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
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart ... >
        <dxi-series ... >
            <dxo-selection-style
                [color]="customPattern"
            ></dxo-selection-style>
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
                <DxSelectionStyle :color="customPattern" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart'; 
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
        <DxPieChart ... >
            <DxSeries ... >
                <DxSelectionStyle :color="customPattern" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, { Series, SelectionStyle } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PieChart ... >
                <Series ... >
                    <SelectionStyle color={customPattern} />
                </Series>
            </PieChart>        
        ); 
    } 

---