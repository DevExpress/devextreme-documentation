To define the range from which users can select dates, specify the [min](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/min.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#min') and [max](/api-reference/10%20UI%20Widgets/dxDateBox/1%20Configuration/max.md '/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#max') options:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        const now = new Date();

        $("#dateBoxContainer").dxDateBox({
            max: now,
            min: new Date(1900, 0, 1),
         });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-box ... 
        [min]="minDate"
        [max]="now">
    </dx-date-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        minDate: Date = new Date(1900, 0, 1);
        now: Date = new Date();
    }

##### Vue

    <!-- tab: App.vue -->
    <template>
        <DxDateBox ...
            :min="minDate"
            :max="now"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.common.css';
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateBox } from 'devextreme-vue/date-box';

    export default {
        components: {
            DxDateBox
        },
        data() {
            return {
                minDate: new Date(1900, 0, 1)
                now: Date(),
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
        minDate = new Date(1900, 0, 1);
        now = new Date();

        render() {
            return (
                <DateBox      
                    min={this.minDate}
                    max={this.now}
                />
            );
        }
    }
    export default App;

---

Run the code and ensure that the only available dates are between 1 Jan 1900 and today. Next, we will set the widget's initial value.