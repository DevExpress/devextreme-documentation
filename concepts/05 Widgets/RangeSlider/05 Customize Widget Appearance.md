The **RangeSlider** can display labels for the [min](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxTrackBar/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/#max') values. To configure the labels, use the [label](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/label '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/label/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
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
    <dx-range-slider ... >
        <dxo-label
            [visible]="true"
            [format]="format"
            position="bottom"> <!-- or "top" -->
        </dxo-label>
    </dx-range-slider>

    <!--TypeScript-->
    import { DxRangeSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        format = function(value) {
            return value + " units";
        };
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRangeSlider ... >
            <DxLabel
                :visible="true"
                :format="format"
                position="bottom" /> <!-- or "top" -->
        </DxRangeSlider>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRangeSlider, DxLabel } from 'devextreme-vue/range-slider';

    export default {
        components: {
            DxRangeSlider,
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

    import { RangeSlider, Label } from 'devextreme-react/range-slider';

    const format = function(value) {
        return value + " units";
    }

    class App extends React.Component {
        render() {
            return (
                <RangeSlider ... >
                    <Label
                        visible={true}
                        format={format}
                        position="bottom" /> {/* or "top" */}
                </RangeSlider>
            );
        }
    }

    export default App;

---

The **RangeSlider** can also display a tooltip for the slider handles. To configure it, use the [tooltip](/api-reference/10%20UI%20Widgets/dxSliderBase/1%20Configuration/tooltip '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/Configuration/tooltip/') object.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
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
    <dx-range-slider ... >
        <dxo-tooltip
            [enabled]="true"
            [format]="format"
            position="bottom"
            showMode="always"> <!-- or "onHover" -->
        </dxo-tooltip>
    </dx-range-slider>

    <!--TypeScript-->
    import { DxRangeSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        format = function(value) {
            return value + " units";
        };
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRangeSlider ... >
            <DxTooltip
                :enabled="true"
                position="bottom"
                :format="format"
                show-mode="always" /> <!-- or "onHover" -->
        </DxRangeSlider>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRangeSlider, DxTooltip } from 'devextreme-vue/range-slider';

    export default {
        components: {
            DxRangeSlider,
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

    import { RangeSlider, Tooltip } from 'devextreme-react/range-slider';

    const format = function(value) {
        return value + " units";
    }

    class App extends React.Component {
        render() {
            return (
                <RangeSlider ... >
                    <Tooltip
                        enabled={true}
                        position="bottom"
                        format={format}
                        showMode="always" /> {/* or "onHover" */}
                </RangeSlider>
            );
        }
    }

    export default App;

---

To specify whether or not the selected range should be highlighted, use the **showRange** option.

---
##### jQuery

    <!--JavaScript-->
    $(function(){
        $("#rangeSliderContainer").dxRangeSlider({
            // . . .
            showRange: false
        });
    });

##### Angular

    <!--HTML-->
    <dx-range-slider
        [showRange]="false">
    </dx-range-slider>

    <!--TypeScript-->
    import { DxRangeSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSliderModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRangeSlider :show-range="false"/>
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRangeSlider } from 'devextreme-vue/range-slider';

    export default {
        components: {
            DxRangeSlider
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { RangeSlider } from 'devextreme-react/range-slider';

    class App extends React.Component {
        render() {
            return (
                <RangeSlider showRange={false}/>
            );
        }
    }

    export default App;

---

#####See Also#####
- [RangeSlider - Handle the Value Change Event](/concepts/05%20Widgets/RangeSlider/10%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/Widgets/RangeSlider/Handle_the_Value_Change_Event')
- [RangeSlider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RangeSlider/Overview)
- [RangeSlider API Reference](/api-reference/10%20UI%20Widgets/dxRangeSlider '/Documentation/ApiReference/UI_Widgets/dxRangeSlider/')

[tags]range slider, rangeSlider, editor, label, tooltip, showRange