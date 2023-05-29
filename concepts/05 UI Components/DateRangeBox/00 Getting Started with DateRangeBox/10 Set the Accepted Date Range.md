You can define constraints for date ranges that can be selected by end users. Specify the [min](/api-reference/10%20UI%20Components/DateBoxBase/1%20Configuration/min.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#min') and [max](/api-reference/10%20UI%20Components/DateBoxBase/1%20Configuration/max.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#max') properties.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            min: new Date(new Date().setDate(new Date().getDate() - 14)), // 2 weeks before the current date
            max: new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks after the current date
         });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box ... 
        [min]="minDate"
        [max]="maxDate"
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        minDate: Date = new Date(new Date().setDate(new Date().getDate() - 14)); // 2 weeks before the current date
        maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 14)); // 2 weeks after the current date
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox ...
            :min="minDate"
            :max="maxDate"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    export default {
        components: {
            DxDateRangeBox
        },
        data() {
            return {
                minDate: new Date(new Date().setDate(new Date().getDate() - 14)), // 2 weeks before the current date
                maxDate: new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks after the current date
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox ...
            :min="minDate"
            :max="maxDate"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    const minDate = new Date(new Date().setDate(new Date().getDate() - 14)), // 2 weeks before the current date
    const maxDate = new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks after the current date
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';

    const minDate = new Date(new Date().setDate(new Date().getDate() - 14)), // 2 weeks before the current date
    const maxDate = new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks after the current date

    export default function App() { 
        return (
            <DateRangeBox ...
                min={minDate}
                max={maxDate}
            />
        );
    }

---

Run the code. You can now select dates only within the predefined range: from two weeks before the current date to two weeks after. The next step specifies the date range selected at startup.
