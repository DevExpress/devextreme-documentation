DateRangeBox displays values according to the application's [locale](/api-reference/50%20Common/utils/localization/locale().md '/Documentation/ApiReference/Common/utils/localization/#locale'). You can specify a custom date format. Use the [displayFormat](/api-reference/10%20UI%20Components/DateBoxBase/1%20Configuration/displayFormat.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#displayFormat') property that accepts [predefined](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/10%20Predefined%20Formats.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Predefined_Formats') and [custom formats](/concepts/Common/Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String').

If [useMaskBehavior](/api-reference/10%20UI%20Components/DateBoxBase/1%20Configuration/useMaskBehavior.md '/Documentation/ApiReference/UI_Components/dxDateRangeBox/Configuration/#useMaskBehavior'') is **true**, the **displayFormat** property also specifies a mask that restricts user input:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dateRangeBoxContainer").dxDateRangeBox({
            displayFormat: "EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24"
            useMaskBehavior: true,
            // ...
        });
    });

##### Angular

    <!-- tab: app.component.html -->
    <dx-date-range-box
        displayFormat="EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24"
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
            display-format="EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24" 
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
            display-format="EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24"
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
                displayFormat="EEEE, MMM d", // "Tuesday, Oct 19 - Sunday, Oct 24"
                useMaskBehavior={true}
                // ...
            />
        );
    }

---

The following changes apply when masked input is enabled:

- The mouse wheel or Up/Down Arrow key increases/decreases the selected value section by 1.
- The caret moves to the next date section when the previous date section is entered.
- The year is entered right-to-left. For example, enter `2` to specify the year `2002`; enter `19` for `2019`.
- The corresponding month/day number or initial letters can be used to specify the month and day of the week when they are displayed as text. For example, in the month section, enter `M` or `3` to specify "March".
