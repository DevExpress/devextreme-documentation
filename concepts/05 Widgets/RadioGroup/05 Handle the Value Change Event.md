To process a new **RadioGroup** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#onValueChanged') option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            onValueChanged: function (e) {
                var previousValue = e.previousValue;
                var newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-radio-group
        [dataSource]="dataSource"
        [(value)]="radioGroupValue"
        (onValueChanged)="handleValueChange($event)">
    </dx-radio-group>

    <!--TypeScript-->
    import { DxRadioGroupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        dataSource = ["Low", "Normal", "Urgent", "High"];

        radioGroupValue = dataSource[1];
        
        handleValueChange (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        };
    }
    @NgModule({
        imports: [
            // ...
            DxRadioGroupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxRadioGroup 
            :data-source="dataSource"
            v-model:value="radioGroupValue"
            @value-changed="handleValueChange"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxRadioGroup } from 'devextreme-vue/radio-group';

    const items = ["Low", "Normal", "Urgent", "High"];

    export default {
        components: {
            DxRadioGroup
        },
        data() {
            return {
                dataSource: items,
                radioGroupValue: items[1]
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

    import { RadioGroup } from 'devextreme-react/radio-group';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.dataSource = ["Low", "Normal", "Urgent", "High"];
            this.state = {
                value: this.dataSource[1]
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
                <RadioGroup
                    dataSource={this.dataSource}
                    value={this.state.value}
                    onValueChanged={this.handleValueChange}
                />
            );
        }
    }

    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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

    $("#radioGroupContainer").dxRadioGroup("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [RadioGroup - Customize Item Appearance](/concepts/05%20Widgets/RadioGroup/10%20Customize%20Item%20Appearance.md '/Documentation/Guide/Widgets/RadioGroup/Customize_Item_Appearance')
- [RadioGroup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/RadioGroup/Overview)
- [RadioGroup API Reference](/api-reference/10%20UI%20Widgets/dxRadioGroup '/Documentation/ApiReference/UI_Widgets/dxRadioGroup/')

[tags]radio group, radioGroup, editor, get value, set value
