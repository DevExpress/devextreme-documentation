The SelectBox value changes when the <a href="https://developer.mozilla.org/en/docs/Web/Events/change" target="_blank">change</a> event raises. If you need the value to be changed on another event, set the [customItemCreateEvent](/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#customItemCreateEvent) property.

---
##### jQuery

    <!--JavaScript-->
    const selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: selectBoxData,
            valueExpr: 'id',
            displayExpr: 'country',
            acceptCustomValue: true,
            customItemCreateEvent: 'keyup'
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box
        [dataSource]="selectBoxData"
        valueExpr="id"
        displayExpr="country"
        [acceptCustomValue]="true"
        customItemCreateEvent="keyup">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            :data-source="selectBoxData"
            display-expr="country"
            value-expr="id"
            :accept-custom-value="true",
            custom-item-create-event="keyup"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        data() {
            const selectBoxData = [
                { id: 1, country: "Afghanistan" },
                { id: 2, country: "Albania" },
                // ...
            ];
            return {
                selectBoxData
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';
    import 'devextreme/dist/css/dx.light.css';

    import SelectBox from 'devextreme-react/select-box';

    const selectBoxData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <SelectBox ...
                    dataSource={selectBoxData} 
                    displayExpr="country"
                    valueExpr="id"
                    acceptCustomValue={true}
                    customItemCreateEvent="keyup"
                />
            );
        }
    }
    export default App;


---

To process a new SelectBox value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onValueChanged](/api-reference/10%20UI%20Components/dxSelectBox/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxSelectBox/Configuration/#onValueChanged') property when you configure the UI component.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#selectBoxContainer").dxSelectBox({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-select-box ...
        (onValueChanged)="onValueChanged($event)">
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onValueChanged (e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

##### Vue

    <!-- tab: App.vue -->
    <template> 
        <DxSelectBox ...
            @value-changed="valueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxSelectBox } from 'devextreme-vue/select-box';

    export default {
        components: {
            DxSelectBox
        },
        methods: {
            valueChanged(e) {
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

    import SelectBox from 'devextreme-react/select-box';

    class App extends React.Component {
        constructor(props) {
            super(props);
            this.valueChanged = this.valueChanged.bind(this);
        }
        valueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
        render() {
            return (
                <SelectBox ...
                    onValueChanged={this.valueChanged}
                />
            );
        }
    }
    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxSelectBox/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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

    $("#selectBoxContainer").dxSelectBox("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [SelectBox - Configure Search Parameters](/concepts/05%20UI%20Components/SelectBox/10%20Configure%20Search%20Parameters.md '/Documentation/Guide/UI_Components/SelectBox/Configure_Search_Parameters/')
- [SelectBox - Create a User-Defined Item](/concepts/05%20UI%20Components/SelectBox/15%20Create%20a%20User-Defined%20Item.md '/Documentation/Guide/UI_Components/SelectBox/Create_a_User-Defined_Item/')
- [SelectBox API Reference](/api-reference/10%20UI%20Components/dxSelectBox '/Documentation/ApiReference/UI_Components/dxSelectBox/')
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/SelectBox/Overview)

[tags]selectBox, select box, editor, get value, set value, change value, valueChangeEvent, valueChanged