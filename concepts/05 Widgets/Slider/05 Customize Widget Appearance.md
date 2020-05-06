The **Slider** can display labels for the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#max') values. To configure the labels, use the [label](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/label '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/label/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            label: {
                visible: true,
                position: "bottom", // or "top"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        <dxo-label
            [visible]="true"
            [format]="format"
            position="bottom"
        ></dxo-label>
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
        <DxSlider
            :label="label"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider
        },
        data() {
            return {
                label: {
                    visible: true,
                    position: "bottom", // or "top"
                    format: function(value) {
                        return value + " units";
                    }
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider } from 'devextreme-react/slider';

    const label = {
        visible: true,
        position: "bottom", // or "top"
        format: function(value) {
            return value + " units";
        }
    };

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Slider
                    label={label}
                />
            );
        }
    }

    export default App;

---

The **Slider** can also display a tooltip for the slider handle. To configure it, use the [tooltip](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/tooltip/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#sliderContainer").dxSlider({
            // . . .
            tooltip: {
                enabled: true,
                position: "bottom", // or "top"
                showMode: "always", // or "onHover"
                format: function(value) {
                    return value + " units";
                }
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        <dxo-tooltip
            [enabled]="true"
            [format]="format"
            showMode="always"
            position="bottom"
        ></dxo-tooltip>
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
        <DxSlider
            :tooltip="tooltip"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider
        },
        data() {
            return {
                tooltip: {
                    enabled: true,
                    position: "bottom", // or "top"
                    showMode: "always", // or "onHover"
                    format: function(value) {
                        return value + " units";
                    }
                }
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider } from 'devextreme-react/slider';

    const tooltip = {
        enabled: true,
        position: "bottom", // or "top"
        showMode: "always", // or "onHover"
        format: function(value) {
            return value + " units";
        }
    };

    class App extends React.Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <Slider
                    tooltip={tooltip}
                />
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
        [showRange]="showRange"
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        showRange = false;
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
            :showRange="showRange"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxSlider } from 'devextreme-vue/slider';

    export default {
        components: {
            DxSlider
        },
        data() {
            return {
                showRange: false
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Slider } from 'devextreme-react/slider';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.state = {
                showRange: false
            };
        }

        render() {
            return (
                <Slider
                    showRange={this.state.showRange}
                />
            );
        }
    }

    export default App;

---

#####See Also#####
- [Slider - Handle the Value Change Event](/concepts/05%20Widgets/Slider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/Slider/Handle_the_Value_Change_Event')
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview)
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')

[tags]slider, editor, label, tooltip, showRange