---
id: localization.formatNumber(value, format)
module: common/core/localization
export: formatNumber
---
---
##### shortDescription
Converts a numeric value to a string using the specified format.

##### return: String
The formatted string.

##### param(value): Number
A numeric value to be converted.

##### param(format): Format
The [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/Format/') to be used for conversion.

---
---
##### jQuery

    <!-- tab: index.js -->
    const numberString = DevExpress.localization.formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

    // ===== or when using modules =====
    import { formatNumber } from "devextreme/localization";

    const numberString = formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

##### Angular

    <!-- tab: app.component.ts -->
    import { formatNumber } from "devextreme/localization";

    const numberString = formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

##### Vue

    <!-- tab: App.vue -->
    import { formatNumber } from "devextreme/localization";

    const numberString = formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

##### React

    <!-- tab: App.js -->
    import { formatNumber } from "devextreme/localization";

    const numberString = formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

---

#####See Also#####
- [Format Custom Values](/concepts/Common/Localization%20and%20Globalization/10%20Value%20Formatting/10%20Format%20UI%20Component%20Values/30%20Custom%20Function.md)
