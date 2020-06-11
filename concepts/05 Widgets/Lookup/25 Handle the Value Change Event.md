By default, the **Lookup** applies a value immediately after an end user chooses an item from the drop-down menu. To change this behavior and apply the value after a user clicks the "Apply" button, assign *'useButtons'* to the [applyValueMode](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#applyValueMode') option.

---
##### jQuery

    <!--JavaScript-->
    const lookupData = [
        { id: 1, country: "Afghanistan" },
        { id: 2, country: "Albania" },
        // ...
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            valueExpr: 'id',
            displayExpr: 'country',
            applyValueMode: 'useButtons'
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        valueExpr="id"
        displayExpr="country"
        applyValueMode="useButtons">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        lookupDataSource =  [
            { id: 1, country: "Afghanistan" },
            { id: 2, country: "Albania" },
            // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

##### Vue

    <template>
        <DxLookup
            :data-source="lookupData"
            value-expr="id"
            display-expr="country"
            apply-value-mode="useButtons"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        },
        data() {
            return {
                lookupData: [
                    { id: 1, country: 'Afghanistan' },
                    { id: 2, country: 'Albania' },
                    // ...
                ]
            };
        }
    }
    </script>

##### React

    import React from 'react';
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { Lookup } from 'devextreme-react/lookup';

    const lookupData = [
        { id: 1, country: 'Afghanistan' },
        { id: 2, country: 'Albania' },
        // ...
    ];

    class App extends React.Component {
        render() {
            return (
                <Lookup
                    dataSource={lookupData}
                    valueExpr="id"
                    displayExpr="country"
                    applyValueMode="useButtons"
                />
            );
        }
    }

    export default App;

---

To process a new **Lookup** value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the widget, assign it to the [onValueChanged](/api-reference/10%20UI%20Widgets/dxLookup/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#onValueChanged') option when you configure the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-lookup ...
        (onValueChanged)="onValueChanged($event)">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from "devextreme-angular";
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
             DxLookupModule
         ],
         // ...
     })

##### Vue

    <template>
        <DxLookup ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxLookup } from 'devextreme-vue/lookup';

    export default {
        components: {
            DxLookup
        },
        methods: {
            onValueChanged(e) {
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

    import { Lookup } from 'devextreme-react/lookup';

    class App extends React.Component {
        constructor(props) {
            super(props);

            this.onValueChanged = this.onValueChanged.bind(this);
        }

        onValueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
        
        render() {
            return (
                <Lookup ...
                    onValueChanged={this.onValueChanged}
                />
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/EventHandling/"
}

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Widgets/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Widgets/dxLookup/Methods/#oneventName_eventHandler') method. This approach is more typical of jQuery.

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

    $("#lookupContainer").dxLookup("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents

[tags]lookup, change value, valueChangeEvent, valueChanged, apply mode, apply value, apply instantly, use buttons