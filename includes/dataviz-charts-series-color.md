You can also specify a custom pattern or gradient instead of a plain color. Implement the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) or [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to get an id. Then, do the following:

1. Specify the `base` color for labels and connectors in the **color** configuration object.

1. Set the `fillId` field to the obtained id.

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#chartContainer").dxChart({
            // ...
            series: {
                // ...
                color: {
                    base: "#000000",
                    fillId: customPatternId
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-chart ... >
        <dxi-series ...
            [color]="customPattern"
        >
        </dxi-series>
    </dx-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        
        customPattern = {
            base: "#000000",
            fillId: this.customPatternId
        };
    } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxChart ... >
            <DxSeries :color="customPattern" />
        </DxChart>
    </template>

    <script>
    import DxChart, { DxSeries } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxChart,
            DxSeries
        },
        data() {
            return {
                // ...
                customPattern: {
                    base: "#000000",
                    fillId: this.customPatternId
                }
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxChart ... >
            <DxSeries :color="customPattern" />
        </DxChart>
    </template>

    <script setup>
    import DxChart, { DxSeries } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        base: "#000000",
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import Chart, { Series } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        base: "#000000",
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <Chart ... >
                <Series color={customPattern} />
            </Chart>        
        ); 
    } 

---