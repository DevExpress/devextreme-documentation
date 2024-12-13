---
id: localization.formatDate(value, format)
module: common/core/localization
export: formatDate
---
---
##### shortDescription
Converts a Date object to a string using the specified format.

##### return: String
The formatted string.

##### param(value): Date
A <a href="https://www.w3schools.com/js/js_dates.asp" target="_blank">Date</a> object to be converted.

##### param(format): Format
The [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/') to be used for conversion.

---
---
##### jQuery

    <!-- tab: index.js -->
    const dateString = DevExpress.localization.formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

    // ===== or when using modules =====
    import { formatDate } from "devextreme/localization";

    const dateString = formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

##### Angular

    <!-- tab: app.component.ts -->
    import { formatDate } from "devextreme/localization";

    const dateString = formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

##### Vue

    <!-- tab: App.vue -->
    import { formatDate } from "devextreme/localization";

    const dateString = formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

##### React

    <!-- tab: App.js -->
    import { formatDate } from "devextreme/localization";

    const dateString = formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

---

#####See Also#####
- [Format Custom Values](/concepts/Common/Value%20Formatting/40%20Format%20Custom%20Values.md '/Documentation/Guide/Common/Value_Formatting/#Format_Custom_Values')