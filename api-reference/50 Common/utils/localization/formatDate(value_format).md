---
id: localization.formatDate(value, format)
module: localization
export: formatDate
---
---
##### shortDescription
Converts a Date object to a string using the specified format.

##### return: String
The formatted string.

##### param(value): Date
A <a href="https://www.w3schools.com/js/js_dates.asp" target="_blank">Date</a> object to be converted.

##### param(format): format
The [format](/api-reference/50%20Common/Object%20Structures/format '/Documentation/ApiReference/Common/Object_Structures/format/') to be used for conversion.

---
---
##### jQuery

    <!--JavaScript-->
    var dateString = DevExpress.localization.formatDate(new Date(2018, 4, 7), "longDate");
    console.log(dateString); // logs "Monday, May 7, 2018"

##### Angular

    <!--TypeScript-->
    import { formatDate } from "devextreme/localization";
    // ...
    export class AppComponent {
        constructor() {
            let dateString = formatDate(new Date(2018, 4, 7), "longDate");
            console.log(dateString); // logs "Monday, May 7, 2018"
        }
    }

---