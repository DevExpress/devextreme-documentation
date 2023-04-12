---
id: dxChart.Options.commonPaneSettings.backgroundColor
---
---
##### shortDescription
Specifies the color of the pane's background.

---
#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#chartContainer").dxChart({
            // ...
            commonPaneSettings: {
                // ...
                backgroundColor: {
                    fillId: customPatternId
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxo-common-pane-settings [backgroundColor]="fill">
        </dxo-common-pane-settings>
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
            <DxCommonPaneSettings
                :background-color="fill"
            />
        </DxChart>
    </template>

    <script>
    import DxChart, { DxCommonPaneSettings } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxCommonPaneSettings
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
            <DxCommonPaneSettings
                :background-color="fill"
            />
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxCommonPaneSettings } from 'devextreme-vue/chart'; 
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { CommonPaneSettings } from 'devextreme-react/chart';

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <CommonPaneSettings backgroundColor={fill} />
            </Chart>        
        ); 
    } 

---