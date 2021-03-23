To process a new Switch value, you need to handle the value change event. If the handling function is not going to be changed during the lifetime of the UI component, assign it to the [onValueChanged](/api-reference/10%20UI%20Components/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxSwitch/Configuration/#onValueChanged') property when you configure the UI component.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#switchContainer").dxSwitch({
            onValueChanged: function (e) {
                const previousValue = e.previousValue;
                const newValue = e.value;
                // Event handling commands go here
            }
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-switch
        [(value)]="switchValue"
        (onValueChanged)="switchValueChanged($event)">
    </dx-switch>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        switchValue: boolean = true;

        switchValueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxSwitchModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxSwitchModule
        ],
        providers: [ ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxSwitch
            v-model="switchValue"
            @value-сhanged="switchValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import DxSwitch from 'devextreme-vue/switch';

    export default {
        components: {
            DxSwitch
        },
        data() {
            switchValue: true
        },
        methods: {
            switchValueChanged(e) {
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

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import Switch from 'devextreme-react/switch';

    class App extends React.Component {
        constructor() {
            super();

            this.state = {
                switchValue: true
            };

            this.switchValueChanged = this.switchValueChanged.bind(this);
        }

        render() {
            return (
                <Switch
                    value={this.switchValue}
                    onValueChanged={this.switchValueChanged} />
            );
        }

        switchValueChanged(e) {
            const previousValue = e.previousValue;
            const newValue = e.value;
            // Event handling commands go here
            this.setState({ switchValue: newValue });
        }
    }
    export default App;

---

If you are going to change event handlers at runtime, or if you need to attach several handlers to the value change event, subscribe to this event using the [on(eventName, eventHandler)](/api-reference/10%20UI%20Components/Component/3%20Methods/on(eventName_eventHandler).md '/Documentation/ApiReference/UI_Components/dxSwitch/Methods/#oneventName_eventHandler') method.

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

    $("#switchContainer").dxSwitch("instance")
        .on("valueChanged", valueChangedHandler1)
        .on("valueChanged", valueChangedHandler2);

#####See Also#####
#include common-link-handleevents
- [Switch Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Switch/Overview)
- [Switch API Reference](/api-reference/10%20UI%20Components/dxSwitch '/Documentation/ApiReference/UI_Components/dxSwitch/')

[tags]switch, editor, get value, set value
