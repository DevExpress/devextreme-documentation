---
id: localization.formatNumber(value, format)
module: localization
export: formatNumber
---
---
##### shortDescription
Converts a numeric value to a string using the specified format.

##### return: String
The formatted string.

##### param(value): Number
A numeric value to be converted.

##### param(format): format
The [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') to be used for conversion.

---

    <!-- tab: JavaScript -->
    const numberString = DevExpress.localization.formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

    // ===== or when using modules =====
    import { formatNumber } from "devextreme/localization";

    const numberString = formatNumber(0.25, "percent");
    console.log(numberString); // logs "25%"

#####See Also#####
- [Format Custom Values](/Documentation/Guide/Common/Value_Formatting/#Format_Custom_Values)