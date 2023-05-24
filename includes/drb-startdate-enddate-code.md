---
##### jQuery
    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            startDate: "5/23/2023",
            endDate: "5/28/2023",
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box    
        startDate="5/23/2023"
        endDate="5/28/2023"
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
            start-date="5/23/2023"
            end-date="5/28/2023"
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
            start-date="5/23/2023"
            end-date="5/28/2023"
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
                startDate="5/23/2023"
                endDate="5/28/2023"
            />
        );
    }

---
