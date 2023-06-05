The DateRangeBox UI component allows users to type dates or pick them from a dropdown. The dropdown can display a single-month or two-month calendar. To use a single-month calendar, disable the [multiView](/api-reference/10%20UI%20Components/dxDateRangeBox/1%20Configuration/multiView.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#multiView') option. You can also specify whether date selection should take effect instantly or after a user clicks **Done**. Use the [applyValueMode](/api-reference/10%20UI%20Components/dxDropDownEditor/1%20Configuration/applyValueMode.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#applyValueMode') property.

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
                multiView=false
                applyValueMode="useButtons" // or "instantly" 
            />
        );
    }

---

#####See Also#####
#include common-link-handleevents
- [DateRangeBox - Handle the Value Change Event](/concepts/05%20UI%20Components/DateRangeBox/00%20Getting%20Started%20with%20DateRangeBox/25%20Handle%20the%20Value%20Change%20Event.md '/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/#Handle_the_Value_Change_Event')
- [DateRangeBox - Set the Accepted Date Range](/concepts/05%20UI%20Components/DateRangeBox/00%20Getting%20Started%20with%20DateRangeBox/10%20Set%20the%20Accepted%20Date%20Range.md '/Documentation/Guide/UI_Components/DateRangeBox/Getting_Started_with_DateRangeBox/#Set_the_Accepted_Date_Range')
- [DateRangeBox API Reference](/api-reference/10%20UI%20Components/dxDateRangeBox '/Documentation/ApiReference/UI_Components/dxDateRangeBox/')

[tags]date range box, dateRangeBox, editor, apply mode, change event, value change event 
