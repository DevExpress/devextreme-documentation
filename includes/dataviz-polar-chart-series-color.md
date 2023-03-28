You can also specify a custom pattern or gradient instead of a plain color. Implement the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) or [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to get an id. Then, do the following:

1. Specify the `base` color for labels and connectors in the **color** configuration object.

1. Set the `fillId` field to the obtained id.

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#polarChartContainer").dxPolarChart({
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
    <dx-polar-chart ... >
        <dxi-series ...
            [color]="customPattern"
        >
        </dxi-series>
    </dx-polar-chart>

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
        <DxPolarChart ... >
            <DxSeries :color="customPattern" />
        </DxPolarChart>
    </template>

    <script>
    import DxPolarChart, { DxSeries } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxPolarChart,
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
        <DxPolarChart ... >
            <DxSeries :color="customPattern" />
        </DxPolarChart>
    </template>

    <script setup>
    import DxPolarChart, { DxSeries } from 'devextreme-vue/chart';  
    // ...

    const customPattern = {
        base: "#000000",
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PolarChart, { Series } from 'devextreme-vue/chart'; 

    // ...
    const customPattern = {
        base: "#000000",
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PolarChart ... >
                <Series color={customPattern} />
            </PolarChart>        
        ); 
    } 

---