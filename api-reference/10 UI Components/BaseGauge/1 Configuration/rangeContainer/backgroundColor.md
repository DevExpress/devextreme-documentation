---
id: BaseGauge.Options.rangeContainer.backgroundColor
---
---
##### shortDescription
Specifies a range container's background color.

---
The background color is used to indicate the area reserved for the range container in the gauge. This color is replaced with the colors of the ranges contained in the range container.

#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            rangeContainer: {
                // ...
                backgroundColor: {
                    fillId: customPatternId
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-range-container [backgroundColor]="fill">
            <!-- ... -->
        </dxo-range-container>
    </dx-{widget-name}>

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
        <Dx{WidgetName} ... >
            <DxRangeContainer
                :background-color="fill"
            >
                <!-- ... -->
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, { DxRangeContainer } from 'devextreme-vue/{widget-name}'; 
    // ...

    export default {
        components: {
            Dx{WidgetName},
            DxRangeContainer
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
        <Dx{WidgetName} ... >
            <DxRangeContainer
                :background-color="fill"
            >
                <!-- ... -->
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName}, { DxRangeContainer } from 'devextreme-vue/{widget-name}'; 
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import {WidgetName}, { RangeContainer } from 'devextreme-react/{widget-name}';

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <RangeContainer backgroundColor={fill}>
                    {/* ... */}
                </RangeContainer>
            </{WidgetName}>        
        ); 
    } 

---