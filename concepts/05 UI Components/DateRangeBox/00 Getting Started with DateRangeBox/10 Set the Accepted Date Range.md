You can define an available range from which end-users can select dates. For this purpose, specify the [min](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#max) properties:

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            min: new Date(1920, 0, 1),
            max: new Date(2030, 0, 1),
            startDate: new Date(),
            endDate: new Date(new Date().setDate(new Date().getDate() + 7)),
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
        minDate: Date = new Date(1920, 0, 1);
        maxDate: Date = new Date(2030, 0, 1);
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
                minDate: new Date(1920, 0, 1)
                maxDate: new Date(2030, 0, 1)
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

    const minDate = new Date(1920, 0, 1);
    const maxDate = new Date(2030, 0, 1);
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';

    const minDate = new Date(1920, 0, 1);
    const maxDate = new Date(2030, 0, 1);

    export default function App() { 
        return (
            <DateRangeBox ...
                min={minDate}
                max={maxDate}
            />
        );
    }

---

Run the code and ensure that the only available dates are between 1 Jan 1920 and 1 Jan 2030. Next, we will configure the UI component's initial values.
