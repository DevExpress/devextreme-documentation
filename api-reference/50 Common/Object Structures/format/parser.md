---
type: function
---
---
##### shortDescription
Parses string values into numeric or date-time values.

##### param(value): string
A string value to be parsed.

##### return: number|date
The value after parsing.

---
Along with the [formatter](/api-reference/50%20Common/Object%20Structures/format/formatter.md '/Documentation/ApiReference/Common/Object_Structures/format/#formatter') function, **parser** participates in specifying a custom format. Use it to parse numbers or dates presented as strings into the correct format. This function may be called internally by the widget at different points of your application's lifetime, e.g., when the user enters a value into an editor.