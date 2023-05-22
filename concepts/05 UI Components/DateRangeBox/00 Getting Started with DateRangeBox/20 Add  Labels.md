If you want to define the start date and end date labels, you can use the [startDateLabel](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#startDateLabel) and [endDateLabel](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#endDateLabel) property. To enable floating labels, assign *"floating"* to the [labelMode](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#labelMode) property. In this case, labels display as placeholders, but when the editors get focus, the labels move to the position above the input field.

---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            startDateLabel: "Start",
            endDateLabel: "End",
            labelMode: "floating",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box ...    
        startDateLabel="Start"
        endDateLabel="End"
        labelMode="floating"
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })

    export class AppComponent {}

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox ...
            start-date-label="Start"
            end-date-label="End"
            label-mode="floating"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    export default {
        components: {
            DxDateRangeBox
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox ...
            start-date-label="Start"
            end-date-label="End"
            label-mode="floating"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';
 
    export default function App() { 
        return (
            <DateRangeBox ...
                startDateLabel="Start"
                endDateLabel="End"
                labelMode="floating"
            />
        );
    }

---

In the next step, we will handle the value change event.
