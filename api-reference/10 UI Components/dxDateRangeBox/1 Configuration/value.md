---
id: dxDateRangeBox.Options.value
type: Array<Date, Number, String>
default: [null, null]
---
---
##### shortDescription
An array of date range values currently selected using the date box. 

---

You can specify the date range with any of the following formats:

- Date  
 Specifies dates directly.

- Number  
 Specifies a date as a timestamp (total milliseconds since 1970/01/01).

- String  
 Specifies a date as a string value (`"yyyy-MM-dd"` - "2017-03-06").
 
When you changed the date value, the new value is saved in the same format as the initial value. We recommend that you specify dates in <a href="https://en.wikipedia.org/wiki/ISO_8601" target="_blank">UTC ISO 8601</a>.

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dateRangeBox").dxDateRangeBox({
            value: ['5/23/2023','5/28/2023'],
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box 
        [value]="['5/23/2023','5/28/2023']"
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
            :value="['5/23/2023','5/28/2023']"
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
            :value="['5/23/2023','5/28/2023']"
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
                value={['5/23/2023','5/28/2023']}
            />
        );
    }

---

#####See Also#####
- [startDate]({basewidgetpath}/Configuration/#startDate)
- [endDate]({basewidgetpath}/Configuration/#endDate)
