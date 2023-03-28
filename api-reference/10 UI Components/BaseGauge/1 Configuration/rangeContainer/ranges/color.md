---
id: BaseGauge.Options.rangeContainer.ranges.color
type: String | ChartsColor
---
---
##### shortDescription
Specifies a color of a range.

---
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
                rangeContainer: {
                    ranges: [
                        { startValue: 0, endValue: 50, color: '#92000A' },
                        { startValue: 50, endValue: 100, color: { fillId: customPatternId } }
                    ]
                }
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-{widget-name} ... >
        <dxo-range-container ... >
            <dxi-range [startValue]="0" [endValue]="50" color="#92000A"></dxi-range>
            <dxi-range [startValue]="50" [endValue]="100" [color]="customPattern">
        </dxo-range-container>
    </dx-{widget-name}>

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
        <Dx{WidgetName} ... >
            <DxRangeContainer ... >
                <DxRange
                    :start-value="0"
                    :end-value="50"
                    color="#92000A"
                />
                <DxRange
                    :start-value="50"
                    :end-value="100"
                    :color="customPattern"
                />
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script>
    import Dx{WidgetName}, { DxRangeContainer, DxRange } from 'devextreme-vue/{widget-name}'; 
    // ...

    export default {
        components: {
            Dx{WidgetName},
            DxRangeContainer,
            DxRange
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
        <Dx{WidgetName} ... >
            <DxRangeContainer ... >
                <DxRange
                    :start-value="0"
                    :end-value="50"
                    color="#92000A"
                />
                <DxRange
                    :start-value="50"
                    :end-value="100"
                    :color="customPattern"
                />
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script setup>
    import Dx{WidgetName}, { DxRangeContainer, DxRange } from 'devextreme-vue/{widget-name}';
    // ...

    const customPattern = {
        fillId: customPatternId
    };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import {WidgetName}, { RangeContainer, Range } from 'devextreme-vue/{widget-name}';

    // ...
    const customPattern = {
        fillId: customPatternId
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <RangeContainer ... >
                    <Range startValue={0} endValue={50} color="#92000A" />
                    <Range startValue={50} endValue={100} color={customPattern} />
                </RangeContainer>
            </{WidgetName}>        
        ); 
    } 

---