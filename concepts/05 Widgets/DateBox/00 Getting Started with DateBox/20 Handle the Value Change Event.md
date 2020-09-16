To handle value changes, implement the [onValueChanged](/api-reference/10%20UI%20Widgets/Editor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#onValueChanged') function. In this tutorial, it logs the previous and current values.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateBoxContainer").dxDateBox({
            // ...
            onValueChanged: function(e) {
                console.log(e.value);
                console.log(e.previousValue);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ...
        (onValueChanged)="onValueChanged($event)">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        // ...
        onValueChanged(e) {
            console.log(e.previousValue);
            console.log(e.value);
        }
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    export default {
        // ...
        methods: {
            onValueChanged(e) {
                console.log(e.previousValue);
                console.log(e.value);
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DateBox } from 'devextreme-react/date-box';

    class App extends React.Component {
        constructor(props) {
            // ...
            this.onValueChanged = this.onValueChanged.bind(this);
        }

        onValueChanged(e) {
            console.log(e.previousValue);
            console.log(e.value);
            this.setState({
                dateBoxValue: e.value
            });
        } 

        render() {
            return (
                <DateBox ...
                    onValueChanged={this.onValueChanged}
                />
            );
        }
    }
    export default App;

---

In the next part, we will disable specific dates.
