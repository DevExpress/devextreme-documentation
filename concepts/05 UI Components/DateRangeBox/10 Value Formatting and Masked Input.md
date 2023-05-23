The DateRangeBox's values are formatted according to the application's [locale](/Documentation/ApiReference/Common/utils/localization/#locale). You can use the [displayFormat](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#displayFormat) property that accepts [predefined](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Predefined_Formats) and [custom formats](/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String) to change the format.


In addition to value formatting, you can use the **displayFormat** property as a mask to control user input if [useMaskBehavior](/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#useMaskBehavior') is **true**:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateRangeBoxContainer").dxDateRangeBox({
            displayFormat: "EEEE, d 'of' MMM", // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
            useMaskBehavior: true,
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box
        displayFormat="EEEE, d 'of' MMM" // "Tuesday, 19 of Oct - Sunday, 24 of Oct"
        [useMaskBehavior]="true" 
        // ...
    ></dx-date-range-box>

    <!-- tab: app.component.ts -->
    import { DxDateRangeBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
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
            display-format="EEEE, d 'of' MMM" // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
            :use-mask-behavior="true" 
            // ...
        /> 
    </template>

    <script>
    import 'devextreme/dist/css/dx.light.css';

    import DxDateRangeBox from 'devextreme-vue/date-range-box';

    export default {
        components: {
            DxDateRangeBox
        }
    }
    </script>

    <!-- tab: App.vue (Composition API) -->
    <template>
        <DxDateRangeBox
            display-format="EEEE, d 'of' MMM" // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
            :use-mask-behavior="true" 
            // ...
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
            <DateRangeBox ...
                displayFormat="EEEE, d 'of' MMM" // "Tuesday, 19 of Oct - Sunday, 24 of Oct" 
                useMaskBehavior={true}
                // ...
            />
        );
    }

---

The following changes apply when masked input is enabled:

- The mouse wheel or Up/Down Arrow key increases/decreases the selected value portion by 1.
- The caret moves to the next date portion when the previous date portion is entered.
- The year is entered right-to-left. For example, if `2` is entered, the year is `2002`; if `19` is entered, the year is `2019`.
- Numbers and first letters can be used to specify the month and day of week when they are displayed as text. For example, enter `M` or `3` to specify "March".
