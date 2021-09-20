---
id: Format.parser
type: function(value)
---
---
##### shortDescription
Parses string values into numeric or date-time values. Should be used with [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') or one of the [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

##### param(value): String
The string value to be parsed.

##### return: Number | Date
The value after parsing.

---
A UI component calls this function internally, for example, when a user enters a value. The following code gives an example of the **formatter** and **parser** functions which turns dates into strings, and parses strings back into dates, respectively.

    <!--JavaScript-->
    formatter: function (date) {
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();

        return `${day}.${month}.${year}`;
    },
    parser: function (e) {
        const parts = e.split(".");
        const day = Number(parts[0]);
        const month = Number(parts[1] - 1);
        const year = Number(parts[2]);

        return new Date(year, month, day);
    }