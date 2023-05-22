The DateRangeBox UI component allows users to type or pick a date range in a single or double calendar. To pick dates in a single calendar, disable the [multiView](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#multiView) property. You can also specify whether the values should be applied instantly or when a user clicks the **Done** button. For this, implement the [applyValueMode](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#applyValueMode) property.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateRangeBoxContainer").dxDateRangeBox({
            multiView: false,
            applyValueMode: "useButtons" // or "instantly"
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box
        [multiView]="false"
        applyValueMode="useButtons" // or "instantly" 
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { DxDateRangeBoxModule } from "devextreme-angular";
           
    export class AppComponent {}

    @NgModule({
        imports: [
            // ...
            DxDateRangeBoxModule
        ],
        // ...
    })

##### Vue

    <!-- tab: App.vue (Options API) -->
    <template>
        <DxDateRangeBox
            :multi-view="false"
            apply-value-mode="useButtons" // or "instantly" 
        /> 
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDateRangeBox from 'devextreme-vue/date-range-box';

    export default {
        components: {
            DxDateRangeBox
        },
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox
            :multi-view="false"
            apply-value-mode="useButtons" // or "instantly" 
        /> 
    </template>

    <script setup>
    import 'devextreme/dist/css/dx.light.css';

    import DxDateRangeBox from 'devextreme-vue/date-range-box';
    // ...
    </script>

##### React

    <!-- tab: App.js -->
    import React from 'react';

    import 'devextreme/dist/css/dx.light.css';

    import DateRangeBox from 'devextreme-react/date-range-box';

    export default function App() { 
        return (
            <DateRangeBox
                multiVue=false
                applyValueMode="useButtons" // or "instantly" 
            />
        );
    }

---

#####See Also#####
#include common-link-handleevents
- [DateRangeBox - Handle the Value Change Event](/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/#Handle_the_Value_Change_Event)
- [DateRangeBox - Set the Accepted Date Range](/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/#Set_the_Accepted_Date_Range)
- [DateRangeBox API Reference](/Documentation/ApiReference/UI_Components/dxDateRangeBox/)

[tags]date range box, dateRangeBox, editor, apply mode, change event, value change event 
