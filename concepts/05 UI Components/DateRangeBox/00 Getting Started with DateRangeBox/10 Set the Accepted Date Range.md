You can define an available range from which end-users can select dates. For this purpose, specify the [min](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#max) properties:

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
        minDate: Date = new Date(new Date().setDate(new Date().getDate() - 14)), // 2 weeks before the current date
        maxDate: Date = new Date(new Date().setDate(new Date().getDate() + 14)), // 2 weeks after the current date
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

Run the code and ensure that the only available dates are between two weeks before and two weeks after the current date. Next, we will configure the UI component's initial values.
