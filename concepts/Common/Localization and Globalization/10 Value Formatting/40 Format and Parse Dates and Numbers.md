DevExtreme includes an [API](/api-reference/50%20Common/utils/localization '/Documentation/ApiReference/Common/utils/localization/') that formats and parses dates and numbers. The following example demonstrates date formatting and parsing.

The [formatDate()](/api-reference/50%20Common/utils/localization/formatDate(value_format).md '/Documentation/ApiReference/Common/utils/localization/#formatDatevalue_format') method applies a [predefined format](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/10%20Predefined%20Formats.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Predefined_Formats') to a date. You can also use a [custom function](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Function') or [format string](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/Documentation/Guide/Common/Value_Formatting/#Format_UI_Component_Values/Custom_Format_String'). The output is a string. Use [parseDate()](/api-reference/50%20Common/utils/localization/parseDate(text_format).md '/Documentation/ApiReference/Common/utils/localization/#parseDatetext_format') to convert the string back to a Date.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        let date = new Date();
        $("#dateInput").val(DevExpress.localization.formatDate(date, "shortDate"));
        $("#dateInput").change(function(event) {
            date = DevExpress.localization.parseDate(event.target.value, "shortDate");
        });
    });

    <!--HTML-->
    <input id="dateInput"/>

##### Angular

    <!--TypeScript-->
    import { formatDate, parseDate } from "devextreme/localization";
    // ...
    export class AppComponent {
        _date: Date = new Date();
        get date() {
            return formatDate(this._date, "shortDate");
        }
        set date(value) {
            this._date = parseDate(value, "shortDate");
        }
    }

    <!--HTML-->
    <input 
        [value]="date"
        (change)="date = $event.target.value"
    />

##### Vue

    <!-- tab: App.vue -->
    <template>
        <input
            :value="date"
            @change="date = $event.target.value"
        />
    </template>

    <script setup lang="ts">
    import { computed, ref } from 'vue';
    import { formatDate, parseDate } from 'devextreme/localization';

    const sourceDate = ref<Date>(new Date());

    const date = computed<string>({
        get() {
            return formatDate(sourceDate.value, 'shortDate');
        },
        set(value: string) {
            const parsedDate = parseDate(value, 'shortDate');
            if (parsedDate instanceof Date) {
                sourceDate.value = parsedDate;
            }
        }
    });
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from "react";
    import { formatDate, parseDate } from "devextreme/localization";

    export default function App() {
        const [date, setDate] = useState(new Date());
        const getFormattedDate = useCallback(() => {
            return formatDate(date, "shortDate")
        }, [date]);
        const setParsedDate = useCallback((event) => {
            setDate(parseDate(event.target.value, "shortDate"));
        }, []);

        return (
            <input
                defaultValue={getFormattedDate()}
                onChange={setParsedDate}
            />
        );
    }


---

Use [formatNumber()](/api-reference/50%20Common/utils/localization/formatNumber(value_format).md '/Documentation/ApiReference/Common/utils/localization/#formatNumbervalue_format') and [parseNumber()](/api-reference/50%20Common/utils/localization/parseNumber(text_format).md '/Documentation/ApiReference/Common/utils/localization/#parseNumbertext_format') to format and parse numbers and currency values.
