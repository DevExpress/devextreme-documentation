---
id: format.parser
type: function(value)
---
---
##### shortDescription
Parses string values into numeric or date-time values. Can be used with [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') or one of the [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type').

##### param(value): String
The string value to be parsed.

##### return: Number | Date
The value after parsing.

---
A widget calls this function internally, for example, when a user enters a value. The following code gives an example of the **formatter** and **parser** functions which turns dates into strings, and parses strings back into dates, respectively.

    <!--JavaScript-->
    formatter: function (date) {
        var month = date.getMonth() + 1,
            day = date.getDate(),
            year = date.getFullYear();
        
        return year + "." + month + "." + day;
    },
    parser: function (e) {
        var parts = e.split("."),
            day = Number(parts[2]),
            month = Number(parts[1] - 1),
            year = Number(parts[0]);
        
        return new Date(year, month, day);
    }