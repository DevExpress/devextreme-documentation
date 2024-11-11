---
id: dxPieChartSeriesTypes.CommonPieChartSeries.selectionStyle.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Sets the color for a series when it is selected.

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
                [color]="fill"
            ></dxo-selection-style>
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
                <DxSelectionStyle :color="fill" />
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
                <DxSelectionStyle :color="fill" />
            </DxSeries>
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart, { DxSeries, DxSelectionStyle } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, { Series, SelectionStyle } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PieChart ... >
                <Series ... >
                    <SelectionStyle color={fill} />
                </Series>
            </PieChart>        
        ); 
    } 

---