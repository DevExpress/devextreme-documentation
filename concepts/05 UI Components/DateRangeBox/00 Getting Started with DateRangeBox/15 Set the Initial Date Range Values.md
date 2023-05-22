To display the initially selected date range, implement the [startDate](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#startDate) and [endDate](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#endDate) properties. Alternatively, you can specify the start and end dates in the array of the [value](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#value) property. In this tutorial, the range is equal to one week and starts from the current date.

---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box ...    
        [startDate]="startDate"
        [endDate]="endDate"
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent {
        // ...
        startDate: Date = new Date();
        endDate: Date = new Date(new Date().setDate(new Date().getDate() + 7));
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox ...
            :start-date="startDate"
            :end-date="endDate"
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
                startDate: new Date(),
                endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox ...
            :start-date="startDate"
            :end-date="endDate"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    const startDate = new Date();
    const endDate = new Date(new Date().setDate(new Date().getDate() + 7));
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';

    const startDate = new Date();
    const endDate = new Date(new Date().setDate(new Date().getDate() + 7));
 
    export default function App() { 
        return (
            <DateRangeBox ...
                startDate={startDate}
                endDate={endDate}
            />
        );
    }

---

In the next step, we will specify labels for the start date and end date input fields.
