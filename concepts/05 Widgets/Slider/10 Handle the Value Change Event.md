To process a new **Slider** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxSlider/Configuration/#onValueChanged') option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#sliderContainer").dxSlider({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-slider
        [(value)]="value"
        (onValueChanged)="handleValueChange($event)">
    </dx-slider>

    <!--TypeScript-->
    import { DxSliderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        value = 25;

        handleValueChange (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
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
            v-model:value="value"
            @value-changed="handleValueChange"
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
                value: 25
            };
        },
        methods: {
            handleValueChange(e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
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
                value: 25
            };
            this.handleValueChange = this.handleValueChange.bind(this);
        }

        handleValueChange(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here

            this.setState({
                value: newValue
            });
        }

        render() {
            return (
                <Slider
                    value={this.state.value}
                    onValueChanged={this.handleValueChange}
                />
            );
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxSlider/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

    <!--JavaScript-->
    const valueChangedHandler1 = function (e) {
        const previousValue = e.previousValue;
        const newValue = e.value;
        // First handler of the "valueChanged" event
    };

    const valueChangedHandler2 = function (e) {
        const previousValue = e.previousValue;
        const newValue = e.value;
        // Second handler of the "valueChanged" event
    };

    $("#sliderContainer").dxSlider("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [Slider Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Slider/Overview)
- [Slider API Reference](/api-reference/10%20UI%20Widgets/dxSlider '/Documentation/ApiReference/UI_Widgets/dxSlider/')

[tags]slider, editor, get value, set value