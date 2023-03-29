You can add a custom pattern or gradient fill to the following gauge elements:

- [Range color]({basewidgetpath}/Configuration/rangeContainer/ranges/#color)
- [RangeContainer background color]({basewidgetpath}/Configuration/rangeContainer/#backgroundColor)
- [ValueIndicator color]({basewidgetpath}/UI_Components/dxCircularGauge/Configuration/valueIndicator/#color)

Use the [registerPattern()](/Documentation/ApiReference/Common/Utils/viz/#registerPatternoptions) or [registerGradient()](/Documentation/ApiReference/Common/Utils/viz/#registerGradienttype_options) method to create a custom pattern or gradient.

The following example adds a gradient to one of the ranges in a gauge:

---
##### jQuery

    <!-- tab: index.js -->
    const registerGradient = DevExpress.common.charts.registerGradient;

    $(function(){
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            rangeContainer: {
                // ...
                rangeContainer: {
                    ranges: [
                        { startValue: 0, endValue: 50, color: '#92000A' },
                        { startValue: 50, endValue: 100, color: { 
                            fillId: registerGradient("linear", {
                                colors: [{
                                    offset: "20%",
                                    color: "#97c95c"
                                }, {
                                    offset: "90%",
                                    color: "#eb3573"
                                }]
                            }) 
                        } }
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
            <dxi-range [startValue]="50" [endValue]="100" [color]="fill">
        </dxo-range-container>
    </dx-{widget-name}>

    <!-- tab: app.component.ts -->
    import { registerGradient } from "devextreme/common/charts";

    export class AppComponent {
        // ...
        
        fill = {
            fillId: registerGradient("linear", {
                colors: [{
                    offset: "20%",
                    color: "#97c95c"
                }, {
                    offset: "90%",
                    color: "#eb3573"
                }]
            });
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
                    :color="fill"
                />
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script>
        import Dx{WidgetName}, { DxRangeContainer, DxRange } from 'devextreme-vue/{widget-name}'; 
        import { registerGradient } from 'devextreme/common/charts';
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
                    fill: {
                        fillId: registerGradient("linear", {
                            colors: [{
                                offset: "20%",
                                color: "#97c95c"
                            }, {
                                offset: "90%",
                                color: "#eb3573"
                            }]
                        });
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
                    :color="fill"
                />
            </DxRangeContainer>
        </Dx{WidgetName}>
    </template>

    <script setup>
        import Dx{WidgetName}, { DxRangeContainer, DxRange } from 'devextreme-vue/{widget-name}';
        import { registerGradient } from 'devextreme/common/charts';
        // ...

        const fill = {
            fillId: registerGradient("linear", {
                colors: [{
                    offset: "20%",
                    color: "#97c95c"
                }, {
                    offset: "90%",
                    color: "#eb3573"
                }]
            });
        };
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import {WidgetName}, { RangeContainer, Range } from 'devextreme-react/{widget-name}';
    import { registerGradient } from 'devextreme/common/charts';

    // ...
    const fill = {
        fillId: registerGradient("linear", {
            colors: [{
                offset: "20%",
                color: "#97c95c"
            }, {
                offset: "90%",
                color: "#eb3573"
            }]
        });
    };

    export default function App() { 
        return ( 
            <{WidgetName} ... >
                <RangeContainer ... >
                    <Range startValue={0} endValue={50} color="#92000A" />
                    <Range startValue={50} endValue={100} color={fill} />
                </RangeContainer>
            </{WidgetName}>        
        ); 
    } 

---