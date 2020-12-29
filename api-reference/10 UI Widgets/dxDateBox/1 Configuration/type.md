---
id: dxDateBox.Options.type
acceptValues: 'date' | 'datetime' | 'time'
type: String
default: 'date'
---
---
##### shortDescription
A format used to display date/time information.

---
You can assign the following values to this option:

- date - the UI component displays only the date;
- time - the UI component displays only the time;
- datetime - the UI component displays both the date and time.

#include common-ref-enum with {
    enum: "`DateBoxType`",
    values: "`Date`, `DateTime`, and `Time`"
}