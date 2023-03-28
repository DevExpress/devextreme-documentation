---
id: dxChart.Options.commonPaneSettings.backgroundColor
type: String | ChartsColor
default: 'none'
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
        <dxo-common-pane-settings [backgroundColor]="customPattern">
        </dxo-common-pane-settings>
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
            <DxCommonPaneSettings
                :background-color="customPattern"
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
            <DxCommonPaneSettings
                :background-color="customPattern"
            />
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxCommonPaneSettings } from 'devextreme-vue/chart'; 
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { CommonPaneSettings } from 'devextreme-vue/chart';

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <CommonPaneSettings backgroundColor={customPattern} />
            </Chart>        
        ); 
    } 

---