By default, the value of the NumberBox is changed when the <a href="https://developer.mozilla.org/en/docs/Web/Events/change" target="_blank">change</a> event is raised. If you need the value to be changed on another event, set the [valueChangeEvent](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/valueChangeEvent.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#valueChangeEvent') property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            value: 20,
            valueChangeEvent: "keyup"
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box
        [value]="20"
        valueChangeEvent="keyup">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox
            :value="20"
            value-change-event="keyup"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxNumberBox from 'devextreme-vue/number-box';

    export default {
        components: {
            DxNumberBox
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';

    class App extends React.Component {
        render() {
            return (
                <NumberBox
                    defaultValue={20}
                    valueChangeEvent="keyup" />
            );
        }
    }
    export default App;

---

To process a new NumberBox value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onValueChanged](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxNumberBox/Configuration/#onValueChanged') property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#numberBoxContainer").dxNumberBox({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-number-box ...
        [(value)]="numberBox_value"
        (onValueChanged)="numberBox_valueChanged($event)">
    </dx-number-box>

    <!--TypeScript-->
    import { DxNumberBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        numberBox_value: number = 10;

        numberBox_valueChanged (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxNumberBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxNumberBox
            v-bind="numberBoxValue"
            @value-changed="numberBoxValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxNumberBox from 'devextreme-vue/number-box';

    export default {
        components: {
            DxNumberBox
        },
        data() {
            numberBoxValue: 10
        },
        methods: {
            numberBoxValueChanged(e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import NumberBox from 'devextreme-react/number-box';

    class App extends React.Component {
        constructor() {
            super();

            this.state = {
                numberBoxValue: 10
            };

            this.numberBoxValueChanged.bind(this);
        }

        render() {
            return (
                <NumberBox
                    value={this.numberBoxValue}
                    onValueChanged={this.numberBoxValueChanged} />
            );
        }

        numberBoxValueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
            this.setState({ numberBoxValue: newValue });
        }
    }
    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxNumberBox/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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

    $("#numberBoxContainer").dxNumberBox("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [NumberBox - Control the Behavior](/concepts/05%20UI%20Components/NumberBox/15%20Control%20the%20Behavior.md '/Documentation/Guide/UI_Components/NumberBox/Control_the_Behavior')
- [NumberBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/NumberBox/Overview)
- [NumberBox API Reference](/api-reference/10%20UI%20Components/dxNumberBox '/Documentation/ApiReference/UI_Components/dxNumberBox/')

[tags]number box, numberBox, editor, get value, set value, change value, valueChangeEvent, valueChanged