To set the UI component's value, specify the [value](/api-reference/10%20UI%20Components/dxDateBox/1%20Configuration/value.md '/Documentation/ApiReference/UI_Components/dxDateBox/Configuration/#value') property. In this tutorial, it is equal to the current date and time.

---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        const now = new Date();

        $("#dateBox").dxDateBox({
            // ...
            value: now
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ...    
        [value]="now">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    #include angular-component-decorator
    export class AppComponent {
        // ...
        now: Date = new Date();
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox ...
            :value="now"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                // ...
                now: Date(),
            }
        }
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateBox } from 'devextreme-react/date-box';

    class App extends React.Component {
        // ...
        now = new Date();

        constructor(props) {
            super(props);
            this.state = {
                dateBoxValue: this.now
            };
        }

        render() {
            return (
                <DateBox ...
                    value={this.state.dateBoxValue}
                />
            );
        }
    }
    export default App;

---

In the next step, we will handle the value change event.