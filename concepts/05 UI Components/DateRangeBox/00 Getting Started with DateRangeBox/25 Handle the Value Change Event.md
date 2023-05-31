To respond to a date range change, handle the [onValueChanged](/api-reference/10%20UI%20Components/dxTextEditor/1%20Configuration/onValueChanged.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#onValueChanged'') event. In this tutorial, the callback function logs the previous and current date ranges.

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

You have now completed DateRangeBox basic configuration. For additional information on this UI component, see the following link:

* [API Reference](/api-reference/10%20UI%20Components/dxDateRangeBox '/Documentation/ApiReference/UI_Components/dxDateRangeBox/')
