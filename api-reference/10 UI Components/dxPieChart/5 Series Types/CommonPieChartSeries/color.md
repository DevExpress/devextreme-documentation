---
id: dxPieChartSeriesTypes.CommonPieChartSeries.color
type: String | ChartsColor | undefined
default: undefined
---
---
##### shortDescription
Specifies a series color.

---
You can use this property to paint all pie slices in the same color.

#include common-colorlist

You can also specify a custom pattern or gradient instead of a plain color:  

1. Call the [registerPattern()](/api-reference/50%20Common/utils/viz/registerPattern(options).md '/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions') or [registerGradient()](/api-reference/50%20Common/utils/viz/registerGradient(type_options).md '/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options') method to obtain a fill ID.

1. Set the `fillId` field to the obtained ID in the **color** configuration object.

1. Specify the `base` color for labels and connectors.

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#pieChartContainer").dxPieChart({
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
    <dx-pie-chart ... >
        <dxi-series ...
            [color]="fill"
        >
        </dxi-series>
    </dx-pie-chart>

    <!-- tab: app.component.ts -->
    // ...

    export class AppComponent {
        // ...
        
        fill = {
            base: "#000000",
            fillId: this.customPatternId
        };
    } 

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxPieChart ... >
            <DxSeries :color="fill" />
        </DxPieChart>
    </template>

    <script>
    import DxPieChart, { DxSeries } from 'devextreme-vue/chart'; 
    // ...

    export default {
        components: {
            DxPieChart,
            DxSeries
        },
        data() {
            return {
                // ...
                fill: {
                    base: "#000000",
                    fillId: this.customPatternId
                }
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxPieChart ... >
            <DxSeries :color="fill" />
        </DxPieChart>
    </template>

    <script setup>
    import DxPieChart, { DxSeries } from 'devextreme-vue/chart';  
    // ...

    const fill = {
        base: "#000000",
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import PieChart, { Series } from 'devextreme-react/chart'; 

    // ...
    const fill = {
        base: "#000000",
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <PieChart ... >
                <Series color={fill} />
            </PieChart>        
        ); 
    } 

---

#include btn-open-demo with {
    href: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/PieWithCustomStyles/"        
}