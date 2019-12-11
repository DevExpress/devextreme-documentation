---
type: function
---
---
##### shortDescription
Specifies a custom format.

##### param(value): number|date
A value to be formatted.

##### return: string
The value after formatting.

---
If none of the [predefined formats](/api-reference/50%20Common/Object%20Structures/format/type.md '/Documentation/ApiReference/Common/Object_Structures/format/#type') meet your requirements, use this function to specify a custom format. If **formatter** is the only field that you need to specify in the **format** object, assign the function straight to the **format** option as shown below.

    <!--JavaScript-->format: function (value) {
        // ...
        return formattedValue;
    }
    
#####See Also#####
- **format** | [parser](/api-reference/50%20Common/Object%20Structures/format/parser.md '/Documentation/ApiReference/Common/Object_Structures/format/#parser') - parses string values into numeric or date-time values.