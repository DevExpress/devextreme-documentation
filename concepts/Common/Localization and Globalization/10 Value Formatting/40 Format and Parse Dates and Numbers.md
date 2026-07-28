DevExtreme includes an [API](/api-reference/50%20Common/utils/localization '/Documentation/ApiReference/Common/utils/localization/') that formats and parses dates and numbers. The following example demonstrates date and number formatting and parsing.

The [formatDate()](/api-reference/50%20Common/utils/localization/formatDate(value_format).md '/Documentation/ApiReference/Common/utils/localization/#formatDatevalue_format') method applies a [predefined format](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/10%20Predefined%20Formats.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/10%20Predefined%20Formats.md') to a date. You can also use a [custom function](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md') or [format string](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md '/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/20%20Custom%20Format%20String.md'). The output is a string. Use [parseDate()](/api-reference/50%20Common/utils/localization/parseDate(text_format).md '/Documentation/ApiReference/Common/utils/localization/#parseDatetext_format') to convert the string back to a Date.

Use [formatNumber()](/api-reference/50%20Common/utils/localization/formatNumber(value_format).md '/Documentation/ApiReference/Common/utils/localization/#formatNumbervalue_format') and [parseNumber()](/api-reference/50%20Common/utils/localization/parseNumber(text_format).md '/Documentation/ApiReference/Common/utils/localization/#parseNumbertext_format') to format and parse numbers and currency values.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        let date = new Date();
        let amount = 1234.56;
        $("#dateInput").val(DevExpress.localization.formatDate(date, "shortDate"));
        $("#numberInput").val(DevExpress.localization.formatNumber(amount, "currency"));
        $("#dateInput").change(function(event) {
            date = DevExpress.localization.parseDate(event.target.value, "shortDate");
        });
        $("#numberInput").change(function(event) {
            amount = DevExpress.localization.parseNumber(event.target.value, "currency");
        });
    });

    <!--HTML-->
    <input id="dateInput"/>
    <input id="numberInput"/>

##### Angular

    <!--TypeScript-->
    import { formatDate, formatNumber, parseDate, parseNumber } from "devextreme/localization";
    // ...
    export class AppComponent {
        _date: Date = new Date();
        _amount: number = 1234.56;
        get date() {
            return formatDate(this._date, "shortDate");
        }
        set date(value) {
            this._date = parseDate(value, "shortDate");
        }
        get amount() {
            return formatNumber(this._amount, "currency");
        }
        set amount(value) {
            this._amount = parseNumber(value, "currency");
        }
    }

    <!--HTML-->
    <input 
        [value]="date"
        (change)="date = $event.target.value"
    />
    <input 
        [value]="amount"
        (change)="amount = $event.target.value"
    />

##### Vue

    <!-- tab: App.vue -->
    <template>
        <input
            :value="date"
            @change="date = $event.target.value"
        />
        <input
            :value="amount"
            @change="amount = $event.target.value"
        />
    </template>

    <script setup lang="ts">
    import { computed, ref } from 'vue';
    import { formatDate, formatNumber, parseDate, parseNumber } from 'devextreme/localization';

    const sourceDate = ref<Date>(new Date());
    const sourceAmount = ref<number>(1234.56);

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

    const amount = computed<string>({
        get() {
            return formatNumber(sourceAmount.value, 'currency');
        },
        set(value: string) {
            sourceAmount.value = parseNumber(value, 'currency');
        }
    });
    </script>

##### React

    <!-- tab: App.js -->
    import React, { useState, useCallback } from "react";
    import { formatDate, formatNumber, parseDate, parseNumber } from "devextreme/localization";

    export default function App() {
        const [date, setDate] = useState(new Date());
        const [amount, setAmount] = useState(1234.56);
        const getFormattedDate = useCallback(() => {
            return formatDate(date, "shortDate")
        }, [date]);
        const getFormattedAmount = useCallback(() => {
            return formatNumber(amount, "currency")
        }, [amount]);
        const setParsedDate = useCallback((event) => {
            setDate(parseDate(event.target.value, "shortDate"));
        }, []);
        const setParsedAmount = useCallback((event) => {
            setAmount(parseNumber(event.target.value, "currency"));
        }, []);

        return (
            <>
                <input
                    defaultValue={getFormattedDate()}
                    onChange={setParsedDate}
                />
                <input
                    defaultValue={getFormattedAmount()}
                    onChange={setParsedAmount}
                />
            </>
        );
    }


---
