---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            startDatePlaceholder: "Type or pick a start date",
            endDatePlaceholder: "Type or pick an end date",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box    
        startDatePlaceholder="Type or pick a start date"
        endDatePlaceholder="Type or pick an end date"
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    
    export class AppComponent { }

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox
            start-date-placeholder="Type or pick a start date"
            end-date-placeholder="Type or pick an end date"
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
        <DxDateRangeBox 
            start-date-placeholder="Type or pick a start date"
            end-date-placeholder="Type or pick an end date"
        />
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import { DxDateRangeBox } from 'devextreme-vue/date-range-box';
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import { DateRangeBox } from 'devextreme-react/date-range-box';
 
    export default function App() { 
        return (
            <DateRangeBox 
                startDatePlaceholder="Type or pick a start date"
                endDatePlaceholder="Type or pick an end date"
            />
        );
    }

---
