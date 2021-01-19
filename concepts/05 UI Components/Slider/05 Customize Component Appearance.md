The **Slider** can display labels for the [min](/api-reference/10%20UI%20Components/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Components/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxSlider/Configuration/#max') values. To configure the labels, use the [label](/api-reference/10%20UI%20Components/dxSliderBase/1%20Configuration/label '/Documentation/ApiReference/UI_Components/dxSlider/Configuration/label/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            label: {
                visible: true,
                format: function(value) {
                    return value + " units";
                },
                position: "bottom" // or "top"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        <dxo-label
            [visible]="true"
            [format]="format"
            position="bottom"> <!-- or "top" -->
        </dxo-label>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        format = function(value) {
            return value + " units";
        };
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxSlider>
            <DxLabel
                :visible="true"
                :format="format"
                position="bottom" /> <!-- or "top" -->
        </DxSlider>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider, DxLabel } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider,
            DxLabel
        },
        methods: {
            format(value) {
                return value + " units";
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider, Label } from 'devextreme-react/slider';

    const format = function(value) {
        return value + " units";
    }

    class App extends React.Component {
        render() {
            return (
                <Slider>
                    <Label
                        visible={true}
                        format={format}
                        position="bottom" /> {/* or "top" */}
                </Slider>
            );
        }
    }

    export default App;

---

The **Slider** can also display a tooltip for the slider handle. To configure it, use the [tooltip](/api-reference/10%20UI%20Components/dxSliderBase/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Components/dxSlider/Configuration/tooltip/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            tooltip: {
                enabled: true,
                position: "bottom",
                format: function(value) {
                    return value + " units";
                },
                showMode: "always" // or "onHover"
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        <dxo-tooltip
            [enabled]="true"
            [format]="format"
            position="bottom"
            showMode="always"> <!-- or "onHover" -->
        </dxo-tooltip>
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        format = function(value) {
            return value + " units";
        };
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxSlider>
            <DxTooltip
                :enabled="true"
                position="bottom"
                :format="format"
                show-mode="always" /> <!-- or "onHover" -->
        </DxSlider>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider, DxTooltip } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider,
            DxTooltip
        },
        methods: {
            format(value) {
                return value + " units";
            }
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider, Tooltip } from 'devextreme-react/slider';

    const format = function(value) {
        return value + " units";
    }

    class App extends React.Component {
        render() {
            return (
                <Slider>
                    <Tooltip
                        enabled={true}
                        position="bottom"
                        format={format}
                        showMode="always" /> {/* or "onHover" */}
                </Slider>
            );
        }
    }

    export default App;

---

To specify whether or not the part of the scale from the beginning to the slider handle should be highlighted, use the **showRange** option.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            showRange: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [showRange]="false"
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxSlider
            :show-range="false"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider } from 'devextreme-react/slider';

    class App extends React.Component {
        render() {
            return (
                <Slider
                    showRange={false}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Slider - Handle the Value Change Event](/concepts/05%20UI%20Components/Slider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/Slider/Handle_the_Value_Change_Event')
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview)
- [Slider API Reference](/api-reference/10%20UI%20Components/dxSlider '/Documentation/ApiReference/UI_Components/dxSlider/')

[tags]slider, editor, label, tooltip, showRange
