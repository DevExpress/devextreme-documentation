To handle a date range change, you can implement the [onValueChanged](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#onValueChanged') function. In this tutorial, the callback function logs the previous and current range of dates.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            onValueChanged: (e) => {
                console.log(e.value);
                console.log(e.previousValue);
            },
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box ...
        (onValueChanged)="onValueChanged($event)"
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
        onValueChanged(e) {
            console.log(e.value);
            console.log(e.previousValue);  
        }
    }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox ...
            @value-changed="onValueChanged"
        />
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    export default {
        // ...
        methods: {
            onValueChanged(e) {
                console.log(e.value);
                console.log(e.previousValue);
            }
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox ...
            @value-changed="onValueChanged"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';

    const onValueChanged = (e) => {
        console.log(e.value);
        console.log(e.previousValue);
    }
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';

    const onValueChanged = (e) => {
        console.log(e.value);
        console.log(e.previousValue);  
    } 

    export default function App() { 
        return (
            <DateRangeBox ...
                onValueChanged={onValueChanged}
            />
        );
    }

---

You have now configured the basic DateRangeBox features. For more details on this UI component, explore the following resources:

* [API Reference](/Documentation/ApiReference/UI_Components/dxDateRangeBox/)
