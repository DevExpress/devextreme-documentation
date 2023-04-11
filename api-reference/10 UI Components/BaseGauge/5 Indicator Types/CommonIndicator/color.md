---
id: CommonIndicator.color
type: String | ChartsColor
---
---
##### shortDescription
Specifies the color of the indicator.

---
#include common-colorlist

#include dataviz-chartscolor

---
##### jQuery

    <!-- tab: index.js -->
    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            valueIndicator: {
                // ...
                color: {
                    fillId: customPatternId
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-value-indicator [color]="fill">
        </dxo-value-indicator>
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
            <DxValueIndicator
                :color="fill"
            />
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, { DxValueIndicator } from 'devextreme-vue/{widget-name}'; 
    // ...

    export default {
        components: {
            Dx{WidgetName},
            DxValueIndicator
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
            <DxValueIndicator
                :color="fill"
            />
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName}, { DxValueIndicator } from 'devextreme-vue/{widget-name}'; 
    // ...

    const fill = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import {WidgetName}, { ValueIndicator } from 'devextreme-react/{widget-name}';

    // ...
    const fill = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <ValueIndicator color={fill} />
            </{WidgetName}>        
        ); 
    } 

---