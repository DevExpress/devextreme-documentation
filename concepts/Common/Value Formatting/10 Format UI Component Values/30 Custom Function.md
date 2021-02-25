A custom function is useful when advanced formatting is required. The value to be formatted is passed to the function as the argument. In the following example, a custom function combines absolute and percentage values for the Slider UI component's tooltip:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        var sliderMaxValue = 10;

        $("#sliderContainer").dxSlider({
            min: 0, max: sliderMaxValue,
            value: 6, step: 0.01,
            tooltip: {
                enabled: true,
                format: function (value) {
                    return value + " | " + ((value / sliderMaxValue) * 100).toFixed(1) + "%";
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [min]="0" [max]="sliderMaxValue"
        [(value)]="sliderValue" [step]="0.01">
        <dxo-tooltip
            [enabled]="true"
            [format]="formatSliderTooltip">
        </dxo-tooltip>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        sliderValue = 6;
        sliderMaxValue = 10;
        formatSliderTooltip (value) {
            return value + " | " + ((value / this.sliderMaxValue) * 100).toFixed(1) + "%";
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSlider
            :min="0" v-model:max="sliderMaxValue"
            v-model:value="sliderValue" :step="0.01">
            <DxTooltip
                :enabled="true"
                :format="formatSliderTooltip"   
            />
        </DxSlider>
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxSlider, {
        DxTooltip
    } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider,
            DxTooltip
        },
        data() {
            return {
                sliderValue: 6,
                sliderMaxValue: 10
            }
        },
        methods: {
            formatSliderTooltip(value) {
                return value + " | " + ((value / this.sliderMaxValue) * 100).toFixed(1) + "%";
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useCallback } from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import Slider, {
        Tooltip
    } from 'devextreme-react/slider';

    export default function App() {
        const sliderMaxValue = 10;
        const formatSliderTooltip = useCallback((value) => {
            return value + " | " + ((value / sliderMaxValue) * 100).toFixed(1) + "%";
        }, []);

        return (
            <Slider
                min={0} max={sliderMaxValue}
                defaultValue={6} step={0.01}>
                <Tooltip enabled
                    format={formatSliderTooltip}
                />
            </Slider>
        );
    }

---
